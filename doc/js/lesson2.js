// event

// window.onload = sayHello // khi cửa sổ tải xong, chạy hàm sayHello

// window.onclick = sayHello // khi click chuột, chạy hàm sayHello

// function sayHello(event) {
//     console.log(event) // biến event là biến miêu tả cái event thực hiện
//     console.log('Hello')
// }


// DOM // gọi thẻ ra trong code, quyết định các thuộc tính của thẻ

// window.onload = init

// function init() {
//     let h3 = document.getElementById('form-header-h3')
//     h3.onclick = sayHello
//     h3.style.background = 'coral' // DOM có thể quyết định được cả CSS
//     h3.innerText = 'Something'
// }

// function sayHello() {
//     console.log('Hello world')
// }