import React from 'react'
import cn from 'classnames'
import styles from './Typography.module.scss'

const variantsMapping = {
  title3xl: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  caption: 'p',
  captionSmall: 'p',
  byline: 'p',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
}

const Typography = ({ variant, color, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : 'p'

  return (
    <Component
      className={cn(styles[`${variant}`], styles[`${color}`])}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
