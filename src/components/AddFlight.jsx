import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'


const AddFlight = () => {

    const [input, changeInput] = useState(
        {
            flight_number: '',
            airline: '',
            origin: '',
            destination: '',
            departure_date: '',
            departure_time: '',
            arrival_time: '',
            fare: '',
            total_seats: '',
            available_seats: '',
            status: ''
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = (event) => {
        console.log(input)
        axios.post('https://host-demo-app.onrender.com/api/add-flight', input).then(
            (response) => (
                console.log(response.data)

            )
        ).catch(
            (error) => (
                console.log(error)
            )
        )
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Flight Number</label>
                                <input type="text" className="form-control" name="flight_number" value={input.flight_number} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Airlines</label>
                                <input type="text" className="form-control" name="airline" value={input.airline} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Origin</label>
                                <input type="text" className="form-control" name="origin" value={input.origin} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Destination</label>
                                <input type="text" className="form-control" name="destination" value={input.destination} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Departure Date</label>
                                <input type="date" name="departure_date" id="" className="form-control" value={input.departure_date} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Departure Time</label>
                                <input type="time" name="departure_time" className="form-control" value={input.departure_time} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Arrival Time</label>
                                <input type="time" name="arrival_time" id="" className="form-control" value={input.arrival_time} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Fare </label>
                                <input type="number" name="fare" className="form-control" value={input.fare} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Total seats </label>
                                <input type="number" name="total_seats" className="form-control" value={input.total_seats} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Avilable Seats</label>
                                <input type="number" name="available_seats" className="form-control" value={input.available_seats} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Status</label>
                                <input
                                    type="text"
                                    name="status"
                                    list="status"
                                    className="form-control"
                                    placeholder="Select Status"
                                    value={input.status}
                                    onChange={inputHandler}
                                />

                                <datalist id="status">
                                    <option value="Scheduled" />
                                    <option value="On Time" />
                                    <option value="Delayed" />
                                    <option value="Cancelled" />
                                </datalist>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                            <button className="btn btn-danger" onClick={readValue}>Submit</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default AddFlight