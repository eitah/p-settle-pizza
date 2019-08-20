import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);
  console.log(`|--------- dough --------------> 
|---- sauce ----> |-- cheese -->\n`);
  try {
    let doughPromise = makeDough();
    let saucePromise = makeSauce();
    let cheesePromise = makeSauce().then(sauce => grateCheese(sauce));
    const [dough, sauce, cheese] = await Promise.all([
      doughPromise,
      saucePromise,
      cheesePromise
    ]);

    return {
      dough,
      sauce,
      cheese
    };
  } catch (e) {
    console.log("in catch block", e.message);
    return null;
  }
};
