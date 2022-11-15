import React, { useContext } from "react"
import { Outlet, Navigate } from 'react-router-dom';
import { TokiumContext } from './TokiumContext'

interface gatedRouteProps {
    redirect: string,
    children: React.ReactNode
}

// Token/Royalty gates the parent route component
export const GatedRoute = (props: gatedRouteProps) => { 
    const tokium = useContext(TokiumContext);
    console.log(tokium.verified)
    if (tokium.verified === false) {
        return <Navigate to={props.redirect} replace />
    } else if (tokium.verified === true) {
        return props.children ? props.children : <Outlet />;
    }
}