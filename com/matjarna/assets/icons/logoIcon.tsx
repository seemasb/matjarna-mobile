import React from 'react';
import Svg, {Rect, Mask, G, Path} from 'react-native-svg';

const LogoIcon = () => {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Rect
        x="0.333374"
        y="0.38092"
        width="20.2381"
        height="20.2381"
        rx="5.95238"
        fill="#0ACF83"
      />
      <Mask
        id="mask0_128_227"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="21"
        height="21">
        <Rect
          x="0.333374"
          y="0.38092"
          width="20.2381"
          height="20.2381"
          rx="5.95238"
          fill="#0ACF83"
        />
      </Mask>
      <G mask="url(#mask0_128_227)">
        <Path
          d="M13.4023 10.0181C13.7975 11.4928 12.9206 13.0091 11.4438 13.4048C9.96706 13.8005 8.44956 12.9258 8.05441 11.451C7.65925 9.97633 8.53609 8.46005 10.0129 8.06435C11.4897 7.66864 13.0072 8.54336 13.4023 10.0181Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.10277 1.89782C-0.272352 2.27249 -0.272564 2.87974 0.102297 3.25415L4.80895 7.95511C4.17258 9.30382 3.99222 10.8757 4.40818 12.4281C5.34217 15.9138 8.92899 17.9813 12.4196 17.046C15.9102 16.1107 17.9827 12.5268 17.0487 9.04107C16.1147 5.55537 12.5279 3.48785 9.03729 4.42315C8.51175 4.56396 8.01836 4.76482 7.56253 5.01634L2.95025 0.409632C2.57539 0.0352239 1.96741 0.0354355 1.59229 0.410105L0.10277 1.89782ZM11.7041 14.3758C13.7179 13.8363 14.9136 11.7686 14.3747 9.75762C13.8359 7.74663 11.7666 6.55383 9.75278 7.09343C7.73899 7.63302 6.5433 9.70068 7.08214 11.7117C7.62098 13.7226 9.69031 14.9154 11.7041 14.3758Z"
          fill="white"
        />
      </G>
    </Svg>
  );
};

export default LogoIcon;
