import React from 'react'

import { SearchParamsTypes } from '@/shared/types/cardTypes'

import { useGetCardByQueryQuery } from '../../store/cardsApi'

import styles from './CardInfo.module.scss'

const CardInfo = () => {
	const id = window.location.href.split('/')[3]

	const searchParams: SearchParamsTypes = {
		filteredSearch: id,
	}

	const { data } = useGetCardByQueryQuery(searchParams)
	return (
		<>
			{data ? (
				<div className="flex justify-center items-center">
					<div className={styles.cardInfo_img}>
						<img src={data[0].img} alt="" />
					</div>
					<div className={styles.cardInfo_data}>
						<ul className="text-white text-2xl">
							<hr />
							<li>Artist: {data[0].artist}</li>
							<hr />
							<li>Set: {data[0].cardSet}</li>
							<hr />
							<li>Fraction: {data[0].faction}</li>
							<hr />
							<li>Class: {data[0].playerClass}</li>
							<hr />
							<li>How to get: {data[0].howToGet}</li>
							<hr />
							<li>Type: {data[0].type}</li>
							<hr />
						</ul>
						<p className="text-white text-1xl m-5 w-72">
							Flavor: {data[0].flavor}
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
