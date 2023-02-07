import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import me from "../public/me.jpg";
// import code from "../public/code.png";

import Image from "next/image";

import web from "../public/Online-Website-No-Background.png"
import Python from "../public/Python_Png_Egg.png"
import Machine_learning from "../public/ML_pngegg.png"

import Salary2 from "../public/Salary2.png"
import HRS1 from "../public/HRS1.png"
import HRS2 from "../public/HRS2.png"
import HRS3 from "../public/HRS3.png"
import HRS4 from "../public/HRS4.png"
import birdy from "../public/Birdy_bot.png"
// import pknn from "../public/PKNN.png"
// import sec1 from "../public/sec1.png"
// import sec2 from "../public/sec2.png"
// import todo from "../public/todo.png"
import todo1 from "../public/todo1.png"
import Birdy1 from "../public/Birdy1.png"



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Heli A. Patel Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            {/* <h1 className="font-burtons text-xl">Made by Heli</h1> */}
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1dUg9_2AnaTvH1nQTzOoIq4DcbxqWAJR8/view?usp=share_link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Heli Patel
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Developer and ML Enthusiast.

              {/* <p>I am a Master's student @ Carleton University.</p> */}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a Masters student at Carleton University.
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/helipatelhp/" ><AiFillLinkedin /></a>
              <a href="mailto:helialpeshkumarpatel@cmail.carleton.ca"> <AiFillMail /></a>

            </div>
            <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={me} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my journey, I have had the privilege of working on a diverse range of projects, each one teaching me something new and helping me to grow both personally and professionally.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={web} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Web
              </h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Python} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Python
              </h3>
              {/* <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Machine_learning} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Machine Learning</h3>
              {/* <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              From a young age, I have always been driven by a passion for solving problems and creating innovative solutions. I was fascinated by the world of technology and the endless possibilities it held.
              I pursued this passion by earning degrees in Computer Science and honing my skills through various projects and internships.
              My journey has been a constant learning experience, and I am grateful for every opportunity that has come my way.
              {/* Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use. */}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Through my projects, I have been able to apply my technical knowledge and problem-solving skills to real-world situations.
              From developing a web application for a local non-profit organization to automating a manual process for a large corporation, I have gained a deep understanding of what it takes to create a successful project.
              {/* I offer from a wide range of services, including brand design,
              programming and teaching. */}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As I continue to grow as a software developer, I am excited to share my work and journey with you.
              Below, you will find a showcase some of my projects and the skills and technologies I used to bring them to life.
            </p>
          </div>

          <h2 className="text-3xl py-5 dark:text-white">Human Resource System</h2>
          <div className="flex flex-col-4 py-10 lg:flex-row ">


            <div className="basis-1/3 flex-1 ">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"25"}
                height={"17"}
                layout="responsive"
                src={HRS1}
              />
            </div>


            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"25"}
                height={"17"}
                layout="responsive"
                src={HRS2}
              />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"50%"}
                height={"50%"}
                layout="responsive"
                src={Salary2}
              />
            </div> */}
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"25"}
                height={"17"}
                layout="responsive"
                src={HRS4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"25"}
                height={"17"}
                layout="responsive"
                src={HRS3}
              />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"50%"}
                height={"50%"}
                layout="responsive"
                src={Salary2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"50%"}
                height={"50%"}
                layout="responsive"
                src={pknn}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"50%"}
                height={"50%"}
                layout="responsive"
                src={birdy}
              />
            </div> */}

          </div>

          <h2 className="text-3xl py-5 dark:text-white">Real-time Anomaly Detection in Databases</h2>
          <div className="flex flex-col-4 py-10 lg:flex-row">
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"10"}
                height={"5"}
                layout="responsive"
                src={"https://drive.google.com/uc?export=view&id=1jZErrybdQp6YiL989c4zDmHyZR8ph0cV"}
              />
            </div>


          </div>
          <h2 className="text-3xl py-5 dark:text-white">To-do Application</h2>
          <div className="flex flex-col-4 py-10 lg:flex-row ">
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"12"}
                height={"6"}
                layout="responsive"
                src={todo1}
              />
            </div>
          </div>



          <h2 className="text-3xl py-5 dark:text-white">Salary Prediction Tool</h2>
          <div className="flex flex-col-4 py-10 lg:flex-row ">
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"25"}
                height={"13"}
                layout="responsive"
                src={Salary2}
              />
            </div>


          </div>

          <h2 className="text-3xl py-5 dark:text-white">Birdy Chatbot</h2>
          <div className="flex flex-col-4 py-10 lg:flex-row ">
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"20"}
                height={"15"}
                layout="responsive"
                src={Birdy1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                // class="object-cover h-100 w-100"
                // className="rounded-lg object-cover"
                width={"20"}
                height={"15"}
                layout="responsive"
                src={birdy}
              />
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
