import React, { useContext } from 'react';
import { UnlockModal } from '../unlockModal/UnlockModal';
import { TokiumContext } from '../../context/TokiumContext';

interface lockProps {
    children?: React.ReactNode | React.ReactNode[];
};

// UI Component used to block children elements from rendering. Takes width and height of parent element.
export const Lockscreen = (props: lockProps) => { 
    const tokium = useContext(TokiumContext);
    if (tokium.verified === false) {
        return (
            <div className="tokium_lockscreen">
                <UnlockModal isLocked={tokium.verified} isRoyaltyReq={true}></UnlockModal>
            </div>
        )
    } else if (tokium.verified === true) {
        return (
            <>
                {props.children}
            </>
        )
    } else if (tokium.verified === undefined) {
        return (
            <div className="tokium_lockscreen">
                <div className='tokium_loading_spinner'></div>
            </div>
        )
    }
};

