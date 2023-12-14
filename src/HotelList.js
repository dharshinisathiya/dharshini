import React from 'react';

const HotelList = ({ hotels }) => {
  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.price} USD per night
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;