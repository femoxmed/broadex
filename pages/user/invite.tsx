import React from 'react';
import UserDashboardLayout from '../../components/layouts/UserDashboardLayout';
import { NextPageContext } from 'next';
import initialize from '../../utils/initialize';
import Link from 'next/link';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NoSsr } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: () => ({
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			background: 'green',
		}),

		heading: {
			fontSize: theme.typography.pxToRem(15),
			flexBasis: '33.33%',
			flexShrink: 0,
		},
		secondaryHeading: {
			fontSize: theme.typography.pxToRem(15),
			color: theme.palette.text.secondary,
		},
		subHeading: {
			// position: 'absolute',
			// top: 50,
			padding: '0px 0 5px 0 !important',
			display: 'flex',
			justifyContent: 'space-between',
		},
		summary: {
			// padding: '20px 0 !important',
			// margin: '20px 0 !important',
			borderRadius: '30px 30px 30px 30px',
			background: '#000080 !important',
			// fontSize: 10,
			// padding: '0 10px !important',
		},
		details: {
			background: '#000080 !important',
			borderRadius: '0px 0px 30px 30px',
			padding: '0 !important',
			opacity: 1,
		},
		icon: {
			// paddingRight: '60px',
			color: '#F58634 !important',
		},
		shareText: {
			color: 'white !important',
			// 'z-index': '30',
			background: 'var(--blue) !important',
			// 'left': '22px',
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}),
);

const UserActivityPage = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (
		_event: React.ChangeEvent<{}>,
		isExpanded: boolean,
	) => {
		setExpanded(isExpanded ? panel : false);
	};

	const [age, setAge] = React.useState('');

	const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		event;
		setAge;
		// setAge(event.target.value as string);
	};

	return (
		<>
			<div className='container'>
				<div className='row mb-3 flex-row mb-3 mb-lg-3'>
					<div className='col-lg-12 text-center w-100'>
						<h1 className='text-blue font-weight-bold text-center w-100'>
							Invite 3 friends and earn 50 GBP
						</h1>
					</div>
				</div>

				<div className='row mb-3 flex-row mb-3 mb-lg-3 justify-content-center mx-auto'>
					<div className='col-lg-3 pb-2'>
						<div className='card my-auto p-0 d-flex flex-column align-items-center justify-content-center'>
							<div className='d-flex flex-row align-items-center justify-content-center'>
								<img
									width={70}
									height={100}
									src='/icons/person-1.svg'
									className='my-auto px-2'
								/>{' '}
								<div className='recommend-logo-box'>
									<img
										width={25}
										height={25}
										src='/images/broadex-logo/LOGO@2x.png'
										className=''
									/>
								</div>{' '}
								<img
									width={70}
									height={60}
									src='/icons/person-slim.svg'
									className='my-auto px-2'
								/>{' '}
							</div>
							<p className='pb-0 text-center text-blue font-weight-bold'>
								<span>When you recommend </span> <br /> Broadex with friends{' '}
							</p>
						</div>
					</div>

					<div className='col-lg-3 pb-2'>
						<div className='card my-auto p-0 d-flex flex-column align-items-center justify-content-center'>
							<div className='d-flex flex-row align-items-center justify-content-center'>
								<div className='free-international-box'>
									<img
										width={35}
										height={35}
										src='/images/broadex-logo/LOGO@2x.png'
										className=''
									/>
								</div>{' '}
								<img
									width={70}
									height={60}
									src='/icons/person-slim.svg'
									className='my-auto px-2'
								/>{' '}
							</div>
							<p className='pb-0 mt-3 text-center text-blue font-weight-bold'>
								<span>...They get a free international </span> <br /> transfer
								of up to $500...{' '}
							</p>
						</div>
					</div>

					<div className='col-lg-3 pb-2'>
						<div className='card my-auto p-0 d-flex flex-column align-items-center justify-content-center'>
							<div className='d-flex flex-row align-items-center justify-content-center'>
								<div className='over-200-box'>
									<img
										width={35}
										height={35}
										src='/images/broadex-logo/LOGO@2x.png'
										className=''
									/>
								</div>
								<img
									width={50}
									height={50}
									src='/icons/boy-child.svg'
									className='my-auto px-0 mx-0 position-absolute trxImg-1'
								/>
								<img
									width={70}
									height={50}
									src='/icons/girl-child.svg'
									className='my-auto px-0 mx-0 position-absolute trxImg-2'
								/>
								<img
									width={90}
									height={60}
									src='/icons/person-slim.svg'
									className='my-auto px-0 mx-0 position-absolute trxImg-3'
								/>
							</div>
							<p className='pb-0 mt-3 text-center text-blue font-weight-bold'>
								...and if they all transfer over £200...
							</p>
						</div>
					</div>

					<div className='col-lg-3 pb-2'>
						<div className='card my-auto p-0 d-flex flex-column align-items-center justify-content-center'>
							<div className='d-flex flex-row align-items-center justify-content-center'>
								<div className='everybody-box'>
									<img
										width={40}
										height={40}
										src='/images/broadex-logo/LOGO@2x.png'
										className=''
									/>
								</div>{' '}
								<img
									width={90}
									height={100}
									src='/icons/person-1.svg'
									className='my-auto px-2'
								/>{' '}
							</div>
							<p className='pb-0 text-center text-blue font-weight-bold'>
								<span>...you get £50. Everybody wins! </span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='row mb-3 flex-row mb-3 mb-lg-3 my-5'>
				<div className='col-lg-6 text-center mx-auto px-3 px-lg-0'>
					{/* <button className='btn brdx-blue-solid-btn  py-2 px-lg-5'>
						<h3 className='text-center px-2 px-lg-5'>Track your invite</h3>
					</button> */}
					<NoSsr>
						<Accordion
							className={classes.summary}
							expanded={expanded === 'panel1'}
							onChange={handleChange('panel1')}>
							<AccordionSummary
								aria-controls='panel1bh-content'
								id='panel1bh-header'
								className={classes.summary}
								// expandIcon={
								// 	<ExpandMoreIcon
								// 		color='inherit'
								// 		fontSize='large'
								// 		className={classes.icon}
								// 	/>
								// }
								// aria-controls='panel1a-content'
								// id='panel1a-header'
							>
								<div className='container-fluid px-0 py-0'>
									<div className='row text-white flex-row mb-0 w-100 mx-auto px-0'>
										<div className='col-lg-10 d-flex align-items-center flex-row mx-auto px-0'>
											<h4 className='text-center pb-0 text-center m-auto'>
												{expanded === 'panel1' ? (
													<ExpandLessIcon
														fontSize='large'
														htmlColor='#f58634'
													/>
												) : (
													<ExpandMoreIcon
														fontSize='large'
														htmlColor='#f58634'
													/>
												)}
												Track your invite
											</h4>
										</div>
									</div>
								</div>
							</AccordionSummary>
							<AccordionDetails className={classes.details}>
								<div className='container fluid overflow-auto d-flex px-0 flex-column w-100'>
									<hr className='hr-line py-0 mb-0' />

									<div className='pr-lg-5 px-2 px-lg-4'>
										<p className='font-weight-bolder text-white mb-0 text-left'>
											Invited
										</p>
									</div>
									<hr className='hr-line mt-0' />

									<div className='d-flex justify-content-between px-2 px-lg-4'>
										<div className='d-inline-flex'>
											<img
												width={50}
												height={50}
												src='/icons/user_avatar.png'
												className='mr-3'
											/>
											<p className='text-white text-left'>
												Example User <br />
												<span className='small'>
													Christopher hasn't made a qualifying transfer yet{' '}
													<img
														width={20}
														height={20}
														src='/icons/help.png'
														className='ml-1 mr-2'
													/>
												</span>
											</p>
										</div>

										<button className='brdx-transparent-btn btn mb-2 py-0 px-lg-2 pt-0 pb-0'>
											I don't see my referral
										</button>
									</div>
								</div>
							</AccordionDetails>
						</Accordion>
					</NoSsr>
				</div>
			</div>

			<div className='row mb-3 flex-row mb-3 mb-lg-3 my-5'>
				<div className='col-lg-6 pl-4 pl-lg-0 text-center mx-auto'>
					<p className='pb-0  small text-left'>
						Copy and share your personal invite link...
					</p>
					<div className='input-group mb-2 px-2 flex-nowrap mx-auto w-1-- pl-3'>
						<div className='banner-slant--d w-100'>
							<input
								value='https://www.broadex.com/invite/username'
								// type=''
								className='form-control banner-slant-input--d mx-auto text-center my-auto h-100'
								id='recipient'
							/>
						</div>

						<div className='input-group-append'>
							<NoSsr>
								<FormControl variant='filled' className='sad'>
									<InputLabel
										id='demo-simple-select-filled-label'
										className={classes.shareText}>
										<h6 className='text-white pl-4'>Share</h6>
									</InputLabel>
									<Select
										labelId='demo-simple-select-filled-label'
										id='demo-simple-select-filled'
										value={age}
										onChange={handleSelectChange}
										className={classes.shareText}>
										{/* <MenuItem value=''>
											<em>None</em>
										</MenuItem> */}
										<MenuItem value={10}>Whatsapp</MenuItem>
										<MenuItem value={20}>Facebook</MenuItem>
										<MenuItem value={30}>Instagram</MenuItem>
									</Select>
								</FormControl>
							</NoSsr>
						</div>
					</div>
				</div>
			</div>

			<div className='row mb-3 flex-row mb-3 mb-lg-3 my-5'>
				<div className='col-lg-10 mx-auto text-center'>
					<button className='btn brdx-gold-btn py-lg-2 px-lg-5'>
						<span className='px-lg-5 mx-lg-5 text-center'>Invite by email</span>
					</button>
					<div className='d-flex justify-content-center mt-5 px-2'>
						<Link href='/faq'>
							<h6 className='text-blue font-weight-bold cursor-pointer  mx-lg-5'>
								FAQs
							</h6>
						</Link>

						<Link href='/faq'>
							<h6 className='text-blue font-weight-bold cursor-pointer  mx-lg-5'>
								Terms and Conditions
							</h6>
						</Link>

						<Link href='/faq'>
							<h6 className='text-blue font-weight-bold cursor-pointer  mx-lg-5'>
								Forgot to use invite link
							</h6>
						</Link>
					</div>
				</div>
			</div>

			<style jsx>{`
				a {
					color: var(--blue);
				}
				a:hover {
					opacity: 0.5 !important;
				}

				a:active {
					opacity: 0.5 !important;
					color: blue;
				}

				a:-webkit-any-link {
					/* color: blue;
					cursor: pointer; */
					text-decoration: none;
				}
				.card {
					background: #ffffff 0% 0% no-repeat padding-box;
					box-shadow: 0px 6px 20px #00000029;
					border-radius: 30px;
					opacity: 1;
					height: 170px;
				}
				.recommend-logo-box {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 35px;
					width: 50px;
					background: #000080;
					border-radius: 10px;
				}

				.MuiFormControl-root {
					border: 0;
					margin: 0;
					display: inline-flex;
					padding: 0;
					position: relative;
					min-width: 0;
					flex-direction: column;
					vertical-align: top;
					background: green !important;
				}
				.banner-slant--d {
					background: #ffffff 0% 0% no-repeat padding-box;
					border: 1px solid #000080;
					z-index: 2;
				}

				.trxImg-1 {
					right: 65px;
					z-index: 3;
					top: 25px;
				}
				.trxImg-2 {
					right: 31px;
					z-index: 2;
					top: 24px;
				}
				.trxImg-3 {
					right: 0;
				}

				.free-international-box {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 50px;
					width: 80px;
					background: #000080;
					border-radius: 10px;
				}

				.over-200-box {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 40px;
					width: 60px;
					background: #000080;
					border-radius: 10px;
					margin-right: 100px;
					margin-bottom: 22px;
				}

				.everybody-box {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 50px;
					width: 80px;
					background: #000080;
					border-radius: 10px;
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
