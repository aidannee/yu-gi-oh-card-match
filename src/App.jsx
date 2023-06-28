import Cards from "./components/Cards";
import yugiohcollection from "./assets/yugiohcollection.json";
console.log(yugiohcollection.data);
function randomCard() {
  return Math.floor(Math.random() * yugiohcollection.data.length);
}
// console.log(randomCard());

const cardImage = yugiohcollection.data[randomCard()].card_images[0].image_url;
// console.log(cardImage);

const cards = [];
for (let i = 0; i < 8; i++) {
  const cardIndex = randomCard();
  cards.push(yugiohcollection.data[cardIndex]);
  cards.push(yugiohcollection.data[cardIndex]);
}
cards.sort(() => Math.random() - 0.5);

function App() {
  return (
    <div className="flex h-screen">
      {/* <img src={cardImage} alt="" /> */}
      <Cards cards={cards} />
    </div>
  );
}

export default App;
