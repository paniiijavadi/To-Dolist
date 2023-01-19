let delId = 1
let y
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let toDo = document.getElementsByTagName('input')[0]
let _date= new Date()
document.getElementById('date').innerText=days[_date.getDay()]+' , '+months[_date.getMonth()]+_date.getDate()+' , '+_date.getFullYear()

function _add() {
    let _ul=document.getElementsByTagName('ul')[0]
    if (toDo.value == null || toDo.value=='') {

    } else {
        let _li = document.createElement('li')
        _li.innerHTML = `
    <div id="x${delId}">
         <div >
             <label onclick="_done(this)" for="del${delId}">
                <input type="checkbox" id="del${delId}" class="del">
                <span class="check" onclick="_done(this)"><i class="demo-icon icon-ok"></i></span>
                <h2 onclick="_done(this)" >${toDo.value}</h2>
             </label>
         </div>
         <div class='content'>
            <span class='btn' onclick="_edit(this)"><i class="demo-icon icon-pencil"></i></span>
            <span class='btn' onclick="_delete(this)"><i class="demo-icon icon-trash-empty"></i></span>
         </div>
    </div>
    `
        _ul.appendChild(_li)
        toDo.value = ''

    }
    delId++
}

function _done(selected) {
    selected.classList.toggle('line')
    selected.nextElementSibling.classList.toggle('line')

}

function _edit(selected) {
    y = selected.parentElement.parentElement.getAttribute('id')
    toDo.value = selected.parentElement.previousElementSibling.innerText
}

function edited() {
    if (toDo.value == '') {} else {
        document.querySelector('#' + y + '>div>label>h2').innerText = toDo.value
        toDo.value = ''
    }

}

function _delete(selected) {
    selected.parentElement.parentElement.remove()
}