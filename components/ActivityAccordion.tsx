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
			// marginBottom: 20,
			// width: '100%',
			// '&:first-child(1)': {
			// 	borderTopLeftRadius: '30%',
			// 	// left: '-40%',
			// 	// bottom: 'auto',
			// 	// background: 'rgba(255, 255, 255, .1)',
			// },
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
			padding: '30px 0 5px 0 !important',
			display: 'flex',
			justifyContent: 'space-between',
		},
		summary: {
			// padding: '0 0 !important',
			margin: '0 !important',
		},
		details: {
			background: '#EFEFEF !important',
			borderRadius: '0px 0px 20px 20px',
			padding: '0 !important',
			opacity: 1,
			// marginBottom: 50,
			borderBottom: '2px solid #111',
		},
		icon: {
			paddingRight: '60px',
		},
	}),
);

export default function ActivityAccordions() {
	const classes = useStyles();

	return (
		<>
			<div className='mb-5'>
				<NoSsr>
					{[1, 2, 3].map((value) => (
						<Accordion key={value} className={classes.root}>
							<AccordionSummary
								className={classes.summary}
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'>
								<div className='d-flex flex-column w-100'>
									<span className='font-fade head-position mt-1 mb-0'>
										2nd June , 2020
									</span>
									<hr className='hr-line py-2' />
									<div className={classes.subHeading}>
										<span>
											<span className='font-fade'>To</span> Example User{' '}
											<p className='mb-0'>Sent</p>
										</span>
										<span>
											<p className='mb-0'>N22,0000</p>
											<p className='font-fade text-right mb-0'>60USD</p>
										</span>
									</div>
								</div>
							</AccordionSummary>
							<AccordionDetails className={classes.details}>
								<div className='d-flex px-0 flex-column w-100'>
									<div className='d-flex  flex-column parent-list bg-white w-100 px-2'>
										{[1, 2, 3].map((value) => (
											<div
												key={value}
												className='d-flex align-items-center justify-content-start flex-row mb-3 child-list'>
												<div>6th March , 2020</div>
												<div className='ml-5 mr-5 round-ball'></div>
												{/* <div className='ml-5'>You set up your transfer</div> */}
											</div>
										))}
									</div>
									<div className='px-3 py-5 d-flex flex-column flex-lg-row'>
										<div className='input-box mb-3 mr-3 w-100'>
											<span>50</span> <span>USD</span>
										</div>
										<div className='input-box mb-3 mr-3 w-100'>
											<span>20,000</span> <span>NGN</span>
										</div>
										<button className='btn brdx-gold-btn mb-3 mr-lg-5 px-lg-5 w-100'>
											Repeat Transfer
										</button>
									</div>
								</div>
							</AccordionDetails>
						</Accordion>
					))}
				</NoSsr>
			</div>
			<style jsx>{`
				.input-box {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 241px;
					padding: 0 10px;
					width: 241px;
					height: 58px;
					background: #ffffff 0% 0% no-repeat padding-box;
					border-radius: 8px;
					opacity: 1;
				}
				.head-position {
					position: absolute;
					top: 0;
				}
				.font-fade {
					color: var(--dim-grey);
				}

				.hr-line {
					/* border-bottom: 2px solid #efefef; */
					width: -webkit-fill-available;
					position: absolute;
					left: 0;
					margin-top: 15px;
				}
				.parent-list .round-ball {
					border-radius: 50%;
					width: 13px;
					height: 13px;
					background: #000080;
					opacity: 1;
				}

				.parent-list .round-ball {
					border-radius: 50%;
					width: 13px;
					height: 13px;
					background: #000080;
					opacity: 1;
				}

				.parent-list > .child-list > .round-ball::after {
					content: '';
					position: absolute;
					background: #000080;
					width: 2px;
					height: 41px;
					left: 185.3px;
				}

				.parent-list > .child-list:last-child > .round-ball::after {
					content: '';
					position: absolute;
					background: transparent;
					width: 1px;
					height: 41px;
					height: 41px;
					left: 186px;
				}
			`}</style>
		</>
	);
}
