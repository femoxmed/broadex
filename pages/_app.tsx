// import { AppProps } from 'next/app';
// import 'react-custom-flag-select/lib/react-custom-flag-select.min.css';
import '../styles/style.scss';
import Head from 'next/head';
// import { AnimatePresence } from 'framer-motion';
import Default from '../components/layouts/Default';

import React from 'react';
import { AuthProvider } from '../store/auth/reducer';
import { NavProvider } from '../store/navbar';
import { TransferProvider } from '../store/transfer';
// //OR import sass module
// import 'react-flags-select/scss/react-flags-select.scss';

const MyApp = ({ Component, pageProps, router }: any) => {
	const Layout = Component.layout ? Component.layout : Default;
	return (
		<>
			<Head>
				<link rel='icon' href='/fav-icon.png' />
			</Head>

			<AuthProvider>
				<NavProvider>
					<TransferProvider>
						<Layout path={router.route}>
							{/* <AnimatePresence exitBeforeEnter> */}
							<Component {...pageProps} key={router.route} />
							{/* </AnimatePresence> */}
						</Layout>
					</TransferProvider>
				</NavProvider>
			</AuthProvider>
		</>
	);
};

export default MyApp;
