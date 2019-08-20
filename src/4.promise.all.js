import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);
  console.log(`Promise chaining to the rescue`);
  console.log(`typesafety would have caught this`);
  console.log(`But what happens if a promise rejects?\n`);

  let doughPromise = makeDough();
  let saucePromise = makeSauce();
  let cheesePromise = saucePromise.then(sauce => grateCheese(sauce));

  return Promise.all([doughPromise, saucePromise, cheesePromise])
    .then(([dough, sauce, cheese]) => {
      return {
        dough,
        sauce,
        cheese
      };
    })
    .catch(e => {
      console.log("in catch block", e.message);
      return null;
    });
};
