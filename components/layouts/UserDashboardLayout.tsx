import React, { useContext, useEffect } from 'react';
import AdminSideBar from '../AdminSideBar';
import AppBar from '../AppBar';
import { AnimatePresence, motion } from 'framer-motion';
import { NavContext } from '../../store/navbar';
import { AuthContext } from '../../store/auth/reducer';
// import { NextPageContext } from 'next';
// import { pageWrapperVariants } from '../../motion.tsx/userDashboard';

const UserDashboardLayout = (props: any) => {
	const [navState, navDispatcher] = useContext(NavContext);
	const [authState, authDispatcher] = useContext(AuthContext);
	authState;
	useEffect(() => {
		authDispatcher({ type: 'AUTH', payload: { hello: 'femi' } });
		setInterval(() => {
			// console.log(authState);
		}, 1000);
	}, []);

	navDispatcher;
	const spring = {
		type: 'spring',
		damping: 20,
		stiffness: 100,
		// when: 'afterChildren',
	};
	return (
		<>
			<div className='container-fluid px-0 overflow-hidden bg-child px-0 height-vh-100'>
				<div
					className='row bg-white mx-0  z-index-10 bg-child'
					style={{ top: '0', width: '-webkit-fill-available' }}>
					<div className='col px-0 w-100  position-fixed z-index-5'>
						<AppBar />
					</div>
				</div>
				<div className='row'>
					{navState && (
						<motion.div
							initial={{ x: '10000', opacity: 1, height: '100vh' }}
							animate={{
								x: 0,
								opacity: 1,
								zIndex: 5,

								transition: { duration: '1.5' },
								position: 'absolute',
							}}
							exit={{
								x: '100vh',
								opacity: 0,
								transition: { ease: 'easeInOut', duration: '1' },
							}}
							className='col col-lg-2 justify-content-center d-flex d-lg-none px-0 height-vh-100 w-100 position-absolute'>
							<AdminSideBar path={props.path} />
						</motion.div>
					)}

					<div className='col col-lg-2 justify-content-center d-none d-lg-flex px-0 height-vh-100'>
						<AdminSideBar path={props.path} />
					</div>
					<AnimatePresence>
						<motion.div
							transition={spring}
							key={props.path}
							initial={{ x: '100vh', opacity: 0 }}
							animate={{ x: 0, opacity: 1, transition: { duration: '1.5' } }}
							exit={{
								y: '100vh',
								opacity: 0,
								transition: { ease: 'easeInOut', duration: '1' },
							}}
							id='page-transition-container'
							className='col col-lg-10 pt-5 mt-5 h-100 w-100'>
							{/* <div className='col col-lg-10 pt-5 mt-5 h-100 w-100'> */}
							{props.children}
							{/* </div> */}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			<style jsx>{`
			
			.bg-container {
					min-height: 100vh;
					/* width: 250px !important; */
					overflow: auto;
					background: transparent
						linear-gradient(90deg, #000080 0%, #000080 45%, #000080 100%) 0% 0%
						no-repeat padding-box;
					box-shadow: 18px 0px 20px #00000029;
				}
				.z-index-10 {
						z-index: 10 !important;
				}
			.z-index-5 {
				z-index: 5 !important;
			}
			.bg-child {
				background: #EFEFEF;
			
			}
			.height-vh-100 {
			min-height: 100vh !important;
}
			}
			`}</style>
			<style jsx global>{`
				html,
				body {
					overflow-x: unset !important;
				}
				.height-vh-100 {
				min-height: 100vh !important;
}
			}
			`}</style>
		</>
	);
};

export default UserDashboardLayout;
