//  Implement a simple shopping cart program using an array. Create functions to add items,
// remove items, and update quantities using the splice method. Print the cart's contents
// after each operation

let shoppingCart: { item: string; quantity: number }[] = [];

function addItem(item: string, quantity: number): void {
    shoppingCart.push({ item, quantity });
    console.log(`Added ${quantity} ${item}(s) to the cart.`);
    console.log('Cart:', shoppingCart);
}

function removeItem(item: string): void {
    var index = shoppingCart.findIndex((cartItem) => cartItem.item === item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        console.log(`Removed ${item} from the cart.`);
        console.log('Cart:', shoppingCart);
    } else {
        console.log(`${item} not found in the cart.`);
    }
}

function updateQuantity(item: string, newQuantity: number): void {
    var index = shoppingCart.findIndex((cartItem) => cartItem.item === item);
    if (index !== -1) {
        shoppingCart[index].quantity = newQuantity;
        console.log(`Updated quantity of ${item} to ${newQuantity}.`);
        console.log('Cart:', shoppingCart);
    } else {
        console.log(`${item} not found in the cart.`);
    }
}

// Example usage:
addItem('Apple', 3);
addItem('Banana', 2);
removeItem('Apple');
updateQuantity('Banana', 5);
