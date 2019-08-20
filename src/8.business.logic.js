import pSettle from "p-settle";
import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);
  try {
    let doughPromise = makeDough();
    let saucePromise = makeSauce();
    let cheesePromise = saucePromise.then(sauce => grateCheese(sauce));
    const [
      { value: dough, isRejected: doughIsRejected, reason: doughReason },
      { value: sauce, reason: sauceReason },
      { value: cheese, isRejected: cheeseIsRejected, reason: cheeseReason }
    ] = await pSettle([doughPromise, saucePromise, cheesePromise]);

    if (doughIsRejected) {
      throw new Error(`DOUGH ERROR -  ${doughReason}`);
    }

    let reason = null;
    if (sauceReason && sauceReason.message) {
      reason = sauceReason.message;
    }
    if (cheeseIsRejected && cheeseReason && cheeseReason.message) {
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
    return null;
  }
};
