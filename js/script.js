var button = document.getElementById('calculate')
button.addEventListener('click', function(){

  var burgName = document.getElementById('burger-name').value
  // console.log('click', burgName)
  // var totPrice = 10 errore
  if (burgName.lenght < 1) {
    alert("Hello! I am an alert box!!");
  }
  else {
    var checkboxs = document.getElementsByClassName("ingred");
    var totPrice = 10
    for (var i = 0; i < checkboxs.length; i++) {

       var checkbox = checkboxs[i];
       var isChecked = checkbox.checked;
       var price = parseInt(checkbox.dataset.price);
       // console.log(checkbox, checkbox.checked, price)

       if (isChecked) {

         totPrice += price;
            // errore console.log(totPrice)
       }
    }
    var couponCode = ["coupon1","coupon2","coupon3"];
    var couponIn = document.getElementById('burger-coupon').value;
    var prezzo = document.getElementById('price');
    prezzo.innerHTML= totPrice
    if (couponCode = couponIn) {
      var sconto = totPrice * 0.2;
      prezzo.innerHTML=totPrice-sconto;
    }
  }
})
