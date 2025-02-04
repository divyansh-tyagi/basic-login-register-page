import { Button } from "../shared/widgets/Button"
import { PasswordField } from "../shared/widgets/PasswordField"
import { TextBox } from "../shared/widgets/TextBox"

export const Login = () => {
  return (
    <>
    <TextBox lbl="Userid" watermark="Type Userid Here"/>
    <PasswordField/>
<br />
    <div className="row">
    <Button lbl="Login" css="primary"/>
    <Button lbl="Reset" css="secondary"/>
    </div>
</>

  )
}
