import React, { useState } from "react";
import uuid from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";
import { choice } from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const [deck, error] = useAxios(
    "https://deckofcardsapi.com",
    "/api/deck/new/draw/?count=52"
  );
  if (error) alert(error);
  const addCard = () => {
    const card = choice(deck.cards);
    setCards((cards) => [...cards, { card, id: uuid() }]);
  };
  return (
    <div className="PlayingCardList">
      {console.log(cards)}
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
