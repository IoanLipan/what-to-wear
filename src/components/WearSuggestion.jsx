import React from 'react'

function WearSuggestion({ weather: {
  temp, details
} }) {
  console.log(temp);
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 mx-auto text-2xl text-center text-white
          bg-opacity-30 bg-black p-2 px-5 border-0 rounded-2xl w-fit'>
      <h1 className="">What should you wear today?</h1>
      <div className='font-bold'>
        {(temp >= 20 && details === "Clear sky") && <h2>It's a really nice day, maybe sunscreen.</h2>}
        {(temp >= 20 && details !== "Clear sky") && <h2>T-Shirt</h2>}
        {(temp >= 13 && temp < 20) && <h2>Hoodie</h2>}
        {(temp >= 3 && temp < 13) && <h2>Warmer Jacket</h2>}
        {(temp >= -7 && temp < 3) && <h2>It's freezing, dress up!</h2>}
        {(temp < -7) && <h2>Use the glaciar equipment</h2>}
        {(details === "Broken clouds") && <h2>and and umbrella.</h2>}
        {(details === "Shower rain") && <h2>and and umbrella.</h2>}
        {(details === "Rain") && <h2>and a raincoat..</h2>}
        {(details === "Thunderstorm") && <h2>and a boat I think!</h2>}
      </div>
    </div>
  )
}

export default WearSuggestion
