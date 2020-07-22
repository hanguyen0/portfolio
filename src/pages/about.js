import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

function About() {
    return (
        <Layout>
            <Link to="/">Home</Link>
            <Header headerText="About me"/>
            <p>Such wow. Very React.</p>
        </Layout>
    )
}

export default About;