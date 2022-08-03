// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";

// Wallet
// import { useWallet, useConnection } from "@solana/wallet-adapter-react";

// Store
// import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

export const Legend: FC = ({}) => {
  //   const wallet = useWallet();
  //   const { connection } = useConnection();

  //   const balance = useUserSOLBalanceStore((s) => s.balance);
  //   const { getUserSOLBalance } = useUserSOLBalanceStore();

  //   useEffect(() => {
  //     if (wallet.publicKey) {
  //       console.log(wallet.publicKey.toBase58());
  //       getUserSOLBalance(wallet.publicKey, connection);
  //     }
  //   }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="card w-42 bg-base-100 shadow-m">
      <div className="card-body">
        <h2 className="card-title text-center text-base font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Legend
        </h2>

        <div className="w-full">
          <ul className="steps steps-vertical">
            <li data-content="" className="step step-warning">
              WIP
            </li>
            <li data-content="" className="step step-success">
              Shipped!
            </li>
            <li data-content="" className="step step-secondary">
              Next
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
