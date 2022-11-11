import React from 'react';
import { UnlockModal } from './UnlockModal';

interface lockProps {
    isLocked: boolean,
    children?: React.ReactNode | React.ReactNode[];
};

const lockscreenStyle: React.CSSProperties = {
    background: 'linear-gradient(305deg, rgba(42,50,82,1) 0%, rgba(85,96,114,1) 21%, rgba(84,182,156,1) 90%, rgba(0,226,158,1) 100%)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    boxShadow: 'inset 0px 0px 40px #2A3232',
    padding: '1em',
};

 
export const Lockscreen = (props: lockProps) => { 

    if (props.isLocked) {
        return (
            <div style={lockscreenStyle}>
                <UnlockModal isLocked={props.isLocked} isRoyaltyReq={true}></UnlockModal>
            </div>
        )
    } else {
        return (
            <>
                {props.children}
            </>
        )
    }
};

