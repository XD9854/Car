class Car{
    constructor(brand, model, year, volume){
        this.brand = brand
        this.model = model
        this.year = year
        this.volume = volume
}
}

class ElectoCar extends Car {

}


let a = new ElectoCar(1, 2, 3, 4)
let b = new Car(1, 2, 3, 4)
