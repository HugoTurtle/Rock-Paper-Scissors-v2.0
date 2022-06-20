computerPlay = () => {
    let play = randomInteger(1,3); // Between 1 - 3

}
randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}