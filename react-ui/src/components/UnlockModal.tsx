import React from 'react';
import CSS from 'csstype';

interface unlockModalProps {
    isLocked: boolean,
    isRoyaltyReq: boolean
};


 
export const UnlockModal = (props: unlockModalProps) => { 
    const unlockModalStyle: CSS.PropertiesHyphen = {
        position: 'relative',
        display: 'flex',
        "flex-direction": 'column',
        "align-items": 'center',
        "justify-content": 'center',
        height: '80%',
        width: '80%',
        "font-size": '80%',
        background: '#D3E8F4',
        opacity: '0.7',
        padding: '1em',
        'border-radius': '1em'
    };

    return (
        <div style={unlockModalStyle}>
            <p>This content is gated. Connect wallet to unlock</p>
            {
                props.isRoyaltyReq ? (
                <p>Royalties must be paid in order to unlock the content.</p>
                ):(
                    <></>
                )
            }
        </div>
    )
}