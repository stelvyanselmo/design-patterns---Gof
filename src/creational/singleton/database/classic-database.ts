type Iclients = {

    name: string;
    age: number;

}

export class ClassicDatabase {

    private static _instanceOf: ClassicDatabase | null = null;
    private clients: Iclients[] = [];

    private constructor() {}

    public static getInstanceOf(): ClassicDatabase {

        return this._instanceOf === null ? this._instanceOf = new ClassicDatabase() : this._instanceOf;

    }
    
    public add(client: Iclients): void {

        this.clients.push(client); 
        
    }

    public remove(key: number): void {

        this.clients.splice(key,1);
        
    }

    public show(): Iclients[] {

       return this.clients;
        
    }

}

const db1 = ClassicDatabase.getInstanceOf(); // the instance
const db2 = ClassicDatabase.getInstanceOf();


console.log("reference in memory is the same?:", db1 === db2);