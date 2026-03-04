import { cowsay, cowthink, moo } from "cowsayjs";
import { getQuote } from "node-quotegen";


const quote = getQuote();

const motivational = getQuote("motivational");


console.log(cowsay(`${motivational}`));

