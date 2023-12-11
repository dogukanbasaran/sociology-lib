import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import SharedLayout from "./SharedLayout"

import Home from "../pages/Home"
import About from "../pages/About"

const Routing = () => {
  return <Router>
     <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
      <Route path="*" element={<div>404</div>}/>
     </Routes>
  </Router>
}

export default Routing
