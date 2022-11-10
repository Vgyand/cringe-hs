import { useState } from 'react'

import Cards from '../../components/Cards/Cards'
import CardsWrapper from '../../components/CardsWrapper/CardsWrapper'
import { useAppSelector } from '../../hooks/hooks'
import { useGetCardsByQueryQuery } from '../../store/cardsApi'

import styles from './History.module.scss'

const History = () => {
	const [searchParams, setSearchParams] = useState({})
	const history = useAppSelector((data) => data.history)
	const { data, isLoading, isFetching, error } =
		useGetCardsByQueryQuery(searchParams)
	console.log(data)
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
			{data ? (
				<>
					<Cards cards={data} />
				</>
			) : (
				<>loadinb</>
			)}
		</div>
	)
}

export default History
