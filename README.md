# Car

## **Начало**
### **12.03.25**

я создал класс Car и наследовал от него класс ElectoCar

```javascript
class Car{
    constructor(brand, model, year, volume){
        this.brand = brand
        this.model = model
        this.year = year
        this.volume = volume
}
};

class ElectoCar extends Car {

};
```
### **13.03.25**

я добавил к классу Car функцию drive и addvolume
```javascript
drive() {
    console.log(this.volume)
    this.volume -= 9.23
    console.log(this.volume)
}

addvolume() {
    if(this.volume < 60){
    this.volume + 9
    console.log("Вы заправли машину ", this.brand, " ", this.model, " на ", this.volume)
    }else if(this.volume >= 60){
        console.log("У машины полный бак.", this.volume)
    }
}
```


