export interface ICard {
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
export interface IPaginationType {
	postsPerPage: number
	totalPosts: number
	paginate: (
		number: number,
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => void
	currentPage: number
}
