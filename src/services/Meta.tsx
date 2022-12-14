import Helmet from 'react-helmet'

import { IHelmet } from '@/shared/types/helmet'

const Meta = ({ title, desc, children }: IHelmet) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<meta name="desctiption" content={desc} />
				<link rel="canonical" href="http://cringehs.com/example" />
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
				></script>
			</Helmet>
			{children}
		</>
	)
}

export default Meta
