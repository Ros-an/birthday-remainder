import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div className="detail">
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
