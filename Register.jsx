import React from 'react'
import { TextBox } from '../shared/widgets/TextBox'
import { PasswordField } from '../shared/widgets/PasswordField'
import {Button} from '../shared/widgets/Button'

export const Register = () => {
  return (
<>
    <TextBox lbl="Userid" watermark="Type Userid Here"/>
    <PasswordField/>
    <TextBox lbl="Name" watermark="Type Name Here"/>
    <TextBox lbl="Phone" watermark="Type Phone Here"/>
      <br />
      <div className='row'>
    <Button lbl = "Register" css="success"/>
    <Button lbl="Reset" css="danger"/>
    </div>
</>
  )
}
