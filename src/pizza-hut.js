import { cook } from "./1.await";
// import { cook } from "./2.part.promise.all";
// import { cook } from "./3.two.calls";
// import { cook } from "./4.promise.all";
// import { cook } from "./5.psettle";
// import { cook } from "./6.reject.reason";
// import { cook } from "./7.robust.reject.reason";
// import { cook } from "./8.business.logic";
// import { cook } from "./9.promise.all";

export const makePizza = async () => {
  console.time("pizza cook time");
  const pizza = await cook();
  console.timeEnd("pizza cook time");
  console.log("pizza is", pizza);
};
