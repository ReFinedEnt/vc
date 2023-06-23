import { clusterApiUrl, Connection } from '@solana/web3.js';

import { SOLANA_RPC_ENDPOINT } from '../constants/solana';

export const createConnection = () => {
  if (!SOLANA_RPC_ENDPOINT) {
    const connection = new Connection(clusterApiUrl());
    return connection;
  } else {
    const connection = new Connection(SOLANA_RPC_ENDPOINT, 'confirmed');
    return connection;
  }
};
