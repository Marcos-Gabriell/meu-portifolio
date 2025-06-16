import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
