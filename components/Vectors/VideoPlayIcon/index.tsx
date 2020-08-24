import React from "react";
import PropTypes from "prop-types";

interface Props {
  width: number;
  height: number;
  className: string;
}

const VideoPlayIcon = ({ width, height, ...rest }: Props) => {
  return (
    <svg
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 22 22'>
      <g id='Group_9' data-name='Group 9' transform='translate(0.659 0.616)'>
        <g
          id='Ellipse_5'
          data-name='Ellipse 5'
          transform='translate(0.341 0.384)'
          fill='none'
          stroke='#f58634'
          strokeWidth={1}>
          <circle cx={10} cy={10} r={10} stroke='none' />
          <circle cx={10} cy={10} r='10.5' fill='none' />
        </g>
        <path
          id='Polygon_1'
          data-name='Polygon 1'
          d='M3,0,6,6H0Z'
          transform='translate(14.341 7.384) rotate(90)'
          fill='#f58634'
        />
      </g>
    </svg>
  );
};

VideoPlayIcon.defaultProps = {
  width: 22,
  height: 22,
};

VideoPlayIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default VideoPlayIcon;
