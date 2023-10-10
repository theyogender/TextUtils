import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&<>
               <div>
                <div class={`alert alert-${props.alert.typ}`}>
                    <strong> {props.alert.message}</strong>
                </div>
            </div>
        </>
    )
}
