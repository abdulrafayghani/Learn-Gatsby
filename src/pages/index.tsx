import React from 'react';
import { Link, navigate } from 'gatsby'
import { Layout } from '../components/Layout/Layout';
import { Button } from '@material-ui/core'

export default function Home() {
    return (
        <div>
            <Layout>
            hello world {' '}
            <Link to='/about'>About </Link>
            <br/>
            <Button onClick={() => navigate('about')}>About with Button</Button>
            <Button onClick={() => navigate('add')}>Add with Button</Button>

            </Layout>
        </div>
    )
}
