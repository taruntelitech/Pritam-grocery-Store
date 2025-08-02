function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

function openForm(productName) {
  document.getElementById('productName').value = productName;
  document.getElementById('orderForm').style.display = "block";
}

function closeForm() {
  document.getElementById('orderForm').style.display = "none";
}
