import { FavoriteCard } from '@/shared/types/cardTypes'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { removedFromFavorite } from '../../store/favoritesSlice'
import Button from '../ui/Button/Button'

import styles from './FavoriteCards.module.scss'

const FavoriteCards = () => {
	const cards = useAppSelector((card) => card.favorite)
	const dispatch = useAppDispatch()

	const handleRemoveFromFavorites = (id: string, img: string, name: string) => {
		const cardData: FavoriteCard = {
			id,
			img,
			name,
		}
		dispatch(removedFromFavorite(cardData))
	}

	return (
		<div className={styles.cards}>
			{cards.length ? (
				cards.map((el) => (
					<div key={el.id} className={styles.card}>
						<span
							onClick={() => handleRemoveFromFavorites(el.id, el.img, el.name)}
							className={styles.cardRemove}
						>
							x
						</span>
						<img src={el.img} alt={el.name} />
						<Button text="Info" type="button" to={`/${el.id}`} />
					</div>
				))
			) : (
				<div className="text-white">no favorites</div>
			)}
		</div>
	)
}

export default FavoriteCards
