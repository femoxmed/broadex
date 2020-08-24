import React from 'react';
import UserDashboardLayout from '../../components/layouts/UserDashboardLayout';
// import TransferApp from '../../components/TransferApp';
import initialize from '../../utils/initialize';
import { NextPageContext } from 'next';
import BalancesAccordion from '../../components/BalancesAccordion';

const UserActivityPage = () => {
	return (
		<>
			<div className='container-fluid pl-lg-5'>
				<div className='row mb-3 flex-row mb-3 mb-lg-5'>
					<div className='col-lg-6'>
						<div className='d-inline-flex w-100 justify-content-center justify-content-lg-start'>
							<button className='btn brdx-gold-btn mr-2 mr-lg-5 w-100'>
								Open a Balance
							</button>
							<button className='btn brdx-blue-btn mr-lg-5 w-100'>
								Manage Direct Debit
							</button>
							{/* <button className='btn brdx-blue-btn'>Batch Money</button> */}
						</div>
					</div>
				</div>

				<div className='row text-white flex-column flex-lg-row mb-3 mb-lg-5 justify-content-center justify-content-lg-start width-available'>
					<div className='col-12 col-lg-9 d-flex flex-column mb-3 mb-lg-0 w-100'>
						<h4 className='text-blue mb-2'>Balances with local bank details</h4>
						<hr className='hr-line py-2 text-blue' />
						<BalancesAccordion />
					</div>
				</div>

				<div className='row text-white flex-column flex-lg-row mb-3 mb-lg-5 justify-content-center justify-content-lg-start width-available'>
					<div className='col-12 col-lg-9 d-flex flex-column mb-3 mb-lg-0 w-100'>
						<h4 className='text-blue mb-2'>Balances with local bank details</h4>
						<hr className='hr-line py-2 text-blue' />
						<BalancesAccordion />
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-9 d-flex flex-column my-3 mb-lg-0'>
						<div className='activity-box mb-3 bg-white py-5 '>
							{/* <h6 className='font-weight-bold'>0 GDP</h6> */}
							<div className='playbox mr-3'>
								<div className='btnplay play'></div>
							</div>
							<p className='font-bold mb-0 text-black '>
								The Broadex account in 90 seconds <br /> How does it work? Watch
								the video <br />
								<br />
								For more details about pricing click here
							</p>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.playbox {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					width: 70px;
					height: 70px;
					background: #f0f0f0 0% 0% no-repeat padding-box;
					opacity: 1;
				}
				.text-black {
					color: #000000;
				}
				.activity-box {
					display: flex;
					flex-direction: row;
					padding: 0 30px;
					height: 100px;
					width: -webkit-fill-available;
					background: #000080 !important;
					box-shadow: 0px 6px 20px #00000029;
					border-radius: 30px;
					opacity: 1;
				}

				.activity-box.bg-white {
					background: #fff !important;
					height: max-content;
				}
				.hr-line {
					width: -webkit-fill-available;
					left: 0;
					margin-top: 15px;
				}
			`}</style>
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

UserActivityPage.layout = UserDashboardLayout;
export default UserActivityPage;
