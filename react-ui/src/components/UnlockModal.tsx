import React from 'react';

interface unlockModalProps {
    isLocked: boolean,
    isRoyaltyReq: boolean
};

const unlockModalStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    height: '80%',
    width: '80%',
    background: '#D3E8F4',
    opacity: '0.7',
    padding: '1em',
    fontSize: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
};

 
export const UnlockModal = (props: unlockModalProps) => { 

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