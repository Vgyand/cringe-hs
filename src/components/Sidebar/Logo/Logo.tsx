import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/hs-logo.png'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link to="/">
			<img className={styles.logo} src={logo} alt="hsLogo" />
		</Link>
	)
}

export default Logo
