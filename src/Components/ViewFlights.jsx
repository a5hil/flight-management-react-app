import React from 'react'
import NavBar from './NavBar'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewFlights = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/add-flight").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Flight Details</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Flight Number</th>
                        <th scope="col">Airline</th>
                        <th scope="col">Origin</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Departure Date</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Arrival Time</th>
                        <th scope="col">Fare</th>
                        <th scope="col">Seats Available</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{value.flight_number}</th>
                                    <td>{value.airline}</td>
                                    <td>{value.origin}</td>
                                    <td>{value.destination}</td>
                                    <td>{value.departure_date}</td>
                                    <td>{value.departure_time}</td>
                                    <td>{value.arrival_time}</td>
                                    <td>{value.fare}</td>
                                    <td>{value.available_seats}</td>
                                    <td>{value.status}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ViewFlights