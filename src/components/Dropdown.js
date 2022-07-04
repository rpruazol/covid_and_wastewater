import React from "react"

export default function Dropdown(props) {
    
    const stateArray = props.states

    const renderedStates = stateArray.map(value => {
        return <option value={value.abbreviation.toLowerCase()}>{value.name}</option>
    })
    return (
        <div>
            <select>
                {renderedStates}
            </select>
        </div>
    )
}