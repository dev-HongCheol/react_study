import React from 'react'
import '../assets/css/ScssComponent.scss'

// yarn add node-sass
// yarn add -D sass
export default function ScssCompoent () {
  return (
        <div>
            <h6>ScssCompoent</h6>
            <div className='ScssComponent'>
                <div className='box red'></div>
                <div className='box orange'></div>
            </div>
        </div>
  )
}
