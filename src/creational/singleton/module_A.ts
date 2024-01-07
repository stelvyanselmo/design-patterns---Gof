import { ClassicDatabase } from "./database/classic-database";
import "./module_B";

const databaseOne = ClassicDatabase.getInstanceOf();

databaseOne.add({name:"John Doe 1",age:20});
databaseOne.add({name:"John Doe 2",age:24});
databaseOne.add({name:"John Doe 3",age:21});
databaseOne.add({name:"John Doe 4",age:25});
 
console.table(databaseOne.show());   