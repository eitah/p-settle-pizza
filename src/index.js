import "./styles.css";
import { makePizza } from "./pizza-hut";
makePizza();

document.getElementById("app").innerHTML = `
<h1>P-Settle Pizza</h1>
<div>
  This file is the index.js and is a pain in the butt to inject image data.
  Instead you want to edit the index.html. a much better idea.
</div>
`;
