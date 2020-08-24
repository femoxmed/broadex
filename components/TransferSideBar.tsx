import React from 'react';
// import Link from 'next/link';

const TransferSideBar = (props: any) => {
	const {} = props;
	return (
		<div className='container-fluid d-flex justify-content-center px-0'>
			<div className='row w-100 mx-auto'>
				<div className='col-7 mx-auto w-100'>
					<div className='box'>
						<div className='box-inner pb-n4 pr-2'>
							<div className='box-item mb-1 active'>
								<h6 className='text-blue px-3'>Amount</h6>
							</div>

							<div className='box-item mb-1 active'>
								<h6 className='text-blue px-3'>You</h6>
							</div>
							<div className='box-item mb-1'>
								<h6 className='text-blue px-3'>Recipient</h6>
							</div>

							<div className='box-item mb-1'>
								<h6 className='text-blue px-3'>Review</h6>
							</div>

							<div className='box-item mb-1'>
								<h6 className='text-blue px-3'>Pay</h6>
							</div>
							{/* <div className='box-item mb-1'>
								<h6 className='text-blue px-3'>Amount</h6>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.box-item.active:after {
					height: 105px;
					width: 9px;
					content: '';
					box-shadow: 18px 18px 20px #00000029;
					position: absolute;
					right: -9px;
					top: 0;
					background: #000080;
				}
				.box-inner {
					height: -webkit-fill-available;
					width: -webkit-fill-available;
					background: transparent;
				}
				.box {
					top: 0;
					left: 0;
					/* width: 164px; */
					content: '';
					width: -webkit-fill-available;
					/* height: 400px; */
					background: #dfdada 0% 0% no-repeat padding-box;
					box-shadow: 9px 9px 10px #00000029;
					opacity: 1;
					/* background-color: green !important; */
					/* z-index: -1; */
					background: #dfdada 0% 0% no-repeat padding-box;
					box-shadow: 9px 9px 10px #00000029;
					opacity: 1;
					position: absolute;
					top: 0;
					left: 0;
				}

				.box-item {
					position: relative;
					font-weight: bold;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100px;
					width: -webkit-fill-available;
					/* width: 100px; */
					/* width: 164px;
					height: 160px; */
					/* padding: 0 50px; */
					background: #ffffff 0% 0% no-repeat padding-box !important;
					opacity: 1;
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

export default TransferSideBar;
