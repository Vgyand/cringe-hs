import { useState } from 'react'

import { useGetCardsQuery } from '../../store/cardsApi'
import Cards from '../Cards/Cards'
import Pagination from '../Pagination/Pagination'

const CardsWrapper = () => {
	const { data, isLoading } = useGetCardsQuery('')
	const [currentPage, setCurrentPage] = useState(5)
	const [cardsPerPage] = useState(90)

	if (data) {
		const indexOfLastCard = currentPage * cardsPerPage
		const indexOfFirdsCard = indexOfLastCard - cardsPerPage
		const currentCards = data.slice(indexOfFirdsCard, indexOfLastCard)

		const paginate = (pageNumber: any, event: any) => {
			event.preventDefault()
			setCurrentPage(pageNumber)
		}

		return (
			<div>
				<Cards cards={currentCards} loading={isLoading} />
				<Pagination
					className="mx-auto"
					postsPerPage={cardsPerPage}
					totalPosts={data.length}
					paginate={paginate}
					currentPage={currentPage}
				/>
			</div>
		)
	} else {
		return <h2>loading</h2>
	}
}

export default CardsWrapper
