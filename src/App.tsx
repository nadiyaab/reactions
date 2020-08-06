import React, {FunctionComponent, useState} from 'react';
import {Game} from "./Game/Game";
import styles from "./App.module.scss";
import { Button } from './Game/Button/Button';

type GameMode = "Playing" | "Finished";

export const App: FunctionComponent = () => {

    const [mode, setMode] = useState<GameMode>("Playing");

    if (mode === "Playing"){
        return()
    }

    return (
        <main className={styles.main}>
            <Game/>
        </main>
    );
};

