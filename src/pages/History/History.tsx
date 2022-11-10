import { useState } from 'react'

import CardsWrapper from '../../components/CardsWrapper/CardsWrapper'
import { useAppSelector } from '../../hooks/hooks'

import styles from './History.module.scss'

const History = () => {
	const [searchParams, setSearchParams] = useState({})
	const history = useAppSelector((data) => data.history)

	return (
		<div>
			<div className="flex justify-center">
				{history ? (
					<>
						{history.map((el, index) => (
							<div
								onClick={() => setSearchParams(history[index])}
								key={index}
								className={styles.historyCard}
							>
								<ul>
									<li>Attack: {el.attack} </li>
									<li>Cost: {el.cost} </li>
									<li>Search: {el.filteredSearch} </li>
									<li>Health: {el.health} </li>
									<li>Class: {el.heroClass} </li>
								</ul>
							</div>
						))}
					</>
				) : (
					<>History is empty</>
				)}
			</div>

			<CardsWrapper searchProps={searchParams} />
		</div>
	)
}

export default History
