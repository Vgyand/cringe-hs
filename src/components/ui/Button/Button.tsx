import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IButton } from '@/shared/types/buttonTypes'

import styles from './Button.module.scss'

const Button: FC<IButton> = ({ type, text, to }) => {
	return (
		<Link to={to}>
			<button className={styles.button} type={type}>
				{text}
			</button>
		</Link>
	)
}

export default Button
