let shopGoods = [
  {
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    products: [
      { product_name: "Kişi palto", product_description: "Süət dəri, qara rəngdə", product_price: 250 },
      { product_name: "Qadın jaketi", product_description: "Uzun, qaşqır", product_price: 200 },
      { product_name: "Kişi kəməri", product_description: "Dəri, metal tokalı", product_price: 40 },
      { product_name: "Qadın badlonu", product_description: "Retro stil, qızıl rəngdə", product_price: 180 },
      { product_name: "Kişi şortu", product_description: "Spor stil, elastik", product_price: 60 },
      { product_name: "Qadın maykası", product_description: "Boyalı nəqş, pamuklu", product_price: 45 },
      { product_name: "Kişi saatı", product_description: "Qara rəngdə, analog", product_price: 150 },
      { product_name: "Qadın bəzək", product_description: "Qızıl, komplekt", product_price: 220 },
      { product_name: "Kişi atkısı", product_description: "Xəzəl rəng, uzun", product_price: 35 },
      { product_name: "Qadın bantı", product_description: "Metal detallı, elastik", product_price: 50 }
    ]
  },
  {
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    products: [
      { product_name: "Kişi kostyumu", product_description: "İki parçalı, qara rəngdə", product_price: 320 },
      { product_name: "Qadın kombinezonu", product_description: "Yaz üçün, açıq rəng", product_price: 150 },
      { product_name: "Kişi sviteri", product_description: "Düz rəng, yüngül", product_price: 70 },
      { product_name: "Qadın ziyafət geyimi", product_description: "Düzənşən, yaz üçün", product_price: 95 },
      { product_name: "Kişi sport formaları", product_description: "Spandex, idman üçün", product_price: 55 },
      { product_name: "Qadın bikini", product_description: "Tropik nəqş, elastik", product_price: 45 },
      { product_name: "Kişi çantası", product_description: "Dizayner, əsas bölməsi", product_price: 100 },
      { product_name: "Qadın ətri", product_description: "Gül ətri, uzunömürlü", product_price: 80 },
      { product_name: "Kişi şalı", product_description: "Səliqəli, çoxrəngli", product_price: 25 },
      { product_name: "Qadın sutyeni", product_description: "Destəklənmiş, rahat", product_price: 65 }
    ]
  },
  {
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    products: [
      { product_name: "Kişi köynəyi", product_description: "Mavi rəngdə, 100% pamuk", product_price: 50 },
      { product_name: "Qadın bluzası", product_description: "Dəri detallı, qara rəngdə", product_price: 60 },
      { product_name: "Kişi pantolonu", product_description: "Qəhvəyi rəng, kənar cebi", product_price: 75 },
      { product_name: "Qadın eteyi", product_description: "Qırmızı rəng, mini", product_price: 40 },
      { product_name: "Kişi dəsmalı", product_description: "Nəqşdar dizayn", product_price: 20 },
      { product_name: "Qadın çantası", product_description: "Əlgötürən, dəri", product_price: 90 },
      { product_name: "Kişi botları", product_description: "Qış üçün, suya davamlı", product_price: 120 },
      { product_name: "Qadın ayaqqabıları", product_description: "Yüksək tapan, lacivərt", product_price: 85 },
      { product_name: "Kişi papağı", product_description: "Qara rəngdə, dəri", product_price: 45 },
      { product_name: "Qadın şalvarı", product_description: "Göy rəngdə, kaşmir", product_price: 70 }
    ]
  }
];


let shoppingCart = [];


function siralamaArtan() {
  for (let shop of shopGoods) {
    shop.products.sort((a, b) => a.product_price - b.product_price);
  }
}

function siralamaAzalan() {
  for (let shop of shopGoods) {
    shop.products.sort((a, b) => b.product_price - a.product_price);
  }
}

function siralamaElifba() {
  for (let shop of shopGoods) {
    shop.products.sort((a, b) => a.product_name.localeCompare(b.product_name));
  }
}


function addToCart(productName) {
  productName = productName.toLowerCase();
  let found = false;
  for (let shop of shopGoods) {
    for (let product of shop.products) {
      if (product.product_name.toLowerCase() === productName) {
        shoppingCart.push(product);
        console.log(`${product.product_name} sebete əlavə edildi.`);
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }
  if (!found) {
    console.log(`${productName} tapılmadı.`);
  }
}

function searchProduct(productName) {
  let found = false;
  for (let shop of shopGoods) {
    for (let product of shop.products) {
      if (product.product_name.toLowerCase() === productName.toLowerCase()) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log(`Maqaza Adı: ${shop.store_name}`);
        found = true;
      }
    }
  }
  if (!found) {
    console.log("Axtardıqınız mehsul tapılmadı.");
  }
}

function viewCart() {
  console.log("Alıs-veris sebeti:");
  let totalPrice = 0;
  for (let product of shoppingCart) {
    console.log(`Məhsul Adı: ${product.product_name}`);
    console.log(`Açıqlama: ${product.product_description}`);
    console.log(`Qiymet: ${product.product_price}`);
    totalPrice += product.product_price;
  }
  console.log(`Toplam Qiymet: ${totalPrice}`);
}

let userRole = prompt('Rolunuzu seçin: alici və ya admin');

if (userRole.toLowerCase() === "admin") {
  let adminOperation;
  
  while (true) {
    adminOperation = prompt("Bir eməliyyat seçin: \n1-Bütün mehsulları görmek \n2-Bir mehsul axtarmaq \n3-Mehsulun qiymetini dəyişmək \n4-Mehsulu silmək \n5-Mehsul əlavə etmək  \n6-Proqramı bitirmek");
    
    if (adminOperation === "1") {
      for (let shop of shopGoods) {
        for (let product of shop.products) {
          console.log(`Mehsul Adı: ${product.product_name}`);
          console.log(`Açıqlama: ${product.product_description}`);
          console.log(`Qiymet: ${product.product_price}`);
          console.log(`Maqaza Adı: ${shop.store_name}`);
          console.log("---------------------");
        }
      }
    } else if (adminOperation === "2") {
      let productName = prompt("Axtarmaq istədiyiniz məhsulun adını daxil edin:");
      searchProduct(productName);
    } else if (adminOperation === "3") {
      let productName = prompt("Qiymətini dəyişmək istədiyiniz məhsulun adını daxil edin:");
      let newPrice = parseFloat(prompt("Yeni qiymeti daxil edin:"));
      let found = false;
      for (let shop of shopGoods) {
        for (let product of shop.products) {
          if (product.product_name.toLowerCase() === productName.toLowerCase()) {
            product.product_price = newPrice;
            found = true;
            console.log(`Mehsulun yeni qiymeti: ${product.product_price}`);
            break;
          }
        }
        if (found) {
          break;
        }
      }
      if (!found) {
        console.log("Dəyişilmək istədiyiniz məhsul tapılmadı.");
      }
    } else if (adminOperation === "4") {
      let productName = prompt("Silmək istədiyiniz məhsulun adını daxil edin:");
      let found = false;
      for (let shop of shopGoods) {
        for (let i = 0; i < shop.products.length; i++) {
          if (shop.products[i].product_name === productName) {
            shop.products.splice(i, 1);
            console.log(`${productName} məhsulu silindi.`);
            found = true;
            break;
          }
        }
        if (found) {
          break;
        }
      }
      if (!found) {
        console.log("Silmək istədiyiniz məhsul tapılmadı.");
      }
    } else if (adminOperation === "5") {
      let storeIndex = parseInt(prompt("Məhsulu əlavə etmək istədiyiniz mağazanın indeksini seçin:\n1. Zərif Moda\n2. Əliyev Moda Mərkəzi\n3. Moda Dünyası"));
      if (storeIndex >= 1 && storeIndex <= shopGoods.length) {
        let store = shopGoods[storeIndex - 1];
        let newProduct = {};
        newProduct.product_name = prompt("Məhsulun adını daxil edin:");
        newProduct.product_description = prompt("Məhsulun təsvirini daxil edin:");
        newProduct.product_price = parseFloat(prompt("Məhsulun qiymətini daxil edin:"));
        store.products.push(newProduct);
        console.log(`${newProduct.product_name} məhsulu ${store.store_name} mağazasına əlavə edildi.`);
      } else {
        console.log("Yalnış mağaza indeksi.");
      }
    } else if (adminOperation === "6") {
      console.log("Proqram bitirildi.");
      break;
    } else {
      console.log("Düzgün əməliyyat seçilməyib.");
    }
  }
} 
if (userRole.toLowerCase() === "alici") {
  let adminOperation;

  while (true) {
    adminOperation = prompt("Bir emeliyyat seçin: \n1) Bütün mehsulları görmek \n2) Bir mehsul axtarmaq \n3- Mehsul ardicilligi (artan / azalan / elifba) \n4) Mehsulu sebete elavesi \n5) sebetin deyeri \n6) Proqramı bitirmek");


    if (adminOperation === "1") {
      for (let i = 0; i < shopGoods.length; i++) {
        for (let j = 0; j < shopGoods[i].products.length; j++) {
          const product = shopGoods[i].products[j];
          console.log(`Mehsul Adı: ${product.product_name}`);
          console.log(`Açıqlama: ${product.product_description}`);
          console.log(`Qiymet: ${product.product_price}`);
          console.log(`Maqaza Adı: ${shopGoods[i].store_name}`);
          console.log("---------------------");
        }
      }
    }

    if (adminOperation === "2") {
      let productName = prompt("Axtarmaq istediyiniz mehsulun adını daxil edin:");
      searchProduct(productName);
    }

    if (adminOperation === "3") {
      let sortingOption = prompt("Mehsulları hansı parametrle sıralamaq isteyirsiniz? (qiymet, ad)");
      if (sortingOption.toLowerCase() === "qiymet") {
        let order = prompt("Artan (A) ve ya azalan (B) sıralama?");
        if (order.toLowerCase() === "a") {
          siralamaArtan();
        } else if (order.toLowerCase() === "b") {
          siralamaAzalan();
        } else {
          console.log("Yalnıs sıralama parametri daxil edildi.");
        }
      } else if (sortingOption.toLowerCase() === "ad") {
        siralamaElifba();
      } else {
        console.log("Yalnıs parametr daxil edildi.");
      }
    }


    function siralamaArtan() {
      let allProducts = [];
      for (let shop of shopGoods) {
        allProducts.push(...shop.products);
      }
      allProducts.sort((a, b) => a.product_price - b.product_price);
      console.log("Bütün mehsullar artan qiymet sırasında:");
      for (let product of allProducts) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log("---------------------");
      }
    }


    function siralamaAzalan() {
      let allProducts = [];
      for (let shop of shopGoods) {
        allProducts.push(...shop.products);
      }
      allProducts.sort((a, b) => b.product_price - a.product_price);
      console.log("Bütün mehsullar azalan qiymet sırasında:");
      for (let product of allProducts) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log("---------------------");
      }
    }


    function siralamaElifba() {
      let allProducts = [];
      for (let shop of shopGoods) {
        allProducts.push(...shop.products);
      }
      allProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
      console.log("Bütün mehsullar ad sırasında:");
      for (let product of allProducts) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log("---------------------");
      }
    }


    if (adminOperation === "4") {
      let productName = prompt("Sebeye elave etmek istediyiniz mehsulun adını daxil edin:");
      addToCart(productName);
    }

    if (adminOperation === "5") {
      viewCart();
    }


    if (adminOperation === "6") {
      break; 
    }
  }
}

function searchProduct(productName) {
  let found = false;
  for (let i = 0; i < shopGoods.length; i++) {
    for (let j = 0; j < shopGoods[i].products.length; j++) {
      const product = shopGoods[i].products[j];
      if (product.product_name.toLowerCase() === productName.toLowerCase()) {
        console.log(`Mehsul Adı: ${product.product_name}`);
        console.log(`Açıqlama: ${product.product_description}`);
        console.log(`Qiymet: ${product.product_price}`);
        console.log(`Maqaza Adı: ${shopGoods[i].store_name}`);
        found = true;
      }
    }
  }
  if (!found) {
    console.log("Axtardıqınız mehsul tapılmadı.");
  }
}