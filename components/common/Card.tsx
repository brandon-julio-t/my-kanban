import { ComponentProps, ComponentType } from 'react';

interface ICard {
  compact?: boolean;
}

const Card: ComponentType<ComponentProps<'div'> & ICard> = ({ children, className, compact, ...rest }) => {
  return (
    <div {...rest} className={`card border border-base-content ${compact && 'card-compact'} ${className}`}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
