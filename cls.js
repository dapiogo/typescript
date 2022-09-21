
//konstruktor - przy tworzeniu niu parametry wpadaja do constructor
class Product {
  constructor(name,price){
    this.name = name
    this.price = price
  }
  getName() {
    return this.name
  }
  
  getPrice(){
    return this.price
  }
  
}

class Order {
  constructor(nr,date) {
    this.nr = nr;
    this.data = date
    this.products = [];
  } 
  addProducts(products) {
    this.products = this.products.push(...products)
  }
  
  getTotal () {
    return this.products.reduce((prev,curr) => prev + curr.price,0) 
  }
}

const order1 = new Order(1,new Date('2020-03-02'))







const book = new Product('wladca pierscieni',15.55);
const ebook = new Product('harry poterr- ebok',45.55);

const test = order1.addProducts([book,ebook])
console.log(test)
console.log(order1.getTotal())

