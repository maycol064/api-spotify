import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouter } from '../app/router/AppRouter'
import { AuthRouter } from '../auth/router/AuthRouter'

export const MainRouter = () => {
    return (
        <Routes>
            {/* Rutas privadas */}
            <Route path='/*' element={<AppRouter />} />

            {/* Rutas publicas */}
            <Route path='/auth/*' element={<AuthRouter />} /> 
        </Routes>
    )
}
