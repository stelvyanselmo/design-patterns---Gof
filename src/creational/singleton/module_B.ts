import { ClassicDatabase } from "./database/classic-database";

const databaseOne = ClassicDatabase.getInstanceOf();

databaseOne.add({name:"John Doe 6",age:25});
databaseOne.add({name:"John Doe 5",age:27});

console.table(databaseOne.show());