import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            {/* <Route path='/account' element={<MainPage />} /> */}
            {/* <Route path='/artistfollowed' element={<MainPage />} /> */}
        </Routes>
    )
}
