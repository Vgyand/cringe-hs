import { useSelector } from 'react-redux'

import { ModalType } from '@/shared/types/cardTypes'

import styles from './FavoriteCards.module.scss'

const FavoriteCards = () => {
	const cards = useSelector((card: any) => card.favorite)
	//dispatch remove favorite card
	return (
		<div className={styles.cards}>
			{cards
				? cards.map((el: ModalType) => (
						<div key={el.id}>
							<img src={el.img} alt={el.name} />
						</div>
				  ))
				: 'no favorites'}
		</div>
	)
}

export default FavoriteCards
