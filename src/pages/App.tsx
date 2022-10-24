import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from '../components/Sidebar/Sidebar'

import Login from './Login/Login'
import MainPage from './MainPage'
import Register from './Register/Register'

const App = () => {
	return (
		<>
			<Sidebar />
			<Routes>
				<Route path="/" index element={<MainPage />} />
				<Route path="/register" index element={<Register />} />
				<Route path="/login" index element={<Login />} />
			</Routes>
		</>
	)
}

export default App
