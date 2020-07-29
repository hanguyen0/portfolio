import React from 'react';
import Layout from '../components/layout';
// import styles from './contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <h4>I'd love to talk! Send me a message.</h4>
            <form method="post" action="#">
                <label>
                    Name
                    <br/>
                    <input type="text" name="name" id="name" placeholder="Jane Doe" required/>
                </label>
                <label>
                    Email
                    <br/>
                    <input type="email" name="email" id="email" placeholder="jane_doe@example.com" required/>
                </label>
                <label>
                    Subject
                    <br/>
                    <input type="text" name="subject" id="subject" placeholder="Hello" required/>
                </label>
                <label>
                    Message
                    <br/>
                    <textarea name="message" id="message" rows="5" placeholder="What's up?" required/>
                </label>
                <button type="submit">Send</button>
            </form>
        </Layout>
    )
}