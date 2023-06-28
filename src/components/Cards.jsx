import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Cards = (props) => {
  console.log(props.cards);
  const [cards, setCards] = useState(
    props.cards.map((c) => {
      return { ...c, comparing: false, matched: false };
    })
  );

  function handleFlippedCard(index) {
    //step 1 - set card comparing true (if not already true or whatever)
    if (!cards[index].comparing && !cards[index].matched) {
      const cardsCopy = [...cards];
      cardsCopy[index].comparing = true;
      setCards(cardsCopy);
    }
  }

  // we need to actually *wait* for cards to be really updated
  // ( cards is a useState variable, and you can wait for setCards to be finished with useEffect )
  useEffect(() => {
    // console.log(cards);
    //step 2 - if two cards are ready to be compared...
    const cardsToCompare = cards.filter((card) => card.comparing === true);
    if (cardsToCompare.length === 2) {
      console.log("there are two to compare!!!", cardsToCompare);
      console.log(cardsToCompare[0].id === cardsToCompare[1].id);
      //step 3 - ... compare them
      if (cardsToCompare[0].id === cardsToCompare[1].id) {
        // update somehow the 2 cards that have .comparing:true
        // give them .matched:true

        // in an array there are 2 ways ( i think ) of updating
        // an item in the array

        // 1) is if you already have the index position
        // 2) by trying to match based on something

        /// updating matching array items the react
        // version 1: for loop
        // step 3.a if they match, update cards - they should be both set to matched:true
        const cardsCopy = [...cards];
        for (let i = 0; i < cardsCopy.length; i++) {
          if (cardsCopy[i].id === cardsToCompare[0].id) {
            cardsCopy[i].matched = true;
          }
        }
        setCards(cardsCopy);

        // step 3.b if there are n matches (n is length of cards), YOU WIN
        let countOfMatchedCards = 0;
        for (let i = 0; i < cardsCopy.length; i++) {
          if (cardsCopy[i].matched === true) {
            countOfMatchedCards++;
          }
        }
        if (countOfMatchedCards === cardsCopy.length) {
          alert("YA WIN");
        }

        if (
          cardsCopy.filter((card) => card.matched === true).length ===
          cardsCopy.length
        ) {
          alert("YA WIN");
        }

        // // version 2: map
        // setCards(cards.map((c) => (c.id === cardsToCompare[0].emoji ? { ...c, matched: true } : c)));

        // // version 3: map over a few lines
        // const newState = cards.map(function (originalCard) {
        //   if (originalCard.emoji === cardsToCompare[0].emoji) {
        //     const updatedObject = { ...originalCard, matched: true };
        //     return updatedObject;
        //   } else {
        //     return originalCard;
        //   }
        // });

        // setCards(newState);
      }
      setTimeout(() => {
        setCards(cards.map((card) => ({ ...card, comparing: false })));
      }, 1000);

      // const cardsCopyAgain = [...cards];
      // for (let index = 0; index < cardsCopyAgain.length; index++) {
      //   cardsCopyAgain[index].comparing = false;
      // }
      //   setCards(cardsCopyAgain);
    }
    // console.table(cards);
    // step 4 if there are 2 cards where compared:true, switch them compare:false
  }, [cards]);

  return (
    <>
      {" "}
      <div className="overflow-y-hidden grid grid-cols-4 w-full p-4">
        {cards.map((card, index) => (
          <div
            className={`card ${
              card.comparing || card.matched ? "comparison" : ""
            }`}
            key={index}
          >
            <div
              style={{
                backgroundImage: `url("./src/images/yugioh-card-back.png")`,
                backgroundSize: `cover`,
                backgroundRepeat: "no-repeat",
              }}
              className="card-side front-side w-20 h-28 shadow-2xl shadow-orange-400/50"
              onClick={() => handleFlippedCard(index)}
            ></div>
            <div className="card-side back-side w-20 h-28">
              <img
                style={{ borderRadius: "5px" }}
                src={card.card_images[0].image_url}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cards;
