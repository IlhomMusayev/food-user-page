let foods = {
    food1: {
        name: "Spanish Salad",
        img_link: "assets/img/spanishsala.jpeg",
        price: "5.99"
    },
    food2: {
        name: "Noodle Salad",
        img_link: "assets/img/Noodle Salad.jpg",
        price: "4.50"
    },
    food3: {
        name: "Cheese Burger",
        img_link: "assets/img/Cheese Burger.jpeg",
        price: "5.50"
    },
    food4: {
        name: "Strawberry Pie",
        img_link: "assets/img/Strawberry Pie.jpg",
        price: "4.50"
    }
}

// Foodlarni joylashtirish:
const foodNameElement = document.querySelector('.food-name')
const foodImgLinkElement = document.querySelector('.food_img')
const foodPriceElement = document.querySelector('.food-price')


// basket foods items
const foodBasketElement1 = document.querySelector('#food1')
const foodBasketElement2 = document.querySelector('#food2')
const foodBasketElement3 = document.querySelector('#food3')
const foodBasketElement4 = document.querySelector('#food4')

console.log(foods);
const foodItemElements = document.querySelectorAll('.food-item')
const foodModalElement = document.querySelector('.modal-food')
const closeBtnElement = document.querySelector('.close-btn')

const diveContentElement = document.querySelector('.dive')

const Foods = JSON.parse(localStorage.getItem('Foods'))


let test = document.querySelectorAll('.food_img')
// console.log(test);

foodItemElements[0].addEventListener('click', e => {
    const modalImgElement = document.querySelector('.modal_food_img')
    const modalFoodNameElement = document.querySelector('.modal_food_name')
    const modalFoodPriceElement = document.querySelector('.modal_food_price')

    modalImgElement.src = foods.food1.img_link
    modalFoodNameElement.textContent = foods.food1.name
    modalFoodPriceElement.textContent = "$" + foods.food1.price

    if (foodModalElement.style.display == 'none') {
        foodModalElement.style.display = 'block'
    } else {
        foodModalElement.style.display = 'none'
    }

    const addFoodBtnElement = document.querySelector('.add-based')
    addFoodBtnElement.addEventListener('click', e => {
        foodBasketElement1.style.display = 'flex'
        diveContentElement.style.display = 'none'
        localStorage.setItem('food1', true)
        localStorage.setItem('order_count1', '1')
        totalCount()
    })
})
console.log(localStorage.getItem('food1'));
if (localStorage.getItem('food1') == 'true') {
    foodBasketElement1.style.display = 'flex'
    diveContentElement.style.display = 'none'
}
const removeFoodBtnElement1 = document.querySelector('#remove-product1')
removeFoodBtnElement1.addEventListener('click', e => {
    foodBasketElement1.style.display = 'none'
    localStorage.setItem('food1', false)
    localStorage.removeItem('order_count1')
    totalCount()
})

const removeFoodBtnElement2 = document.querySelector('#remove-product2')
removeFoodBtnElement2.addEventListener('click', e => {
    foodBasketElement2.style.display = 'none'
    localStorage.setItem('food2', false)
    localStorage.removeItem('order_count2')
    totalCount()
})

const removeFoodBtnElement3 = document.querySelector('#remove-product3')
removeFoodBtnElement3.addEventListener('click', e => {
    foodBasketElement3.style.display = 'none'
    localStorage.setItem('food3', false)
    localStorage.removeItem('order_count3')
    totalCount()
})

const removeFoodBtnElement4 = document.querySelector('#remove-product4')
removeFoodBtnElement4.addEventListener('click', e => {
    foodBasketElement4.style.display = 'none'
    localStorage.setItem('food4', false)
    localStorage.removeItem('order_count4')
    totalCount()
})
foodItemElements[1].addEventListener('click', e => {
    const modalImgElement = document.querySelector('.modal_food_img')
    const modalFoodNameElement = document.querySelector('.modal_food_name')
    const modalFoodPriceElement = document.querySelector('.modal_food_price')

    modalImgElement.src = foods.food2.img_link
    modalFoodNameElement.textContent = foods.food2.name
    modalFoodPriceElement.textContent = "$" + foods.food2.price

    if (foodModalElement.style.display == 'none') {
        foodModalElement.style.display = 'block'
    } else {
        foodModalElement.style.display = 'none'
    }
    const addFoodBtnElement = document.querySelector('.add-based')
    addFoodBtnElement.addEventListener('click', e => {
        foodBasketElement2.style.display = 'flex'
        diveContentElement.style.display = 'none'
        localStorage.setItem('food2', true)
        localStorage.setItem('order_count2', '1')
        totalCount()
        Foods.push({
            Foodname1: foods.food1.name
        })
        
    })
})
if (localStorage.getItem('food2') == 'true') {
    foodBasketElement2.style.display = 'flex'
    diveContentElement.style.display = 'none'
}

foodItemElements[2].addEventListener('click', e => {
    const modalImgElement = document.querySelector('.modal_food_img')
    const modalFoodNameElement = document.querySelector('.modal_food_name')
    const modalFoodPriceElement = document.querySelector('.modal_food_price')

    modalImgElement.src = foods.food3.img_link
    modalFoodNameElement.textContent = foods.food3.name
    modalFoodPriceElement.textContent = "$" + foods.food3.price

    if (foodModalElement.style.display == 'none') {
        foodModalElement.style.display = 'block'
    } else {
        foodModalElement.style.display = 'none'
    }
    const addFoodBtnElement = document.querySelector('.add-based')
    addFoodBtnElement.addEventListener('click', e => {
        foodBasketElement3.style.display = 'flex'
        diveContentElement.style.display = 'none'
        localStorage.setItem('food3', true)
        localStorage.setItem('order_count3', '1')
        totalCount()
    })
})

if (localStorage.getItem('food3') == 'true') {
    foodBasketElement3.style.display = 'flex'
    diveContentElement.style.display = 'none'
}
foodItemElements[3].addEventListener('click', e => {
    const modalImgElement = document.querySelector('.modal_food_img')
    const modalFoodNameElement = document.querySelector('.modal_food_name')
    const modalFoodPriceElement = document.querySelector('.modal_food_price')

    modalImgElement.src = foods.food4.img_link
    modalFoodNameElement.textContent = foods.food4.name
    modalFoodPriceElement.textContent = "$" + foods.food4.price

    if (foodModalElement.style.display == 'none') {
        foodModalElement.style.display = 'block'
    } else {
        foodModalElement.style.display = 'none'
    }
    const addFoodBtnElement = document.querySelector('.add-based')
    addFoodBtnElement.addEventListener('click', e => {
        foodBasketElement4.style.display = 'flex'
        diveContentElement.style.display = 'none'
        localStorage.setItem('food4', true)
        localStorage.setItem('order_count4', '1')
        totalCount()
    })
})
if (localStorage.getItem('food4') == 'true') {
    foodBasketElement4.style.display = 'flex'
    diveContentElement.style.display = 'none'
}

closeBtnElement.addEventListener('click', e => {
    foodModalElement.style.display = 'none'
})

const editOrderBtnElement = document.querySelector('.order-edit-btn')
const editOrderModalElement = document.querySelector('.edit-order-madal')
const editOrderModalCloseBtnELement = document.querySelector('.order-close-btn')
const saveMyAdressBtn = document.querySelector('.save-btn')
const getGeolocationBtn = document.querySelector('.get-geolocation')
const messageElement = document.querySelector('#message')
const formElemetn = document.querySelector('.edit-order')




editOrderBtnElement.addEventListener('click', e => {
    editOrderModalElement.style.display = 'block'
})

const errorElement = document.querySelector('.Error')
getGeolocationBtn.addEventListener('click', e => {
    navigator.geolocation.getCurrentPosition(event => {
        localStorage.setItem("latitude", event.coords.latitude);
        localStorage.setItem("longitude", event.coords.longitude)
    })
    errorElement.textContent = "Manzil saqlandi, xabar kiritishingiz mumkin!"
})
editOrderModalCloseBtnELement.addEventListener('click', e => {
    editOrderModalElement.style.display = 'none'
})

const orderAddressElement = document.querySelector('.order-adress')
const orderMessageElement = document.querySelector('.order-message')
const orderTimeElement = document.querySelector('.order-time')
formElemetn.addEventListener('submit', e => {
    event.preventDefault()
    const dateNow = new Date()
    const orderTime = dateNow.getHours() + ":" + dateNow.getMinutes()
    localStorage.setItem("message", messageElement.value)
    localStorage.setItem("orderTime", orderTime)
    localStorage.setItem("orderAddress", "Uzbekistan, Tashkent")
})
orderMessageElement.textContent = localStorage.getItem('message')
orderAddressElement.textContent = localStorage.getItem('orderAddress')
orderTimeElement.textContent = localStorage.getItem('orderTime')

// Add product basket


const plusBtnElement = document.querySelectorAll('.btn-plus')
const minusBtnElement = document.querySelectorAll('.btn-minus')
const orderCountElement1 = document.querySelector('.order_count1')
const orderCountElement2 = document.querySelector('.order_count2')
const orderCountElement3 = document.querySelector('.order_count3')
const orderCountElement4 = document.querySelector('.order_count4')

const orderPriceElement1 = document.querySelector('#price1')

plusBtnElement[0].addEventListener('click', e => {
    orderCountElement1.textContent++
    localStorage.setItem('order_count1', orderCountElement1.textContent)
    orderPriceElement1.textContent = localStorage.getItem('order_count1') * foods.food1.price
    totalCount()
})
if (localStorage.getItem("order_count1")) {
    orderCountElement1.textContent = localStorage.getItem('order_count1')
    orderPriceElement1.textContent = localStorage.getItem('order_count1') * foods.food1.price
}
minusBtnElement[0].addEventListener('click', e => {
    if (orderCountElement1.textContent > 0) {
        orderPriceElement1.textContent = localStorage.getItem('order_count1') * foods.food1.price
        localStorage.setItem('order_count1', orderCountElement1.textContent)
        orderCountElement1.textContent--
        totalCount()
    }
})

const orderPriceElement2 = document.querySelector('#price2')

plusBtnElement[1].addEventListener('click', e => {
    orderCountElement2.textContent++
    localStorage.setItem('order_count2', orderCountElement2.textContent)
    orderPriceElement2.textContent = localStorage.getItem('order_count2') * foods.food2.price
    totalCount()
})
if (localStorage.getItem("order_count2")) {
    orderCountElement2.textContent = localStorage.getItem('order_count2')
    orderPriceElement2.textContent = localStorage.getItem('order_count2') * foods.food2.price
}
minusBtnElement[1].addEventListener('click', e => {
    if (orderCountElement2.textContent > 0) {
        orderPriceElement2.textContent = localStorage.getItem('order_count2') * foods.food2.price
        localStorage.setItem('order_count2', orderCountElement2.textContent)
        orderCountElement2.textContent--
    }
    totalCount()
})

const orderPriceElement3 = document.querySelector('#price3')

plusBtnElement[2].addEventListener('click', e => {
    orderCountElement3.textContent++
    localStorage.setItem('order_count3', orderCountElement3.textContent)
    orderPriceElement3.textContent = localStorage.getItem('order_count3') * foods.food3.price
    totalCount()
})
if (localStorage.getItem("order_count3")) {
    orderCountElement3.textContent = localStorage.getItem('order_count3')
    orderPriceElement3.textContent = localStorage.getItem('order_count3') * foods.food3.price
}
minusBtnElement[2].addEventListener('click', e => {
    if (orderCountElement3.textContent > 0) {
        orderPriceElement3.textContent = localStorage.getItem('order_count3') * foods.food3.price
        localStorage.setItem('order_count3', orderCountElement3.textContent)
        orderCountElement3.textContent--
    }
    totalCount()
})

const orderPriceElement4 = document.querySelector('#price4')

plusBtnElement[2].addEventListener('click', e => {
    orderCountElement4.textContent++
    localStorage.setItem('order_count4', orderCountElement4.textContent)
    orderPriceElement4.textContent = localStorage.getItem('order_count3') * foods.food4.price
    totalCount()
})
if (localStorage.getItem("order_count4")) {
    orderCountElement4.textContent = localStorage.getItem('order_count4')
    orderPriceElement4.textContent = localStorage.getItem('order_count4') * foods.food4.price
}
minusBtnElement[2].addEventListener('click', e => {
    if (orderCountElement4.textContent > 0) {
        orderPriceElement4.textContent = localStorage.getItem('order_count4') * foods.food4.price
        localStorage.setItem('order_count4', orderCountElement4.textContent)
        orderCountElement4.textContent--
    }
    totalCount()
})



function totalCount() {
    const totalCountPriceElement = document.querySelector('#total_count')
    let totalCount = localStorage.getItem('order_count1') * foods.food1.price + localStorage.getItem('order_count2') * foods.food2.price
    totalCountPriceElement.textContent = totalCount
}totalCount()






const chechoutBtnElement = document.querySelector('.chechout')
console.log(chechoutBtnElement);
let allMessage = `Addres: ${localStorage.getItem('orderAddress')}\nMessage: ${localStorage.getItem('message')}`
chechoutBtnElement.addEventListener('click', e => {
    window.location.href = `https://api.telegram.org/bot1850263879:AAG7Wpd-Gv523cGgh7WcaXsiQ2xU9Rmpz8I/sendMessage?chat_id=1492712163&parse_mode=html&text=${allMessage}`
    window.location.href = `https://api.telegram.org/bot1850263879:AAG7Wpd-Gv523cGgh7WcaXsiQ2xU9Rmpz8I/sendlocation?chat_id=1492712163&latitude=${localStorage.getItem('latitude')}&longitude=${localStorage.getItem('longitude')}`
})

