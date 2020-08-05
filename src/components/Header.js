import Link from 'next/link'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <Link href="/"><a className="logo">Aaron Bae</a></Link>
      <nav className="tab-group">
        <Link href="/"><a className="tab">Home</a></Link>
        <Link href="/blog"><a className="tab">Blog</a></Link>
      </nav>
    </header>
  )
}