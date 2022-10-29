import styles from './Filter.module.scss'

const Filter = ({ setHeroClass, heroClass }: any) => {
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
