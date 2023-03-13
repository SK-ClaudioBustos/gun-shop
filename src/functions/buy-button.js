var armas_en_carrito = []
function addToCart(arma){
    // //si se eliminan todos los elementos
    // if(...){
    //     armas_en_carrito = []
    //     return
    // }

    // //si se elimina un elemento en particular
    // if(arma == "AA-12"){
    //     let indice = armas_en_carrito.indexOf("Saiga 12");
    //     armas_en_carrito.splice(indice, 1);
    //     console.log(armas_en_carrito);
    //     return;
    // }
    
    armas_en_carrito.push(arma);
    console.log(armas_en_carrito);
}

export default addToCart;