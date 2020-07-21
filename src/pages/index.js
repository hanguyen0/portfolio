import React from "react"
import { Link } from 'gatsby';
import Header from '../components/header';

export default function Home() {
  return (
    <div style={{color: `purple`}}>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Welcome to my site"/>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="random"></img>
    </div>
  )
}
