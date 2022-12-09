import React, { useContext } from 'react';
import { UnlockModal } from '../UnlockModal/UnlockModal';
import { TokiumContext } from '../../context/TokiumContext';

interface lockProps {
  children?: React.ReactNode | React.ReactNode[];
  style: React.CSSProperties;
};

// UI Component used to block children elements from rendering. Takes width and height of parent element.
export const Lockscreen = (props: lockProps) => { 
  const { userState, appState } = useContext(TokiumContext);
  
  if (appState.loading) {
    return (
        <div className="tokium_lockscreen" style={props.style}>
          <div className='tokium_loading_spinner'></div>
          <div>{appState.message}</div>
        </div>
    )
  }
  else if (!userState.verified) {
      return (
          <div className="tokium_lockscreen" style={props.style}>
              <UnlockModal></UnlockModal>
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

