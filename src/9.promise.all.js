import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);
  try {
    let reason = null;
    let doughPromise = makeDough().catch(e => {
      console.log(e.message);
      reason = e.message;
      return null;
    });
    let saucePromise = makeSauce();
    let cheesePromise = saucePromise
      .then(sauce => grateCheese(sauce))
      .catch(e => {
        console.log(e.message);
        reason = e.message;
        return null;
      });
    const [dough, sauce, cheese] = await Promise.all([
      doughPromise,
      saucePromise,
      cheesePromise
    ]);

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
