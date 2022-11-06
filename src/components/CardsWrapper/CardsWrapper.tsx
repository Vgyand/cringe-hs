import { useState } from 'react'
import { toastr } from 'react-redux-toastr'

import { SearchParamsTypes } from '@/shared/types/cardTypes'

import attackImg from '../../assets/attack.png'
import healthImg from '../../assets/health.png'
import manaImg from '../../assets/mana.png'
import { cardsOnPage, options } from '../../config/constants'
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

	const searchParams: SearchParamsTypes = {
		heroClass,
		search,
		cost,
		health,
		attack,
	}
	const { data, isLoading, isFetching, error } =
		useGetCardsByQueryQuery(searchParams)
	const [currentPage, setCurrentPage] = useState(1)
	const [cardsPerPage] = useState(cardsOnPage)

	if (isLoading) return <p className="text-center">Loader</p>

	const indexOfLastCard = currentPage * cardsPerPage
	const indexOfFirdsCard = indexOfLastCard - cardsPerPage
	const cards = data.slice(indexOfFirdsCard, indexOfLastCard)

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
						<Cards cards={cards} />
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
