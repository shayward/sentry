import {css} from '@emotion/react';

export const imageStyle = (props: {round?: boolean}) => css`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: ${props.round ? '50%' : '3px'};
`;
