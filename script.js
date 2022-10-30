var products = [
    //[Name, price, image url, company, keywords]
    ["Ticket To Ride", "30.99", "https://m.media-amazon.com/images/I/91YNJM4oyhL._AC_SL1500_.jpg", "Amazon", "Board Game, Game, Toy, Trains"],
    ["Catan", "30.99", "https://m.media-amazon.com/images/I/81+okm4IpfL._AC_SL1500_.jpg", "Amazon", "Board Game, Game, Toy"],
    ["Parks", "44.99", "https://m.media-amazon.com/images/I/710k5IvsqIL._AC_SX679_.jpg", "Target"]
]

function addProducts() {

    for(var i = 0; i < products.length; i++) {
        
        var itemContainer = document.createElement('div');
        itemContainer.className = "itemContainer";
        itemContainer.id = "itemContainer-"+i;
        //img.onclick = function(){setScroll(); toggleImage(this.id)}
        //img.src = images[i][1]

        var img = document.createElement('img');
        img.src = products[i][2];

        var name = document.createElement('h1');
        name.innerHTML = products[i][0];

        var price = document.createElement('h3');
        price.innerHTML = products[i][1];

        var logo = document.createElement('img');
        logo.className = "companyLogo";
        
        if(products[i][3] == "Amazon") {
            logo.src = "a_com_w_logo_rgb.png";
        }
        else if(products[i][3] == "Target") {
            logo.src = "Target.png";
        }

        alert(products[i][0]);

        document.getElementById("trending").appendChild(itemContainer);
        itemContainer.appendChild(img);
        itemContainer.appendChild(name);
        itemContainer.appendChild(price);
        itemContainer.appendChild(logo);

    }

}