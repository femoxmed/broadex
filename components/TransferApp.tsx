import React, { useState } from 'react';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { NoSsr } from '@material-ui/core';
// import ReactCustomFlagSelect from 'react-custom-flag-select';
import countryListAllIsoData from '../utils/flag-option-list';
import Link from 'next/link';
import { Formik } from 'formik';
import Dropdown from 'react-bootstrap/Dropdown';
// import FlagIcon from './FlagIcon.js';
interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		'id': `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const find = (arr: any, obj: any) => {
	const res: any[] = [];
	arr.forEach((o: any) => {
		let match = false;
		Object.keys(obj).forEach((i) => {
			if (obj[i] === o[i]) {
				match = true;
			}
		});
		if (match) {
			res.push(o);
		}
	});
	return res;
};

const countries = countryListAllIsoData.map((item) => ({
	id: item.displayText, //'USA',
	code: item.code, //'US',
	title: item.displayText, //'US(1)',
	locale: 'en-US',
	flag: `/images/flags/${item.code.toLocaleLowerCase()}.svg`,
	// flag: require(`../static/flags/${item.code.toLocaleLowerCase()}.svg`),
}));
const DEFAULT_AREA_CODE = 'USA'; //FLAG_SELECTOR_OPTION_LIST[0].id;
const validate = (values: any) => {
	// console.log(values.sendValue =);
	const errors = { sendValue: '' };
	if (!values.sendValue) {
		errors.sendValue = 'Please enter amount to send';
	}
	// else if ( values.firstName.length > 15 )
	// {
	// 	errors.firstName = 'Must be 15 characters or less';
	// }

	// if (!values.lastName) {
	// 	errors.lastName = 'Required';
	// } else if (values.lastName.length > 20) {
	// 	errors.lastName = 'Must be 20 characters or less';
	// }

	// if (!values.email) {
	// 	errors.email = 'Required';
	// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	// 	errors.email = 'Invalid email address';
	// }

	return errors;
};

const TransferApp = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		event;
		setValue(newValue);
	};

	const [toggleContents, setToggleContents] = useState(
		<span className='d-flex'>
			<img src={`/images/flags/ng.svg`} style={{ width: 15 }} />
			<h6 className='pb-0 my-auto ml-2'>NGA</h6>
		</span>,
	);

	const [toggleContents1, setToggleContents1] = useState(
		<span className='d-flex'>
			<img src={`/images/flags/us.svg`} style={{ width: 15 }} />
			<h6 className='pb-0 my-auto ml-2'>USA</h6>
		</span>,
	);
	const [selectedCountry, setSelectedCountry] = useState();

	return (
		<div>
			<div className='transfer-box p-2'>
				<div className='transfer-box-inner bg-white'>
					<div>
						{/* <div className={classes.root}> */}
						<NoSsr>
							<AppBar position='static' color='default'>
								<Tabs
									value={value}
									onChange={handleChange}
									indicatorColor='primary'
									textColor='primary'
									variant='fullWidth'
									aria-label='full width tabs example'>
									<Tab label='International' {...a11yProps(0)} />
									<Tab label='Local' {...a11yProps(1)} />
								</Tabs>
							</AppBar>
							<div>
								<div
								// axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								// index={value}
								// onChangeIndex={ handleChangeIndex }
								>
									<TabPanel value={value} index={0} dir={theme.direction}>
										<div className='container-fluid'>
											<div className='row'>
												<div className='col-12 px-0'>
													{/* <StyledCard> */}
													{/* <Card.Body> */}
													<Formik
														initialValues={{ sendValue: '' }}
														onSubmit={async (values: any) => {
															await new Promise((resolve) =>
																setTimeout(resolve, 500),
															);
															alert(JSON.stringify(values, null, 2));
														}}
														validate={validate}>
														{(props) => {
															const {
																values,
																touched,
																errors,
																// dirty,
																// isSubmitting,
																handleChange,
																handleBlur,
																// handleSubmit,
																// handleReset,
															} = props;
															// props.handleChange((e: any) => {
															// 	console.log(e);
															// });
															return (
																<form className='text-center d-flex flex-column align-items-center'>
																	<div className='form-group text-left'>
																		<label
																			className='banner-input-label--d'
																			htmlFor='send'>
																			You send
																		</label>

																		<div className='input-group mb-2 px-2 flex-nowrap z-index-5'>
																			<div className='banner-slant--d'>
																				<input
																					id='sendValue'
																					name='sendValue'
																					placeholder='Enter Value'
																					type='number'
																					value={values.sendValue}
																					onChange={handleChange}
																					onBlur={handleBlur}
																					className={
																						errors.sendValue &&
																						touched.sendValue
																							? 'text-input error form-control banner-slant-input--d'
																							: 'form-control banner-slant-input--d'
																					}
																				/>
																			</div>

																			<div
																				className='input-group-append'
																				key={0}>
																				<div className='input-group-text p-0 banner-slant-input--group'>
																					{
																						<>
																							<Dropdown
																								onSelect={(eventKey: any) => {
																									const country = countries.find(
																										({ code, title }) =>
																											eventKey === code,
																									);

																									setSelectedCountry(eventKey);
																									setToggleContents(
																										<span className='d-flex'>
																											<img
																												src={`/images/flags/${country?.code}.svg`}
																												style={{ width: 20 }}
																											/>
																											<h6 className='pb-0 my-auto ml-2'>
																												{country?.code.toUpperCase()}
																											</h6>
																										</span>,
																									);
																								}}>
																								<Dropdown.Toggle
																									variant='secondary'
																									id='dropdown-flags'
																									className='text-left'
																									style={{
																										width: 79,
																										height: 37,
																									}}>
																									{toggleContents}
																								</Dropdown.Toggle>

																								<Dropdown.Menu>
																									{countries.map(
																										({ code, title }) => (
																											<Dropdown.Item
																												className='d-flex'
																												key={code}
																												eventKey={code}>
																												<img
																													src={`/images/flags/${code}.svg`}
																													style={{ width: 20 }}
																												/>
																												<h6 className='my-auto ml-2 pb-0 font-bolder'>
																													{title}
																												</h6>
																											</Dropdown.Item>
																										),
																									)}
																								</Dropdown.Menu>
																							</Dropdown>
																						</>
																					}
																				</div>
																			</div>
																		</div>

																		{errors.sendValue && touched.sendValue && (
																			<div className='text-danger small'>
																				{errors.sendValue}
																			</div>
																		)}
																	</div>
																	<div className='form-group text-left mb-4'>
																		<label
																			className='banner-input-label--d'
																			htmlFor='recipient'>
																			Recipient get
																		</label>

																		<div className='input-group mb-2 px-2 flex-nowrap'>
																			<div className='banner-slant--d'>
																				<input
																					value={
																						parseInt(values.sendValue) * 400
																					}
																					type='number'
																					className='form-control banner-slant-input--d'
																					id='recipient'
																				/>
																			</div>

																			<div
																				className='input-group-append'
																				key={1}>
																				<div className='input-group-text p-0 banner-slant-input--group'>
																					{
																						<>
																							<Dropdown
																								onSelect={(eventKey: any) => {
																									const country = countries.find(
																										({ code, title }) =>
																											eventKey === code,
																									);

																									setSelectedCountry(eventKey);
																									setToggleContents1(
																										<span className='d-flex'>
																											<img
																												src={`/images/flags/${country?.code}.svg`}
																												style={{ width: 20 }}
																											/>
																											<h6 className='pb-0 my-auto ml-2'>
																												{country?.code.toUpperCase()}
																											</h6>
																										</span>,
																									);
																								}}>
																								<Dropdown.Toggle
																									variant='secondary'
																									id='dropdown-flags'
																									className='text-left'
																									style={{
																										width: 79,
																										height: 37,
																									}}>
																									{toggleContents1}
																								</Dropdown.Toggle>

																								<Dropdown.Menu>
																									{countries.map(
																										({ code, title }) => (
																											<Dropdown.Item
																												className='d-flex'
																												key={code}
																												eventKey={code}>
																												<img
																													src={`/images/flags/${code}.svg`}
																													style={{ width: 20 }}
																												/>
																												<h6 className='my-auto ml-2 pb-0 font-bolder'>
																													{title}
																												</h6>
																											</Dropdown.Item>
																										),
																									)}
																								</Dropdown.Menu>
																							</Dropdown>
																						</>
																					}
																				</div>
																			</div>
																		</div>
																	</div>

																	<div className='mb-4'>
																		<p className='mb-4  banner-input-label--d'>
																			4.17 Service Charge 1USD = 350 NGN
																		</p>
																		<p className='mb-0 banner-input-label--d'>
																			Should arrive in approximately 3 hours
																		</p>
																	</div>

																	<p className='mb-4 banner-input-label--d'>
																		By clicking send money, you agree to the{' '}
																		<Link href='/#'>
																			<a className='text-navyblue'>
																				Terms & Policy
																			</a>
																		</Link>
																	</p>
																</form>
															);
														}}
													</Formik>
													{/* </Card.Body> */}
													{/* </StyledCard> */}
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel value={value} index={1} dir={theme.direction}>
										Item Two
									</TabPanel>
								</div>
							</div>
						</NoSsr>
						{/* </div> */}
					</div>
				</div>

				<div className='d-flex justify-content-between justify-content-lg-center flex-row p-3'>
					<button className='btn brdx-transparent-btn border-radius-cus mr-2  mr-lg-5 px-3'>
						Compare Price
					</button>
					<button className='btn brdx-gold-btn border-radius-cus px-5'>
						Continue
					</button>
				</div>
			</div>

			<style jsx>{`
				.dropdown {
					transform: skewX(32deg) !important;
				}

				.btn-secondary:not(:disabled):not(.disabled):active:focus,
				.btn-secondary:not(:disabled):not(.disabled).active:focus,
				.show > .btn-secondary.dropdown-toggle:focus {
					box-shadow: transparent !important;
				}

				.btn-secondary:focus,
				.btn-secondary.focus {
					color: #ffffff;
					background-color: #5a6268;
					border-color: #545b62;
					box-shadow: transparent !important;
				}
				@media (max-width: 767.98px) {
					.transfer-box {
						width: unset !important;
					}
				}

				.z-index-5 {
					z-index: 100000 !important;
				}
				.border-radius-cus {
					border-radius: 4px;
				}
				.font-small {
					font: Italic 16px/19px Museo Sans 500;
					letter-spacing: 0px;
					color: #909094;
				}
				.MuiTab-fullWidth {
					flex-grow: 1;
					/* max-width: -webkit-fill-available !important; */
					flex-shrink: 1;
				}
				.transfer-box {
					width: 500px;
					height: max-content;
					background: #000080 0% 0% no-repeat padding-box;
					box-shadow: 0px 9px 21px #00000029;
					border-radius: 46px;
					opacity: 1;
				}
				.transfer-box-inner {
					box-shadow: 0px 9px 20px #00000029;
					border-radius: 39px;
					height: 400px;
					overflow: hidden;
					/* padding: 30px; */
				}
			`}</style>
		</div>
	);
};

export default TransferApp;
