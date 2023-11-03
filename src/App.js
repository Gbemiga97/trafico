import { About, Copyright, Faq, Footer, Hero, How, Testimonials } from "./sections";


function App() {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero />
      <About />
      <How />
      <Faq />
      <Testimonials />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
