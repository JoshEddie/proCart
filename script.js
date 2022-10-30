var products = [
    //[Name, price, image url, company, keywords]
    ["Ticket To Ride", "30.99", "https://m.media-amazon.com/images/I/91YNJM4oyhL._AC_SL1500_.jpg", "Amazon", "Board Game, Game, Toy, Trains"],
    ["Catan", "30.99", "https://m.media-amazon.com/images/I/81+okm4IpfL._AC_SL1500_.jpg", "Amazon", "Board Game, Game, Toy, Strategy"],
    ["Parks", "44.99", "https://m.media-amazon.com/images/I/710k5IvsqIL._AC_SX679_.jpg", "Target", "Board Game, Game, Toy, Outdoors"]
    ["Tealights Bag of 100", "9.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/34222740391885p?$imagePLP$&wid=363&hei=363", "Bed Bath & Beyond", "Decor, Lighting, Bulk"]
    ["Green Scented Candle", "15.99", "https://www.bedbathandbeyond.com/store/product/bee-willow-refreshing-herb-large-3-wick-jar-candle-with-lid-in-green/5687949?", "Bed Bath & Beyond", "Scented, Candle, Decor"]
    ["Grey Scented Candle", "15.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-05-07-03-50__dsc8991_imageset?$imagePLP$&wid=363&hei=363", "Bed Bath & Beyond", "Scented, Candle, Decor"]
    ["LG Refrigerator Filter", "52.48", "https://images.thdstatic.com/productImages/7c6c8cc7-9f08-4a2f-8030-eb19a9479a09/svn/lg-electronics-refrigerator-water-filters-lt1000pc-64_300.jpg", "Home Depot", "Home Improvement, Refrigerator, Filter"]
    ["GE Refrigerator Filter", "52.48", "https://images.thdstatic.com/productImages/bd5d5705-0014-459a-96c7-eb8f955750ea/svn/ge-refrigerator-water-filters-rpwfe-64_300.jpg", "Home Depot", "Home Improvement, Refrigerator, Filter"]


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
        else if(products[i][3] == "Bed Bath & Beyond") {
            logo.src = "Target.png";
        }
        else if(products[i][3] == "Home Depot") {
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

        var container;
        
        if(products[i][3] == "Amazon") {
            container = document.getElementById("amazonContainer");
        }
        else if(products[i][3] == "Target") {
            container = document.getElementById("targetContainer");
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

        container.appendChild(shopItemContainer);
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