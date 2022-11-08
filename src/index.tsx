import App from 'pages/App'
import { AuthContextProvider } from 'providers/AuthProvider'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import './index.scss'
import Meta from './services/Meta'
import { persistor, store } from './store/store'
import ReduxToast from './utils/toastr/ReduxToast'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<ErrorBoundary>
		<BrowserRouter>
			<React.StrictMode>
				<AuthContextProvider>
					<PersistGate loading={<p>loading...</p>} persistor={persistor}>
						<Provider store={store}>
							<ReduxToast />
							<Meta title="Cringe HS" desc="Hearthstone cards">
								<App />
							</Meta>
						</Provider>
					</PersistGate>
				</AuthContextProvider>
			</React.StrictMode>
		</BrowserRouter>
	</ErrorBoundary>
)
