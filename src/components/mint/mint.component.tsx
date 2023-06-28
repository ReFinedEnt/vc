// Next
import Image from 'next/image';
// React
import { useState, useEffect, useMemo, useContext } from 'react';
// Solana
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
// Metaplex
import {
  Metaplex,
  walletAdapterIdentity,
  CandyMachine,
  DefaultCandyGuardSettings,
} from '@metaplex-foundation/js';
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
} from '../../constants/solana';
import { HolderContext } from 'contexts/holder.context';
import { some, generateSigner, transactionBuilder } from '@metaplex-foundation/umi';
import { create, mintV2 } from '@metaplex-foundation/mpl-candy-machine';
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';
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

const Mint: FC = () => {
  const wallet = useWallet();

  // const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT, 'confirmed'), []);
  const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT), []);
  const metaplex = useMemo(() => new Metaplex(connection), [connection]);

  metaplex.use(walletAdapterIdentity(wallet));

  const [loading, setLoading] = useState(true);

  const { holder } = useContext(HolderContext);

  const [candyMachine, setCandyMachine] = useState<CandyMachine<DefaultCandyGuardSettings>>(null);

  const [mintState, setMintState] = useState(false);

  const [isCandymachine, setIsCandymachine] = useState<Boolean>(false);

  const [nft, setNft] = useState(null);
  const [mintGroup, setMintGroup] = useState('Public');

  useEffect(() => {
    const getCandyMachine = async () => {
      const candyMachineAddress = new PublicKey(CANDY_MACHINE_ID);

      if (isCandymachine == false) {
        const candyMachine = await metaplex
          .candyMachines()
          .findByAddress({ address: candyMachineAddress })
          .then((res) => {
            if (res) {
              setCandyMachine(res);
              setIsCandymachine(true);
              return res;
            }
          })
          .finally(() => setLoading(false));
        console.log(candyMachine);
        return candyMachine;
      }
    };
    getCandyMachine();
  }, [isCandymachine, metaplex, connection]);

  const onClick = async () => {
    if (mintGroup == 'OGs') {
      const { nft } = await metaplex.candyMachines().mint({
        candyMachine,
        collectionUpdateAuthority: candyMachine.authorityAddress,
        group: 'OGs',
        guards: {
          nftBurn: {
            mint: new PublicKey(COLLECTION_ADDRESS),
          },
        },
      });
      setNft(nft);
    } else {
      const { nft } = await metaplex.candyMachines().mint({
        candyMachine,
        collectionUpdateAuthority: candyMachine.authorityAddress,
        group: 'Public',
      });
      setNft(nft);
    }
  };

  useEffect(() => {
    if (wallet.publicKey) {
      if (holder == HolderEnum.Yay) {
        console.log('yay');
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
              {candyMachine && (
                <div className="z-[999] w-full h-full bg-base-100 rounded-xl flex flex-col justify-center items-center">
                  <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-xl text-center font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                      Collection Information
                    </h2>
                    <ul>
                      <li>Supply : {candyMachine.itemsLoaded}</li>
                      <li>Minted : {candyMachine.itemsMinted.toString()}</li>
                      <li>Remaining : {candyMachine.itemsRemaining.toString()}</li>
                    </ul>
                  </div>
                </div>
              )}
              <MintButton onClick={onClick} disabled={mintState}>
                <span className="text-white text-xl">
                  {holder == HolderEnum.Yay ? 'OG' : 'PUBLIC'} MINT
                </span>
              </MintButton>
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

export default Mint;
