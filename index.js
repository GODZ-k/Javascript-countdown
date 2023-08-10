const time = "13 September 2023 12:00 AM"
document.getElementById('end-time').innerHTML = time
const input = document.querySelectorAll('input')


function clock() {
    const end = new Date(time)
    const current = new Date()
        // console.log(end)
        // console.log(current)
    const diff = (end - current) / 1000
    if (diff < 0) return
    const a = Math.floor(diff / 3600 / 24)
    const b = Math.floor(diff / 3600) % 24
    const c = Math.floor(diff / 60) % 60
    const d = Math.floor(diff) % 60
        // console.log(diff)
    console.log(a)
    input[0].value = a
    input[1].value = b
    input[2].value = c
    input[3].value = d

    // if (d >= 60) {
    //     c = c - 1
    // }

}

clock()

setInterval(() => {
    clock()
}, 1000);