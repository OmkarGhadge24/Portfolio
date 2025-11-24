import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Dock, Home, Navbar, Welcome } from "#components/index.js";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from "#windows/index.js";

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App