import { useUserAuth } from 'providers/AuthProvider'
import { toastr } from 'react-redux-toastr'

import { ModalType } from '@/shared/types/cardTypes'

import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks'
import {
	addedToFavorite,
	removedFromFavorite,
} from '../../../../store/favoritesSlice'

import styles from './Modal.module.scss'

const Modal = ({ artist, cardSet, flavor, name, id, img }: ModalType) => {
	const selectedData = useAppSelector((state) => state.favorite)
	const ids = selectedData.map((el) => el.id)
	const dispatch = useAppDispatch()
	const { user } = useUserAuth()
	const handleAddFavorites = () => {
		const cardData = {
			id,
			img,
			name,
		}
		if (user) {
			toastr.success('Success', 'Card has been added to your favorites')
			dispatch(addedToFavorite(cardData))
		}
	}
	const handleRemoveFromFavorites = () => {
		if (user) {
			const cardData = {
				id,
				img,
				name,
			}
			toastr.success('Success', 'Card has been removed from your favorites')
			dispatch(removedFromFavorite(cardData))
		}
	}

	return (
		<div className={styles.modal}>
			<h3 className={styles.modal_title}>{name}</h3>
			<p>Artist: {artist}</p>
			<p>Card Set: {cardSet}</p>
			<p className={styles.modal_flavor}>{flavor}</p>
			{user ? (
				<div>
					{ids.includes(id) ? (
						<button
							onClick={handleRemoveFromFavorites}
							className="text-primary"
						>
							Remove from favorites
						</button>
					) : (
						<button onClick={handleAddFavorites} className={styles.modal_btn}>
							Add to favorites
						</button>
					)}
				</div>
			) : (
				<div>You need to login for add this card to favorites</div>
			)}
		</div>
	)
}

export default Modal
