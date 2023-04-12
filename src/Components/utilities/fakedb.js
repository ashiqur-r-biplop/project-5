import Swal from 'sweetalert2'

const addToDb = id => {
    let shoppingCart = getLocalStorage();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        Swal.fire(
            'Welcome!',
            'You applied for this job',
            'success'
        )
    }
    else {
        Swal.fire(
            'Sorry!',
            'You have already applied for this job',
            'error'
        )
    }
}


const getLocalStorage = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


export {
    addToDb,
    getLocalStorage,
}