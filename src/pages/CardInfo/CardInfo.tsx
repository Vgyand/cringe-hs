import React from 'react'
import { useLocation } from 'react-router-dom'

import { SearchParamsTypes } from '@/shared/types/cardTypes'

import { useGetCardByQueryQuery } from '../../store/cardsApi'

import styles from './CardInfo.module.scss'

const CardInfo = () => {
	const location = useLocation()
	const id = location.pathname.substring(1)
	const searchParams: SearchParamsTypes = {
		filteredSearch: id,
	}

	const { data } = useGetCardByQueryQuery(searchParams)
	return (
		<>
			{data ? (
				<div className="flex justify-center items-center">
					<div className={styles.cardInfo_img}>
						<img src={data.img} alt="" />
					</div>
					<div className={styles.cardInfo_data}>
						<ul className="text-white text-2xl">
							<hr />
							<li>Artist: {data.artist}</li>
							<hr />
							<li>Set: {data.cardSet}</li>
							<hr />
							<li>Fraction: {data.faction}</li>
							<hr />
							<li>Class: {data.playerClass}</li>
							<hr />
							<li>How to get: {data.howToGet}</li>
							<hr />
							<li>Type: {data.type}</li>
							<hr />
						</ul>
						<p className="text-white text-1xl m-5 w-72">
							Flavor: {data.flavor}
						</p>
					</div>
				</div>
			) : (
				<div className="text-center items-center text-white mx-5">loading</div>
			)}
		</>
	)
}

export default CardInfo
