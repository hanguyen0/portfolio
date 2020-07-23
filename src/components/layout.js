import React from "react"
import { Link } from "gatsby"
import styles from './layout.module.css'
import Footer from './footer'

const ListLink = props => (
  <li className={styles.listLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.home}>
          <h3 >Ha Nguyen</h3>
        </Link>
        <ul className={styles.nav}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <Footer />
    </div>
  )
}