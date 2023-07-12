import React, { ComponentProps, ComponentType } from 'react';

const Button: ComponentType<ComponentProps<'button'>> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
