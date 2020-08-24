// import React from "react";
import Link from 'next/link';
import SignUp from '../../components/SignUpForm';
import CloseIcon from '../../components/Vectors/CloseIcon';

interface Props {}

const SignUpPage = ({}: Props) => {
	return (
		<>
			<div className='container-fluid height-100vh'>
				<div className='row position-absolute w-100 pt-3 pb-5 z-index-1'>
					<div className='col-12 px-0 mx-0 d-none d-lg-block'>
						<div className='px-lg-5 mx-5 d-flex justify-content-between'>
							<Link href='/'>
								<a>
									<CloseIcon></CloseIcon>
								</a>
							</Link>

							<span className='my-auto'>
								Already a member ?{' '}
								<Link href='/sign-in'>
									<a className='auth-link my-auto'>Sign in</a>
								</Link>
							</span>
						</div>
					</div>

					<div className='col-12 px-0 mx-0 d-block d-lg-none'>
						<div className='px-lg-5 mx-3 d-flex justify-content-between'>
							<img
								width={34}
								height={36}
								src='/images/broadex-logo/LOGO@2x.png'
								className=''
							/>
							<p className='my-auto'>
								Already a member ?{' '}
								<Link href='/sign-in'>
									<a className='auth-link my-auto'>Sign in</a>
								</Link>
							</p>
							<Link href='/'>
								<a className='my-auto'>
									<CloseIcon></CloseIcon>
								</a>
							</Link>
						</div>
					</div>
				</div>

				<div className='row height-100vh'>
					<div className='col-12 col-lg-6 px-0 mx-0 d-none d-lg-block position-static'>
						<div className='bg-img p-0 m-0 position-fixed' />
						<div className='d-flex h-100 align-items-center position-relative ml-5 pl-3'>
							<p className='lead font-weight-bold text-white'>
								The safest and <br /> fastest way to <br />
								send <span className='text-gold font-weight-bold'>MONEY</span>
							</p>
						</div>
					</div>
					<div className='col-12 col-lg-6 m-auto d-flex justify-content-center flex-column px-lg-5 py-3'>
						<img
							width={34}
							height={36}
							src='/images/broadex-logo/LOGO@2x.png'
							className='mx-auto text-center my-auto mt-2 mb-lg-5 d-none d-lg-block'
						/>
						<div className='px-lg-5 mt-lg-2'>
							<SignUp />
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.bg-img {
					background-image: url('/images/register.jpeg');
					background-size: cover;
					background-repeat: no-repeat;
					height: 100vh;
					width: 50vw !important;
				}
				.text-gold {
					color: #f58634;
				}
			`}</style>
		</>
	);
};

export default SignUpPage;
