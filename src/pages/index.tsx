import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Header from '../components/Sections/Header';
import { homePageMeta } from '../data/data';


const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </Page>
  );
});

Home.displayName = "Home"

export default Home;