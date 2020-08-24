import React, { useContext } from 'react';
import Link from 'next/link';
import { NavContext } from '../store/navbar';

const AdminSideBar = (props: any) => {
	const [navState, navDispatcher] = useContext(NavContext);
	const { path } = props;
	navState;
	return (
		<div className='container-fluid d-flex justify-content-center px-0'>
			<div
				className='deflection position-fixed'
				onClick={() => {
					navDispatcher({ type: 'FLIP' });
				}}></div>
			<div
				className='row mx-auto height-100vh overflow-auto'
				style={{ width: '-webkit-fill-available !important' }}>
				<div className='col-7  col-lg-2 bg-container mx-auto px-0 mx-0  position-left position-fixed'>
					<div className='box mt-5'>
						<img
							width={40}
							height={40}
							src='/images/broadex-logo/LOGO@2x.png'
							className='ml-5 mb-5 img-p position-absolute'
						/>

						<div className='mx-auto text-center'>
							<img
								width={90}
								height={90}
								src='/icons/user_avatar.png'
								className='mb-1 mt-5'
							/>
							<h4 className='text-center text-white'>User Name</h4>
						</div>
						<div className='box-inner text-white text-left mt-5'>
							<Link href='/user'>
								<a className={path == '/user' ? 'active box-item' : 'box-item'}>
									<img
										width={20}
										height={20}
										src='/icons/activity-icon.png'
										className='mr-2 '
									/>
									<h4 className='pb-0 mb-0'>Activity</h4>
								</a>
							</Link>
							<Link href='/user/balances'>
								<a
									className={
										path == '/user/balances' ? 'active box-item' : 'box-item'
									}>
									<img
										width={20}
										height={20}
										src='/icons/balances-icon.png'
										className='mr-2 '
									/>
									<h4 className='pb-0 mb-0'>Balances</h4>
								</a>
							</Link>

							<Link href='/user/recipients'>
								<a
									className={
										path == '/user/recipients' ? 'active box-item' : 'box-item'
									}>
									<img
										width={20}
										height={20}
										src='/icons/recipients-icon.png'
										className='mr-2 '
									/>
									<h4 className='pb-0 mb-0'>Recipients</h4>
								</a>
							</Link>

							<Link href='/user/debit-card'>
								<a
									className={
										path == '/user/debit-card' ? 'active box-item' : 'box-item'
									}>
									<img
										width={20}
										height={20}
										src='/icons/debit-card-icon.png'
										className='mr-2 '
									/>
									<h4 className='pb-0 mb-0'>Debit Card</h4>
								</a>
							</Link>

							<Link href='/user/user'>
								<a
									className={
										path == '/user/users' ? 'active box-item' : 'box-item'
									}>
									<img
										width={20}
										height={20}
										src='/icons/debit-card-icon.png'
										className='mr-2 '
									/>
									<h4 className='pb-0 mb-0'>User</h4>
								</a>
							</Link>

							<Link href='/user/invite'>
								<a
									className={
										path == '/user/invite' ? 'active box-item' : 'box-item'
									}>
									<img
										width={20}
										height={20}
										src='/icons/invite-icon.png'
										className='mr-2 '
									/>
									<h4 className='pb-0 mb-0'>Invite and earn</h4>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.img-p {
					left: 30px;
					top: 30px;
				}
				a {
					color: #ffffff;
				}
				a:hover {
					opacity: 0.9;
				}

				a:active {
					opacity: 0.9;
					color: blue;
				}

				a:-webkit-any-link {
					/* color: blue;
					cursor: pointer; */
					text-decoration: none;
				}
				.bg-container {
					min-height: 100vh;
					/* width: 250px !important; */
					overflow: auto;
					background: transparent
						linear-gradient(90deg, #000080 0%, #000080 45%, #000080 100%) 0% 0%
						no-repeat padding-box;
					box-shadow: 18px 0px 20px #00000029;
				}
				.box-inner {
					height: -webkit-fill-available;
					width: -webkit-fill-available;
					background: transparent;
				}
				.box {
				}

				.box-item {
					display: flex;
					margin: 30px 0;
					padding-left: 10px;
				}
				.active.box-item {
					background: #f58634 !important;
					padding: 10px 0 10px 10px;
					box-shadow: 3px 3px 20px #00000029;
				}

				.active.box-item:before {
					/* content: ''; */
					height: 30px;
					width: 30px;
					position: absolute;
					background: #f58634 !important;
					top: 237px;
					left: 223px;
				}
				.cursor-pointer {
					cursor: pointer;
				}

				.deflection {
					background: transparent;
					top: 0;
					min-height: 100vh;
					min-width: 100vw;
				}
				.position-left {
					left: 0;
				}

				/* .box:after {
					content: '';
					width: 30px;
					height: 400px;
					background: #dfdada 0% 0% no-repeat padding-box;
					box-shadow: 18px 18px 20px #00000029;
					opacity: 1;
				} */
			`}</style>
		</div>
	);
};

export default AdminSideBar;
