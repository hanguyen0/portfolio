import React from 'react';
import Layout from '../components/layout';
import styles from './contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <h4>I'd love to talk! Send me a message.</h4>
            <form method="post" action="#">
                <label>
                    Name
                    <input type="text" name="name" id="name" placeholder="Jane Doe"/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" placeholder="jane_doe@example.com"/>
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" placeholder="Hello"/>
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" placeholder="What's up?"/>
                </label>
                <button type="submit">Send</button>
                {/* <input type="reset" value="Clear" /> */}
            </form>
        </Layout>
    )
}