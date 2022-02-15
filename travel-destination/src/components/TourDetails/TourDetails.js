import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import classes from "./TourDetails.css";
export default function TourDetails({ data }) {
  const { id } = useParams();
  return (
    <>
      <Header />
      {
        data.filter((list) => list.id == id).map((list) => (
          <>
            <h2>{list.name}</h2>
            <div className='card'>
              <img style={{ textAlign: "center" }} calssName='img' src={list.image} width="200px" height="200px"></img>
              <div className="container">
                <h4>Destination: <b>{list.name}</b></h4>
                <h4>Price: <b>{list.price} USD</b></h4>
                <p>Trip Code: {list.id}</p>
                <hr></hr>
                <p style={{ textAlign: "left" }}>{list.info}</p>
              </div>
            </div>
          </>
        ))
      }
      <Footer />
    </>
  )
}