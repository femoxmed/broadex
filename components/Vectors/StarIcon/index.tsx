import React from "react";
import PropTypes from "prop-types";

interface Props {
  width: number;
  height: number;
  className?: string;
}

const StarIcon = ({ width, height, ...rest }: Props) => {
  return (
    <svg
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 11.79 11.243'>
      <g id='Group_395' data-name='Group 395' transform='translate(-113.147 -187.081)'>
        <path
          id='Path_575'
          data-name='Path 575'
          d='M61.06,19.753,57.241,19.4l-1.517-3.522a.306.306,0,0,0-.562,0L53.645,19.4l-3.819.354a.306.306,0,0,0-.174.535l2.881,2.531L51.69,26.56a.306.306,0,0,0,.455.33l3.3-1.958,3.3,1.958a.306.306,0,0,0,.455-.33l-.843-3.741,2.881-2.531A.306.306,0,0,0,61.06,19.753Z'
          transform='translate(63.599 171.39)'
          fill='#ffdc64'
        />
        <path
          id='Path_581'
          data-name='Path 581'
          d='M56.275,17.157l-.552-1.281a.306.306,0,0,0-.562,0L53.645,19.4l-3.819.354a.306.306,0,0,0-.174.535l2.881,2.531L51.69,26.56a.306.306,0,0,0,.455.33l.439-.261A23.757,23.757,0,0,1,56.275,17.157Z'
          transform='translate(63.599 171.39)'
          fill='#ffc850'
        />
      </g>
    </svg>
  );
};

StarIcon.defaultProps = {
  width: 11.79,
  height: 11.243,
};

StarIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default StarIcon;
