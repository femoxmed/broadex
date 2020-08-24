import React from 'react';
import Harmburger from './Harmburger';
import LogOutIcon from '../components/LogOutIcon';

const AppBar = () => {
	return (
		<>
			<div className='border-3px-solid px-2 px-lg-5 py-4 z-index-50'>
				<div className='d-flex justify-content-between align-items-center h-100'>
					<div className='d-flex'>
						<span className='d-block d-lg-none z-index-50'>
							<Harmburger />
						</span>
						<img
							width={40}
							height={40}
							src='/images/broadex-logo/LOGO@2x.png'
							className='ml-3 d-none d-lg-block'
						/>
					</div>

					{/* <div> */}
					<div className='d-flex justify-content-between py-4'>
						<div className='input-group w-unset d-none d-lg-block'>
							<div className='input-group-prepend position-absolute'>
								<span className='input-group-text mt-1' id='basic-addon1'>
									<img
										width={20}
										height={20}
										src='/icons/search.png'
										className=''
									/>
								</span>
							</div>
							<input
								className='input-box search-box'
								placeholder='search...'></input>
						</div>

						<div className='d-flex flex-row'>
							<img
								width={20}
								height={20}
								src='/icons/help.png'
								className='ml-3 mr-2 my-auto'
							/>

							<img
								width={20}
								height={20}
								src='/icons/notification.png'
								className='my-auto'
							/>
							<LogOutIcon />
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
			<style jsx>{`
				.z-index-50 {
					z-index: 5000000000 !important;
				}
				.input-box {
					width: -webkit-fill-available;
					height: -webkit-fill-available;
					overflow: auto;
					border-radius: 23px;
					box-shadow: none;
					outline: none;
					padding: 0px 40px;
					border-color: transparent;
				}

				/* .input-box:before {
					background-image: url('')
				} */
				.search-box {
					width: 300px;
					height: 40px;
					background: #ffffff;
					border: 1px solid #707070;
					border-radius: 23px;
					opacity: 1;
				}
				.border-3px-solid {
					height: 60px;
					width: -webkit-fill-available;
					/* border-bottom: 2px solid #000080; */
					background: #ffffff;
				}
				.input-group-text {
					background: transparent;
					border: none;
				}
				.input-group.w-unset {
					width: unset !important;
				}
			`}</style>
		</>
	);
};

export default AppBar;
