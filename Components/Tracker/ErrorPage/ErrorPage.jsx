import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header"
import style from '../style.module.css';

const ErrorPage = ({error})=>{
    return(
        <div id="__app" className={style.app}>
           <Header />
           <div style={{height:"90vh"}}>
             <h1 style={{textAlign:"center", margin:"30px"}}>{error}</h1>
           </div>
           <Footer />
        </div>
    )
}
export default ErrorPage;