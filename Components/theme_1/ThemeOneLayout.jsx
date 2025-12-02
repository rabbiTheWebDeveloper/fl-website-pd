import Footer from "./Common/Footer"
import Menubar from "./Common/Menubar"

const ThemeOneLayout = ({ shopInfo, children }) => {
    return (
        <>
            <Menubar shopInfo={shopInfo} />
            {children}
            <Footer shopInfo={shopInfo} />
        </>
    )
}
export default ThemeOneLayout;