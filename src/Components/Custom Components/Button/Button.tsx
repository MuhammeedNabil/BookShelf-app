import React from 'react'
import styles from "./Button.module.css"

interface Data{
  className?:string;
  children?:React.ReactNode;
}

const Button = (props:Data) => {
  let classes = props.className
  return (
    <div>
        <button className={`${styles.button} ${classes} btn`}>{props.children}</button>
    </div>
  )
}

export default Button