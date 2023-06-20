export type EndpointTypes = 'mainnet' | 'devnet' | 'localnet';

export type User = {
  address: string;
  lamports: number;
};

export type Community = {
  index: number;
  name: string;
  img: string;
  votes: number;
};

export enum TxType {
  User,
  Community,
}
