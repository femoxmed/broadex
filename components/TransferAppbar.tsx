import React from 'react';
import Link from 'next/link';
import CloseIcon from './Vectors/CloseIcon';

const TransferAppbar = (props: any) => {
	const {} = props;
	return (
		<div className='container-fluid  px-0 border-2px'>
			<div className='row w-100 mx-auto py-2 px-5'>
				<div className='col-10 mx-auto w-100 d-flex justify-content-between flex-row'>
					<img
						width={34}
						height={36}
						src='/images/broadex-logo/LOGO@2x.png'
						className=''
					/>

					<Link href='/'>
						<a>
							<CloseIcon></CloseIcon>
						</a>
					</Link>
				</div>
			</div>
			<style jsx>{`
				.border-2px {
					border-bottom: 2px solid #000080;
				}
			`}</style>
		</div>
	);
};

export default TransferAppbar;
