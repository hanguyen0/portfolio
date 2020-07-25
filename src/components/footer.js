import React from 'react'
import styles from './footer.module.css'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaEnvelopeSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className={styles.github}>
                <a href="https://github.com/hanguyen0" target="_blank" title="External link to Github" rel="noreferrer">
                    <span>
                        <FaGithubSquare />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/ha-nguyen0/" target="_blank" title="External link to LinkedIn" rel="noreferrer">
                    <span>
                        <FaLinkedin />
                    </span>
                </a>
                <a href="https://twitter.com/uxsasukexnaruto" target="_blank" title="External link to Twitter" rel="noreferrer">
                    <span>
                        <FaTwitterSquare />
                    </span>
                </a>
                <a href="mailto:nguyha16@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span>
                    <FaEnvelopeSquare />
                    </span>
                </a>
            </div>
        </footer>
    )
}