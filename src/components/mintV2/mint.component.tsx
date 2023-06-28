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
import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine';
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
  height: 60px;
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
  const [mintGroup, setMintGroup] = useState<string>('Public');

  useEffect(() => {
    if (nfts) {
      console.log('nfts : ', nfts);
    }
    setLoading(false);
  }, [nfts]);

  const onClickOG = async () => {
    try {
      const candyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);
      const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);
      const nftOwner = createSignerFromWalletAdapter(wallet).publicKey;
      const nftMint = generateSigner(umi);
      const tx = await transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 800_000 }))
        .add(createMintWithAssociatedToken(umi, { mint: nftMint, owner: nftOwner }))
        .add(
          mintV2(umi, {
            candyMachine: candyMachine.publicKey,
            candyGuard: candyGuard.publicKey,
            nftMint,
            collectionMint: publicKey('H63DB66TdhzQCZ34QAEPgzayqhPLMudqrF6aQtk4kG7s'),
            collectionUpdateAuthority: candyGuard.authority,
            // tokenStandard: candyMachine.tokenStandard,
            group: some('OGs'),
            mintArgs: {
              mintArgs: {
                nftBurn: some({
                  requiredCollection: publicKey('5W4F9DFeGfCDLTdaGRvVKdnBcL27aYWdGxJQVrpo2NrS'),
                  // mint: publicKey(nfts[0]),
                  // tokenStandard: TokenStandard.NonFungible,
                }),
              },
            },
          }),
        )
        .sendAndConfirm(umi);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickPublic = async () => {
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

  useEffect(() => {
    if (wallet.publicKey) {
      if (holder == HolderEnum.Yay) {
        setMintGroup('OGs');
      }
    }
  }, [wallet.publicKey, holder]);

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
            <div className="card-body flex flex-col justify-center items-center">
              <div className="z-[999] w-full h-full bg-base-100 rounded-xl flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center">
                  <h2 className="text-xl text-center font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                    Collection Information
                  </h2>
                  {/* <ul>
                      <li>Supply : {candyMachine.itemsLoaded}</li>
                      <li>Minted : {candyMachine.itemsMinted.toString()}</li>
                      <li>Remaining : {candyMachine.itemsRemaining.toString()}</li>
                    </ul> */}
                </div>
              </div>

              {/* {mintGroup == 'OGs' ? (
                <MintButton onClick={onClickOG} disabled={mintState}>
                  <span className="text-white text-xl">
                    {holder == HolderEnum.Yay ? 'OG' : 'PUBLIC'} MINT
                  </span>
                </MintButton>
              ) : ( */}
              <MintButton onClick={onClickPublic} disabled={mintState}>
                <span className="text-white text-xl">
                  {holder == HolderEnum.Yay ? 'OG' : 'PUBLIC'} MINT
                </span>
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
