var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")

for(var i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none"
}

function showTab(evt, id){
  // Hide tabs
  for(var i = 0; i < tabs.length; i++){
      tabs[i].style.display = "none"
      tabs[i].classList.remove("active")
  }

  // Show tab with specific id
  document.getElementById(id).style.display = "block"

  // Tabs animation
  setTimeout(function() {
      document.getElementById(id).classList.add("active")
  }, 100)

  // Remove class style from buttons
  for(var i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("btn-style")
  }

  // Add button style
  evt.currentTarget.classList.add("btn-style")
  console.log(evt.currentTarget)
}


// First Load
buttons[0].classList.add("btn-style")
tabs[0].style.display = "block"
setTimeout(function() {
  tabs[0].classList.add("active")
})