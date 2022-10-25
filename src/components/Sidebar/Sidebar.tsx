import { UserAuth } from 'providers/AuthProvider'
import { FC } from 'react'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import Logo from './Logo/Logo'
import Menu from './MenuAuth/MenuAuth'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const { user, logout } = UserAuth()
	const navigate = useNavigate()

	const hanldleLogout = async () => {
		try {
			await logout()
			toastr.success('User has been succesfully loggen out', 'logged out')
			navigate('/')
		} catch (e: any) {
			toastr.error(`${e.code}`, 'error')
		}
	}

	return (
		<div className={styles.sidebar}>
			<Logo />
			<h1 className="text-center">CringeHS</h1>
			{user ? 'logged in menu will be implemented' : <Menu />}
			{user ? (
				<button onClick={hanldleLogout}>logout</button>
			) : (
				'not autherized'
			)}
			<br />
		</div>
	)
}

export default Sidebar
