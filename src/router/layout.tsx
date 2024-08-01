import { Outlet } from "react-router-dom"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import { useResize } from "../hooks/useResize"

function Layout() {


    const width = useResize()

    return (
        <div>
            <Header />           
                <Outlet />  
            {width > 660 ? <Footer /> : null}
        </div>
    )
}


export default Layout
