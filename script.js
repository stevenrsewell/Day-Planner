var planner = document.querySelector('.planner')

var timeSlot = []

var i = 0

while(i < 8) {
  var slot = document.createElement("div")

  var textValue = window.localStorage.getItem(i)

  if (textValue === null) {
    textValue = ""
  }
  slot.innerHTML = `
    <div class="time-${i}"></div>
    <input type='text' class="text-${i}" value="${textValue}"/>
    <input type='button' value='save' class="save-${i}" onclick='saveText("${i}")'/>
  `
  saveButton = slot.querySelector(`save-${1}`)

  timeSlot.push(slot)
  i++
}

function saveText(slotId) {
  text = document.querySelector(`.text-${slotId}`)
  console.log(slotId);
  window.localStorage.setItem(slotId, text.value)
}
