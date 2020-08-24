import React from 'react'
import PropTypes from "prop-types";

interface Props {
  width: number;
  height: number;
}

const GoogleIcon = ({ width, height }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 34 18">
      <g id="google" transform="translate(-79.636 0.942)">
        <path id="Icon_simple-gmail" data-name="Icon simple-gmail" d="M15.161,5.448v9.476a.931.931,0,0,1-.948.948h-.948v-8.6L7.58,11.354,1.9,7.271v8.6H.948A.93.93,0,0,1,0,14.923V5.448A.931.931,0,0,1,.948,4.5h.316L7.58,9.08,13.9,4.5h.316a.931.931,0,0,1,.948.948Z" transform="translate(89.172 -1.685)" fill="navy" />
        <g id="Rectangle_47" data-name="Rectangle 47" transform="translate(79.636 -0.942)" fill="none" stroke="navy" strokeWidth={1}>
          <rect width={34} height={18} rx={5} stroke="none" />
          <rect x="0.5" y="0.5" width={33} height={17} rx="4.5" fill="none" />
        </g>
      </g>
    </svg>

  )
}

GoogleIcon.defaultProps = {
  width: 34,
  height: 18,
}

GoogleIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default GoogleIcon;
