import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NoSsr } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: () => ({
			width: '100%',
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
			// padding: '0 20px !important',
		},
		details: {
			background: '#000080 !important',
			borderRadius: '0px 0px 30px 30px',
			padding: '0 !important',
			opacity: 1,
		},
		icon: {
			// paddingRight: '60px',
			color: '#ffffff !important',
		},
	}),
);

export default function RecipientAccordions() {
	const classes = useStyles();

	return (
		<>
			<div>
				<NoSsr>
					{[1, 2].map((value) => (
						<Accordion key={value} className={classes.summary}>
							<AccordionSummary
								className={classes.summary}
								expandIcon={
									<ExpandMoreIcon
										color='inherit'
										fontSize='large'
										className={classes.icon}
									/>
								}
								aria-controls='panel1a-content'
								id='panel1a-header'>
								<div className='container-fluid px-0 py-2'>
									<div className='row text-white flex-row mb-0 w-100 mx-0 px-0'>
										<div className='col-lg-12 d-flex align-items-center flex-row mx-0 px-0'>
											<div className='activity-box mb-0 d-flex flex-row '>
												<img
													width={60}
													height={60}
													src='/icons/user_avatar.png'
													className=''
												/>
												<p className='font-bold mr-3 mb-0 my-auto'>
													<img
														width={34}
														height={36}
														src='/images/england_flag.png'
														className=''
													/>
													<span>GDP</span>
												</p>
											</div>
											<div className='mx-auto activity-box mb-0 d-flex flex-column my-auto'>
												<h6 className='font-weight-bold my-auto lead mb-3'>
													<span className='d-none d-lg-block'>
														Account holder
													</span>{' '}
													User name
												</h6>
												<p className='mb-0 font-italic'>
													Account ending in 8945{'  '}
													<span className='font-blue-fade'>
														Mark as primary account to receive USD
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</AccordionSummary>
							<AccordionDetails className={classes.details}>
								<div className='container fluid overflow-auto d-flex px-0 flex-column w-100'>
									<hr className='hr-line' />
									<div className='px-lg-5 mx-auto pb-5 d-flex flex-column col-lg-10 w-100 justify-content-between flex-lg-row text-white'>
										<div className='pl-lg-5'>
											{'  '}
											<div>
												<p className='mb-1'>Account Holder</p>
												<p className='font-weight-bolder'> Lorem Musa</p>

												<p className='mb-1'>Account Holder</p>
												<p className='font-weight-bolder'> Lorem Musa</p>
											</div>
										</div>

										<div className='pr-lg-5'>
											<div>
												<p className='mb-1'>Account Holder</p>
												<p className='font-weight-bolder'> Lorem Musa</p>
											</div>
										</div>
									</div>
									<hr className='hr-line' />
									<div className='row mt-3 mb-5 px-3 w-100 mx-auto'>
										<div className='col d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between px-lg-5'>
											<button className='btn brdx-gold-btn mb-2 mx-1'>
												Open a Balance
											</button>

											<button className='brdx-transparent-btn btn mb-2 mx-1'>
												Mark as somebody's else account
											</button>

											<button className='brdx-transparent-btn btn mb-2 mx-1'>
												More
											</button>
										</div>
									</div>
								</div>
							</AccordionDetails>
						</Accordion>
					))}
				</NoSsr>
			</div>
			<style jsx>{`
				.font-fade {
					color: #ffffff;
				}
				.font-blue-fade {
					color: #00ffff;
				}
				.lead-large {
					font-size: 33px;
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
}
