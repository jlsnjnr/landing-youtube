import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AboutUs } from './components/AboutUs';
import { Jobs } from './components/Jobs';
import { Testimonial } from './components/Testimonial';
import { Collaboration } from './components/Collaboration';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div className='p-6'>
        <Header />
        <Banner />
        <AboutUs />
        <Jobs />
        <Testimonial />
        <Collaboration />
      </div>
      <Footer />
    </>
  )
}

export default App
