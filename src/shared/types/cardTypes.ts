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

export interface SearchStateTypes {
	heroClass?: string
	search?: string
	cost?: string
	health?: string
	attack?: string
}

export interface FilterType {
	setHeroClass: (heroClass: string) => void
	heroClass: string
}
