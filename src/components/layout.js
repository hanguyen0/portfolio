import React from "react"
import { Link } from "gatsby"
import styles from './layout.module.css'
import Footer from './footer'
import MyComponent from './toggler'
// import 'bootstrap/dist/css/bootstrap.min.css';

const ListLink = props => (
  <li className={styles.listLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}>
      <header className={styles.header}>
        <Link to="/" className={styles.home}>
          <h3 >Ha Nguyen</h3>
        </Link>
        <ListLink>
            <MyComponent />
        </ListLink>
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