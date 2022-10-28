import { useState } from 'react'

import { useGetCardsByClassQuery } from '../../store/cardsApi'
import Cards from '../Cards/Cards'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'

import styles from './CardsWrapper.module.scss'

const CardsWrapper = () => {
	const [heroClass, setHeroClass] = useState('paladin')
	const { data, isLoading } = useGetCardsByClassQuery(heroClass)
	const [currentPage, setCurrentPage] = useState(1)
	const [cardsPerPage] = useState(90)

	if (isLoading) return <p className="text-center">loading</p>

	const indexOfLastCard = currentPage * cardsPerPage
	const indexOfFirdsCard = indexOfLastCard - cardsPerPage
	const currentCards = data.slice(indexOfFirdsCard, indexOfLastCard)

	const paginate = (
		pageNumber: number,
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault()
		setCurrentPage(pageNumber)
	}

	return (
		<div>
			{isLoading ? (
				<h2>loading</h2>
			) : (
				<>
					<Pagination
						postsPerPage={cardsPerPage}
						totalPosts={data.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
					<div className={styles.filter}>
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

					<Cards cards={currentCards} />
					<Pagination
						postsPerPage={cardsPerPage}
						totalPosts={data.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
				</>
			)}
		</div>
	)
}

export default CardsWrapper
