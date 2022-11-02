import { useState } from 'react'
import { toastr } from 'react-redux-toastr'

import { Card, SearchStateTypes } from '@/shared/types/cardTypes'

import attackImg from '../../assets/attack.png'
import healthImg from '../../assets/health.png'
import manaImg from '../../assets/mana.png'
import { useGetCardsByQueryQuery } from '../../store/cardsApi'
import Cards from '../Cards/Cards'
import FilterWrapper from '../FilterWrapper/FilterWrapper'
import Pagination from '../Pagination/Pagination'
import Dropdown from '../ui/Dropdown/Dropdown'

import styles from './CardsWrapper.module.scss'

const CardsWrapper = () => {
	const [heroClass, setHeroClass] = useState('')
	const [search, setSearch] = useState('')
	const [cost, setCost] = useState('')
	const [health, setHealth] = useState('')
	const [attack, setAttack] = useState('')

	const searchState: SearchStateTypes = {
		heroClass,
		search,
		cost,
		health,
		attack,
	}
	console.log(searchState)
	const { data, isLoading, isFetching, error } =
		useGetCardsByQueryQuery(searchState)
	const [currentPage, setCurrentPage] = useState(1)
	const [cardsPerPage] = useState(25)

	if (isLoading) return <p className="text-center">Loader</p>

	const indexOfLastCard: number = currentPage * cardsPerPage
	const indexOfFirdsCard: number = indexOfLastCard - cardsPerPage
	const currentCards: Card = data.slice(indexOfFirdsCard, indexOfLastCard)

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber)
	}

	if (error) {
		if ('status' in error) {
			const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
			toastr.error(errMsg, 'no such card')
		} else {
			return <div>{error.message}</div>
		}
	}

	const options: { value: string; label: string }[] = [
		{ value: '', label: '' },
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' },
		{ value: '6', label: '6' },
		{ value: '7', label: '7' },
		{ value: '8', label: '8' },
		{ value: '9', label: '9' },
	]

	return (
		<div className={styles.cards}>
			<>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={styles.input}
					placeholder="Search for cards"
				/>
				<div className={styles.filter}>
					<FilterWrapper setHeroClass={setHeroClass} heroClass={''} img={''} />
				</div>
				<div className="flex justify-center">
					<div className={styles.dropdown}>
						<img src={manaImg} alt="cost" />
						<Dropdown
							options={options}
							selectedOption={cost}
							setSelectedOption={setCost}
						/>
					</div>
					<div className={styles.dropdown}>
						<img src={healthImg} alt="cost" />
						<Dropdown
							options={options}
							selectedOption={health}
							setSelectedOption={setHealth}
						/>
					</div>
					<div className={styles.dropdown}>
						<img src={attackImg} alt="cost" />
						<Dropdown
							options={options}
							selectedOption={attack}
							setSelectedOption={setAttack}
						/>
					</div>
				</div>

				{isLoading || isFetching ? (
					<div className="text-center">loading</div>
				) : (
					<>
						<Cards currentCards={currentCards} />
						<Pagination
							postsPerPage={cardsPerPage}
							totalPosts={data.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					</>
				)}
			</>
		</div>
	)
}

export default CardsWrapper
