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
        itemContainer.onclick = function(){addToCart(this.id)};
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
        else if(products[i][3] == "BedBathBeyond") {
            logo.src = "Target.png";
        }
        else if(products[i][3] == "Macys") {
            logo.src = "Target.png";
        }
        else if(products[i][3] == "Walmart") {
            logo.src = "Target.png";
        }

        //alert(products[i][0]);

        document.getElementById("trending").appendChild(itemContainer);
        itemContainer.appendChild(img);
        itemContainer.appendChild(name);
        itemContainer.appendChild(price);
        itemContainer.appendChild(logo);

    }

}


function addToCart(id) {

    var i = id.slice(-1);
    var element = document.getElementById("shopItemContainer-"+i);

    if(element != null) {
        document.getElementById('quanity' + i).innerHTML++;
        var quanity = document.getElementById('quanity' + i).innerHTML;
        var price = products[i][1];
        document.getElementById('price' + i).innerHTML = (price * quanity).toFixed(2);
    }
    else {

        var shopItemContainer = document.createElement('div');
        shopItemContainer.className = "shopItemContainer";
        shopItemContainer.id = "shopItemContainer-"+i;

        var img = document.createElement('img');
        img.src = products[i][2];

        var name = document.createElement('h1');
        name.innerHTML = products[i][0];

        var price = document.createElement('h3');
        price.innerHTML = 'Price: $<span id="price' + i + '">' + products[i][1] + '</span>';
        //price.innerHTML = products[i][1];

        var quanity = document.createElement('h3');
        quanity.innerHTML = 'Quanity: <span id="quanity' + i + '">1</span>';

        var logo = document.createElement('img');
        logo.className = "companyLogo";
        

        document.getElementById("AmazonContainer").appendChild(shopItemContainer);
        shopItemContainer.appendChild(img);
        shopItemContainer.appendChild(name);
        shopItemContainer.appendChild(price);
        shopItemContainer.appendChild(quanity);
        shopItemContainer.appendChild(logo);

    }

    var total = Number(document.getElementById("priceTotal").innerHTML);
    total += Number(products[i][1]);
    document.getElementById("priceTotal").innerHTML = total.toFixed(2);

}