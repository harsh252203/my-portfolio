import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        <img className={styles.img} src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/harsh_sharma_n4LylQv.jpg" alt="" />
        <h1 className={styles.title}>
           Harsh Sharma 
        </h1>

        <p className={styles.description}>
          Student at G H raisoni college of engineering
        </p>
        <Link href="/harsh">
        <button className={styles.newpage}>
          Click Me
        </button>
        {/* <h1>harsh</h1> */}
        </Link>
        
      </main>

    </div>
  )
}