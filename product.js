let cart = [];
let products = [
               {
                   name: 'bag',
                   color: 'green',
                   cost: 150,
                   cover: "img/layer1.jpg"
               },
                {
                   name: 'pump',
                   color: 'white', 
                   cost: 555,
                   cover: "img/layer2.jpg" 
               },
                {
                   name: 'jacket',
                   color: 'blue',  
                   cost: 259,
                   cover: "img/layer3.jpg" 
               },
                {
                   name: 'parkа',
                   color: 'green',
                   cost: 150,
                   cover: "img/layer4.jpg"
               },
                {
                   name: 'coat',
                   color: 'white', 
                   cost: 555,
                   cover: "img/layer5.jpg" 
               },
                {
                   name: 'blazer',
                   color: 'blue',  
                   cost: 259,
                   cover: "img/layer6.jpg" 
               },
                {
                   name: 'furs',
                   color: 'green',
                   cost: 150,
                   cover: "img/layer7.jpg"
               },
                {
                   name: 'shirt',
                   color: 'white', 
                   cost: 555,
                   cover: "img/layer8.jpg" 
               },
               
           ];

const $productsWrap = document.getElementById('productsWrap');

function Container(id, className, tagName) {
    this.id = id;
    this.className = className;
    this.tagName = tagName;
}

Container.prototype.render = function(id, className, tagName){
    `<${tagName} class="${className}" id="${id}"></${tagName}>`;
}

// создаёт разметку для каждого товара
function Item(cover, name, cost){
    Container.call(this, id, className, tagName);
    
    this.cover = cover;
    this.name = name;
    this.cost = cost;
};


Item.prototype.render = function(className, tagName, cover, name, cost){
        return `<${tagName} class="${className}">
              <img class="image" src=${cover}>
              <p class="name">${name.toUpperCase()}</p>
              <br>
              <span class="cost">${cost}</span><br>
              <button>КУПИТЬ</button>
            </${tagName}>`;
};


class ItemsList {
    constructor(){
        this.items = [];
   }
    getItems() { 
        this.items = [
         {name: 'blazer', cost: 259},
         {name: 'furs', cost: 150},
         {name: 'shirt', cost: 555},
       ];
        
        this.items = this.items.map(item => new Item(item.cover, item.name, item.cost));
    };
    
    total() {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum = sum + items.cost[i];
    };
    
    render(){
        const itemsHtml = this.items.map(item => item.render());
                                         
        return itemsHtml.join('');                                 
    };
}

const items = new ItemsList();
items.getItems();

$productsWrap.innerHTML = items.render();

// классы для корзины

class ItemCart(){
    
    deleteCart();
    
}

class ListCart(){
    
    totalCart();
};

//3. * Некая сеть фастфуда предлагает несколько видов гамбургеров:
//Напишите программу, рассчитывающую стоимость и калорийность гамбургера.


class Hamburger {
  constructor(calories, cost) {
      this.calories = 0;
      this.cost = 0;
      this.stuff = [
          {name: cheese},
         {name: salad},
        {name: potato},
      ];
      this.topping = [
          {name: flavour},
         {name: sauce},
      ]
  }
    getSize() {              // Узнать размер гамбургера }
  getToppings(topping) {   // Получить список добавок }
  
  getStuffing() {          // Узнать начинку гамбургера }
  calculatePrice() {       // Узнать цену }
  calculateCalories() {    // Узнать калорийность }
};


