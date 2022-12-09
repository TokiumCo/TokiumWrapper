import React, { useContext } from "react"
import { Outlet, Navigate } from 'react-router-dom';
import { TokiumContext } from '../../context/TokiumContext';

interface gatedRouteProps {
    redirect: string,
    children: React.ReactNode
}

// Token/Royalty gates the parent route component
export const GatedRoute = (props: gatedRouteProps) => { 
    const {userState} = useContext(TokiumContext);
    if (userState.verified === false) {
        return <Navigate to={props.redirect} replace />
    } else if (userState.verified === true) {
        return props.children ? props.children : <Outlet />;
    }
}