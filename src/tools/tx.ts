import { PublicKey, Connection } from '@solana/web3.js';
export const getTransactions = async (address: string, numTx: number, connection: Connection) => {
  const pubKey = new PublicKey(address);
  let transactionList = await connection.getSignaturesForAddress(pubKey, { limit: numTx });

  let signatureList = transactionList.map((transaction) => transaction.signature);
  let transactionDetails = await connection.getParsedTransactions(signatureList, {
    maxSupportedTransactionVersion: 0,
  });

  transactionList.forEach((transaction, i) => {
    const date = new Date(transaction.blockTime * 1000);
    const transactionInstructions = transactionDetails[i].transaction.message.instructions;
    console.log(`Transaction No: ${i + 1}`);
    console.log(`Signature: ${transaction.signature}`);
    console.log(`Time: ${date}`);
    // console.log(`Status: ${transaction.confirmationStatus}`);
    transactionInstructions.forEach((instruction, n) => {
      console.log(`---Instructions ${n + 1}: ${instruction.programId.toString()}`);
    });
    console.log('-'.repeat(20));
  });
};
