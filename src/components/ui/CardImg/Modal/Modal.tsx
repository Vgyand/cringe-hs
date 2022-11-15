import { ModalType } from '@/shared/types/cardTypes'

import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks'
import {
	FavoritesState,
	addedToFavorite,
	removedFromFavorite,
} from '../../../../store/favoritesSlice'
import Button from '../../Button/Button'

import styles from './Modal.module.scss'

const Modal = ({ artist, cardSet, flavor, name, id, img }: ModalType) => {
	const favoriteCardsData = useAppSelector((state) => state.favorite)
	const ids = favoriteCardsData.map((el) => el.id)
	const dispatch = useAppDispatch()
	const handleAddFavorites = async () => {
		const cardData: FavoritesState = {
			id,
			img,
			name,
		}
		dispatch(addedToFavorite(cardData))
	}
	const handleRemoveFromFavorites = () => {
		const cardData: FavoritesState = {
			id,
			img,
			name,
		}
		dispatch(removedFromFavorite(cardData))
	}

	return (
		<div className={styles.modal}>
			<h3 className={styles.modal_title}>{name}</h3>
			<p>Artist: {artist}</p>
			<p>Card Set: {cardSet}</p>
			<p className={styles.modal_flavor}>{flavor}</p>

			<div>
				{ids.includes(id) ? (
					<button onClick={handleRemoveFromFavorites} className="text-primary">
						Remove from favorites
					</button>
				) : (
					<button onClick={handleAddFavorites} className={styles.modal_btn}>
						Add to favorites
					</button>
				)}
			</div>

			<Button text="Info" type="button" to={id} />
		</div>
	)
}

export default Modal
