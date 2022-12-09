
export type NFT = any;

export type UserState = {
  verified: boolean,
  userNFTs: Array<NFT>
  address: string,
  collection: string
};

export type AppState = {
  loading: boolean,
  message: string,
  state: string
}

export type TokiumStateType = {
  userState: UserState
  appState: AppState
}