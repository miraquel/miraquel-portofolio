import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";
import { NavBar } from '../components/blog/index'

const Blog : NextPage = () => {
    return(
        <div>
            <Head>
                <title>Miraquel's BLog</title>
                <meta name="description" content="Miraquel's Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <NavBar />
        </div>
    )
}

export default Blog