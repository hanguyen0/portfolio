import React from "react"
// import { Link } from 'gatsby';
// import styles from './about-css-modules.module.css';
// import Header from '../components/header';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="random"></img>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
  )
}
