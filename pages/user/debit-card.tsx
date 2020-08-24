import React from 'react';
import UserDashboardLayout from '../../components/layouts/UserDashboardLayout';
import { NextPageContext } from 'next';
import initialize from '../../utils/initialize';

const UserActivityPage = () => {
	return (
		<>
			<div className='container-fluid pl-lg-5'>
				<div className='row mb-3 flex-row mb-3 mb-lg-3'>
					<div className='col-lg-10'>
						<h1 className='text-blue font-weight-bold text-title'>
							The Broadex Card
						</h1>
						<p className='mb-0'>
							Spend the currency in your Broadex account anywhere in the world,
							<br />
							Get low conversion fee, and zero transaction fees
						</p>
					</div>
				</div>
				<div className='row mb-3 flex-column mb-3 mb-lg-5 text-white '>
					{[1, 2, 3].map(() => (
						<div className='col-lg-4 mb-3'>
							<div className='box my-auto d-flex flex-column justify-content-center pl-4 p-2'>
								<h3 className='font-weigth-bold'>0 GBP</h3>
								<p className='font-bold mr-3 mb-0'>
									<img
										width={34}
										height={36}
										src='/images/england_flag.png'
										className=''
									/>
									<span>GDP</span>
								</p>
							</div>

							<div className='white-box m-auto'>
								<img
									width={230}
									height={180}
									src='/images/business-card.png'
									className='m-auto'
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				.box {
					background: #000080 0% 0% no-repeat padding-box;
					box-shadow: 0px 6px 20px #00000029;
					border-radius: 30px;
					opacity: 1;
					height: 200px;
					/* margin-bottom: 30px; */
				}

				.text-title {
					/* font-size: 62px; */
				}
				.white-box {
					display: flex;
					justify-content: center;
					align-items: center;
					background: #ffffff 0% 0% no-repeat padding-box;
					box-shadow: 0px 6px 20px #00000029;
					border-radius: 30px;
					opacity: 1;
					height: 200px;
					position: absolute;
					top: 0;
					right: -22px;
					width: 300px;
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
