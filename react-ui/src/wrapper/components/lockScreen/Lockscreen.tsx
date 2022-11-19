import React, { useContext } from 'react';
import { UnlockModal } from '../unlockModal/UnlockModal';
import './lockscreen.css'
import { TokiumContext } from '../../context/TokiumContext'

interface lockProps {
    children?: React.ReactNode | React.ReactNode[];
};

// UI Component used to block children elements from rendering. Takes width and height of parent element.
export const Lockscreen = (props: lockProps) => { 
    const tokium = useContext(TokiumContext);
    if (tokium.verified === false) {
        return (
            <div className="lockscreen">
                <UnlockModal isLocked={tokium.verified} isRoyaltyReq={true}></UnlockModal>
            </div>
        )
    } else if (tokium.verified === true) {
        return (
            <>
                {props.children}
            </>
        )
    }
};

