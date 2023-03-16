import React from 'react'
import Style from "./style.module.css"

function Resgister() {
  return (
    <div className={Style.l_wrapper}>
          <div className={Style.wrapper}>
            <h1>Registration</h1>
        <form action="#">
            <div className={Style.input_box}>
                <input type="text" placeholder="Enter your name" required/>
            </div>
            <div className={Style.input_box}>
                <input type="email" placeholder="Enter your email" required/>
            </div>
            <div className={Style.input_box}>
                <input type="password" placeholder="Create password" required />
            </div>
            <div className={Style.input_box}>
                <input type="password" placeholder="Confirm password" required />
            </div>
            <div className={Style.policy}>
                <input type="checkbox" />
                <h3>I accept all terms & condition</h3>
            </div>
            <div className={Style.register}>
                <input type="Submit" value="Register Now" />
            </div>
            <div className={Style.text}>
                <h3>Already have an account? <a href="#">Login now</a></h3>
            </div>
        </form>
        </div>
    </div>
  )
}

/*
type Props = {
    placeholder?: string
}

const Input:React.FC<Props> = ({ placeholder}) => {
    return (
        <div className={Style.input_box}>
            <input className={Style.input} type="text" placeholder={placeholder} required />
        </div>
        )
}
*/

export default Resgister;