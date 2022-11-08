import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Suspense, lazy } from 'react'

import styles from './CardImg.module.scss'

interface CardImgType {
	img: string
	name: string
	artist: string
	flavor: string
	cardSet: string
	id: number
}

const Modal = React.lazy(() => import('./Modal/Modal'))

const CardImg = ({ img, name, artist, flavor, cardSet, id }: CardImgType) => {
	const [open, setOpen] = useState(false)
	return (
		<div onClick={() => setOpen(!open)} className={styles.cardItem}>
			<img src={img} alt={name} />
			{open ? (
				<Suspense fallback={<div>Loading...</div>}>
					<Modal
						artist={artist}
						flavor={flavor}
						cardSet={cardSet}
						name={name}
						img={img}
						id={id}
					/>
				</Suspense>
			) : (
				''
			)}
		</div>
	)
}

CardImg.PropTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	artist: PropTypes.string,
	flavor: PropTypes.string,
	cardSet: PropTypes.string,
	id: PropTypes.number,
}

export default CardImg
