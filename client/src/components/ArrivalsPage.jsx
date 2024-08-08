import { useState, useEffect } from 'react'

function ArrivalsPage() {

  const [arrivals, setArrivals] = useState([])


  useEffect(() => {
    async function fetchArrivals() {
      try {
        const response = await fetch("http://localhost:8080/api/arrivals/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setArrivals(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchArrivals();
  }, []);


 

  return (
    <>
      <h1>Arrivals</h1>


      <button className="arrivalContainer">
      {arrivals.map((arrival) => (
          <>
          <div key={arrival.arrival_id} className="arrivalCard">
            <div className="arrivalDetails">
              <p className="arrivalInfo">{arrival.traveler_name}</p>
              <p className="arrivalInfo">{arrival.travel_date}</p>
              <p className="arrivalInfo">{arrival.trip_number}</p>
              <p className="arrivalInfo">{arrival.travel_origin}</p>
              <p className="arrivalInfo">{arrival.departure_time}</p>
              <p className="arrivalInfo">{arrival.travel_destination}</p>
              <p className="arrivalInfo">{arrival.arrival_time}</p>
            </div>
          </div>
    
          </>
      ))}
      </button>

    </> )
}

export default ArrivalsPage
