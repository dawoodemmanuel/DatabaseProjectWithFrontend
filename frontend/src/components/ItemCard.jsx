import React from 'react'
import CardApi from './CardApi'
import './ItemCard.css';

const ItemCard = () => {

  return (
    <>
      <section className="main-card--cointainer">
        {CardApi.map((curElem) => {
          const { id, name, image, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <h2>{price}</h2>
                  <button className="card-tag  subtle">Add to Cart</button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ItemCard;
