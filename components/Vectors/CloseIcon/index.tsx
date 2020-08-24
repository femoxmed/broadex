import React from 'react';
import PropTypes from 'prop-types';

interface Props {
	width: number;
	height: number;
}

const CloseIcon = ({ width, height }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 22.396 22.396'>
			<path
				id='Icon_metro-cancel'
				data-name='Icon metro-cancel'
				d='M13.769,1.928a11.2,11.2,0,1,0,11.2,11.2,11.2,11.2,0,0,0-11.2-11.2Zm0,20.3a9.1,9.1,0,1,1,9.1-9.1,9.1,9.1,0,0,1-9.1,9.1Zm3.5-14.7-3.5,3.5-3.5-3.5-2.1,2.1,3.5,3.5-3.5,3.5,2.1,2.1,3.5-3.5,3.5,3.5,2.1-2.1-3.5-3.5,3.5-3.5Z'
				transform='translate(-2.571 -1.928)'
				fill='#f58634'
			/>
		</svg>
	);
};

CloseIcon.defaultProps = {
	width: 22.396,
	height: 22.396,
};

CloseIcon.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export default CloseIcon;
