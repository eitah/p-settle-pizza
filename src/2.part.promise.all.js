import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);
  console.log(`|--------- dough -------------->|
|---- sauce ---->               |-- cheese -->\n`);
  let doughPromise = makeDough();
  let saucePromise = makeSauce();
  const [dough, sauce] = await Promise.all([doughPromise, saucePromise]);

  const cheese = await grateCheese(sauce).catch(e => {
    console.log("in catch block", e.message);
    return null;
  });
  return { dough, sauce, cheese };
};
