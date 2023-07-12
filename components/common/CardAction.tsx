import React, { ComponentProps, ComponentType } from 'react'

const CardAction: ComponentType<ComponentProps<'div'>> = ({children, className, ...rest}) => {
  return (
    <div {...rest} className={`card-actions ${className}`}>
      {children}
    </div>
  )
}

export default CardAction
