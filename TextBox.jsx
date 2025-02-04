import React from 'react'

//export const TextBox = (props) => {
  export const TextBox=({lbl, watermark})=>{
  return (
    <div className="form-group">
      <label>{lbl}</label>
      <input className="form-control" type='text' placeholder={watermark}/>
      {/* <label>{props.lbl}</label> */}
      {/* <input className="form-control" type='text' placeholder={obj.watermark}/> */}
    </div>
      )
}
