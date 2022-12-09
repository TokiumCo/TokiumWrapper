import React, { useState, useEffect } from "react";
import Tokium from "@tokium.co/tokiumsdk";
import { AppState, TokiumStateType, UserState } from "./types";

// Props passed to the <TokiumProvider>
interface tokiumProviderProps {
    pubkey: string,
    collection: string,
    children?: React.ReactNode | React.ReactNode[];
};

const TokiumContext = React.createContext({} as TokiumStateType)

const TokiumProvider = (props: tokiumProviderProps) => {

  const [userState, setUserState] = useState<UserState>({verified: false, userNFTs: [], address: props.pubkey, collection: props.collection})
  const [appState, setAppState] = useState<AppState>({ message: 'Verifying paid royalties...', loading: true, state: 'checking' })
  

 
  const changeUserState = (change: Object) => setUserState({ ...userState, ...change });
  const changeAppState = (change: Object) => setAppState({ ...appState, ...change });


  const tokium = new Tokium(props.collection, props.pubkey);
  
  

  const fetchUserNFTs = async () => {
    const ownedNFTs = await tokium.getOwnedCollectionNFTs()
    changeUserState({ userNFTs: ownedNFTs });
    if (ownedNFTs.length > 0) {
      changeAppState({ loading: false, message: `Looks like you've not paid royalies.`, state: 'payRoyalties'});
    } else {
      changeAppState({ loading: false, message: `Looks like you don't have the right NFT.`, state: 'buyNFT'});
    }    
  }

  const checkForPaidRoyalties = async () => {
    changeAppState({ loading: true });
    const verified = await tokium.hasPaidRoyalties();
    changeUserState({ verified })
    
    if (!verified) {
      changeAppState({ message: 'Fetching your NFTs...' });
      await fetchUserNFTs();
    } else changeAppState({ loading: false });
  }



  useEffect(() => {
    checkForPaidRoyalties();
  }, []);

  return <TokiumContext.Provider value={{userState, appState}}>{props.children}</TokiumContext.Provider>
}

export { TokiumProvider, TokiumContext };