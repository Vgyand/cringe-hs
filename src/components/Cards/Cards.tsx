import styles from './Cards.module.scss'

const Cards = ({ cards, loading }: any) => {
	if (loading) {
		return <h2>loading</h2>
	}
	console.log(cards)
	return (
		<div className={styles.cards}>
			{cards.map((el: any) => (
				<p>
					{el.name}
					<img
						src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${el.id}.png`}
						alt=""
					/>
				</p>
			))}
		</div>
	)
}

export default Cards
