import Head from 'next/head';
import Image from 'next/image';
import {Container,Row,Col} from 'reactstrap'
import styles from '../styles/Home.module.css';
import Shopping from "../assets/images/shopping.jpg"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codeswear</title>
        <meta name='description' content='Codeswear.com - Wear The Code' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className='px-0' fluid>
            <Image src={Shopping}
            width={1690}
            height={720}/>
      </Container>


    </div>
  )
}
