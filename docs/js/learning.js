// 1. boolean
// false == null, undefined, 0, NaN, '', false
// true == anything else

// 2. string
// các dấu khởi tạo: '', "", ``

// let name = 'linh'
// let str = `hello ${name}` 
// console.log(str)  // hello linh
// console.log(name.charAt(2)) // n
// console.log('abcdef'.endsWith('a')) // false
// console.log('abcdef'.startsWith('a')) // true
// console.log('a b c d'.split(' '))
// console.log('a b c d'.split(''))
// console.log('aBcDeF'.toLowerCase()) // abcdef
// console.log('aBcDeF'.toUpperCase()) // ABCDEF
// console.log('      abc def     '.trim()) // abc def

// 3. number
// parseInt(), parseFloat()
// thư viện tính toán: Math

// console.log(parseInt('10')) // 10
// console.log(parseInt('10.5')) // 10
// console.log(parseFloat('10.5')) // 10.5
// console.log(parseInt('abc')) // NaN

// console.log(Math.sqrt(2))
// console.log(Math.pow(5,3))
// console.log(Math.log10(100))
// console.log(Math.sin(Math.PI/4)) // sin(45)==0.7071067811865475
// console.log(Math.asin(0.7071067811865475)) // PI/4
// console.log(Math.ceil(10.5)) // 11
// console.log(Math.floor(10.5)) // 10
// console.log(Math.random()) // một số bất kỳ trong khoảng từ 0 đến 1

// for (let i = 0; i < 10; i++) {
//     console.log('random 0 > 9')
//     console.log(parseInt(10 * Math.random()))
// }

// 4. object - class
// language class: Date, Error, Object, Array,...
// let date1 = new Date()
// console.log(date1.toISOString())
// console.log(date1.getDate())
// console.log(date1.getFullYear())

// let date2 = new Date('1990-01-11')
// console.log(date2.toLocaleString())
// console.log(date2.toLocaleDateString())

// class Human {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     speak() {
//         console.log('Human speak')
//     }
// }

// class Student extends Human {
//     // constructor(name, age) {
//     //     this.name = name
//     //     this.age = age
//     // }

//     learn() {
//         console.log(this.name + " is learning")
//     }
//     // Override
//     speak() {
//         console.log('Student speak')
//     }
// }
// let human1 = new Human("Nguyen Thi C", 25)
// console.log(human1)
// let student1 = new Student("Nguyen Van A", 18)
// console.log(student1)
// let student2 = new Student("Nguyen Van B", 20)
// console.log(student2.name)
// student1.learn() // this ~ student1 -> this.name == student1.name == "Nguyen Van A"
// student2.learn() // this ~ student2 -> this.name == student2.name == "Nguyen Van B"

// human1.speak()
// student1.speak()

// 5. array
// let array = [1, 2, 3]
// // push><pop (them o cuoi, xoa o cuoi), unshift><shift (them o dau, xoa o dau)
// array.push(4)
// console.log("after push: ", array)
// array.pop()
// console.log("after pop", array)
// array.unshift(0)
// console.log("after unshift", array)
// array.shift()
// console.log("after shift", array)

// // splice(): them/xoa phan tu o bat ki vi tri nao cua mang?
// array.splice(1,1) // index, deleteCount
// console.log("after splice", array) // [1, 3]

// array = [1, 2, 3, 4]
// array.splice(1, 2, 2.2, 2.3, 2.4) // xoa phan tu so [1] == 2, deleteCount == 2 -> xoa 2 phan tu, thay the 2 phan tu bi xoa bang 2.2., 2.3 , 2.4
// console.log("after splice", array)
// // neu chi muon them ma k muon xoa, deleteCount == 0

// // duyet. mang? : forEach()
// array.forEach(function(value) {
//     console.log(value)
// })

// // loc mang? : filter()
// array = [1, 2, 3, 4]
// // dung vong lap for
// // let evens = []
// // for(let number of array) {
// //     if(isEven(number)) {
// //         evens.push(number)
// //     }
// // }

// // dung filter
// function isEven(number) {
//     return number % 2 == 0
// }
// let evens = array.filter(isEven)
// console.log(evens) // [2, 4]
// let odds = array.filter(function(number) {
//     return number % 2 == 1
// })
// console.log(odds) // [1, 3]

// // bien doi mang? : map(): goi ham` cho minh roi
// array = [1, 2, 3]
// let newArray = array.map(function(number) {
//     return number * 2
// })
// console.log(newArray) // [2, 4, 6]

// // tim kiem trong mang? voi ham dieu kien: find(), findIndex()
// // tra ra ket qua dau tien true
// array = [1, 2, 3, 4, 5, 6]
// let evenFound = array.find(function(number) {
//     return number % 2 == 0
// })
// console.log(evenFound) // 2

// let evenFoundIndex = array.findIndex(function(number) {
//     return number % 2 == 0
// })
// console.log(evenFoundIndex) // 1

// // tim kiem trong mang? theo gia tri: indexOf(), lastIndexOf(), includes()
// array = [1, 2, 3, 2, 1, 2]
// let indexOf2 = array.indexOf(2)
// console.log(indexOf2) // 1
// let lastIndexOf2 = array.lastIndexOf(2)
// console.log(lastIndexOf2) // 5
// let notExists = array.indexOf("abc")
// console.log(notExists) // -1
// let included = array.includes(3) // true
// let notIncluded = array.includes(4) // false

// // dao nguoc mang? : reverse()
// array = [1, 2 ,3]
// let reversedArray = array.reverse()
// console.log(reversedArray) // [3, 2, 1]

// let a = 10
// let b = 20
// try{
//     // code nghi ngo co the sinh ra loi
//     let result = sum(a,b)
//     console.log('Sum a+b= ' + result)
// } catch(error) {
//     // code xu ly loi
//     console.log('Error found: ' + error.message)
// }
// console.log("I'm here to execute")
// built-in error <- ReferenceError

// custom error: loi do minh tu dinh nghia, va dc tra ve qua tu` khoa'
// let a = -1
// try{
//     if(a<0) {
//         throw new Error('a must be greater than 0')
//     }
//     console.log("I'm here to execute")
// } catch(error) {
//     console.log(error.message)
// }

// function validateNumber(number) {
//     if(number < 0) {
//         throw new Error('number must be greater than 0')
//     }
//     return number
// }
// try {
//     validateNumber(0)
//     validateNumber(-1)
//     validateNumber(-2)
//     validateNumber(2)
// } catch(error) {
//     console.log('Error: ' + error.message)
// }

// tat ca cau lenh dat trong khoi Finally deu dc chay du chuong trinh co loi hay khong

// try {
//     console.log(validateNumber(1))
//     console.log(validateNumber(-1))
//     console.log(validateNumber(0))
// } catch(error) {
//     console.log('Error: ' + error.message)
// } finally {
//     console.log('Can be executed')
// }

// bất đồng bộ >< đồng bộ là như thế nào?
// đồng bộ: công việc được thực hiện tuần tự từ trên xuống dưới
// bất đồng bộ: công việc được thực hiện một cách song song

// ví dụ về đồng bộ
let a = 10
let b = 3
console.log(a+b)

// ví dụ về bất đồng bộ
// cong viec 1
setTimeout(function() {
    console.log("Job 1: done")
}, 5000)

// cong viec 2
setTimeout(function() {
    console.log("Job 2: done")
}, 2000)