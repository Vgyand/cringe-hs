import App from 'pages/App'
import { AuthContextProvider } from 'providers/AuthProvider'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import Meta from './services/Meta'
import { store } from './store/store'
import ReduxToast from './utils/toastr/ReduxToast'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<AuthContextProvider>
				<Provider store={store}>
					<ReduxToast />
					<Meta title="Cringe HS" desc="Hearthstone cards">
						<App />
					</Meta>
				</Provider>
			</AuthContextProvider>
		</React.StrictMode>
	</BrowserRouter>
)
