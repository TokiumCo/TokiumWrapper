import React from 'react';
import gatedByTokium from '../../assets/gatedByTokium.png';

interface unlockModalProps {
    isLocked: boolean,
    isRoyaltyReq: boolean
};

 
export const UnlockModal = (props: unlockModalProps) => { 
    return (
        <div className="tokium_unlockModal">
            <img src={gatedByTokium} alt='Gated by Tokium' width={2433} height={334} className='tokium_image'/>
            {
                props.isRoyaltyReq ? (
                    <p className="tokium_font">This content is token and royalty gated.</p>
                ):(
                    <p className="tokium_font">This content is token gated.</p>
                )
            }
        </div>
    )
}