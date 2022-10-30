import { FilterType } from '@/shared/types/cardTypes'

import styles from './Filter.module.scss'

const Filter = ({ setHeroClass, heroClass }: FilterType) => {
	return (
		<div>
			<button
				className={styles.filterBtn}
				onClick={() => setHeroClass(heroClass)}
			>
				{heroClass}
			</button>
		</div>
	)
}

export default Filter
