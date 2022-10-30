var products = [
    //[Name, price, image url, company, keywords]
    ["Flannel Plaid Jacket", "35.89", "https://m.media-amazon.com/images/I/61OjkmaPnXL._AC_UY879_.jpg", "Amazon", "featured, clothes, shirt, jacket, long sleeve, womens, woman, outfit"],
    ["Crew Sweatshirt", "8.75", "https://m.media-amazon.com/images/I/71ayrBRHFCL._AC_UX679_.jpg", "Amazon", "EcoSmart, clothes, shirt, sweatshirt, womens, woman, outfit, hanes"],
    ["Men's Tech Stretch", "17.50", "https://m.media-amazon.com/images/I/913hc8wC2JS._AC_UY879_.jpg", "Amazon", "featured, clothes, shirt, t-shirt, tshirt, mens, clothing, man, outfit"],
    ["Pullover Hoodie", "27.50", "https://m.media-amazon.com/images/I/81JX7s+eiWL._AC_UX679_.jpg", "Amazon", "featured sweatshirt, hoodie, mens, champion, clothes, outfit"],
    ["Ticket To Ride", "30.99", "https://m.media-amazon.com/images/I/91YNJM4oyhL._AC_SL1500_.jpg", "Amazon", "featured, Board Game, Game, Toy, Trains"],
    ["Catan", "30.99", "https://m.media-amazon.com/images/I/81+okm4IpfL._AC_SL1500_.jpg", "Amazon", "featured, Board Game, Game, Toy, Strategy"],
    ["Parks", "44.99", "https://m.media-amazon.com/images/I/710k5IvsqIL._AC_SX679_.jpg", "Target", "featured, Board Game, Game, Toy, Outdoors"],
    ["Tealights Bag of 100", "9.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/34222740391885p?$imagePLP$&wid=363&hei=363", "Bed Bath & Beyond", "featured, Decor, Lighting, Bulk"],
    ["Green Scented Candle", "15.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-05-07-03-50__dsc8997_imageset?%24380%24=&wid=2000&hei=2000", "Bed Bath & Beyond", "featured, Scented, Candle, Decor"],
    ["Grey Scented Candle", "15.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-05-07-03-50__dsc8991_imageset?$imagePLP$&wid=363&hei=363", "Bed Bath & Beyond", "featured, Scented, Candle, Decor"],
    ["LG Refrigerator Filter", "52.48", "https://images.thdstatic.com/productImages/7c6c8cc7-9f08-4a2f-8030-eb19a9479a09/svn/lg-electronics-refrigerator-water-filters-lt1000pc-64_300.jpg", "Home Depot", "featured, Home Improvement, Refrigerator, Filter"],
    ["GE Refrigerator Filter", "52.48", "https://images.thdstatic.com/productImages/bd5d5705-0014-459a-96c7-eb8f955750ea/svn/ge-refrigerator-water-filters-rpwfe-64_300.jpg", "Home Depot", "featured, Home Improvement, Refrigerator, Filter"],
    ["Serta Comforter Set", "99.99", "https://target.scene7.com/is/image/Target/GUEST_457bcbb3-ef99-405a-98e7-8505390bbdf6?wid=2220&hei=2220&fmt=pjpeg", "Target", "bedding, comforter, blanket, sheets"],
    ["Linen Blend Duvet Set", "79.99", "https://target.scene7.com/is/image/Target/GUEST_949a0948-7885-49c2-91b8-01230b3de372?wid=1000&hei=1000&qlt=80&fmt=webp", "Target", "bedding, comforter, blanket, sheets"],
    ["Knit Throw Blanket", "95.00", "https://target.scene7.com/is/image/Target/GUEST_21518c8d-8329-49f9-a859-82a7ce60c77a?wid=1000&hei=1000&qlt=80&fmt=webp", "Target", "featured, bedding, blanket"],
    ["Star Wars Bed set", "115.00", "https://target.scene7.com/is/image/Target/GUEST_535fe9fe-65b5-49f5-8b8a-8427586bd6d7?wid=1000&hei=1000&qlt=80&fmt=webp", "Target", "featured, boys, bedding, movies, kids"],
    ["Dewalt Drill", "139.00", "https://images.thdstatic.com/productImages/25e17eb5-cf3c-47a7-8625-50cafad22866/svn/dewalt-power-drills-dcd708b-64_1000.jpg", "Home Depot", "featured, tools, dewalt, power, rotary"],
    ["Miter Saw", "179.00", "https://images.thdstatic.com/productImages/96944e01-0d09-420f-a67c-c7fff93ddc29/svn/ryobi-miter-saws-ts1346-64_600.jpg", "Home Depot", "featured, tools, power, saw, cutting"],
    ["Thermometer", "31.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/45552694_imageset?%24380%24=&wid=2000&hei=2000", "Bed Bath & Beyond", "health, temperature, sick, fever"],
    ["Scale", "34.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/mktplace-s-cbb1f36d-bedd-41a9-be19-812f8663a6b5?%24380%24=&wid=2000&hei=2000", "Bed Bath & Beyond", "health, weight, scale, weight loss"],
    ["Protein Powder", "27.99", "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-11-12-10-39_darkchocolatepowder_front1_imageset?%24380%24=&wid=2000&hei=2000", "Bed Bath & Beyond", "health, weight, workout, muscle"],
    ["Mascara", "8.99", "https://target.scene7.com/is/image/Target/GUEST_8d1f53fb-ae0b-4513-a1db-19f07ba32a6e?wid=1000&hei=1000&qlt=80&fmt=webp", "Target", "make-up, womens, woman, make up, makeup"], 
    ["Foundation", "33.00", "https://target.scene7.com/is/image/Target/GUEST_ebd7111f-9de7-438e-a38d-c93f0b98de51?wid=1000&hei=1000&qlt=80&fmt=webp", "Target", "make-up, makeup, womens, woman, make up"],
    ["ASUS TUF Gaming", "609.00", "https://m.media-amazon.com/images/I/81OiT2-NoeL._AC_SX679_.jpg", "Amazon", "Electronics, laptop, computer, macbook, notebook"],
    ["Nintendo Switch", "349.00", "https://m.media-amazon.com/images/I/61dYrzvBLbL._SX522_.jpg", "Amazon", "Electronics, game, kids, toy, video games"]
]

var cart = [0, 0, 0, 0];
//amazon, target, bed bath and beyond, home depot

function createItem(i) {

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
            logo.src = "images/a_com_w_logo_rgb.png";
        }
        else if(products[i][3] == "Target") {
            logo.src = "images/Target.png";
        }
        else if(products[i][3] == "Bed Bath & Beyond") {
            logo.src = "images/BedBathBeyond.png";
        }
        else if(products[i][3] == "Home Depot") {
            logo.src = "images/The_Home_Depot.png";
        }
        else if(products[i][3] == "Walmart") {
            logo.src = "Target.png";
        }

        //alert(products[i][0]);

        itemContainer.appendChild(img);
        itemContainer.appendChild(name);
        itemContainer.appendChild(price);
        itemContainer.appendChild(logo);

        return itemContainer;
        //document.getElementById("trending").appendChild(itemContainer);

}

function addProducts() {

    for(var i = 0; i < products.length; i++) {

        if(products[i][4].includes("featured")) {
            document.getElementById("trending").appendChild(createItem(i));
        }

    }

}

function search(data) {

    document.getElementById("searchResults").innerHTML = '<h1>Search Results: <span id="searchTerm"></span></h1><a class="viewMore" onclick="closeSearch()">Close Results</a>';

    document.getElementById("searchResults").classList.remove("displayHide");
    document.getElementById("searchTerm").innerHTML = data;
    document.getElementById("trending").classList.add("displayHide");

    for(i = 0; i < products.length; i++) {

        if((products[i][4]).toUpperCase().includes(data.toUpperCase()) || products[i][0].toUpperCase().includes(data.toUpperCase())) {
            document.getElementById("searchResults").appendChild(createItem(i));
        }

    }

}

function closeSearch() {

    document.getElementById("searchResults").classList.add("displayHide");
    document.getElementById("trending").classList.remove("displayHide");

}

function addToCart(id) {

    var i = id.replace('itemContainer-','');
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
        shopItemContainer.onclick = function(){removeFromCart(this.id)};

        var img = document.createElement('img');
        img.src = products[i][2];

        var close = document.createElement("div");
        close.innerHTML = "X";
        close.classList = "removeCart";

        var name = document.createElement('h2');
        name.innerHTML = products[i][0];

        var price = document.createElement('h4');
        price.innerHTML = 'Price: $<span id="price' + i + '">' + products[i][1] + '</span>';
        //price.innerHTML = products[i][1];

        var quanity = document.createElement('h4');
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
        else if(products[i][3] == "Bed Bath & Beyond") {
            container = document.getElementById("bedBathBeyondContainer");
        }
        else if(products[i][3] == "Home Depot") {
            container = document.getElementById("homeDepotContainer");
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
        shopItemContainer.appendChild(close);

    }
        
    if(products[i][3] == "Amazon") {
        cart[0]++;
    }
    else if(products[i][3] == "Target") {
        cart[1]++;
    }
    else if(products[i][3] == "Bed Bath & Beyond") {
        cart[2]++;
    }
    else if(products[i][3] == "Home Depot") {
        cart[3]++;
    }
    else if(products[i][3] == "Walmart") {
        logo.src = "Target.png";
    }

    var count = 0;

    if(cart[0] > 0) {
        document.getElementById("amazonContainer").classList.remove("displayHide");
        document.getElementById("cartTitle").innerHTML = "Shopping Cart";
        count++;
    }
    if(cart[1] > 0) {
        document.getElementById("targetContainer").classList.remove("displayHide");
        document.getElementById("cartTitle").innerHTML = "Shopping Cart";
        count++;
    }
    if(cart[2] > 0) {
        document.getElementById("bedBathBeyondContainer").classList.remove("displayHide");
        document.getElementById("cartTitle").innerHTML = "Shopping Cart";
        count++;
    }
    if(cart[3] > 0) {
        document.getElementById("homeDepotContainer").classList.remove("displayHide");
        document.getElementById("cartTitle").innerHTML = "Shopping Cart";
        count++;
    }

    var total = Number(document.getElementById("priceTotal").innerHTML);
    total += Number(products[i][1]);
    document.getElementById("priceTotal").innerHTML = total.toFixed(2);
    document.getElementById("shipTotal").innerHTML = count * 4.99;

}

function removeFromCart(id) {

    var i = id.replace('shopItemContainer-','');
    var price = products[i][1];

    if(document.getElementById("quanity" + i).innerHTML > 1) {
        document.getElementById("quanity" + i).innerHTML--;
    }
    else {
        document.getElementById("shopItemContainer-"+i).remove();
    }

    var shipTotal = Number(document.getElementById("shipTotal").innerHTML);
        
    if(products[i][3] == "Amazon") {
        cart[0]--;
        if(cart[0] == 0) {
            document.getElementById("amazonContainer").classList.add("displayHide");
            document.getElementById("shipTotal").innerHTML = shipTotal - 4.99;
        }
    }
    else if(products[i][3] == "Target") {
        cart[1]--;
        if(cart[1] == 0) {
            document.getElementById("targetContainer").classList.add("displayHide");
            document.getElementById("shipTotal").innerHTML = shipTotal - 4.99;
        }
    }
    else if(products[i][3] == "Bed Bath & Beyond") {
        cart[2]--;
        if(cart[2] == 0) {
            document.getElementById("bedBathBeyondContainer").classList.add("displayHide");
            document.getElementById("shipTotal").innerHTML = shipTotal - 4.99;
        }
    }
    else if(products[i][3] == "Home Depot") {
        cart[3]--;
        if(cart[3] == 0) {
            document.getElementById("homeDepotContainer").classList.add("displayHide");
            document.getElementById("shipTotal").innerHTML = shipTotal - 4.99;
        }
    }
    else if(products[i][3] == "Walmart") {
        logo.src = "Target.png";
    }


    var total = Number(document.getElementById("priceTotal").innerHTML);
    document.getElementById("priceTotal").innerHTML = (total - price).toFixed(2);

    var emptyCart = true;
    for(var i = 0; i < cart.length; i++) {
        if(cart[i] > 0) {
            emptyCart = false;
        }
    }

    if(emptyCart) {
        document.getElementById("cartTitle").innerHTML = "Your Cart is Empty";
    }

}