import React from 'react';
import UserDashboardLayout from '../../components/layouts/UserDashboardLayout';
// import TransferApp from '../../components/TransferApp';
import initialize from '../../utils/initialize';
import { NextPageContext } from 'next';
import RecipientAccordion from '../../components/RecipientAccordion';

const UserActivityPage = () => {
	return (
		<>
			<div className='container-fluid pl-lg-5'>
				<div className='row mb-3 flex-row mb-3 mb-lg-5 w-100 mx-auto'>
					<div className='col col-lg-6 w-100 px-0'>
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
						<h4 className=' mb-0 sub-head font-weight-bold'>
							Your bank accounts
						</h4>
						<hr className='hr-line mt-1 py-0' />
						<RecipientAccordion />
					</div>
				</div>

				<div className='row text-white flex-column flex-lg-row mb-3 mb-lg-5 justify-content-center justify-content-lg-start width-available'>
					<div className='col-12 col-lg-9 d-flex flex-column mb-3 mb-lg-0 w-100'>
						<h4 className=' mb-0 sub-head font-weight-bold'>Your Recipients</h4>
						<hr className='hr-line py-0' />
						<RecipientAccordion />
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
				/* .button.play {
					border-style: solid;
					box-sizing: border-box;
					width: 74px;
					height: 74px;
					border-width: 37px 0px 37px 74px;
					border-color: transparent transparent transparent #202020;
				} */
				.text-black {
					color: #000000;
				}
				.activity-box {
					display: flex;
					flex-direction: row;
					/* justify-content: center; */
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
				.sub-head {
					opacity: 0.5;
					color: #000000;
				}
				.hr-line {
					border-bottom: 2px solid #efefef !important;
					width: -webkit-fill-available;
					/* position: absolute; */
					left: 0;
					margin-top: 15px;
				}

				hr {
					border-top: 4px solid rgba(0, 0, 0, 0.1) !important;
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
