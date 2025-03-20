var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return 'Model - ' + this.model + "\n" + 'Year - ' + this.year;
    };
    return Car;
}());
console.log(new Car('Audi', 2017).getCarInfo());
