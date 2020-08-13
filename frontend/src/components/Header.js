import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { sign_out } from '../redux/AdminActions'
import '../styles/header.css'

export default function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  const logged_in = useSelector((state) => state.AdminReducer.logged_in)
  const handle_sign_out = (e) => {
    dispatch(sign_out())
    router.push("/login")
  }
  return (
    <header className="header">
      <Link href="/"><a className="logo">Aaron Bae</a></Link>
      <nav className="tab-group">
        <Link href="/"><a className="tab">Home</a></Link>
        <Link href="/blog"><a className="tab">Blog</a></Link>
      </nav>
      {logged_in &&
        <a className="tab admin-tab" onClick={handle_sign_out}>Sign Out</a>
      }
      {!logged_in && 
        <Link href="/login"><a className="tab admin-tab">Admin</a></Link>
      }
    </header>
  )
}