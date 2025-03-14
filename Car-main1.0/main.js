class Car{
    constructor(brand, model, year, price, volume){
        this.brand = brand
        this.model = model
        this.year = year
        this.volume = volume
        this.price = price
}

drive() {
    console.log(this.volume)
    this.volume -= 7.5
    console.log(this.volume)
}

findPrice(){
    console.log("Цена машины ", this.brand, " ", this.model, " ", this.price)
}
    

addvolume() {
    if(this.volume < 60){
    this.volume += 9.23
    console.log("Вы заправли машину ", this.brand, " ", this.model, " на ", this.volume)
    }else if(this.volume >= 60){
        console.log("У машины полный бак.", this.volume)
    }

}
dollar(){
    console.log("Цена машиы в $ равна ", this.price / 85.5)
}

}

class Balance{
    constructor(balance){
        this.balance = balance
    }
    buy(Car){
        if(this.balance >= Car.price){
            this.balance - Car.price 
            console.log("Вы купили машину за ", Car.price," Баланс: ", this.balance)
        }else if(this.balance < Car.price){
            console.log("У вас не достаточно денег Баланс: ", this.balance)
        }
    }



}

class ElectoCar extends Car {

    addcharge() {
        if(this.volume < 60){
        this.volume += 9.23
        console.log("Вы зарядили машину ", this.brand, " ", this.model, " на ", this.volume)
        }else if(this.volume >= 60){
            console.log("У машины полный заряд.", this.volume)
        }
    }
    

}


let b = new ElectoCar(1, 2, 3, 1000000, 47)
let a = new Car(1, 2, 3, 111111, 40)

a.drive()
b.drive()
a.addvolume()
b.addcharge()
b.addcharge()
b.addcharge()
b.addcharge()


