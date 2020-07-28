import React from 'react'
import styles from './footer.module.css'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className={styles.icon}>
                <a href="https://github.com/hanguyen0" target="_blank" title="External link to Github" rel="noreferrer">
                    <span>
                        <FaGithubSquare />
                    </span>
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://www.linkedin.com/in/ha-nguyen0/" target="_blank" title="External link to LinkedIn" rel="noreferrer">
                    <span>
                        <FaLinkedin />
                    </span>
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://twitter.com/uxsasukexnaruto" target="_blank" title="External link to Twitter" rel="noreferrer">
                    <span>
                        <FaTwitterSquare />
                    </span>
                </a>
            </div>
        </footer>
    )
}