import React from 'react';
import ReactCustomFlagSelect from 'react-custom-flag-select';
import VideoPlayIcon from '../Vectors/VideoPlayIcon';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import FLAG_SELECTOR_OPTION_LIST from '../../utils/flag-option-list';
import Link from 'next/link';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

interface Props {}

const Banner = styled.section`
	// height: 47rem;
	min-height: 776px;
	overflow: hidden;
`;

const BannerImg1 = styled.img`
	position: absolute;
	left: -371px;
	top: -118px;
`;

const SignInButton = styled.button`
	font-family: 'Museo Sans 500';
	color: #fff;
	background-color: transparent;
	border: none;
	border-radius: 21px;
	padding: 0.4rem 2rem;
	border: 2px solid transparent;
	white-space: nowrap;

	&:focus,
	&:hover {
		border: 2px solid #f58634;
		color: #fff;
	}
`;

const SignUpButton = styled.button`
	font-family: 'Museo Sans 500';
	color: #fff;
	border: 2px solid #f58634;
	border-radius: 21px;
	background-color: transparent;
	padding: 0.4rem 2rem;

	&:focus,
	&:hover {
		color: #fff;
	}
`;

const StyledCard = styled(Card)`
	border-radius: 60px;
`;

const BannerContainer = styled.div`
	// position: absolute;
	// top: 60%;
	// left: 70%;
	// width: 365px;
	// transform: translate(-50%, -50%);

	// @media screen and (min-width: 1200px) {
	//   left: 74%;
	//   width: 452px;
	// }
`;

const Text1 = styled.p`
	font-size: 22px;
	font-family: 'Museo Sans 100';
	font-style: italic;
	letter-spacing: 0px;
	color: #ffffff;
	margin-bottom: 8px;

	@media screen and (min-width: 1200px) {
		font-size: 28px;
	}
`;

const Text2 = styled.p`
	font-size: 54px;
	font-family: 'Museo Sans 500';
	letter-spacing: 0px;
	color: #ffffff;
	text-transform: uppercase;
	line-height: 52px;

	@media screen and (min-width: 1200px) {
		font-size: 63px;
	}
`;

const Text3 = styled.p`
	font-size: 35px;
	font-family: 'Museo Sans 100';
	font-style: italic;
	letter-spacing: 0px;
	color: #ffffff;

	@media screen and (min-width: 1200px) {
		font-size: 42px;
	}
`;

const Text3SPAN = styled.span`
	font-family: 'Museo Sans 500';
	text-transform: uppercase;
	font-style: normal;
`;

const BannerText = styled.p`
	font-size: 16px;
	font-family: 'Museo Sans 100';
	font-style: italic;
	letter-spacing: 0px;
	color: #ffffff;

	@media screen and (min-width: 1200px) {
		font-size: 18px;
	}
`;

const PlayButton = styled.button`
	font-size: 22px;
`;

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

const DesktopBanner = ({}: Props) => {
	const currentItem = find(FLAG_SELECTOR_OPTION_LIST, {
		id: DEFAULT_AREA_CODE,
	})[0];

	return (
		<Banner className='banner-d d-none d-lg-block bg-navyblue position-relative'>
			<Container>
				<Row>
					<Col lg={3}>
						<div className='position-relative'>
							<BannerImg1
								height={700}
								src='/images/banner-bg-1@2x.png'
								alt='banner image 1'
							/>
						</div>
					</Col>
					<Col lg={5}>
						<div className='position-relative h-100'>
							<BannerContainer className='pt-100'>
								<div className='mb-4'>
									<Text1 className=''>The simplest ways to</Text1>
									<Text2 className='mb-0'>send money </Text2>
									<Text3 className='mb-0'>
										to your <Text3SPAN>Loved ones</Text3SPAN>
									</Text3>
								</div>

								<BannerText className='mb-4'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</BannerText>

								<PlayButton className='btn banner-btn-play pl-0 mb-4'>
									<VideoPlayIcon width={40} height={40} className='mr-4' />
									See How it works
								</PlayButton>

								<div>
									<button className='btn brdx-btn'>Get Started</button>
								</div>
							</BannerContainer>
						</div>
					</Col>
					<Col lg={4}>
						<div className='py-xl-5 py-lg-4 px-0'>
							<div className='w-100 d-flex justify-content-center mb-5'>
								<Link href='/sign-in'>
									<SignInButton className='btn mr-4'>Sign in</SignInButton>
								</Link>
								<Link href='/sign-up'>
									<SignUpButton className='btn ml-4'>Register</SignUpButton>
								</Link>
							</div>

							<StyledCard>
								<Card.Body>
									<form className='text-center d-flex flex-column align-items-center'>
										<div className='form-group text-left'>
											<label className='banner-input-label--d' htmlFor='send'>
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
											<p className='mb-0 banner-input-label--d'>
												1USD = 350 NGN
											</p>
											<p className='mb-0 banner-input-label--d'>
												Should arrive in approximately 3 hours
											</p>
										</div>

										<div className='mb-4'>
											<Link href='/transfer'>
												<button className='btn brdx-bluebtn'>Send Money</button>
											</Link>
										</div>

										<p className='mb-0 banner-input-label--d'>
											By clicking send money, you agree to the{' '}
											<Link href='/#'>
												<a className='text-navyblue'>Terms & Policy</a>
											</Link>
										</p>
									</form>
								</Card.Body>
							</StyledCard>
						</div>
					</Col>
				</Row>
			</Container>
			<div className='shape-bottom overflow-hidden'>
				<img
					src='/images/Subtraction-12.svg'
					alt='shape'
					className='bottom-shape'
				/>
			</div>
		</Banner>
	);
};

export default DesktopBanner;
