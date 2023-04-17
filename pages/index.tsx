import Head from "next/head";
import Link from "next/link";
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import {AiFillTwitterCircle ,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Portfolio | Ajay Chauhan</title>
        <meta name="ajaychauhan" />
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Ajay Chauhan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillBrightnessHighFill className="cursor-pointer text-2xl" />

              </li>
              <li>
                <Link href='#' className="
                bg-gradient-to-r 
                from-cyan-700 
                to-teal-500 
                text-white 
                px-4 
                py-2 
                border-none 
                rounded-md 
                ml-8
                
                "
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div>
              <h2>Ajay Chauhan</h2>
              <h3>Software Engineer</h3>
              <p>hi I am Software engineer i am a lead front end engineer and a ios Developer.</p>
          </div>
          <div>

          </div>
        </section>
      </main>
    </div>
  )
}
