import React, { useState, useEffect } from "react";
import { Tokium } from "../lib";

// Props passed to the <TokiumProvider>
interface tokiumProviderProps {
    pubkey: string,
    collection: string,
    children?: React.ReactNode | React.ReactNode[];
};

// Type of context variables in Tokium Context
type tokiumStateType = {
    pubkey: string,
    collection: string,
    verified: boolean | undefined
}

const TokiumContext = React.createContext({} as tokiumStateType)

const TokiumProvider = (props: tokiumProviderProps) => {
    const [verified, setVerified] = useState<boolean | undefined>(undefined);
    const tokium = new Tokium(props.collection, props.pubkey);

    useEffect(() => {
        async function verifyUser() {
            const verified = await tokium.verifyTokenWithRoyalty()
            setVerified(await Promise.resolve(verified))
        }
        verifyUser();
    });

    return <TokiumContext.Provider value={{pubkey: props.pubkey, verified: verified, collection: props.collection}}>{props.children}</TokiumContext.Provider>
}

export { TokiumProvider, TokiumContext };