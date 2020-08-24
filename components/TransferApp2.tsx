import React from 'react';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { NoSsr } from '@material-ui/core';
import ReactCustomFlagSelect from 'react-custom-flag-select';
import FLAG_SELECTOR_OPTION_LIST from '../utils/flag-option-list';
import Link from 'next/link';

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
const DEFAULT_AREA_CODE = FLAG_SELECTOR_OPTION_LIST[0].id;

const TransferApp = () => {
	const currentItem = find(FLAG_SELECTOR_OPTION_LIST, {
		id: DEFAULT_AREA_CODE,
	})[0];
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		event;
		setValue(newValue);
	};

	// const handleChangeIndex = (index: number) => {
	// 	setValue(index);
	// };
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
												<div className='col-12'>
													{/* <StyledCard> */}
													{/* <Card.Body> */}
													<form className='text-center d-flex flex-column align-items-center'>
														<div className='form-group text-left'>
															<label
																className='banner-input-label--d'
																htmlFor='send'>
																You send
															</label>

															<div className='input-group mb-2 px-2 flex-nowrap'>
																<div className='banner-slant--d'>
																	<input
																		type='number'
																		className='form-control banner-slant-input--d'
																		id='send'
																	/>
																</div>

																<div className='input-group-append'>
																	<div className='input-group-text p-0 banner-slant-input--group'>
																		<ReactCustomFlagSelect
																			tabIndex={'1'} //Optional.[String or Number].Default: -1.
																			id={'youSend'} //Optional.[String].Default: "". Input ID.
																			name={'youSend'} //Optional.[String].Default: "". Input name.
																			value={currentItem.id} //Optional.[String].Default: "".
																			showSearch={true} ////Optional.[Bool].Default: false.
																			animate={true} //Optional.[Bool].Default: false.
																			optionList={FLAG_SELECTOR_OPTION_LIST} //Required.[Array of Object(s)].Default: [].
																			// selectOptionListItemHtml={<div>us</div>} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
																			// selectHtml={<div>us</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
																			classNameWrapper='' //Optional.[String].Default: "".
																			classNameContainer='' //Optional.[String].Default: "".
																			classNameButton='banner-slant-input-btn'
																			classNameOptionListContainer='' //Optional.[String].Default: "".
																			classNameOptionListItem='' //Optional.[String].Default: "".
																			classNameDropdownIconOptionListItem={''} //Optional.[String].Default: "".
																			customStyleWrapper={{}} //Optional.[Object].Default: {}.
																			customStyleContainer={{
																				border: 'none',
																				fontSize: '12px',
																			}} //Optional.[Object].Default: {}.
																			customStyleSelect={{ width: '80px' }} //Optional.[Object].Default: {}.
																			customStyleOptionListItem={{}} //Optional.[Object].Default: {}.
																			customStyleOptionListContainer={{
																				maxHeight: '100px',
																				overflow: 'auto',
																				width: '100px',
																			}} //Optional.[Object].Default: {}.
																			// onChange={areaCode => {
																			//   this.setState({ areaCode: areaCode }, () => {
																			//     this.handlePhoneChange(phone);
																			//   });
																			// }}
																			// onBlur={() => {}} //Optional.[Func].Default: none.
																			// onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
																			// onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
																		/>
																	</div>
																</div>
															</div>
															{/* <small className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small> */}
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
																		type='number'
																		className='form-control banner-slant-input--d'
																		id='recipient'
																	/>
																</div>

																<div className='input-group-append'>
																	<div className='input-group-text p-0 banner-slant-input--group'>
																		<ReactCustomFlagSelect
																			tabIndex={'1'} //Optional.[String or Number].Default: -1.
																			id={'youRecieve'} //Optional.[String].Default: "". Input ID.
																			name={'youRecieve'} //Optional.[String].Default: "". Input name.
																			value={currentItem.id} //Optional.[String].Default: "".
																			showSearch={true} ////Optional.[Bool].Default: false.
																			animate={true} //Optional.[Bool].Default: false.
																			optionList={FLAG_SELECTOR_OPTION_LIST} //Required.[Array of Object(s)].Default: [].
																			// selectOptionListItemHtml={<div>us</div>} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
																			// selectHtml={<div>us</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
																			classNameWrapper='' //Optional.[String].Default: "".
																			classNameContainer='' //Optional.[String].Default: "".
																			classNameButton='banner-slant-input-btn'
																			classNameOptionListContainer='' //Optional.[String].Default: "".
																			classNameOptionListItem='' //Optional.[String].Default: "".
																			classNameDropdownIconOptionListItem={''} //Optional.[String].Default: "".
																			customStyleWrapper={{}} //Optional.[Object].Default: {}.
																			customStyleContainer={{
																				border: 'none',
																				fontSize: '12px',
																			}} //Optional.[Object].Default: {}.
																			customStyleSelect={{ width: '80px' }} //Optional.[Object].Default: {}.
																			customStyleOptionListItem={{}} //Optional.[Object].Default: {}.
																			customStyleOptionListContainer={{
																				maxHeight: '100px',
																				overflow: 'auto',
																				width: '120px',
																			}} //Optional.[Object].Default: {}.
																			// onChange={areaCode => {
																			//   this.setState({ areaCode: areaCode }, () => {
																			//     this.handlePhoneChange(phone);
																			//   });
																			// }}
																			// onBlur={() => {}} //Optional.[Func].Default: none.
																			// onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
																			// onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
																		/>
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
																<a className='text-navyblue'>Terms & Policy</a>
															</Link>
														</p>
													</form>
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
				@media (max-width: 767.98px) {
					.transfer-box {
						width: unset !important;
					}
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
