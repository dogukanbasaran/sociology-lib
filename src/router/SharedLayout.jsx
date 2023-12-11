import { Outlet } from "react-router"

import Header from "../components/Header"

const SharedLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default SharedLayout
