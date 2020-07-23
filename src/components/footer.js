import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles.github}>
                <a href="https://github.com/hanguyen0" target="_blank" title="External link to Github">
                    <span>
                        <i className="fab fa-github"></i>
                    </span>
                </a>
            </div>
        </footer>
    )
}