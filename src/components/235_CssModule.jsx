import React from 'react'
import styles from '../assets/css/CSSModule.module.css'
export default function CssModule () {
  return (
        <div>
            <h6>CssModule</h6>
            <div className={styles.wrapper}>module.css test</div>
        </div>
  )
}
