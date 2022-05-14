import React from "react"

import styles from "./Api_Item.module.css"

function Api_Item(props) {
    return (
        <div>
            <p>
                <span className={styles.titulo}>{props.titulo}</span>

                {/* {props.name} */}
            
                <span className={styles.item}>{props.item}</span>
            </p>
        </div>
    )
}

export default Api_Item