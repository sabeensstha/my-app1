/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/3/w3.css"></link>
      </Head>
      <nav className="w3-bar w3-black">
        <a href="#home" className="w3-button w3-bar-item">Home</a>
        <a href="#band" className="w3-button w3-bar-item">Band</a>
        <a href="#tour" className="w3-button w3-bar-item">Tour</a>
        <a href="#contact" className="w3-button w3-bar-item">Contact</a>
      </nav>
      <section className="w3-container w3-content w3-center" style={{ maxWidth: "600px" }}>
        <p className="w3-justify">
          We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>
      {/* <!-- Band Members --> */}
<section className="w3-row-padding w3-center w3-light-grey">
  <article className="w3-third">
    <p>John</p>
    <img src="https://source.unsplash.com/random/200x200?sig=1" alt="Random Name"  />
    <p>John is the smartest.</p>
  </article>
  <article className="w3-third">
    <p>Paul</p>
    <img src="https://source.unsplash.com/random/200x200?sig=5" alt="Random Name"  />
    <p>Paul is the prettiest.</p>
  </article>
  <article className="w3-third">
    <p>Ringo</p>
    <img src="https://source.unsplash.com/random/200x200?sig=10" alt="Random Name"  />
    <p>Ringo is the funniest.</p>
  </article>
</section>
    </>
  )
}
