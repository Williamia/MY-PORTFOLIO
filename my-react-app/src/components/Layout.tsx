import Footer from "./footer";
import Header from "./header";
import './Layout.css'

interface LayoutProps{
    children: React.ReactNode;
}

function Layout ({children}: LayoutProps){
    return(
        <div className="layout-class">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout