import React from 'react'

export const Button = ({lbl, css}) => {
  const cssClass=`btn btn-${css}`;
  return (
    <div className='col-1'>
        <button className={cssClass}>{lbl}</button>
    </div>
  )
}
