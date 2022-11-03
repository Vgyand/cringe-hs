import { Card } from '@/shared/types/cardTypes'

import styles from './Cards.module.scss'

//types (!**)
const Cards = ({ cards }: any) => {
	const handleClickOnCard = (card: Card): void => {
		console.log(card)
	}
	console.log(cards)
	return (
		<div className={styles.cards}>
			{cards.map((el: Card) => (
				<div key={el.dbfId} onClick={() => handleClickOnCard(el)}>
					<img className={styles.card} src={el.img} alt="" />
				</div>
			))}
		</div>
	)
}

export default Cards
