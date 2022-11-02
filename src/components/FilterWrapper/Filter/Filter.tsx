import { FilterType } from '@/shared/types/cardTypes'

import styles from './Filter.module.scss'

const Filter = ({ setHeroClass, heroClass, img }: FilterType) => {
	return (
		<div>
			<button
				className={styles.filterBtn}
				onClick={() => setHeroClass(heroClass)}
			>
				<img src={img} alt="class" />
			</button>
		</div>
	)
}

export default Filter
