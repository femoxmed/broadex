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
			padding: '0 20px !important',
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

export default function BalancesAccordions() {
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
								<div className='container-fluid'>
									<div className='row text-white flex-column flex-lg-row mb-0 w-100'>
										<div className='col-lg-9'>
											<div className='mx-auto activity-box mb-0 '>
												<h6 className='font-weight-bold lead-large'>0 GDP</h6>
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
									</div>
								</div>
							</AccordionSummary>
							<AccordionDetails className={classes.details}>
								<div className='d-flex px-0 flex-column w-100'>
									<div className='d-flex  flex-column parent-list text-white w-100 px-2'>
										<div className='font-fade'>
											<p className='mb-0'>Your bank details to receive GBP</p>
											<p>
												Use your bank details to receive GBP from friends and
												businesses. How do I use these?
											</p>
											<p className='font-blue-fade my-3'>How do i use this ?</p>
										</div>
									</div>
									<div className='px-3 pb-5 d-flex flex-column col-lg-10 w-100 justify-content-between flex-lg-row text-white'>
										<div>
											<p className='mb-1'>Account Holder</p>
											<p className='font-weight-bolder'> Lorem Musa</p>

											<div>
												<p className='mb-1'>
													IBAN (to receive GBP from UK only)
												</p>
												<p className='font-weight-bolder'>
													GB39 TRWI 2314 7089 5401 99
												</p>
											</div>

											<div>
												<p className='mb-1'>Account Number</p>
												<p className='font-weight-bolder mb-0'>89540199</p>
												<p className='mb-1'>UK sort code</p>
												<p className='font-weight-bolder'>23-14-70</p>
											</div>
										</div>

										<div className='px-2'>
											<p className='mb-1'>Address</p>
											<p className='font-weight-bolder '>
												Broadex 56 Shoreditch High Street London E1 6JJ <br />
												United Kingdom
											</p>
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col d-flex flex-column flex-lg-row justify-content-between px-lg-5'>
											<button className='brdx-transparent-btn btn mr-3 mb-3 w-100'>
												Add GBP
											</button>

											<button className='brdx-transparent-btn btn mr-3 mb-3 w-100'>
												Send GBP
											</button>

											<button className='brdx-transparent-btn btn mr-3 mb-3 w-100'>
												Conver GBP
											</button>

											<button className='brdx-transparent-btn btn mr-3 mb-3 w-100'>
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
			`}</style>
		</>
	);
}
