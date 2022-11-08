import Button from '../../ui/Button/Button'

const MenuAuth = () => {
	return (
		<div>
			<Button type="button" text="Favorites" to="/favorites" />
			<Button type="button" text="History" to="/history" />
		</div>
	)
}

export default MenuAuth
