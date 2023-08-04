import React from "react";
import style from './recipe.module.css';
import { Link } from "react-router-dom";
  
const Recipee = ({title,image}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
    
            <img className={style.image} src={image} alt=""/>

  
        </div>
    );
  
}
export default Recipee;