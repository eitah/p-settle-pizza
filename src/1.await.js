import { makeDough, makeSauce, grateCheese } from "./utils";

export const cook = async () => {
  console.log("file:", __filename);
  console.log(`|--------- dough ---------> |---- sauce ----> |-- cheese -->\n`);
  try {
    let dough = await makeDough();
    let sauce = await makeSauce();
    let cheese = await grateCheese(sauce);

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
