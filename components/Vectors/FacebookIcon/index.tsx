import React from 'react'
import PropTypes from "prop-types";

interface Props {
  width: number;
  height: number;
}

const FacebookIcon = ({ width, height }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 34 18">
      <g id="facebook" transform="translate(-118.636 0.942)">
        <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M8.14,7.34,8.5,4.979H6.237V3.446A1.181,1.181,0,0,1,7.568,2.17H8.6V.16A12.563,12.563,0,0,0,6.77,0,2.883,2.883,0,0,0,3.684,3.179v1.8H1.609V7.34H3.684v5.709H6.237V7.34Z" transform="translate(130.035 1.975)" fill="navy" />
        <g id="Rectangle_48" data-name="Rectangle 48" transform="translate(118.636 -0.942)" fill="none" stroke="navy" strokeWidth={1}>
          <rect width={34} height={18} rx={5} stroke="none" />
          <rect x="0.5" y="0.5" width={33} height={17} rx="4.5" fill="none" />
        </g>
      </g>
    </svg>

  )
}

FacebookIcon.defaultProps = {
  width: 34,
  height: 18,
}

FacebookIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default FacebookIcon;
