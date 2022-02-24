import React from 'react'
import cn from 'classnames'
import styles from './Typography.module.scss'

const variantsMapping = {
  title4xl: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  caption: 'p',
  captionSmall: 'p',
  byline: 'p',
  footer: 'p',
}

const Typography = ({ variant, color, size, weight, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : 'p'

  return (
    <Component
      className={cn(
        styles[`${variant}`],
        styles[`${color}`],
        styles[`${size}`],
        styles[`${weight}`]
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
