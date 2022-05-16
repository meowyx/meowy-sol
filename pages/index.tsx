import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <h1>Hello 👋 </h1>

          <h4> I am meowy 🐱 from D_D 🙋</h4>

          <h4> Skills 💁</h4>

          <ul>
            
           <li>JavaScript</li> 
           <li>React and Next JS : learning</li>
           <li>Solidity : learning</li>
           <li>Rust : learning</li>

            
                
                </ul>




          <h4> Socials 🧑 </h4>

          <ul>
            
           <li>Twitter: <a href='https://twitter.com/me256ow'><b>https://twitter.com/me256ow</b></a></li> 
           <li>Github: <a href='https://twitter.com/me256ow'><b>https://github.com/meow-y</b></a></li> 

           
                
                </ul>


         <h2>Web3 Communities I am part of 🙆:</h2>


         <ul>
            
            <li><b>Developer DAO</b> : Moderator, Project champion, Core contributor Education team, DevDao Women team.</li> 
            <li><b>Surge Women</b> : Member</li>
            <li><b>Women Build Web3</b> : Contributor</li>

 
             
                 
        </ul>


         

    </div>
  )
}

export default Home
