import { PublicKey, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { User } from 'types';

export const getTransactions = async (
  address: PublicKey,
  connection: Connection,
  amount = 40000000,
) => {
  let transactionList = await connection.getSignaturesForAddress(address);

  let signatureList = transactionList.map((transaction) => transaction.signature);
  let transactionDetails = await connection.getParsedTransactions(signatureList, {
    maxSupportedTransactionVersion: 0,
  });

  const parsedTx = transactionDetails.filter(
    (tx) =>
      tx.transaction.message.instructions[0].programId.toBase58() ==
      '11111111111111111111111111111111',
  );

  const users: User[] = [];

  console.log(parsedTx);

  parsedTx.forEach((tx) => {
    const instruction = tx.transaction.message.instructions[0];
    if ('parsed' in instruction) {
      if (instruction.parsed.info.lamports == amount) {
        const userIndex = users.findIndex(
          (user) => user.address === instruction.parsed.info.source,
        );
        if (userIndex === -1) {
          users.push({
            address: instruction.parsed.info.source,
            lamports: instruction.parsed.info.lamports,
          });
        } else {
          users[userIndex].lamports += instruction.parsed.info.lamports;
        }
      }
    }
  });

  users.sort((a, b) => b.lamports - a.lamports); // Sort users by lamports in descending order

  const total = users.reduce((total, obj) => obj.lamports + total, 0);

  console.log(`Total help received: ${total / LAMPORTS_PER_SOL}`);

  console.log(users);

  return users;
};
