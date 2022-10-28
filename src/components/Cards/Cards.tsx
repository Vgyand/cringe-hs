import { ICard } from '@/shared/types/cardTypes'

import styles from './Cards.module.scss'

//types (!**)
const Cards = ({ cards }: any) => {
	const handleClickOnCard = (card: ICard, event: Event | undefined): void => {
		event?.preventDefault()
		console.log(card)
	}
	console.log(cards)
	return (
		<div className={styles.cards}>
			{cards.map((el: ICard) => (
				<a href="/" onClick={() => handleClickOnCard(el, window.event)}>
					<img className={styles.card} src={el.img} alt="" />
				</a>
			))}
		</div>
	)
}

export default Cards
