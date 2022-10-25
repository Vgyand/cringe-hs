import { FC } from 'react'

import Button from '../../ui/Button/Button'

const Menu: FC = () => {
	return (
		<div>
			<Button type="button" text="Log In" to="/login" />
			<Button type="button" text="Sign In" to="/register" />
		</div>
	)
}

export default Menu
