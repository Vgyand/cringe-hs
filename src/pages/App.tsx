import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from '../components/Sidebar/Sidebar'
import { ProtectedRoute } from '../services/ProtectedRoute'

import Account from './Account/Account'
import CardInfo from './CardInfo/CardInfo'
import Favorites from './Favorites/Favorites'
import History from './History/History'
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
				<Route path="/:cardId" index element={<CardInfo />} />
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

				<Route
					path="/history"
					element={
						<ProtectedRoute>
							<History />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	)
}

export default App
