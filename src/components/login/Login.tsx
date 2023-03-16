import React from 'react'
import Styles from './style.module.css';

function Login() {
  return (
    <div className={Styles.l_wrapper}>
        <div className={Styles.container}>
            <h1 className={Styles.title}>Login</h1>
        
            <form action="#">
                <div className={Styles.input_box}>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className={Styles.input_box}>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <div className={Styles.checkbox_text}>
                    <div className={Styles.checkbox_content}>
                        <input type="checkbox" id="logCheck"/>
                        <label className={Styles.text}>Remember me</label>
                    </div>

                    <a href="#" className={Styles.text}>Forgot password?</a>
                </div>
                <div className={Styles.button}>
                    <input type="submit" value="Login"/>
                </div>
            </form>

            <div className={Styles.login_signup}>
                <span className={Styles.text}>Not a member?
                    <a href="#" className={Styles.text_signup_link}>Signup Now</a>
                </span>
            </div>
        </div>
    </div>
  )
}

/*
type Props = {
    className?: string,
    placeholder?: string
    value?: string
    onChange: any
}

const Input:React.FC<Props> = ({ placeholder}) => {
    return (
        <div className={Styles.input_box}>
            <input className={Styles.input} type="text" placeholder={placeholder} />
        </div>
        )
}
*/
export default Login;
