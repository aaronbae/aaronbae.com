import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { check_account } from '../redux/AdminActions'
import "../styles/login.css"

export default function Login() {
  const failed_attempt = useSelector(state => state.AdminReducer.failed_attempt)
  const logged_in = useSelector(state => state.AdminReducer.logged_in)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if(logged_in){
      router.push("/admin")
    }
  }, [logged_in])

  const handleSignInButton = (e) => {
    e.stopPropagation();
    var both_inputs = document.getElementsByClassName("text-input")
    dispatch(check_account(both_inputs[0].value, both_inputs[1].value))
  }
  
  return (
    <div className='login-container'>
        <div className="card-wrapper login-box">
          <p className="login-header">Admin Access</p>
          <input className={failed_attempt?"incorrect text-input":"text-input"} type="text" placeholder="Admin Id"/>
          <input className={failed_attempt?"incorrect text-input":"text-input"} type="password" placeholder="Admin Password"/>
          <button className="sign-in-button" onClick={handleSignInButton}>Sign In</button>
        </div>
    </div>
  )
}