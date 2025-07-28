import Head from "next/head";
import dynamic from "next/dynamic";

import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
import Certifications from "../src/components/Certifications";

import Home from "../src/components/Home";
import Features from "../src/components/Features";
import About from "../src/components/About";
import CounterSection from "../src/components/CounterSection";
import Portfolio from "../src/components/Portfolio";
import Skills from "../src/components/Skills";
import Service from "../src/components/Service";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Contact from "../src/components/Contact";
import Blog from "../src/components/Blog";
import Copyright from "../src/components/Copyright";

const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Bharathwaz | Data Engineer</title>
      </Head>
      <MobileHeader />
      <Header />
      <Home />
      <Features />
      <About />
      <CounterSection />
      <Portfolio />
      <Skills />
      <Service />
      <Partners />
      <Certifications />
      <Process />
      <Testimonials />
      <Contact />
      <Blog />
      <Copyright />
      <Mouse />
      <ScrollTop />
    </Layout>
  );
};

export default Index;
