import { FilterType } from '@/shared/types/cardTypes'

import { filterData } from '../../config/filterData'

import Filter from './Filter/Filter'
import styles from './FilterWrapper.module.scss'

const FilterWrapper = ({ setHeroClass }: FilterType) => {
	return (
		<div className={styles.filters}>
			<div className={styles.filterByClass}>
				{filterData.map((el, index) => (
					<Filter
						key={index}
						setHeroClass={setHeroClass}
						heroClass={el.heroClass}
						img={el.heroImg}
					/>
				))}
			</div>
		</div>
	)
}

export default FilterWrapper
