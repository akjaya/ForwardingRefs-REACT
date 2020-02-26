import React, { Component } from 'react'

const FRInput = React.forwardRef((props,ref) => {
    return (
        <idv>
            <input type ="text" ref ={ref} />
        </idv>
    )
})

export default FRInput
