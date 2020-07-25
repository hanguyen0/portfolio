import React from 'react';
import Layout from '../components/layout';

export default function Contact() {
    return (
        <Layout>
            <h4>I'd love to talk! Email me at the address below</h4>
            {/* <p>
                <a href="mailto:nguyha@example.com">nguyha@gmail.com</a>
            </p> */}
            <form action="mailto:mailto:nguyha@gmail.com" method="GET" target="_blank">
                <div>
                    <label for="subject">Subject</label>
                    <input name="subject" id="subject" type="text" class="input" value="Example Email Subject"/>
                </div>
                <div>
                    <label for="body">Body</label>
                    <textarea class="textarea" name="body" id="body"></textarea>
                </div>
                <div>
                    <input type="submit" value="Send" class="button is-primary"/>

                </div>
            </form>
        </Layout>
    )
}