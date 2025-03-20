class Car  {
    model : string
    year : number

    constructor(model:string, year:number) {
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return 'Model - ' + this.model + "\n" + 'Year - ' + this.year;
    }
}

console.log(new Car('Audi',2017).getCarInfo());