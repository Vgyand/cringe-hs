import { useUserAuth } from 'providers/AuthProvider'
import React from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import Logo from './Logo/Logo'
import Menu from './MenuAuth/MenuAuth'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	const { user, logout } = useUserAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await logout()
			toastr.success('User has been succesfully loggen out', 'logged out')
			navigate('/')
		} catch (
			e: any //error type (!**)
		) {
			toastr.error(`${e.code}`, 'error')
		}
	}

	return (
		<div className={styles.sidebar}>
			<Logo />
			<h1 className="text-center">CringeHS</h1>
			{user ? 'logged in menu will be implemented' : <Menu />}
			{user ? <button onClick={handleLogout}>logout</button> : 'not autherized'}
			<br />
		</div>
	)
}

export default Sidebar
