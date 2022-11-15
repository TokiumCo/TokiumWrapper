import React, { useEffect, useState } from 'react';
import './unlockmodal.css';
import gatedByTokium from '../assets/gatedByTokium.png';
import tokiumLogo from '../assets/tokiumLogo.png';

interface unlockModalProps {
    isLocked: boolean,
    isRoyaltyReq: boolean
};

 
export const UnlockModal = (props: unlockModalProps) => { 
    return (
        <div className="unlockModal">
            <img src={gatedByTokium} alt='Gated by Tokium' className='tokiumLogo'/>
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