import {
	SiNodedotjs,
	SiTailwindcss,
	SiReact,
	SiVuedotjs,
	SiSupabase,
	SiPostgresql,
	SiC,
	SiDiscord,
	SiGmail,
	SiTelegram,
	SiServerless,
} from "react-icons/si";
import {
	MdComputer
} from 'react-icons/md';
import {
	GiComputerFan
} from 'react-icons/gi';
import { motion, useScroll } from "framer-motion";
import useViewPort from "./hooks/useViewPort";
import { useState } from "react";

import ActivityContent from "./components/ActivityContent";
import ProgressLine from "./components/ProgressLine";
import ActivityCard from "./components/ActivityCard";
import Socials from "./components/Socials";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

import data from "./assets/data";
import TechnologyList from "./components/TechnologyList";
import Contact from "./components/Contact";
import Tabs from "./components/Tabs";

function App() {
	const [language, setLanguage] = useState<number>(0);
	const [selectedActivityCard, setSelectedActivityCard] = useState<number>(0);
	const { scrollYProgress } = useScroll();
	const [width] = useViewPort();

	return (
		<div
			style={{
				backgroundImage: "url('../assets/background.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "100vh",
			}}
			className="bg-white dark:bg-slate-900"
		>
			<div className="none md:block fixed top-0">
				<ProgressLine />

				{scrollYProgress.get() < 2 && (
					<Navbar
						onLanguageChange={(lang) => {
							setLanguage(lang - 1);
						}}
					/>
				)}

				<Socials />
			</div>

			<motion.div
				className="ml-auto mrt- mr-auto md:w-[1000px] w-[350px] text-center md:text-left"
				initial={{ rotate: 45 }}
				animate={{ rotate: 0, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
			>
				<div className="inline-flex mt-40">
					<motion.h4
						drag
						draggable={true}
						animate={{
							rotate: [0, 35, 0],
						}}
						transition={{
							type: "keyframes",
							duration: 1,
							ease: "easeInOut",
							times: [0, 0.2],
							repeat: Infinity,
							repeatDelay: 0,
						}}
						className="w-[fit-content] text-[25px]"
					>
						👋
					</motion.h4>
					&nbsp;
					<motion.h4 className="text-blue-600 font-roboto md:text-2xl text-xl">
						{data[language].welcome[0]}
					</motion.h4>
				</div>

				<br />
				<label
					className={`
          text-dark dark:text-white font-poppins font-bold md:text-[60px] 
          text-[30px]
        `}
				>
					{data[language].welcome[1]}
				</label>

				<p
					className="font-poppins font-bold md:text-[60px] text-[25px] mt-[-7px] text-blue-600"
					style={{
						textShadow: "0 0 2px #2563eb, 0 0 40px #2563eb",
					}}
				>
					{data[language].welcome[2]}
				</p>

				<p className="font-poppins mt-2 text-[15px] md:text-[20px] dark:text-gray-300 text-gray-500">
					{data[language].welcome[3]}
				</p>
			</motion.div>

			<div
				className={`grid grid-cols-1 md:grid-cols-2 w-full lg:w-[1000px] 
        mr-auto ml-auto mt-40 md:w-[700px]`}
			>
				<div className="text-left">
					<ActivityCard
						icon={SiServerless}
						onClick={() => setSelectedActivityCard(0)}
						selected={selectedActivityCard === 0}
						title={data[language].whatIDo[0]}
						description={data[language].activityContent[3]}
						projectCount={12}
					/>

					{width < 800 && selectedActivityCard === 0 && (
						<>
							<ActivityContent selectedItem={0} selectedLang={language} />
						</>
					)}

					<ActivityCard
						icon={MdComputer}
						onClick={() => setSelectedActivityCard(1)}
						selected={selectedActivityCard === 1}
						title={data[language].whatIDo[1]}
						description={data[language].activityContent[4]}
						projectCount={20}
					/>

					{width < 800 && selectedActivityCard === 1 && (
						<>
							<ActivityContent selectedItem={1} selectedLang={language} />
						</>
					)}

					<ActivityCard
						icon={GiComputerFan}
						onClick={() => setSelectedActivityCard(2)}
						selected={selectedActivityCard === 2}
						title={data[language].whatIDo[2]}
						description={data[language].activityContent[5]}
						projectCount={10}
					/>

					{width < 800 && selectedActivityCard === 2 && (
						<>
							<ActivityContent selectedItem={2} selectedLang={language} />
						</>
					)}
				</div>

				<div className="text-left ml-[100px]">
					{width > 800 && (
						<>
							<ActivityContent
								selectedItem={selectedActivityCard}
								selectedLang={language}
							/>
						</>
					)}
				</div>
			</div>

			<div
				className={`
        mt-[150px] mr-auto ml-auto w-[400px] md:w-[800px] text-center md:text-left`}
			>
				<h1 className="font-poppins font-bold text-blue-600 text-[35px]">
					💻 {data[language].projectHeader[0]}
				</h1>
				<p
					className="
          mt-3 text-slate-500 mr-auto ml-auto md:mr-0 md:ml-0 
          md:text-xl table w-[310px] md:w-[522px] dark:text-slate-400"
				>
					{data[language].projectHeader[1]}
				</p>
			</div>

			<div
				className={`mt-[50px] mr-auto ml-auto w-[380px] grid grid-cols-1 md:grid-cols-2 md:w-[800px]
           2xl:w-[1200px] 2xl:grid-cols-3 grid-gap-4`}
			>
				<Project
					name={data[language].projects[0][0]}
					description={data[language].projects[0][1]}
					technologies={[
						{
							name: "React",
							icon: SiReact,
						},
						{
							name: "Node.js",
							icon: SiNodedotjs,
						},
						{
							name: "Tailwind",
							icon: SiTailwindcss,
						},
					]}
					imagePath={"project_portfolio.png"}
				/>

				<Project
					name={data[language].projects[2][0]}
					description={data[language].projects[2][1]}
					technologies={[
						{
							name: "Node.js",
							icon: SiNodedotjs,
						},
						{
							name: "React",
							icon: SiReact,
						},
					]}
					imagePath={"project_contalk.png"}
				/>

				<Project
					name={data[language].projects[3][0]}
					description={data[language].projects[3][1]}
					technologies={[
						{
							name: "VueJS",
							icon: SiVuedotjs,
						},
						{
							name: "Tailwind",
							icon: SiTailwindcss,
						},
					]}
					imagePath={"project_viceverse.png"}
				/>

				<Project
					name={data[language].projects[4][0]}
					description={data[language].projects[4][1]}
					technologies={[
						{
							name: "NextJS",
							icon: SiReact,
						},
						{
							name: "Tailwind",
							icon: SiTailwindcss,
						},
						{
							name: "Postgres",
							icon: SiPostgresql,
						},
						{
							name: "Supabase",
							icon: SiSupabase,
						},
					]}
					imagePath={"project_doucovani.png"}
				/>

				<Project
					name={data[language].projects[1][0]}
					description={data[language].projects[1][1]}
					technologies={[
						{
							name: "C",
							icon: SiC,
						},
					]}
					imagePath={"project_netscrape.png"}
				/>
			</div>

			<div className='mt-[50px] mr-auto ml-auto w-fit'>
				<motion.h1 className="text-blue-600 font-poppins font-bold text-[27px]">
					{data[language].technologies.title}
				</motion.h1>

				<motion.p className="mb-5 mt-3 text-slate-500 md:mr-0 md:ml-0 md:text-xl table w-[310px] md:w-[522px] dark:text-slate-400">
					{data[language].technologies.description}
				</motion.p>

				<Tabs
					tabs={[
						{
							title: "Jazyky",
							element: <h1>Jazyky</h1>
						},
						{
							title: "Databaze",
							element: <h1>databaze</h1>
						},
						{
							title: "Nastroje",
							element: <h1>Nastroje</h1>
						}
					]}
				/>

				<TechnologyList />
			</div>

			<div className="mt-[90px] w-[300px] md:w-[500px] mr-auto ml-auto text-center">
				<motion.h1 className="text-blue-600 font-poppins font-bold text-[27px]">
					{data[language].contact[0]} ✌️
				</motion.h1>

				<motion.p className="text-gray-400 text-[16px]">
					{data[language].contact[1]}
				</motion.p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mr-auto gap-5 ml-auto w-fit mt-4 mb-20">
					<Contact text="Discord" copyText="Atsukoro1#6323" icon={SiDiscord} />
					<Contact
						text="Email"
						href="mailto:dornicakkuba@gmail.com"
						icon={SiGmail}
					/>
					<Contact
						text="Telegram"
						copyText="Sonaj Solitarvan"
						icon={SiTelegram}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
