import { useState } from 'react'

import { ModalType } from '@/shared/types/cardTypes'

import styles from './CardImg.module.scss'
import Modal from './Modal/Modal'

const CardImg = ({ img, name, artist, flavor, cardSet, id }: ModalType) => {
	const [open, setOpen] = useState(false)
	return (
		<div onClick={() => setOpen(!open)} className={styles.cardItem}>
			<img src={img} alt={name} />
			{open ? (
				<Modal
					artist={artist}
					flavor={flavor}
					cardSet={cardSet}
					name={name}
					img={img}
					id={id}
				/>
			) : (
				''
			)}
		</div>
	)
}

export default CardImg
