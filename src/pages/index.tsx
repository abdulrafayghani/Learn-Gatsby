import React from 'react';
import { Link, navigate } from 'gatsby'
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';

export default function Home() {
    return (
        <div>
            <Layout>
            hello world {' '}
            <Link to='/about'>About </Link>
            <br/>
            <button onClick={() => navigate('about')}>About with Button</button>
            </Layout>
        </div>
    )
}
