import { ComponentProps, ComponentType } from 'react';

const Container: ComponentType<ComponentProps<'div'>> = ({ children, ...rest }) => {
  return (
    <div {...rest} className="container mx-auto p-2">
      {children}
    </div>
  );
};

export default Container;
