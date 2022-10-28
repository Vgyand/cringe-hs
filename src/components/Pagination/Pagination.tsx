import styles from './Paginations.module.scss'

const Pagination = ({
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
}: any) => {
	const pageNumbers: any = []
	for (let i: any = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<ul className={styles.pagination}>
			{pageNumbers.map((number: any) => (
				<li
					key={number}
					className={
						(currentPage === number ? `${styles.active} ` : '') +
						styles.constrols
					}
					id={number}
				>
					<a onClick={(event) => paginate(number, event)} href="/">
						{number}
					</a>
				</li>
			))}
		</ul>
	)
}

export default Pagination
