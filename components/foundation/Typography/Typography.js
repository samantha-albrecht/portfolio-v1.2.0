import React from 'react'
import cn from 'classnames'
import styles from './Typography.module.scss'

const variantsMapping = {
  navH1: 'h1',
  navLink: 'li',
  title4xl: 'h1',
  title3xl: 'h2',
  title2xl: 'h2',
  titleXl: 'h3',
  titleL: 'h3',
  titleM: 'h3',
  titleS: 'h4',
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
  body: 'p',
  bodySmall: 'p',
  footer: 'p',
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
