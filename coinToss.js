//Our coin toss function
function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

//Our target of sequential 'heads' results
const target = 6;
//Our maximum number of attempts to flip the targeted amount of 'heads'
const threshold = 150;

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;

    const coinTossCycle = () => {
      //Have we hit our target amount of 'heads'?
      if (headsCount === target) {
        return resolve(
          `It took ${attempts} times to flip ${target} sequential 'heads'`
        );
      }
      //Have we exceeded our threshold of attempts?
      if (attempts === threshold) {
        return reject(`Aborted:  Exceeded threshold of ${threshold} attempts.`);
      }
      //Increase our attempt count
      attempts++;
      //Get a result from a coin toss and log it to the console
      const result = tossCoin();
      console.log(`${result} was flipped`);

      //If heads, increase our heads count...
      if (result === "heads") {
        headsCount++;
        //...otherwise reset our heads count
      } else {
        headsCount = 0;
      }
      //repeat the cointTossCycle
      setTimeout(coinTossCycle, 0);
    };
    //start the coinTossCycle
    coinTossCycle();
  });
}
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");
