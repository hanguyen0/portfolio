import React from "react"
import Layout from '../components/layout'
import ProfilePic from '../images/profile_pic1.jpeg'
import styles from './about.module.css'
function About() {
    return (
        <Layout>
            <div className={styles.about}>
                {/* <div> */}
                    <img  src={ProfilePic} alt="head shot"/>
                {/* </div> */}
                <div className={styles.paragraph}>
                    <p >I was into science, now I’m into tech. I started to learn to code while finding a career path after graduating from college. I took an intro to programming course on Coursera and I was hooked. Even when working a full-time job, I’d still spare out time each week to learn more about web development. I find web development exciting and even went through an intensive period of study to immerse myself with programming.</p>
                </div >
            </div>
        </Layout>
    )
}

export default About;