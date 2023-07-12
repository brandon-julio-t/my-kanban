import { ComponentProps, ComponentType } from "react";

const CardTitle: ComponentType<ComponentProps<'h2'>> = ({ children, className, ...rest }) => {
  return (
    <h2 {...rest} className={`card-title ${className}`}>
      {children}
    </h2>
  );
};

export default CardTitle;
