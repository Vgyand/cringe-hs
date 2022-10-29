import { useState } from 'react'
import { toastr } from 'react-redux-toastr'

import { useGetCardsByQueryQuery } from '../../store/cardsApi'
import Cards from '../Cards/Cards'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'

import styles from './CardsWrapper.module.scss'

const CardsWrapper = () => {
	const [heroClass, setHeroClass] = useState('')
	const [search, setSearch] = useState('')
	const [cost, setCost] = useState('')
	const searchState: any = {
		heroClass: heroClass,
		search: search,
		cost: cost,
	}
	console.log(searchState)
	const { data, isLoading, isFetching, error } =
		useGetCardsByQueryQuery(searchState)
	const [currentPage, setCurrentPage] = useState(1)
	const [cardsPerPage] = useState(60)

	if (isLoading) return <p className="text-center">loading</p>

	const indexOfLastCard = currentPage * cardsPerPage
	const indexOfFirdsCard = indexOfLastCard - cardsPerPage
	const currentCards = data.slice(indexOfFirdsCard, indexOfLastCard)

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
		<div>
			<>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="flex mx-auto"
				/>
				<div className={styles.filter}>
					<Filter setHeroClass={setHeroClass} heroClass="neutral" />
					<Filter setHeroClass={setHeroClass} heroClass="druid" />
					<Filter setHeroClass={setHeroClass} heroClass="hunter" />
					<Filter setHeroClass={setHeroClass} heroClass="mage" />
					<Filter setHeroClass={setHeroClass} heroClass="paladin" />
					<Filter setHeroClass={setHeroClass} heroClass="priest" />
					<Filter setHeroClass={setHeroClass} heroClass="rogue" />
					<Filter setHeroClass={setHeroClass} heroClass="shaman" />
					<Filter setHeroClass={setHeroClass} heroClass="warlock" />
					<Filter setHeroClass={setHeroClass} heroClass="warrior" />
				</div>
				{isLoading || isFetching ? (
					<div className="text-center">loading</div>
				) : (
					<>
						<Cards cards={currentCards} />
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
