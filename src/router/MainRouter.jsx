import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouter } from '../app/router/AppRouter'
import { useSelector } from 'react-redux'

export const MainRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<AppRouter />} />
        </Routes>
    )
}
