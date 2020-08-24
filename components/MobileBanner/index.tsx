import React from 'react';
import ReactCustomFlagSelect from 'react-custom-flag-select';
import VideoPlayIcon from '../Vectors/VideoPlayIcon';

import FLAG_SELECTOR_OPTION_LIST from '../../utils/flag-option-list';
import Link from 'next/link';

interface Props {}

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

const MobileBanner = ({}: Props) => {
	const currentItem = find(FLAG_SELECTOR_OPTION_LIST, {
		id: DEFAULT_AREA_CODE,
	})[0];

	return (
		<section className='banner d-flex flex-column align-items-center d-lg-none'>
			<div className='text-center'>
				<p className='banner-leadingtext mb-4'>
					The simplest ways to <br />
					<span className='banner-leadingtext-bm'>Send Money</span> to your{' '}
					<span className='banner-leadingtext-bm'>Loved ones</span>
				</p>

				<form>
					<div className='form-group text-left'>
						<label className='banner-input-label' htmlFor='send'>
							You send
						</label>

						<div className='input-group mb-2 px-2'>
							<div className='banner-slant'>
								<input
									type='number'
									className='form-control banner-slant-input'
									id='send'
								/>
							</div>

							<div className='input-group-append'>
								<div className='input-group-text p-0 banner-slant-input--group'>
									<ReactCustomFlagSelect
										tabIndex={'1'}
										id={'youSend'}
										name={'areaCode'}
										value={currentItem.id}
										showSearch={true}
										animate={true}
										optionList={FLAG_SELECTOR_OPTION_LIST}
										// selectOptionListItemHtml={<div>us</div>} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
										// selectHtml={<div>us</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
										classNameWrapper='' //Optional.[String].Default: "".
										classNameContainer='' //Optional.[String].Default: "".
										classNameButton='banner-slant-input-btn'
										classNameOptionListContainer=''
										classNameOptionListItem=''
										classNameDropdownIconOptionListItem={''}
										customStyleWrapper={{}}
										customStyleContainer={{ border: 'none', fontSize: '12px' }}
										customStyleSelect={{ width: '80px' }}
										customStyleOptionListItem={{}}
										customStyleOptionListContainer={{
											maxHeight: '100px',
											overflow: 'auto',
											width: '100px',
										}}
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
						<label className='banner-input-label' htmlFor='recipient'>
							Recipient get
						</label>

						<div className='input-group mb-2 px-2'>
							<div className='banner-slant'>
								<input
									type='number'
									className='form-control banner-slant-input'
									id='recipient'
								/>
							</div>

							<div className='input-group-append'>
								<div className='input-group-text p-0 banner-slant-input--group'>
									<ReactCustomFlagSelect
										tabIndex={'1'} //Optional.[String or Number].Default: -1.
										id={'youRecieve'} //Optional.[String].Default: "". Input ID.
										name={'areaCode'} //Optional.[String].Default: "". Input name.
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
										customStyleWrapper={{}}
										customStyleContainer={{ border: 'none', fontSize: '12px' }}
										customStyleSelect={{ width: '80px' }}
										customStyleOptionListItem={{}}
										customStyleOptionListContainer={{
											maxHeight: '100px',
											overflow: 'auto',
											width: '120px',
										}}
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
						<p className='mb-0 banner-input-label'>1USD = 350 NGN</p>
						<p className='mb-0 banner-input-label'>
							Should arrive in approximately 3 hours
						</p>
					</div>
				</form>

				<div className='mb-2'>
					<button className='btn banner-btn-play'>
						<VideoPlayIcon className='mr-2' />
						See How it works
					</button>
				</div>

				<div>
					<Link href='/transfer'>
						<button className='btn brdx-btn'>Get Started</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default MobileBanner;
