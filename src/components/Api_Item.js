import React from "react"

import styles from "./Api_Item.module.css"

function Api_Item(props) {
    return (
        <div>
            <p>
                {props.titulo}

                {props.name}
            
                {props.item}
            </p>
        </div>
    )
}

export default Api_Item