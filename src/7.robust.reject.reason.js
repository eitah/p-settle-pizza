import pSettle from "p-settle";
import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);
  console.log(`Cant use isRejected because it's specific to Cheese\n`);
  try {
    let doughPromise = makeDough();
    let saucePromise = makeSauce();
    let cheesePromise = saucePromise.then(sauce => grateCheese(sauce));
    const [
      { value: dough, reason: doughReason },
      { value: sauce, reason: sauceReason },
      { value: cheese, isRejected, reason: cheeseReason }
    ] = await pSettle([doughPromise, saucePromise, cheesePromise]);

    let reason = null;
    if (doughReason && doughReason.message) {
      reason = doughReason.message;
    }
    if (sauceReason && sauceReason.message) {
      reason = sauceReason.message;
    }
    if (cheeseReason && cheeseReason.message) {
      reason = cheeseReason.message;
    }

    if (reason) {
      return {
        dough,
        sauce,
        cheese,
        reason
      };
    }

    return {
      dough,
      sauce,
      cheese
    };
  } catch (e) {
    console.log("in catch block", e.message);
  }
};
