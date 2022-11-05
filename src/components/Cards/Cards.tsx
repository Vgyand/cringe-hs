import { Card } from '@/shared/types/cardTypes'

import CardImg from '../ui/CardImg/CardImg'

import styles from './Cards.module.scss'

//types (!**)
const Cards = ({ cards }: any) => {
	return (
		<div className={styles.cards}>
			{cards.map((el: Card) => (
				<CardImg
					img={el.img}
					name={el.name}
					cardSet={el.cardSet}
					artist={el.artist}
					flavor={el.flavor}
					id={el.dbfId}
					key={el.dbfId}
				/>
			))}
		</div>
	)
}

export default Cards
