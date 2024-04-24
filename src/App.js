import "./App.css";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <body className="bg-[#282C33] font-FiraCode h-[fit] overflow-hidden">
      <Header />

      <Projects />

      <Skills />

      <About />

      <Contact />

      <Footer />
    </body>
  );
};

export default App;
