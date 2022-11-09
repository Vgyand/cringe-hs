import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { IButton } from '@/shared/types/buttonTypes'

import styles from './Button.module.scss'

const Button = ({ type, text, to }: IButton) => {
	return (
		<Link to={to}>
			<button className={styles.button} type={type}>
				{text}
			</button>
		</Link>
	)
}

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string,
	to: PropTypes.string,
}

export default Button
