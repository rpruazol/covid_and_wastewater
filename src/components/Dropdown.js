import React from "react"

export default function Dropdown(props) {
    
    const stateArray = props.states
    console.log(stateArray.length)

    const renderedStates = stateArray.map(value => {
        return <option value={value.abbreviation.toLowerCase()}>{value.name}</option>
    })
    console.log(renderedStates)
    return (
        <div>
            <select>
                {renderedStates}
            </select>
        </div>
    )
}