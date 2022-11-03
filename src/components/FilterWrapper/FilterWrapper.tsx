import { FilterType } from '@/shared/types/cardTypes'

import druidImg from '../../assets/HeroClasses/Druidicon.webp'
import hunterImg from '../../assets/HeroClasses/Hunter_icon.webp'
import mageImg from '../../assets/HeroClasses/Mage_icon.webp'
import neutralImg from '../../assets/HeroClasses/Neutral_icon.webp'
import paladinImg from '../../assets/HeroClasses/Paladin_icon.webp'
import priestImg from '../../assets/HeroClasses/Priest_icon.webp'
import rogueImg from '../../assets/HeroClasses/Rogue_icon.webp'
import shamanImg from '../../assets/HeroClasses/Shaman_icon.webp'
import warlockImg from '../../assets/HeroClasses/Warlock_icon.webp'
import warriorImg from '../../assets/HeroClasses/Warrior_icon.webp'

import Filter from './Filter/Filter'
import styles from './FilterWrapper.module.scss'

const filterData = [
	{
		heroImg: druidImg,
		heroClass: 'druid',
	},
	{
		heroImg: hunterImg,
		heroClass: 'hunter',
	},
	{
		heroImg: mageImg,
		heroClass: 'mage',
	},
	{
		heroImg: paladinImg,
		heroClass: 'paladin',
	},
	{
		heroImg: priestImg,
		heroClass: 'priest',
	},
	{
		heroImg: rogueImg,
		heroClass: 'rogue',
	},
	{
		heroImg: shamanImg,
		heroClass: 'shaman',
	},
	{
		heroImg: warlockImg,
		heroClass: 'warlock',
	},
	{
		heroImg: warriorImg,
		heroClass: 'warrior',
	},
	{
		heroImg: neutralImg,
		heroClass: 'neutral',
	},
]

const FilterWrapper = ({ setHeroClass }: FilterType) => {
	return (
		<div className={styles.filters}>
			<div className={styles.filterByClass}>
				{filterData.map(
					(el: { heroImg: string; heroClass: string }, index: number) => (
						<Filter
							key={index}
							setHeroClass={setHeroClass}
							heroClass={el.heroClass}
							img={el.heroImg}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default FilterWrapper
