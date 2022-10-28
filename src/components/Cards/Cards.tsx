import styles from './Cards.module.scss'

const Cards = ({ cards, loading }: any) => {
	if (loading) {
		return <h2>loading...</h2>
	}

	const handleClickOnCard = (card: any, event: any) => {
		event.preventDefault()
		console.log(card)
	}
	return (
		<div className={styles.cards}>
			{cards.map((el: any) => (
				<a href="/" onClick={() => handleClickOnCard(el, window.event)}>
					<img
						className={styles.card}
						src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${el.id}.png`}
						alt=""
					/>
				</a>
			))}
		</div>
	)
}

export default Cards
