import React from 'react'

import CardsWrapper from '../../components/CardsWrapper/CardsWrapper'
import { useAppSelector } from '../../hooks/hooks'

const History = () => {
	const history = useAppSelector((data) => data.history)

	return (
		<div className="text-center">
			{history ? <>jija</> : <>joja</>}
			<CardsWrapper />
		</div>
	)
}

export default History
