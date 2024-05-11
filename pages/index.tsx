import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Avatar, Button, Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import fetchGitHubStats, { fetchGitHubRepos } from "@/utils/github";
import HeroLayout from "@/components/index/hero";
import { userData } from "@/data/user-data";
import { useEffect, useState } from "react";
import GitStats from "@/components/index/stats";
import Projects from "@/components/index/projects";
import {
  FaCode,
  FaCss3,
  FaFacebook,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaMobile,
  FaNode,
  FaPhp,
  FaProjectDiagram,
  FaReact,
  FaSchool,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SocialMediaIcons from "@/components/common/social-icons";
import {
  FaC,
  FaDev,
  FaSpaghettiMonsterFlying,
  FaUpwork,
} from "react-icons/fa6";
import {
  SiAdobe,
  SiAngular,
  SiCsharp,
  SiExpress,
  SiJavascript,
  SiJquery,
  SiKotlin,
  SiLaravel,
  SiLinux,
  SiMacos,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhpmyadmin,
  SiPostgresql,
  SiPython,
  SiRuby,
  SiRubyonrails,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualbasic,
  SiVisualstudiocode,
  SiVuedotjs,
  SiWindows,
} from "react-icons/si";
import { MdWork } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

export async function getStaticProps() {
  try {
    const stats = await fetchGitHubStats();
    const repos = await fetchGitHubRepos();
    console.log(stats);
    return { props: { stats, repos } };
  } catch (error) {
    console.error(error);
    return { props: { stats: null } };
  }
}

interface profile {
  company: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  hireable: boolean;
}

export default function IndexPage({ stats, repos }: any) {
  const [displayText, setDisplayText] = useState(false);

  if (!stats) return null;

  const animateText = () => {
    setTimeout(() => {
      setDisplayText(true); // Delay setting the text display state by 3 seconds
    }, 3000);
  };

  return (
    <>
      <div style={{ position: "relative", height: "600px" }}>
        <video
          id="vikingVideo"
          width="100%"
          height="600"
          autoPlay
          muted
          onPlay={() => animateText()}
        >
          <source src="/videos/animatedviking.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          id="animatedText"
          className={`absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black bg-white shadow-lg rounded-full p-5 font-bold text-3xl animated-text ${
            displayText ? "block" : "hidden"
          } `}
        >
          <div className="flex flex-col gap-3 items-center">
            <img
              src="/images/future-tech.webp"
              alt="Borgar Flaen Stensrud"
              className="rounded-full w-full max-w-[400px]"
            />
          </div>
        </div>
      </div>
      <DefaultLayout>
        <div className=" pl-6  flex flex-col max-w-[100vw]">
          <div className="flex flex-row justify-start gap-4  w-[100%] relative">
            <div className="flex flex-row justify-start items-start gap-5 min-w-[50%] mr-10 pr-10 relative ">
              <div className="h-full flex flex-row justify-between w-[90%]">
                <div className="flex flex-col ">
                  <h1 className="text-4xl font-bold text-white uppercase">
                    Hi there, I am <br />
                    <span className="text-[#ffda03]">
                      Borgar Flaen Stensrud
                    </span>
                    &nbsp;👋 <br />
                    fullstack developer
                  </h1>

                  <div className="mt-5 flex flex-col items-start">
                    <div className="inline-block">
                      <h2 className="uppercase text-xl font-bold text-[#ffda03]">
                        developing sites and programs for{" "}
                        <span className="text-white">18 years</span>
                      </h2>
                      <div className="flex flex-row flex-grow w-[100%]">
                        <div className="min-h-[3px] w-[80.5%] bg-[#ffda03]"></div>
                        <div className="min-h-[3px] w-[19.5%]  bg-white"></div>
                      </div>
                      <div className="flex flex-row justify-between items-center mt-10">
                        <img
                          src="/images/hdots.png"
                          alt="graphics"
                          width={190}
                        />
                        <Button className="inline-block bg-[#ffda03] border-2 border-white rounded-none text-black uppercase font-bold w-[170px]">
                          Get my resume!
                        </Button>
                      </div>
                    </div>
                  </div>

                  <p className=" text-xl leading-9 text-white mt-14 max-w-[80%]">
                    A web developer with{" "}
                    <span className="text-[#ffda03]">
                      18 years of experience.
                    </span>
                    I have a <span className="text-[#ffda03]">bachelor</span> in
                    Dynamic Web Design from HiBu (2010-2013), and now working on
                    a <span className="text-[#ffda03]">bachelor</span> in
                    informatics at USN. I have worked with a lot of different
                    technologies and languages, but my main focus is on{" "}
                    <span className="text-[#ffda03]">
                      JavaScript, TypeScript, React, Next.js, Node.js, and
                      MongoDB.
                    </span>
                  </p>
                </div>
              </div>
              <img
                src="/images/hdots.png"
                alt="graphics"
                width={190}
                className="absolute top-0 right-20"
              />
            </div>
            <div className="flex flex-col place-items-start justify-start items-start  pt-20 min-w-[65%]  min-h-100 ">
              <div className="flex flex-col justify-between items-end absolute right-0 top-0 h-[100%]">
                <img
                  src="/images/hdots.png"
                  alt="graphics"
                  className="min-w-[130px]"
                />
                <img
                  src="/images/vdots.png"
                  alt="graphics"
                  className="min-h-[130px]"
                />
              </div>
              <div className="min-h-[100%]">
                <img
                  src="/images/display.png"
                  alt="Borgar"
                  width={800}
                  className="flex place-content-end"
                />

                <div className="mt-0 text-center -ml-16">
                  <h2 className="text-4xl font-bold  text-white ">
                    <span className="text-[#ffda03] ">Creations by </span>Borgar
                    Flaen Stensrud
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row  items-end w-[100%]">
            <div className="flex flex-col gap-1 text-white w-[50%] mt-16">
              <div className="flex flex-row gap-4 text-3xl">
                <span>º</span>
                <span>º</span>
                <span>º</span>
                <span>º</span>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <img src="/images/smphone.png" alt="call me" width={35} />

                <div className="flex flex-col items-start">
                  <p className="text-lg">Call me!</p>

                  <div className="inline-block">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#ffda03] font-bold text-xl border-b-3 border-b-[#ffda03]">
                        +47 975 01 753
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center w-[100%] ml-52">
              <div className="min-w-[20%]">
                <p className="text-white uppercase font-bold  ">
                  My latest work
                </p>
              </div>
              <div className="bg-white min-h-0.5 w-[100%]"></div>
            </div>
          </div>
        </div>

        {/** Main Content start and header end */}
        <div className="container mx-auto">
          <div className="mt-10 p-5 pt-16 text-black">
            <h2 className="text-3xl font-bold text-orange-500  mb-10 ">
              Education
            </h2>

            <div className="flex flex-row gap-10 flex-wrap justify-between">
              <div className="flex flex-row gap-10">
                <div className="card p-5 shadow-lg rounded-md max-w-1/4 text-center flex flex-col items-center gap-3">
                  <div className="flex flex-row items-center text-red-700 gap-4">
                    <FaSchool size={40} className="my-5" />
                    <h3 className="text-xl font-bold ">
                      College - HiBu, Norway
                    </h3>
                  </div>
                  <p>
                    Bachelor in Dynamic Web Design from HiBu (2010-2013) Grade
                    A, on Bachelor assignment.
                  </p>
                  <h2 className="text-2xl font-bold  ">
                    Favorite class:{" "}
                    <span className="text-xl font-normal">
                      Bachelor asignment
                    </span>
                  </h2>
                </div>

                <div className="card p-5 shadow-lg rounded-md flex-grow text-center flex flex-col items-center gap-3">
                  <div className="flex flex-row items-center text-red-700 gap-4">
                    <FaSchool size={40} className="my-5" />
                    <h3 className="text-xl font-bold ">
                      University - USN, Norway
                    </h3>
                  </div>
                  <p>
                    Bachelor in Informatics from USN (2022-2025) Grade A, on
                    Java exam and Project managment class.
                  </p>
                  <h2 className="text-2xl font-bold  ">
                    Favorite class:{" "}
                    <span className="text-xl font-normal">App development</span>
                  </h2>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="card p-5 shadow-lg rounded-md max-w-1/4 text-center flex flex-col items-center gap-3">
                  <div className="flex flex-row items-center text-red-700 gap-4">
                    <FaSchool size={40} className="my-5" />
                    <h3 className="text-xl font-bold ">
                      Coursing - GetAcademy, Larvik, Norway
                    </h3>
                  </div>
                  <p>
                    Courses from GetAcademy in Larvik, Norway (2021). Courses in
                    javascript, c#, web-development and mindfullness.
                  </p>
                  <h2 className="text-2xl font-bold  ">
                    Favorite class:{" "}
                    <span className="text-xl font-normal">C# main project</span>
                  </h2>
                </div>

                <div className="card p-5 shadow-lg rounded-md flex-grow text-center flex flex-col items-center gap-3">
                  <div className="flex flex-row items-center text-red-700 gap-4">
                    <FaSchool size={40} className="my-5" />
                    <h3 className="text-xl font-bold ">
                      High School - Klosterskogen, Skien, Norway
                    </h3>
                  </div>
                  <p>
                    High School from Klosterskogen, Skien, Norway (2006-2009),
                    Media and Communication. Learned everything from web-dev to
                    web-design, typography, print-design, photography,
                    videography, multi-camra-production, sound production, and
                    more. Used Adobe.
                  </p>
                  <h2 className="text-2xl font-bold  ">
                    Favorite class:{" "}
                    <span className="text-xl font-normal">Web development</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-5 pt-16 text-black">
            <h2 className="text-3xl font-bold text-orange-500  mb-10 ">
              Current jobs and projects
            </h2>

            <div className="flex flex-row gap-10 justify-between">
              <div className="card p-5 shadow-lg rounded-md max-w-1/3 text-center flex flex-col items-center gap-3">
                <div className="flex flex-row items-center text-red-700 gap-4">
                  <MdWork size={40} className="my-5" />
                  <h3 className="text-3xl font-bold ">Job</h3>
                </div>
                <p>
                  Recently signed contract for internship at Rubynor, in Skien,
                  Norway. Start is 5. august 2024
                </p>
                <h2 className="text-2xl   ">
                  <span className="font-bold text-red-700">Role:</span>{" "}
                  Developer intern
                </h2>
                <h2>Tech stack:</h2>
                <div className="flex flex-row gap-4">
                  <span className="flex flex-row gap-2 items-center">
                    <SiRuby size={20} className="text-red-700" /> Ruby
                  </span>
                  <span className="flex flex-row gap-2 items-center">
                    <SiRubyonrails size={20} className="text-red-700" /> Ruby on
                    Rails
                  </span>
                </div>
              </div>

              <div className="card p-5 shadow-lg rounded-md  text-center flex flex-col items-center gap-3">
                <div className="flex flex-row items-center text-red-700 gap-4">
                  <FaProjectDiagram size={40} className="my-5" />
                  <h3 className="text-3xl font-bold ">Current Project</h3>
                </div>
                <p>
                  Working on a admin portal, that generates admin panels based
                  on created db, or it generate db and ERM schemas and models
                  for you, with forms to crud the generated / loaded data!
                </p>
                <h3 className=" text-xl  ">
                  <span className="font-bold text-red-700 text-2xl">Role:</span>{" "}
                  Project manager / developer
                </h3>
                <h3 className=" text-xl  ">Tech stack:</h3>
                <div className="flex flex-row gap-2">
                  <FaNode size={60} />
                  <SiTailwindcss size={60} />
                  <FaReact size={60} />
                  <SiMongodb size={60} />
                  <SiExpress size={60} />
                  <SiNextdotjs size={60} />
                  <SiMysql size={60} />
                  <SiPostgresql size={60} />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-10 mt-10 justify-between">
              <div className="card p-5 shadow-lg rounded-md w-1/3 text-center flex flex-col items-center gap-3">
                <div className="flex flex-row items-center text-red-700 gap-4">
                  <MdWork size={40} className="my-5" />
                  <h3 className="text-3xl font-bold ">Future Tech</h3>
                </div>
                <p>
                  My own company. I have worked solo since 2013, doing print
                  design and web-dev / design. I have worked with a lot of
                  different technologies and languages, but my main focus is on
                  JavaScript, TypeScript, React, Next.js, Node.js, and MongoDB.
                </p>
                <h2 className="text-2xl   ">
                  <span className="font-bold text-red-700">Role:</span> Owner,
                  the production line, researcher and janitor
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-10 p-5 pt-16 text-white">
            <h2 className="text-3xl font-bold text-orange-500  mb-10 ">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="service-card p-4 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-orange-500 transition-colors cursor-pointer flex flex-col items-center gap-3">
                <FaDev size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Web Development</h3>
                <p>
                  Full stack web development using modern technologies like
                  React, Node.js, and more.
                </p>
              </div>

              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaMobile size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Mobile Apps</h3>
                <p>
                  Develop high-quality iOS and Android applications tailored to
                  your business needs.
                </p>
              </div>

              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaSpaghettiMonsterFlying size={80} className="my-5" />
                <h3 className="text-xl font-semibold">SEO Optimization</h3>
                <p>
                  Enhance your website&apos;s visibility and ranking on search
                  engines through optimized SEO practices.
                </p>
              </div>
            </div>
          </div>

          {/** Skills section */}
          <div className="mt-10 p-5 pt-16 text-white">
            <h2 className="text-3xl font-bold text-orange-500  mb-10 ">
              Skils
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="service-card p-4 text-center bg-gray-800 rounded-lg shadow-lg hover:bg-orange-500 transition-colors cursor-pointer flex flex-col items-center gap-3">
                <FaJava size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Java</h3>
                <p>Development in Java</p>
              </div>

              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaPhp size={80} className="my-5" />
                <h3 className="text-xl font-semibold">PHP</h3>
                <p>
                  Years of experience in PHP development, including Laravel.
                  Have used php 5 -&gt; 8
                </p>
              </div>

              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaNode size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Node.js</h3>
                <p>
                  Been developing in Node.js for 5 years now. And I still love
                  it!
                </p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaHtml5 size={80} className="my-5" />
                <h3 className="text-xl font-semibold">HTML 5</h3>
                <p>I have used html since i was 12, 22 years ago!</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaCss3 size={80} className="my-5" />
                <h3 className="text-xl font-semibold">CSS 3</h3>
                <p>
                  I&apos;ve used css for 18 years now, flex is my favourite!
                </p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaReact size={80} className="my-5" />
                <h3 className="text-xl font-semibold">React.js</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiNextdotjs size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Next.js</h3>
                <p>Next.js is my new favourite</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiRuby size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Ruby</h3>
                <p>Learning Ruby and Ruby on Rails now !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiJavascript size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Javascript</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiLaravel size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Laravel</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiJquery size={80} className="my-5" />
                <h3 className="text-xl font-semibold">JQuery</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiVuedotjs size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Vue</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiAngular size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Angular</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiPython size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Python</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiAdobe size={80} className="my-5" />
                <h3 className="text-xl font-semibold">
                  Illustrator & Photoshop
                </h3>
                <p>Love developing UI in react !</p>
              </div>

              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaProjectDiagram size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Project management</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <FaProjectDiagram size={80} className="my-5" />
                <h3 className="text-xl font-semibold">
                  Agile development & Scrum
                </h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <BsGithub size={80} className="my-5" />
                <h3 className="text-xl font-semibold">GitHub</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiVisualstudiocode size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Visual studio code</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiVisualbasic size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Visual Basic</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiCsharp size={80} className="my-5" />
                <h3 className="text-xl font-semibold">C#</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiTypescript size={80} className="my-5" />
                <h3 className="text-xl font-semibold">TypeScript</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiMongodb size={80} className="my-5" />
                <h3 className="text-xl font-semibold">MongoDB</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiMysql size={80} className="my-5" />
                <h3 className="text-xl font-semibold">MySql</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiPhpmyadmin size={80} className="my-5" />
                <h3 className="text-xl font-semibold">PhpMyAdmin</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiVercel size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Vercel</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiWindows size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Windows</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiLinux size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Linux</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiMacos size={80} className="my-5" />
                <h3 className="text-xl font-semibold">MacOS</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiSwift size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Swift</h3>
                <p>Love developing UI in react !</p>
              </div>
              <div className="service-card p-4 bg-gray-800 rounded-lg hover:bg-orange-500 shadow-lg transition-colors cursor-pointer flex flex-col items-center gap-3 text-center">
                <SiKotlin size={80} className="my-5" />
                <h3 className="text-xl font-semibold">Kotlin</h3>
                <p>Love developing UI in react !</p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <div className="flex flex-row gap-1 items-center">
              <GithubIcon size="80" />
              <div className="flex flex-col gap-2">
                <h2 className=" text-xl font-bold">
                  Borgar Flaen Stensrud&apos;s{" "}
                  <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                    GitHub Stats
                  </span>
                </h2>
                {stats ? (
                  <div className="flex flex-row gap-3">
                    <p>
                      <strong className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                        Followers:
                      </strong>{" "}
                      {stats.followers}
                    </p>
                    <p>
                      <strong className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                        Following:{" "}
                      </strong>{" "}
                      {stats.following}
                    </p>
                    <p>
                      <strong className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                        Public Repos:
                      </strong>{" "}
                      {stats.public_repos}
                    </p>
                  </div>
                ) : (
                  <p>Failed to load GitHub stats.</p>
                )}
              </div>
            </div>
          </div>

          <HeroLayout profile={stats} />
          <GitStats />
          <Projects projects={repos} profile={stats} />
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="flex flex-row gap-5 items-center">
              <Image
                src="/images/borgarai.png"
                alt="Borgar"
                width={200}
                height={200}
              />
              <div className="inline-block max-w-xxl text-center justify-center">
                <h1 className={title()}>Borgar Flaen Stensrud&apos;s&nbsp;</h1>
                <h1 className={title({ color: "violet" })}>Portfolio&nbsp;</h1>
                <br />
                <h1 className={title()}>websites regardless of your needs.</h1>
                <h4 className={subtitle({ class: "mt-4" })}>
                  Beautiful, fast and modern websites, apps, programs,
                  automations.
                </h4>
                <h4>
                  We work with AI, Machine Learning, Web Development, App
                  Development, Automation, and more.
                </h4>
              </div>
            </div>
            <div className="flex gap-3"></div>
          </section>
        </div>
      </DefaultLayout>
    </>
  );
}
