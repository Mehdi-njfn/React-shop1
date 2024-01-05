import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


const Well = () => {
const [show, setShow]= useState();

useEffect(()=>{
  const data = JSON.parse(localStorage.getItem('show_well'));
  setShow(JSON.parse(data) ?? true);
})

function onHide(){
  setShow(false);
  localStorage.setItem('show_well', JSON.stringify(false));
}
  return (
    <>
      {show && (
      <>
        <div className="container">
          <div className="bg-primary text-white my-3">
            <FontAwesomeIcon onClick={onHide} icon={faClose} style={{float: "right", margin: "5px"}}/>
            <div className="p-4">Well Come</div>
          </div>
        </div>
      </>)}
    </>
  );
}
 
export default Well;