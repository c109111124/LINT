let removehamburger = document.getElementById('removehamburger')
let hamburgerquantity = document.getElementById('hamburgerquantity')
let addhamburger = document.getElementById('addhamburger')

let removefrench = document.getElementById('removefrench')
let frenchquantity = document.getElementById('frenchquantity')
let addfrench = document.getElementById('addfrench')

let removesala = document.getElementById('removesala')
let salaquantity = document.getElementById('salaquantity')
let addsala = document.getElementById('addsala')

let order = document.getElementById('order')

var a = 0
var b = 0
var c = 0


/*時間 */
var totaltime = 0
let time = document.getElementById('time')

var timea = 0

var timeb = 0

var timec = 0



window.onload = function () {
    hamburgerquantity.innerText = a
    frenchquantity.innerText = b
    salaquantity.innerText = c
}

addhamburger.addEventListener('click', () => {
    if (alreadysend == 0) {
        a++
        hamburgerquantity.innerText = a
        timea = a * 300
        totaltime = timea + timeb + timec
        time123 = totaltime
    }

})

removehamburger.addEventListener('click', () => {
    if (alreadysend == 0) {
        if (a > 0) {
            a--
            hamburgerquantity.innerText = a
            timea = a * 300
            totaltime = timea + timeb + timec
            time123 = totaltime
        }
    }

})


addfrench.addEventListener('click', () => {
    if (alreadysend == 0) {
        b++
        frenchquantity.innerText = b
        timeb = b * 100
        totaltime = timea + timeb + timec
        time123 = totaltime
    }

})

removefrench.addEventListener('click', () => {
    if (alreadysend == 0) {
        if (b > 0) {
            b--
            frenchquantity.innerText = b
            timeb = b * 100
            totaltime = timea + timeb + timec
            time123 = totaltime
        }
    }

})

addsala.addEventListener('click', () => {
    if (alreadysend == 0) {
        c++
        salaquantity.innerText = c
        timec = c * 60
        totaltime = timea + timeb + timec
        time123 = totaltime
    }

})

removesala.addEventListener('click', () => {
    if (alreadysend == 0) {
        if (c > 0) {
            c--
            salaquantity.innerText = c
            timec = c * 60
            totaltime = timea + timeb + timec
            time123 = totaltime
        }
    }

})


// 送出
let alreadysend = 0

if (alreadysend === 0) {
    order.addEventListener('click', () => {
        alreadysend = 1
        if (a === 0 && b === 0 && c === 0) {
            alert('別輸入無效餐點')
            alreadysend = 0
        } else {
            time.innerText = '總共時間' + time123 + '秒' + '\n' + totaltime
            alreadysend = 1
        }
    })
}


// 時間更新
let alltime = 0
let min = 0
let sec = 0
let time123 = 0

// 定時器
setInterval(() => {
    // 檢查是否已經送出訂單
    if (alreadysend === 1) {
        if (totaltime >= 0) {
            totaltime--;
            min = parseInt(totaltime / 60);
            sec = totaltime % 60;
            alltime = min + '分' + sec + '秒';

            time.innerText = '總共時間' + time123 + '秒' + '\n' + alltime;
            if (totaltime === 0) {
                alreadysend = 0;
                time.innerText = '訂單完成'; // 添加訂單完成的文字
            }
        }
    }
}, 1000);














