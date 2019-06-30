import React from 'react';
import Flat from './flat.jsx';


const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => {
        return (
          <Flat
            name={flat.name}
            key={flat.lat}
            imageUrl={flat.imageUrl}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            selected={flat.name === props.selectedFlat.name}
            index={index}
            selectFlat={props.selectFlat}
          />
        );
      }
      )}
    </div>
  );
};

export default FlatList;
