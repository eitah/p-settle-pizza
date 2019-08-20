import pSettle from "p-settle";
import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);

  try {
    let doughPromise = makeDough();
    let saucePromise = makeSauce();
    let cheesePromise = saucePromise.then(sauce => grateCheese(sauce));
    const [
      { value: dough },
      { value: sauce },
      { value: cheese }
    ] = await pSettle([doughPromise, saucePromise, cheesePromise]);

    return {
      dough,
      sauce,
      cheese
    };
  } catch (e) {
    console.log("in catch block", e.message);
  }
};
