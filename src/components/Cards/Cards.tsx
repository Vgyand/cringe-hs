import { useGetCardsQuery } from '../../store/cardsApi'

import styles from './Cards.module.scss'

const Cards = () => {
	const { data, error } = useGetCardsQuery('')

	return (
		<div className={styles.cards}>
			<div>
				{data ? (
					<div>
						{data.map((el: any, index: number) => (
							<p>
								{index}
								{el.text}
							</p>
						))}
					</div>
				) : (
					'jija'
				)}
			</div>
		</div>
	)
}

export default Cards
