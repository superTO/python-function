import { data, Classmate } from "./data";
import { groupBy } from "./groupBy";


let groupByClass = groupBy(data, (item: Classmate) => item.Class)
console.log(groupByClass)
console.log('---');

let groupByHeightWeight = groupBy(data, (item: Classmate) => item.Height + item.Weight)
console.log(groupByHeightWeight)
console.log('---');

let groupByClassWeight = groupBy(data, (item: Classmate) => item.Class + '-' + item.Gender)
console.log(groupByClassWeight)

