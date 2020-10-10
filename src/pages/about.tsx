import React from 'react'
import { Header } from '../components/Header/Header'
import { Layout } from '../components/Layout/Layout'
import styles from './about.module.css'

const About = () => {
    return (
        <div>
            <Layout>
                <div className={styles.myTitle}>
                    About Page!
                </div>
            </Layout>
        </div>
    )
}

export default About
