class Car{
    constructor(brand, model, year, volume){
        this.brand = brand
        this.model = model
        this.year = year
        this.volume = volume
}

drive() {
    console.log(this.volume)
    this.volume -= 7.5
    console.log(this.volume)
}

addvolume() {
    if(this.volume < 60){
    this.volume + 9.23
    console.log("Вы заправли машину ", this.brand, " ", this.model, " на ", this.volume)
    }else if(this.volume >= 60){
        console.log("У машины полный бак.", this.volume)
    }
}

}

class ElectoCar extends Car() {

    addcharge() {
        this.volume + 7.5
        console.log("Вы зарядили машину ", this.brand, " ", this.model, " на ", this.volume)
    }

    addcharge() {
        if(this.volume < 60){
        this.volume + 9
        console.log("Вы заправли машину ", this.brand, " ", this.model, " на ", this.volume)
        }else if(this.volume >= 60){
            console.log("У машины полный бак.", this.volume)
        }
    }
    

}


let a = new ElectoCar(1, 2, 3, 47)
let b = new Car(1, 2, 3, 40)

a.drive()
b.drive()
a.addvolume_1()
b.addvolume()
