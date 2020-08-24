import React, { useContext } from 'react';
import initialize from '../utils/initialize';
import { NextPageContext } from 'next';
import TransferAppbar from '../components/TransferAppbar';
import TransferSideBar from '../components/TransferSideBar';

import dynamic from 'next/dynamic';
import { TransferContext } from '../store/transfer';

const TransferApp = dynamic(() => import('../components/TransferApp'), {
	ssr: false,
});
const TransferPage = () => {
	// const [transferState] = useContext(TransferContext);
	// const { steps } = transferState;
	// console.log(steps);
	return (
		<>
			<TransferAppbar />
			<div className='container-fluid my-5'>
				<div className='row text-white flex-column flex-lg-row mb-3 mb-lg-5 justify-content-center justify-content-lg-start width-available'>
					<div className='col-8 col-lg-2 d-none d-lg-flex flex-column mb-3 mb-lg-0 '>
						<TransferSideBar />
					</div>
					<div className='col-11 col-md8 col-lg-10 mx-auto d-flex mb-3 mb-lg-0 justify-content-around flex-row text-black'>
						{<TransferApp />}
						{/* {JSON.stringify(steps)} */}
						<img
							width={150}
							height={150}
							src='/icons/user_avatar.png'
							className='d-none d-lg-block'
						/>
					</div>
				</div>
			</div>
			<style jsx>{``}</style>
		</>
	);
};

export const getServerSideProps: any = async (ctx: NextPageContext) => {
	try {
		await initialize(ctx);

		return {
			props: {},
		};
	} catch (error) {}
};

export default TransferPage;
