import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

export const Protection = ( {redirectPath = '/login'} ) => {
    const isAllowed = localStorage.getItem('user')
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Outlet />
}