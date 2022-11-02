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

const FilterWrapper = ({ setHeroClass }: FilterType) => {
	return (
		<div className={styles.filters}>
			<div className={styles.filterByClass}>
				<Filter
					setHeroClass={setHeroClass}
					heroClass="neutral"
					img={neutralImg}
				/>
				<Filter setHeroClass={setHeroClass} heroClass="druid" img={druidImg} />
				<Filter
					setHeroClass={setHeroClass}
					heroClass="hunter"
					img={hunterImg}
				/>
				<Filter setHeroClass={setHeroClass} heroClass="mage" img={mageImg} />
				<Filter
					setHeroClass={setHeroClass}
					heroClass="paladin"
					img={paladinImg}
				/>
				<Filter
					setHeroClass={setHeroClass}
					heroClass="priest"
					img={priestImg}
				/>
				<Filter setHeroClass={setHeroClass} heroClass="rogue" img={rogueImg} />
				<Filter
					setHeroClass={setHeroClass}
					heroClass="shaman"
					img={shamanImg}
				/>
				<Filter
					setHeroClass={setHeroClass}
					heroClass="warlock"
					img={warlockImg}
				/>
				<Filter
					setHeroClass={setHeroClass}
					heroClass="warrior"
					img={warriorImg}
				/>
			</div>
		</div>
	)
}

export default FilterWrapper
