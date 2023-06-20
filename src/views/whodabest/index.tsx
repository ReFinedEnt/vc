import { useEffect, useState, useCallback, useMemo } from 'react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, SystemProgram, Transaction } from '@solana/web3.js';
import { TREASURY, SOLANA_RPC_ENDPOINT } from 'constants/solana';

import ThreeDots from 'components/three-dots/three-dots.component';
import Popup from 'components/popup/popup.component';

import type { FC } from 'react';
import { Community, TxType } from 'types';
import { getTransactions } from 'tools/tx';
import { updateCommunityVotes } from 'tools/communities';

const communities: Community[] = [
  {
    index: 1,
    name: 'Famous Foxes Federation',
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://creator-hub-prod.s3.us-east-2.amazonaws.com/famous_fox_federation_pfp_1679672949828.gif',
    votes: 0,
  },
  {
    index: 2,
    name: 'MadLads',
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://public-cdn.tensor.trade/collection_splash/madlads_logo_square.png',
    votes: 0,
  },
  {
    index: 3,
    name: 'Solana Monkey Business',
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://i.imgur.com/bMH6qNc.png',
    votes: 0,
  },

  {
    index: 4,
    name: 'Claynosaurz',
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://creator-hub-prod.s3.us-east-2.amazonaws.com/claynosaurz_pfp_1679930706147.jpeg',
    votes: 0,
  },
  {
    index: 5,
    name: "Bunjil's Lotus & Lilies",
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://bafkreihwrpyr52wax3i5drzi5pg4v2wrgylpwi54im7qb7nzz7tpdsmmzm.ipfs.nftstorage.link/',
    votes: 0,
  },
  {
    index: 6,
    name: 'Galactic Geckos',
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://i.imgur.com/PfaeoXm.png',
    votes: 0,
  },
  {
    index: 7,
    name: 'Catalina Whales',
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://bafkreicadecx3rbffm6tqtgtc67bi6r2xiibtmawcejje7pfu7id2zxwwy.ipfs.nftstorage.link/',
    votes: 0,
  },
  {
    index: 8,
    name: 'The Faceless',
    img: 'https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https%3A%2F%2Fi6z5zem6ofbyazty7mmrhz4xohr6lynyrfufwklttgjuytivjgqq.arweave.net%2FR7PckZ5xQ4BmePsZE-eXcePl4biJaFspc5mTTE0VSaE%3Fext%3Dgif',
    votes: 0,
  },
];

const WhoDaBestView: FC = () => {
  const [loading, setLoading] = useState(true);
  const connection = useMemo(() => new Connection(SOLANA_RPC_ENDPOINT), []);
  const [popup, setPopup] = useState(false);
  const [helped, setHelped] = useState<boolean>(false);
  const [completed, setCompleted] = useState(true);

  const [data, setData] = useState<Community[] | null>(null);

  const { publicKey, sendTransaction } = useWallet();

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    const updateCommunities = async () => {
      const updatedCommunities = await updateCommunityVotes(communities, TREASURY, connection);
      setData(updatedCommunities);
    };

    updateCommunities();
  }, [connection]);

  const tooglePopUp = () => {
    setPopup(!popup);
  };

  const onClick = useCallback(
    async (index: number) => {
      console.log(index);
      if (!publicKey) throw new WalletNotConnectedError();

      const lamports = 30000000 + index;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: TREASURY,
          lamports: lamports,
        }),
      );

      const signature = await sendTransaction(transaction, connection);

      const latestBlockHash = await connection.getLatestBlockhash();

      setPopup(true);

      await connection
        .confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: signature,
        })
        .then(({ context, value }) => {
          if (value.err == null && context.slot) {
            setHelped(true);
            setCompleted(true);
          }
        });
    },
    [publicKey, sendTransaction, connection],
  );

  return (
    <div className="max-w-[100vw] mx-auto min-h-screen flex flex-col justify-center items-center bg-black pb-40">
      {loading ? (
        <ThreeDots />
      ) : (
        <>
          <div className="hero flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-rows-2 md:grid-flow-col grid-flow-row gap-4">
              {data.map((item, index) => {
                return (
                  <div className="card w-60 bg-base-100 shadow-xl image-full" key={index}>
                    <figure>
                      <img src={item.img} alt={item.name} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title w-full leading-normal text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#14F195] to-[#9945FF]">
                        {item.name}
                      </h2>
                      <p></p>
                      <div className="card-actions justify-end">
                        <div className="flex justify-center items-center space-x-20">
                          <span className="bg-primary p-4 rounded-lg border border-white">
                            {item.votes}
                          </span>
                          <span
                            className="btn btn-md bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
                            onClick={() => onClick(item.index)}
                          >
                            Vote
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {popup && (
            <Popup tooglePopUp={tooglePopUp} completed={completed} setCompleted={setCompleted} />
          )}
        </>
      )}
    </div>
  );
};

export default WhoDaBestView;
