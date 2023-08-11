import { useRef } from "react";

import Body from "./components/body"
import Footer from "./components/footer"
import Header from "./components/header"


function App() {
  const divRef = useRef<null>(null);

  const scrollToDiv = () => {
    divRef?.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToDiv={scrollToDiv}/>
        <Body divRef={divRef}/>
      <Footer />
    </>
  )
}

export default App
