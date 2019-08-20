import random from "lodash.random";

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const makeDough = async () => {
  // return Promise.reject(new Error("out of flour"));
  const possibleDoughs = ["wheat", "white", "thin"];
  await wait(400);
  return possibleDoughs[random(2)];
};

export const makeSauce = async () => {
  const possibleSauces = ["red", "cream"];
  await wait(200);
  return possibleSauces[random(1)];
};

export const grateCheese = async sauce => {
  await wait(200);
  // console.log("(first call) sauce is", sauce);
  // return Promise.reject(new Error("funky cheese"));
  if (sauce === "cream") {
    return "parmesan";
  }

  return "mozzerella";
};
