import React from "react";
import PropTypes from "prop-types";

interface Props {
  width: number;
  height: number;
  className?: string;
}

const RandomShape1 = ({ width, height, ...rest }: Props) => {
  return (
    <svg
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      width=''
      height=''
      viewBox='0 0 675.012 674.869'>
      <path
        id='Path_582'
        data-name='Path 582'
        d='M331.157,86.227C267.9,28.858,230.821,137.189,145.034,118.54S-1.653,0-1.653,0V446.186S255.924,509.318,358.3,463.645c77.805-34.712,137.646-99.834,105.689-148.542-10.139-15.454-45.958-49.108-68.6-59.655C301.032,211.5,394.415,143.6,331.157,86.227Z'
        transform='matrix(0.695, 0.719, -0.719, 0.695, 346.599, 1.189)'
        fill='navy'
      />
    </svg>
  );
};

RandomShape1.defaultProps = {
  width: 675.012,
  height: 674.869,
};

RandomShape1.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default RandomShape1;
