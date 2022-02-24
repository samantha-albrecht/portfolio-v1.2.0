import styles from './MainGrid.module.scss'
import cn from 'classnames'

function MainGrid({ color, children }) {
  return (
    <div className={cn(styles.mainGrid, styles[`${color}`])}>{children}</div>
  )
}

export default MainGrid
