
document.getElementById('coupon-code').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyButton = document.getElementById('btn-apply');
    const purchaseButton =document.getElementById('btn-purchase')
    if (text=== 'SELL200'   ){
        applyButton.removeAttribute('disabled',false);
    }
    else{
        applyButton.setAttribute('disabled', true)
    }
})

document.getElementById('btn-apply').addEventListener('click', function(){
    const couponCode = document.getElementById('coupon-code')
    const discountCode = couponCode.value;

    const discountTotalElement = document.getElementById('discount-total');
    const discountTotal = discountTotalElement.innerText;
    
     const  discount =  (total*20/ 100)
     document.getElementById('discount-total').innerText=  discount;

     const totalPriceElement = document.getElementById('current-total');
     const totalPrice = totalPriceElement.innerText;
     const currentTotalPrice = total - discount ;
     document.getElementById('current-total' ).innerText = currentTotalPrice.toFixed(2)
     
     currentTotalPrice = totalPrice.innerText;
     
     couponCode.value =" ";
 
})

let total = 0;
function cardClick(target){

const ol = document.getElementById('list-items')
    const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
    const count= ol.childElementCount
    const li = document.createElement('li')
    li.classList.add('my-2')
    li.innerHTML =   `${count +1}.${itemName}`  ;
    ol.appendChild(li);

  const itemPrice =target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];

  total = parseFloat(total) + parseFloat(itemPrice);
  document.getElementById('total-price').innerText = total;

  
 
  const applyButton = document.getElementById('btn-apply');
   




  if (total >=200  ){
    applyButton.removeAttribute('disabled',false);
}
else{
    applyButton.setAttribute('disabled', true)
}


 

const btnPurchase = document.getElementById('btn-purchase');
if (total >0){
    btnPurchase.removeAttribute('disabled', false);
}
else{
    btnPurchase.removeAttribute('disabled', true);
}
if(total>=200 || couponCode === "SELL200") {
    alert('Congratulations,you will get 20% discount on your total price,enter the coupon code')
}
}
document.getElementById('go-home').addEventListener('click',function () {
    window.location.reload(); 
    totalPrice .innerText = " ";
    discount.innerText =" ";
    total.innerText = " ";



})
