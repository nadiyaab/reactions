import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    setActiveButtonId: (id:number) => void;
    currentScore: number;
    setCurrentScore: (currentScore:number) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, setActiveButtonId, currentScore, setCurrentScore}) => {
    
    const isActive = id === activeButtonId;
    const GetClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`;
        }
        return styles.button;
    }
    const onClick = () : void => {
        if (isActive) {
            const nextButton = (Math.floor(Math.random() * 8))
            setActiveButtonId(nextButton);
            setCurrentScore(currentScore + 1)
        }
    }
    return (
        <circle className ={GetClassName()} onClick = {onClick} cx={x} cy={y} r={100}/>
    );
}