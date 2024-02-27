const logo_img_element = document.querySelector("#logo-icon");
const logo_url = ["../static/car.png", "../static/classic-car.png", "../static/luxury-vehicle.png", "../static/old-car.png", "../static/vintage-car.png", "../static/old-car.png"];

logo_img_element.src = logo_url[Math.floor(Math.random() * logo_url.length)];