import { useUserAuth } from 'providers/AuthProvider'
import React from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import MenuAuth from './MenuAuth/MenuAuth'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	const { user, logout } = useUserAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		await logout()
		toastr.success('User has been succesfully loggen out', 'logged out')
		navigate('/login')
	}

	return (
		<div className={styles.sidebar}>
			<Logo />
			<h1 className="text-center">CringeHS</h1>
			{user ? <p>{user.email}</p> : <Menu />}
			{user ? (
				<>
					<MenuAuth />
					<button className={styles.logoutBtn} onClick={handleLogout}>
						logout
					</button>
				</>
			) : (
				''
			)}
			<br />
		</div>
	)
}

export default Sidebar
