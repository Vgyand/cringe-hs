import { Dispatch, SetStateAction } from 'react'

export interface Card {
	artist: string
	cardId: string
	cardSet: string
	collectible: boolean
	dbfId: number
	health: number
	img: string
	locale: string
	name: string
	playerClass: string
	rarity: string
	type: string
	flavor: string
}
export interface PaginationType {
	postsPerPage: number
	totalPosts: number
	paginate: (
		number: number,
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => void
	currentPage: number
}

export interface SearchParamsTypes {
	heroClass?: string
	search?: string
	filteredSearch?: string
	cost?: string | undefined
	health?: string
	attack?: string
}

export interface FilterType {
	setHeroClass: Dispatch<SetStateAction<string>>
	heroClass: string
	img: string
}

export interface DropdownTypes {
	options: { value: string; label: string }[]
	selectedOption: string
	setSelectedOption: Dispatch<SetStateAction<string>>
}

export interface ModalType {
	artist: string
	cardSet: string
	flavor: string
	name: string
	id: string
	img: string
}
export interface FavoriteCard {
	img: string
	id: string
	name: string
}

export interface Autocomplete {
	name: string
}
