import { useAppSelector } from "../hooks";
import Ocurrences from "./users/Ocurrences";

const CSelector = () => {
  const { component } = useAppSelector((state) => ({ component: state?.Layout?.component }))

  switch(component){
    case 'userOcurrences':
      return <Ocurrences />
      default:
        return <></>
  }


  // return (
  //   <div className="w-full">
  //     <h1>asdjasdhi</h1>
  //   </div>
  // );
}

export default CSelector;