import React, { useEffect, useState } from 'react';
import { UnlockModal } from './UnlockModal';
import './lockscreen.css'
import { Tokium } from '../lib/index'

interface lockProps {
    pubkey: string,
    children?: React.ReactNode | React.ReactNode[];
};

export const Lockscreen = (props: lockProps) => { 
    const [verified, setVerified] = useState(false);
    const tokium = new Tokium(verified, 'https://magiceden.io/marketplace/paragons', props.pubkey);
  
    useEffect(() => {
        async function verifyUser() {
          await tokium.verifyTokenWithRoyalty()
          setVerified(tokium.verified)
        }
        verifyUser();
    });

    if (verified === false) {
        return (
            <div className="lockscreen">
                <UnlockModal isLocked={verified} isRoyaltyReq={true}></UnlockModal>
            </div>
        )
    } else if (verified === true) {
        return (
            <>
                {props.children}
            </>
        )
    }
};

