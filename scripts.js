const products = []

function addProduct() {
    const form = document.getElementById('form-add')

    const formData = new FormData(form)

    const data = Object.fromEntries(formData)

    products.push(data)

    console.log(products);
}