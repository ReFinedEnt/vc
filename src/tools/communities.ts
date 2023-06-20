import type { PublicKey, Connection } from '@solana/web3.js';
import type { Community } from 'types';

export const updateCommunityVotes = async (
  communities: Community[],
  address: PublicKey,
  connection: Connection,
): Promise<Community[]> => {
  const transactionList = await connection.getSignaturesForAddress(address);
  const signatureList = transactionList.map((transaction) => transaction.signature);
  const transactionDetails = await connection.getParsedTransactions(signatureList, {
    maxSupportedTransactionVersion: 0,
  });

  transactionDetails.forEach((tx) => {
    const instruction = tx.transaction.message.instructions[0];
    if ('parsed' in instruction) {
      const lamports = instruction.parsed.info.lamports;
      const index = lamports - 30000000;
      if (index >= 1 && index <= 8) {
        communities[index - 1].votes += 1;
      }
    }
  });

  communities.sort((a, b) => b.votes - a.votes); // Sort communities by votes in descending order

  const total = communities.reduce((total, obj) => obj.votes + total, 0);

  console.log(`Total help received: ${total}`);

  console.log(communities);

  return communities;
};
