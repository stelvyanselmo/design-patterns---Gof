interface ICarBuilder {
    
    setBrand(brand: string): void;
    setModel(model: string): void;
    setColor(color: string): void;
    setYear(brand: number): void;

    getResult(): Car;

}

export class Car {

    constructor(
        public brand: string,
        public model: string,
        public color: string,
        public year: number,
    ) {}

}

class BmwBuilder implements ICarBuilder {

    constructor(
        private car: Car
    ) {}

    setBrand(brand: string): void {
        this.car.brand = brand;
    }

    setModel(model: string): void {
        this.car.model = model;
    }

    setColor(color: string): void {
        this.car.color = color;
    }

    setYear(year: number): void {
        this.car.year = year;
    }

    getResult(): Car {
        return this.car;
    }

}

class MercedesBuilder implements ICarBuilder {

    constructor(
        private car: Car
    ) {}

    setBrand(brand: string): void {
        this.car.brand = brand;
    }

    setModel(model: string): string | void {

        if (model !== "Benz") {
            return "Todos os modelos precisam ser benz"
        }
        this.car.model = model;
    }

    setColor(color: string): void {
        this.car.color = color;
    }

    setYear(year: number): void {
        this.car.year = year;
    }

    getResult(): Car {
        return this.car;
    }

}

class Builder {

    constructor(
        private builder: ICarBuilder
    ) {}

    factory(brand: string, model: string, color: string, year: number): Car {

        this.builder.setBrand(brand);
        this.builder.setColor(color);
        this.builder.setModel(model);
        this.builder.setYear(year);

        return this.builder.getResult()

    }

}

const builder = new Builder(new MercedesBuilder(new Car("","","",2000))); 

const carManufacturer = builder.factory("mercedes","Benz","gray",2023);

console.log("Builder Pattern -> ",carManufacturer);
