import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from '../components/Sidebar/Sidebar'
import { ProtectedRoute } from '../services/ProtectedRoute'

import Account from './Account/Account'
import Favorites from './Favorites/Favorites'
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
				<Route
					path="/account"
					element={
						<ProtectedRoute>
							<Account />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/favorites"
					element={
						<ProtectedRoute>
							<Favorites />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	)
}

export default App
