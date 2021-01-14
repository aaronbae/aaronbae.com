import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { sign_out } from '../redux/AdminActions'
import '../styles/header.css'

export default function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  const dropdown = useRef(null)
  const logged_in = useSelector((state) => state.AdminReducer.logged_in)
  const hide = () => {
    dropdown.current.classList.add("hide")
  }
  const toggle_dropdown = () => {
    const e = dropdown.current
    if(e.classList.contains("hide")){
      e.classList.remove("hide")
    } else {
      e.classList.add("hide")
    }
  }
  const handle_sign_out = () => {
    hide()
    dispatch(sign_out())
    router.push("/login")
  }
  return (
    <header className="header">
      <Link href="/"><a className="logo" onClick={hide}>Aaron Bae</a></Link>
      <button className="hamburger" onClick={toggle_dropdown}>
        <img src="/icons/hamburger_icon.png" />
      </button>
      <nav className="navigation hide" ref={dropdown}>
        <div className="tab-group">
          <Link href="/"><a className="tab" onClick={hide}>Home</a></Link>
          {/*
          <Link href="/blog"><a className="tab" onClick={hide}>Blog</a></Link>
          */
          }
          
          <Link href="/projects"><a className="tab" onClick={hide}>Projects</a></Link>
          {logged_in && <Link href="/admin"><a className="tab" onClick={hide}>Admin</a></Link>}
        </div>
        <div className="admin-group">
          {logged_in &&
            <a className="tab admin-tab" onClick={handle_sign_out}>Sign Out</a>
          }
          {!logged_in && 
            <Link href="/login"><a className="tab" onClick={hide}>Admin</a></Link>
          }
        </div>
      </nav>
    </header>
  )
}