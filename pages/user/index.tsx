import React from 'react';
import UserDashboardLayout from '../../components/layouts/UserDashboardLayout';
// import TransferApp from '../../components/TransferApp';
import initialize from '../../utils/initialize';
import { NextPageContext } from 'next';
import ActivityAccordian from '../../components/ActivityAccordion';

const UserIndexPage = () => {
	return (
		<>
			<div className='container-fluid pl-lg-5'>
				<div className='row mb-3 flex-row mb-3 mb-lg-5'>
					<div className='col-lg-6'>
						<div className='d-inline-flex flex-column flex-lg-row w-100 justify-content-center justify-content-lg-start'>
							{/* <div className='d-inline-flex w-100 justify-content-center justify-content-lg-start w-100'> */}
							<button className='btn brdx-gold-btn mr-2 mr-lg-5 w-100 mb-2'>
								Send Money
							</button>
							<button className='btn brdx-blue-btn mr-lg-5 w-100'>
								Add Money
							</button>
							{/* <button className='btn brdx-blue-btn'>Batch Money</button> */}
						</div>
					</div>
				</div>
				<div></div>
				<div className='row text-white flex-column flex-lg-row mb-3 mb-lg-5'>
					<div className='col-lg-3 d-flex  mb-3 mb-lg-0'>
						<div className='mx-auto activity-box'>
							<h6 className='font-weight-bold'>0 GDP</h6>
							<p className='font-bold mb-0'>
								<img
									width={34}
									height={36}
									src='/images/england_flag.png'
									className=''
								/>{' '}
								GDP
							</p>
						</div>
					</div>
					<div className='col-lg-3  mb-3 mb-lg-0'>
						<div className='mx-auto activity-box'>
							<h6 className='font-weight-bold'>0 GDP</h6>
							<p className='font-bold mb-0'>
								<img
									width={34}
									height={36}
									src='/images/usa_flag.png'
									className=''
								/>{' '}
								GDP
							</p>
						</div>
					</div>
					<div className='col-lg-3 mb-3 mb-lg-0'>
						<div className='mx-auto activity-box'>
							<h6 className='font-weight-bold'>0 GDP</h6>
							<p className='font-bold mb-0'>GDP</p>
						</div>
					</div>
				</div>
				<div className='col-lg-9 px-0'>
					<ActivityAccordian />
				</div>
			</div>
			<style jsx>{`
				.activity-box {
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 0 30px;
					height: 100px;
					width: -webkit-fill-available;
					background: #000080 !important;
					box-shadow: 0px 6px 20px #00000029;
					border-radius: 30px;
					opacity: 1;
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

UserIndexPage.layout = UserDashboardLayout;
export default UserIndexPage;
