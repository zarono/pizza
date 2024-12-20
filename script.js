document.getElementById("order-btn").addEventListener("click", getOrder);

function getOrder() {
  let topping1 = document.getElementById("top1-input").value;
  let topping2 = document.getElementById("top2-input").value;
  let size = document.getElementById("size-input").value;

  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes`;

  alert;

  document.getElementById("order-output").innerHTML = output;
}
