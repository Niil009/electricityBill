
let btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
    let name = document.getElementById('name').value
    let out = document.getElementById('out')
    let consume = document.getElementById('consumption').value
    let cat = document.querySelector('select[name="category"]').value;
    e.preventDefault()
    out.textContent = ""
    if (!name || !consume || !cat) {
        alert('all fields are mandatory')
    }
    else {
        out.style.display = "block"
        consume = parseFloat(consume)

        if ((cat === "General") && (consume >= 0 && consume <= 100)) {

            let res = document.createElement('div')
            res.innerText = "your bill is free"
            out.append(res)
        }
        else if ((cat === "General") && (consume > 100 && consume <= 300)) {
            let bill = 200 - (consume + 100)
            let res = document.createElement('div')
            res.innerText = `your bill is ${bill * 8}`
            out.append(res)

        }
        else if ((cat === "General") && (consume >= 300)) {
            let bill = consume - 100
            let res = document.createElement('div')
            res.textContent = `your bill is ${bill * 15}`
            out.append(res)

        }
        else if ((cat === "Obc") && (consume >= 0 && consume < 200)) {
            // let bill =0 
            let res = document.createElement('div')
            res.innerText = "your bill is free"
            out.append(res)
        }
        else if ((cat === "Obc") && (consume >= 200 && consume <= 400)) {
            let bill = (consume - 200) * 8
            let res = document.createElement('div')
            res.innerText = `your bill is ${bill}`
            out.append(res)
        }
        else if ((cat === "Obc") && (consume >= 400)) {
            let bill = (consume - 200) * 15
            let res = document.createElement('div')
            res.innerText = `your bill is ${bill}`
            out.append(res)
        }
        else if((cat ==="Ac/st")&&(consume>=0 && consume<=500)){
            let res = document.createElement('div')
            res.textContent = `your bill is free`
        }
        else if((cat = "Ac/st") &&(consume>=500)){
            let bill = (consume - 500)*3
            let res = document.createElement('div')
            res.innerText = `your bill is ${bill}`
            out.append(res)
        }
    }
})