"use strict";
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };
    for (const option of options) {
        Object.assign(car, option);
    }
    return car;
}
const carInfo = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });
console.log(carInfo);
