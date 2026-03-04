import { cowsay, cowthink, moo } from "cowsayjs";
import { getQuote } from "node-quotegen";


const quote = getQuote();

console.log(cowsay(`${quote}`));

