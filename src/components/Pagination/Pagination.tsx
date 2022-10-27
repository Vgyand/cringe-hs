const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
	const pageNumbers: any = []
	for (let i: any = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div>
			{pageNumbers.map((number: any) => (
				<li key={number} className="text-center">
					<a onClick={(event) => paginate(number, event)} href="/">
						{number}
					</a>
				</li>
			))}
		</div>
	)
}

export default Pagination
