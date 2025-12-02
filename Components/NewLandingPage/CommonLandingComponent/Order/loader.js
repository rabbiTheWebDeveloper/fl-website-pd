
import { Oval } from  'react-loader-spinner'
const Loader =({color})=>{
    return <Oval
    height={30}
    width={30}
    color={color? color:"#1a3997"}
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor={color? color:"#1a3997"}
    strokeWidth={5}
    strokeWidthSecondary={2}

  />
}

export default Loader