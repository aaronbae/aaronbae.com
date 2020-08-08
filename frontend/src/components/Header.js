import { useSelector } from 'react-redux'
import Link from 'next/link'
import '../styles/header.css'

export default function Header() {
  const logged_in = useSelector((state) => state.AdminReducer.logged_in)
  return (
    <header className="header">
      <Link href="/"><a className="logo">Aaron Bae</a></Link>
      <nav className="tab-group">
        <Link href="/"><a className="tab">Home</a></Link>
        <Link href="/blog"><a className="tab">Blog</a></Link>
      </nav>
      {logged_in &&
        <Link href="/login"><a className="tab admin-tab">Sign Out</a></Link>
      }
      {!logged_in && 
        <Link href="/login"><a className="tab admin-tab">Admin</a></Link>
      }
    </header>
  )
}