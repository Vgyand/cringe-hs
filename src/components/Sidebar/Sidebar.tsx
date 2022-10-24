import { FC } from 'react'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<h1 className="text-center">CringeHS</h1>
			<Menu />
		</div>
	)
}

export default Sidebar
