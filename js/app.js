// capture elements by dom
const memory8Btn = document.getElementById("memory-8-btn");
const memory16Btn = document.getElementById("memory-16-btn");
const extraMemoryCost = document.getElementById("extra-memory-cost");
const bestPrice = document.getElementById("best-price").innerText;
const totalPrice = document.getElementById("total-price");
const totalAmount = document.getElementById("total-amount");
const promoBtn = document.getElementById("promocode-apply-btn");
const promoCodeInput = document.getElementById("promocode-input");

// funtion for calculating total price & total amount
function calculator() {
  totalPrice.innerText =
    parseInt(bestPrice) +
    parseInt(extraMemoryCost.innerText) +
    parseInt(extraStorageCost.innerText) +
    parseInt(deliveryCharge.innerText);
  totalAmount.innerText = totalPrice.innerText;
}
// funtion for Memory Options
function memoryCost(num) {
  extraMemoryCost.innerText = num;
}
// Handle memory option
memory8Btn.addEventListener("click", function () {
  memoryCost(0);
  calculator();
});
memory16Btn.addEventListener("click", function () {
  memoryCost(180);
  calculator();
});

// Capture elements for storage Options
const ssd256Btn = document.getElementById("ssd-256-btn");
const ssd512Btn = document.getElementById("ssd-512-btn");
const ssd1TbBtn = document.getElementById("ssd-1tb-btn");
const extraStorageCost = document.getElementById("extra-storage-cost");
// funtion for storage Options
function storageCost(cost) {
  extraStorageCost.innerText = cost;
}
ssd256Btn.addEventListener("click", function () {
  storageCost(0);
  calculator();
});
ssd512Btn.addEventListener("click", function () {
  storageCost(100);
  calculator();
});
ssd1TbBtn.addEventListener("click", function () {
  storageCost(180);
  calculator();
});
// Capture elements for Shipping Charge Options
const dlvFreeBtn = document.getElementById("dlv-free-btn");
const dlvChargeBtn = document.getElementById("dlv-charge-btn");
const deliveryCharge = document.getElementById("delivery-charge");

function shippingCharge(chrg) {
  deliveryCharge.innerText = chrg;
}
// Handle Shipping Charge Options
dlvFreeBtn.addEventListener("click", function () {
  shippingCharge(0);
  calculator();
});
dlvChargeBtn.addEventListener("click", function () {
  shippingCharge(20);
  calculator();
});

// Handle Promocode Button

promoBtn.addEventListener("click", function () {
  const promoCodeInput = document.getElementById("promocode-input");
  const promoCodeInputText = promoCodeInput.value;

  //condition for specific promocode
  if (promoCodeInputText == "stevekaku") {
    const Parcent = (20 / 100) * totalAmount.innerText;
    totalAmount.innerText = totalAmount.innerText - Parcent;
  } else {
    totalAmount.innerText = totalPrice.innerText;
  }
  promoCodeInput.value = "";
});
