import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Section from '@/components/navbar'
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Samuel-Green.com</title>
				<meta name="description" content="Samuel-Green.com" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div>
				<Hero />
				<About/>
				<Skills title="skills"/>
				<Projects />
				<Contact/>
			</div>
		</>
	);
};

export default Home;
