import React from "react";
import PropTypes from "prop-types";

interface Props {
  width: number;
  height: number;
  className?: string;
}

const FooterBg = ({ width, height, ...rest }: Props) => {
  return (
    <svg
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={width}
      height={height}
      viewBox='0 0 732.075 1230.101'>
      <defs>
        <linearGradient
          id='linear-gradient'
          x1='0.5'
          x2='0.5'
          y2={1}
          gradientUnits='objectBoundingBox'>
          <stop offset={0} stopColor='navy' />
          <stop offset={1} stopColor='#0909be' />
        </linearGradient>
      </defs>
      <g id='Group_392' data-name='Group 392' transform='translate(-345.953 -2483.958)'>
        <g
          id='Group_18'
          data-name='Group 18'
          transform='translate(-258.823 2205.841)'
          opacity='0.24'>
          <path
            id='Path_52'
            data-name='Path 52'
            d='M-311.1,359.312C-994.508,597.007-1031.823,0-1031.823,0V635.789s270.215-195.751,778.36,0S372.309,121.617-311.1,359.312Z'
            transform='translate(1328.224 1308.525) rotate(87)'
            opacity='0.35'
            fill='url(#linear-gradient)'
          />
        </g>
        <image
          id='broadex_icon_png1'
          data-name='broadex icon png1'
          width={386}
          height={670}
          transform='translate(471 2737)'
          opacity='0.06'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAADQCAYAAADMK6VRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA3LTA0VDEwOjE3OjE1KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNy0wNlQwMDoyNjoxMiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNy0wNlQwMDoyNjoxMiswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTJlNjAyZS1iMGVlLWZlNDEtOGZkYS1mNGM0YTUxODUzNGEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplZDNkYWY5YS02OTc5LTdkNDItYjRlZS1hZTVjMzkzMzk0NWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NTI0YmMyZi02NzNmLTNiNGEtYTY1MS0wMzEwMTliOGVhNzciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1MjRiYzJmLTY3M2YtM2I0YS1hNjUxLTAzMTAxOWI4ZWE3NyIgc3RFdnQ6d2hlbj0iMjAyMC0wNy0wNFQxMDoxNzoxNSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOTJlNjAyZS1iMGVlLWZlNDEtOGZkYS1mNGM0YTUxODUzNGEiIHN0RXZ0OndoZW49IjIwMjAtMDctMDZUMDA6MjY6MTIrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Z0av8AAAF1UlEQVR4nO3dP3LbVhTF4cNMKjT2DqwdmEVQm9mBlqAdxCnRUU3Q2jvgDpIdhKpRmNqBvAOpCFqmIKG/FAmA775338H5ZjIZayQA1E/3gpYYZbbdbiG8fkl9AWJLgckpMDkFJqfA5BSYnAKTU2ByCkxOgckpMDkFJqfA5BSYnAKTU2ByCkxOgckpMDkFJqfA5BSYnAKTU2ByCkxOgckpMDkFJqfA5BSY3K+pL0BstHX5EcCFApNo63IOYA5gsf/nE4DfFThTbV0usAs53//7w6t3+V5UzVqBM7Bftws8Bf1y4kN+AlgCuge79M66HeKqqJp7QIFd6LFuh/heVM26+8NMv4QlrhHrdojbomrmz9+gCY6krctvAC4xfN0OcfX6DQocQVuXXwH8YXya66JqNq/fqBVtrK3LCwAbnHdfPeXNau7oW5X2VrCNCxxYzR0FNtTW5RJhn0QdcnA1d7Sijez/LvvD+DTvruaOJtjOyvj4D9g9Kz9KgQ3sV/Nn49Msi6q5O/VOWtGBRVrNN0XVLPq8oyY4vJXx8R9w5FnzawockKfV3NGKDsTbau5ogsNZGR9/0Gru6HvRAbR1eQngHsDN/k0XCP9Dhashq7mjFU1OK5qcApOzugdb7/2Z8fH7iHVvO+uxaoLJKfA4WUwvoMBjZBMXUGB6CjxMVtMLKPAQ2cUFFJieAveT5fQCCtxHtnEBBaanwMdlPb2AAh+TfVxAgekp8GEU0wso8CE0cQEFpqfAL1FNL6DAz9HFBRS4QxkXsAts/UD0Wt+eNMHE0wvkHThEGOq4QN6BpYfcA58zgfTTC9gGjvXAxoSaRFwg/wnu6Fn1O1gCA/0jT2Z6AfvAsR/kqXiTigtwTXBH6/oZxsDALvLr0JObXiDOr3CYId1UxT6vq7gA7wTLXqzA7r6yDbh8jDEn2OUnIBC3j00rmlzswG6/0s+0xeFn7smlmGDWyB1XkbWibbiZ5lSB2ae4kzx0ygmeSmQgYeTUK1qRjaUODCiyKQ+BAUU24yUwsIs8ldDRInsK3FHkgDwGBqYzzeaRvQbuKPKZvAeWMymwD2ZT7D2wi+/nRmLyWD0HnlJcM54Dx+Dt2XrwL2qv/2Os1K+GpNkeHifYw+uXU0520MfvMXAMfeN5Wt+jeAvscTV6u08P4imwh9Vs8XFjBPtceAocw7mRsptkL4E9rmYKHgJ7X81WxzklyOfFQ+AYQkfJZlWnDqzVbCxl4NxWc6zjBpUqcO5xs5F6RefO/RdQisCa3v7O/lzFDqy4kWlFk4sZWNObQKzAipuIVjS5GIE1vQlZB1bcxLSiyVkG1vQ6YBVYcZ3QiiZnEVjT60jowIrrTMjAenWGQznegzW9A4QKrNXsVIjAWs2OhfjPR6c+Va4ff473YBlAgckpMLnR9+C2LhdDP6aomvXY88k4s+12+JPgti4vAfwd/Gpeui6qZml8DnqDA7d1eQFgA+CDwfV0bouqmRsefzLG3INXsI0LAFfGx5+MQYHbuvwK4IvNpTy6LqpmY3yOyei9orWa8zRkglfQas5Or8Bazfk6uaK1mvPWZ4L/gVZzto4GbutyCeCz8TX8qdVs590V3dblHMAP4/PfFFWzMD7HpB2b4JXxuR+g1WzuYOBIq3lZVM2d8Tkm782KNl7NP7F7Rr4uquab0TnkmUM/LlwFPP4tgDWeot4FPLb08CJwW5ffcN5qvsEu6BrApqia+zOOJQE8ruj9D/D/HfCxj+sWu+nchL00CWG23W7R1uVH7GJ9OvK+t3gZ9M742iSAbkUv8TZut2432AW9j3VREs7sv79+W2D37cg1nu6d62RXJEGNek2W5EMvmyWnwOQUmJwCk1NgcgpMToHJKTA5BSanwOQUmJwCk1NgcgpMToHJKTA5BSanwOQUmJwCk1NgcgpMToHJKTA5BSanwOQUmJwCk1NgcgpMToHJKTA5BSanwOQUmJwCk1NgcgpMToHJKTA5BSanwOQUmNz/WFJB7LyRNG0AAAAASUVORK5CYII='
        />
      </g>
    </svg>
  );
};

FooterBg.defaultProps = {
  width: 732.075,
  height: 1230.101,
};

FooterBg.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default FooterBg;
