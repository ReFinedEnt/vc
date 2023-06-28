// Next
import Image from 'next/image';
// React
import { useState, useEffect, useMemo, useContext } from 'react';
// Solana
import { useWallet } from '@solana/wallet-adapter-react';
// Metaplex
import { some, sol, generateSigner, transactionBuilder, publicKey } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  createSignerFromWalletAdapter,
  walletAdapterIdentity,
} from '@metaplex-foundation/umi-signer-wallet-adapters';
import { CandyMachine, mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import { fetchCandyMachine, fetchCandyGuard, mintV2 } from '@metaplex-foundation/mpl-candy-machine';
import {
  setComputeUnitLimit,
  createMintWithAssociatedToken,
} from '@metaplex-foundation/mpl-toolbox';
// @ts-ignore
import styled from 'styled-components';
import Button from '@mui/material/Button';
// Components
import ThreeDots from 'components/three-dots/three-dots.component';
// Constants
import {
  SOLANA_RPC_ENDPOINT,
  CANDY_MACHINE_ID,
  HolderEnum,
  COLLECTION_ADDRESS,
  TREASURY,
} from '../../constants/solana';
import { HolderContext } from 'contexts/holder.context';

import type { FC } from 'react';

const MintButton = styled(Button)`
  width: 100%;
  height: 42px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
`;

const MintV2: FC = () => {
  const wallet = useWallet();

  const umi = useMemo(
    () => createUmi(SOLANA_RPC_ENDPOINT).use(mplCandyMachine()).use(walletAdapterIdentity(wallet)),
    [wallet],
  );
  const candyMachinePublicKey = useMemo(() => publicKey(CANDY_MACHINE_ID), []);

  const [loading, setLoading] = useState(true);

  const { holder, nfts } = useContext(HolderContext);

  const [mintState, setMintState] = useState(false);

  const [nft, setNft] = useState(null);

  const [cm, setCm] = useState<CandyMachine | null>(null);

  useEffect(() => {
    const fetchCM = async () => {
      const candyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);
      return candyMachine;
    };
    fetchCM()
      .then((res) => setCm(res))
      .finally(() => setLoading(false));
  }, [candyMachinePublicKey, umi]);

  const onClick = async () => {
    try {
      const candyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);
      const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);
      const nftOwner = createSignerFromWalletAdapter(wallet).publicKey;
      const nftMint = generateSigner(umi);
      await transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 800_000 }))
        .add(createMintWithAssociatedToken(umi, { mint: nftMint, owner: nftOwner }))
        .add(
          mintV2(umi, {
            candyMachine: candyMachine.publicKey,
            candyGuard: candyGuard.publicKey,
            nftMint: nftMint.publicKey,
            collectionMint: publicKey('H63DB66TdhzQCZ34QAEPgzayqhPLMudqrF6aQtk4kG7s'),
            collectionUpdateAuthority: candyGuard.authority,
            group: some('Public'),
            mintArgs: {
              solPayment: some({
                lamports: sol(1.618033988),
                destination: publicKey('BrbCdyu88BjSDoMoBiASjyGJQFb2KYdSiArBpsLJA8F7'),
              }),
            },
          }),
        )
        .sendAndConfirm(umi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero h-screen w-screen md:w-auto mx-auto p-4 flex flex-col justify-center items-center">
      {loading ? (
        <ThreeDots />
      ) : (
        <div className="hero max-h-screen flex flex-col justify-center items-center mx-auto p-4">
          <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure>
              {/* <Image
                src="https://raw.githubusercontent.com/ez-krk/cdn/main/misc/collection.png"
                alt="Collection"
                layout="fill"
                objectFit="contain"
              /> */}
            </figure>
            <div className="card-body flex flex-col justify-center items-center w-96">
              <div className="z-[999] w-full h-full bg-base-100 rounded-xl flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center">
                  <h2 className="text-xl text-center font-bold mb-2">Vulture City Founder Token</h2>
                  <ul className="mb-2">
                    <li>Supply : {cm.itemsLoaded}</li>
                    <li>Minted : {cm.itemsRedeemed.toString()}</li>
                  </ul>
                  <progress
                    className="progress progress-warning w-62 my-4"
                    value={parseInt(cm.itemsRedeemed.toString())}
                    max={cm.itemsLoaded}
                  ></progress>
                </div>
              </div>

              {/* {mintGroup == 'OGs' ? (
                <MintButton onClick={onClickOG} disabled={mintState}>
                  <span className="text-white text-xl">
                    {holder == HolderEnum.Yay ? 'OG' : 'PUBLIC'} MINT
                  </span>
                </MintButton>
              ) : ( */}
              <MintButton onClick={onClick} disabled={mintState}>
                <span className="text-white text-xl">MINT</span>
              </MintButton>
              {/* )} */}
              {nft && (
                <div className="max-w-[100%]">
                  <h1>{nft.name}</h1>
                  <div>
                    <Image
                      src={nft?.json?.image || '/fallbackImage.jpg'}
                      alt="The downloaded illustration of the provided NFT address."
                      width={384}
                      height={384}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MintV2;
