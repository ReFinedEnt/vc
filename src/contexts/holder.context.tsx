import { createContext, useState, useEffect, useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';
import type { PublicKey } from '@solana/web3.js';

import type { FindNftsByOwnerOutput } from '@metaplex-foundation/js';
import { COLLECTION_ADDRESS, SOLANA_RPC_ENDPOINT, HolderEnum } from '../constants/solana';
import type { ReactNode } from 'react';

interface HolderContextType {
  holder: HolderEnum;
  nfts: any[];
}

export const HolderContext = createContext<HolderContextType>({
  holder: HolderEnum.Nay,
  nfts: [],
});

export const HolderProvider = ({ children }: { children: ReactNode }) => {
  const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT), []);
  const metaplex = useMemo(() => new Metaplex(connection), [connection]);

  const wallet = useWallet();
  const [holder, setHolder] = useState(HolderEnum.Nay);
  const [nfts, setNfts] = useState([]);

  const value = { holder, setHolder, nfts };

  useEffect(() => {
    if (wallet.publicKey) {
      const getMPL = async (owner: PublicKey) => {
        await metaplex
          .nfts()
          .findAllByOwner({
            owner,
          })
          .then((userNFT: FindNftsByOwnerOutput) => {
            userNFT.forEach((nft) => {
              // console.log(nft.address.toString());
              if (nft.collection) {
                // console.log(nft && nft.collection);
                // console.log('collection address :', nft.collection.address.toString());
                if (nft.collection.address.toString() == COLLECTION_ADDRESS) {
                  nfts.push(nft.address.toString());
                  setHolder(HolderEnum.Yay);
                }
              }
              // console.log(nft.address.toString());
            });
          });
      };
      getMPL(wallet.publicKey).catch((error) => console.log(error));
    } else {
      setHolder(HolderEnum.Nay);
    }
  }, [wallet.publicKey, metaplex, nfts]);

  return <HolderContext.Provider value={value}>{children}</HolderContext.Provider>;
};
