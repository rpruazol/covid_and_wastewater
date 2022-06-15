import React from "react"




export default function App() {
  const [covidData, setCovidData] = React.useState({})

  // 1. Get the data (fetch)
  // 2. Save the data to state
  
	React.useEffect(() => {

		const country = 'USA'
		const options = {
			method: 'GET',
			headers: {
			"Content-Type": "text/plain",
			'X-RapidAPI-Key': process.env.REACT_APP_RapidAPIKey,
			'X-RapidAPI-Host': process.env.REACT_APP_RapidAPIHost,
			},
		}
		fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
		.then(res => res.json())
		.then(data => setCovidData(data))
	}, [])

    return (
      <div>
        <pre>{JSON.stringify(covidData, null, 2)}</pre>
      </div>
    )
}