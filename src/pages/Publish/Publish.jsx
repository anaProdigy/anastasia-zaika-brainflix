import { useEffect } from "react";
import "./publish.scss";
import { useNavigate } from "react-router-dom";




function Publish() {

    const navigate = useNavigate();

useEffect(
    () => {

 const timer = setTimeout(() => {

    navigate("/")
   console.log("This will run after 1 second!");
 }, 3000);
 return () => clearTimeout(timer);
},[]) 


  return (

    <h1>DONE!</h1>



  )}
export default Publish;