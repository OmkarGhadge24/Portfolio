import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Dock, Navbar, Welcome } from "#components";
import { Terminal } from "#windows/index.js";

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  )
}

export default App