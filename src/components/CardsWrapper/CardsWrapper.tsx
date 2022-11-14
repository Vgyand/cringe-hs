import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { useLocation } from 'react-router-dom'

import { Card, SearchParamsTypes } from '@/shared/types/cardTypes'

import attackImg from '../../assets/attack.png'
import healthImg from '../../assets/health.png'
import manaImg from '../../assets/mana.png'
import { cardsOnPage, options } from '../../config/constants'
import { useDebounce } from '../../hooks/hooks'
import { useGetCardsByQueryQuery } from '../../store/cardsApi'
import { addedToHistory } from '../../store/historySlice'
import Cards from '../Cards/Cards'
import FilterWrapper from '../FilterWrapper/FilterWrapper'
import Pagination from '../Pagination/Pagination'
import Dropdown from '../ui/Dropdown/Dropdown'

import styles from './CardsWrapper.module.scss'

const CardsWrapper = () => {
	const location = useLocation()
	const [heroClass, setHeroClass] = useState('')
	const [search, setSearch] = useState<any>('')
	const [cost, setCost] = useState('')
	const [health, setHealth] = useState('')
	const [attack, setAttack] = useState('')
	const [isOpen, setIsOpen] = useState(true)
	const dispatch = useDispatch()
	const debouncedSearch = useDebounce(search, 300)
	const urlParamsSearch = queryString.parse(location.search)
	const searchParams: SearchParamsTypes = {
		heroClass,
		filteredSearch: debouncedSearch,
		cost,
		health,
		attack,
	}

	useEffect(() => {
		if (location.search) {
			setSearch(urlParamsSearch.search)
		}
	}, [])

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

	//type. textContext нету ни в одном из представленном реакте типе что делац
	const onSearchClickHandler = (e: any) => {
		setSearch(e.target.textContent)
		setIsOpen(!isOpen)
	}
	if (error) {
		if ('status' in error) {
			toastr.error('Card not found', 'no such card')
		} else {
			return <div>{error.message}</div>
		}
	}

	const filteredCards = data.filter((card: Card) => {
		return card.name.toLowerCase().includes(debouncedSearch.toLowerCase())
	})

	return (
		<div className={styles.cards}>
			<>
				<form className={styles.inputForm}>
					<div className="flex">
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className={styles.input}
							placeholder="Search for cards"
							onClick={() => setIsOpen(true)}
						/>
						<button
							onClick={(e) => {
								e.preventDefault()
								dispatch(addedToHistory(searchParams))
							}}
							className="text-white border"
						>
							Remember to history
						</button>
					</div>

					<ul
						className={styles.autocomplete}
						onMouseLeave={() => setIsOpen(false)}
					>
						{debouncedSearch && isOpen ? (
							<>
								{filteredCards.map((card: Card) => (
									<li
										className={styles.autocomplete__item}
										key={card.dbfId}
										onClick={onSearchClickHandler}
									>
										{card.name}
									</li>
								))}
							</>
						) : (
							''
						)}
					</ul>
				</form>

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
