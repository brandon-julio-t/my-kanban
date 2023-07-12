import React, { ComponentProps, ComponentType } from 'react';

interface ICard {
  compact?: boolean;
}

interface IComposition {
  Title: ComponentType<ComponentProps<'h2'>>;
}

const Card: ComponentType<ComponentProps<'div'> & ICard> & IComposition = ({
  children,
  className,
  compact,
  ...rest
}) => {
  return (
    <div {...rest} className={`card border border-gray-200 ${compact && 'card-compact'} ${className}`}>
      <div className="card-body">{children}</div>
    </div>
  );
};

Card.Title = function CardTitle({ children, className, ...rest }) {
  return (
    <h2 {...rest} className={`card-title ${className}`}>
      {children}
    </h2>
  );
};

export default Card;
