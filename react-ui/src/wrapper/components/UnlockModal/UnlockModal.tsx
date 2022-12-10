import React, { useContext } from 'react';
import gatedByTokium from '../../assets/gatedByTokium.png';
import { TokiumContext } from '../../context';

 
export const UnlockModal = () => { 
  const { userState, appState } = useContext(TokiumContext);

  const MagicEdenButton = () => (
    <button className='tokium_button hover' onClick={() => window.open(userState.collection, "_blank")}>
      Buy NFT
    </button>
  );

  const TokiumPayRoyalties = () => (
    <button className='tokium_button hover' onClick={() => window.open("https://tokium.co", "_blank" )}>
      Pay Royalties
    </button>
  );

  return (
    <div className="tokium_unlockModal">
      <img src={gatedByTokium} alt='Gated by Tokium' width={2433} height={334} className='tokium_image'/>
      <div className="tokium_font tokium_unlockModal_text" style={{color:"black"}}>{appState.message}</div>
      {
        appState.state==="buyNFT"? MagicEdenButton() : TokiumPayRoyalties()
      }
          
    </div>
  )
}