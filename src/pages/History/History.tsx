import { Link } from 'react-router-dom'

import { useAppSelector } from '../../hooks/hooks'

import styles from './History.module.scss'

const History = () => {
	const history = useAppSelector((data) => data.history)

	return (
		<div>
			<div className="flex justify-center">
				{history ? (
					<>
						{history.map((el, index) => (
							<Link
								to={`/?${
									el.filteredSearch ? `search=${el.filteredSearch}` : ''
								}`}
								key={index}
								className={styles.historyCard}
							>
								<ul>
									<li>Search: {el.filteredSearch} </li>
								</ul>
							</Link>
						))}
					</>
				) : (
					<>History is empty</>
				)}
			</div>
		</div>
	)
}

export default History
