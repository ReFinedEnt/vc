import { Cluster, PublicKey } from '@solana/web3.js';
import { ENV as ENVChainId } from '@solana/spl-token-registry';

export const ENV: Cluster = (process.env.NEXT_PUBLIC_CLUSTER as Cluster) || 'mainnet-beta';
export const CHAIN_ID =
  ENV === 'mainnet-beta'
    ? ENVChainId.MainnetBeta
    : ENV === 'devnet'
    ? ENVChainId.Devnet
    : ENV === 'testnet'
    ? ENVChainId.Testnet
    : ENVChainId.MainnetBeta;
export const SOLANA_RPC_ENDPOINT =
  ENV === 'devnet' ? 'https://api.devnet.solana.com' : (process.env.NEXT_PUBLIC_RPC as string);

export const INPUT_MINT_ADDRESS =
  ENV === 'devnet'
    ? 'So11111111111111111111111111111111111111112' // SOL
    : 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'; // USDC
export const OUTPUT_MINT_ADDRESS =
  ENV === 'devnet'
    ? 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt' // SRM
    : 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'; // USDT

export interface Token {
  chainId: number; // 101,
  address: string; // '8f9s1sUmzUbVZMoMh6bufMueYH1u4BJSM57RCEvuVmFp',
  symbol: string; // 'TRUE',
  name: string; // 'TrueSight',
  decimals: number; // 9,
  logoURI: string; // 'https://i.ibb.co/pKTWrwP/true.jpg',
  tags: string[]; // [ 'utility-token', 'capital-token' ]
}

export const TREASURY = 'BrbCdyu88BjSDoMoBiASjyGJQFb2KYdSiArBpsLJA8F7';
export const PROGRAM_ID =
  (process.env.NEXT_PUBLIC_PROGRAM_ID as string) || 'EGq5CmJh8UX5AnVnjj1Tvd7HzcRqDnUbb5LeTF5FnL8j';

export const COLLECTION_ADDRESS =
  (process.env.NEXT_PUBLIC_COLLECTION_ADDRESS as string) ||
  '5W4F9DFeGfCDLTdaGRvVKdnBcL27aYWdGxJQVrpo2NrS';

export const CANDY_MACHINE_ID =
  (process.env.NEXT_PUBLIC_CANDY_MACHINE_ID as string) ||
  'AppCuxpfDPMMGH1G42jZxAdFoWhVvCjjs1R7UZq23iqD';

export enum HolderEnum {
  Yay,
  Nay,
}
