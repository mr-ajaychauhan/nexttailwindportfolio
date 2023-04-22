import Head from "next/head";
import {
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import Link from "next/link";
// import Pdf from "/public/resume.pdf"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next js Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Ajay Chauhan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href={'https://drive.google.com/file/d/1H9BdqlJaNev7Tfd-hgHvcqGG2ktb69df/view?usp=drivesdk'}
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ajay Chauhan
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Lead Front End Engineer & IOS Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              i am a MERN Full Stack Developer and i Have also wrok with GraphQL, Postgresql and Next Js . 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href="https://linkedin.com/in/mr-ajaychauhan" target="_blank" >
              <AiFillLinkedin />
              </Link>
              
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} alt="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Service I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a software developer, I offer freelance services to clients seeking top-notch software solutions. With my years of experience in the industry, I provide a wide range of services to meet your specific needs.
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Whether you are a small business owner looking to improve your online presence or a large corporation seeking complex software solutions, I am here to help. My expertise includes developing custom software applications, designing user-friendly websites, and creating mobile applications that meet the needs of businesses of all sizes.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            So, if you are looking for a reliable software developer who can provide project-based services or work as a freelancer, look no further. Contact me today to discuss your software development needs, and let us work together to bring your ideas to life.
            </p>
          </div>
          
        </section>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image alt="img1" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt='profile' src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let us make it a
                reality.
              </p>
             
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt='pic12' src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}