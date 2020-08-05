import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    setActiveButtonId: (id:number) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, setActiveButtonId}) => {
    
    const isActive = id === activeButtonId;
    const GetClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`;
        }
        return styles.button;
    }
    const onClick = () : void => {
        if (isActive) {
            setActiveButtonId (Math.floor(Math.random() * 8))
        }
    }
    return (
        <circle className ={GetClassName()} onClick = {onClick} cx={x} cy={y} r={100}/>
    );
}