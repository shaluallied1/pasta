import React from 'react';

import { composeClasses } from '../../utils/generic';

import styles from './Button.scss';

export enum ButtonTypes {
  outline = 'outline',
  primary = 'primary',
}

export interface IButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
  style?: any;
  type?: ButtonTypes;
}

const Button: React.SFC<IButtonProps> = ({
  children,
  className,
  type,
  onClick,
  style,
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      // @ts-ignore
      className={composeClasses(styles.button, styles[type], className)}
      onClick={onClick}
      style={style}
    >{children}
    </button>
  );
};

export default Button;
