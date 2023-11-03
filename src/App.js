import { About, Faq, Hero, How } from "./sections";


function App() {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero />
      <About />
      <How />
      <Faq />
    </div>
  );
}

export default App;
