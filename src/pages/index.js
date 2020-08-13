import React from "react"
import Layout from '../components/layout'
import Pic from '../images/profile_pic.jpeg'

export default function Home() {
  return (
    <Layout>
      <p>Hello World</p>
      <img src={Pic}alt="Profile Pic"></img>
      <div>

      </div>
    </Layout>
  )
}
