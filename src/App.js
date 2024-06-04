import "./App.css";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";
const App = () => {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <body className="bg-[#282C33] font-FiraCode h-[fit] overflow-hidden">
        <Header />

        <Projects />

        <Skills />

        <About />

        <Contact />

        <Footer />
      </body>
    </HelmetProvider>
  );
};

export default App;
