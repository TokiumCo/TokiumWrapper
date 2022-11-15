import React, { useEffect, useState } from 'react';
import './unlockmodal.css';
import gatedByTokium from '../assets/gatedByTokium.png';

interface unlockModalProps {
    isLocked: boolean,
    isRoyaltyReq: boolean
};

 
export const UnlockModal = (props: unlockModalProps) => { 
    return (
        <div className="unlockModal">
            <img src={gatedByTokium} alt='Gated by Tokium' width={2433} height={334} className='tokium'/>
            {
                props.isRoyaltyReq ? (
                    <p>This content is token and royalty gated.</p>
                ):(
                    <p>This content is token gated.</p>
                )
            }
        </div>
    )
}