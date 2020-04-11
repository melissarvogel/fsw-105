

var groceryCart = ["bread", "cheese", "milk", "eggs"]


var shopper = {
    name: "Melissa",
    melissaPartner: "James",
    groceryCart: [0, 2],
    shopsWeekly: true,
    moneySpent: 15, 
    couple: function() {return this.name + "" + this.melissaPartner;
}

}
console.log(shopper.couple());


