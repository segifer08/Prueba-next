'use client'
import styles from "@/components/Button.module.css"
import clsx from "clsx"

export default function Button(props) {
    return(
        <>
            <button className={
                clsx(
                    {
                        [styles.button] : true,
                        [styles.mas] : props.color == "verde",
                        [styles.menos] : props.color == "azul"
                    }
                )
            } onClick={props.onClick}>{props.text}</button>
        </>
    )
}