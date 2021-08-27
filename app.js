var options = [false,false,false,false,false,false]
var covers = [false,false, false, false, false]
var checker = arr => arr.every(v => v === false)
var contactInfo = {email: 'dylanbakr@gmail.com', text:'(815) 993-8931', mail:'425 W Hampton Drive'}
function update(selected){
  switch (selected)
  {
    case 'email':
      console.log('email')
      document.getElementById("contact").href = `"mailto:${contactInfo.email}"`
      document.getElementById("contact").innerHTML = contactInfo.email
      break;
    case 'text':
      console.log('text')
      document.getElementById("contact").href = `"tel:${contactInfo.text}"`
      document.getElementById("contact").innerHTML = contactInfo.text
      break;
    case 'mail':
      console.log('mail')
      document.getElementById("contact").href = "https://goo.gl/maps/bTkq7kuiwpWBuZMx6"
      document.getElementById("contact").innerHTML = contactInfo.mail
      break;
    default:
  }
}

function add(pane) {
  switch (pane) {
    case "who":
      var div = document.getElementById("whod")
      var button = document.getElementById("who")
      options[0]=!options[0]
      if(options[0])
      {
        button.classList.add('button-selected')
        div.style.display = "block"
        div.scrollIntoView('smooth')
      }
      if(!options[0])
      {
        button.classList.remove('button-selected')
        div.style.display = "none"
      }
      if(checker(options)){document.getElementById("top").style.visibility="hidden"}
      else(document.getElementById("top").style.visibility="visible")
      break;
    case "what":
      var div = document.getElementById("whatd")
      var button = document.getElementById("what")
      options[1]=!options[1]
      if(options[1])
      {
        button.classList.add('button-selected')
        div.style.display = "block"
        div.scrollIntoView('smooth')
      }
      if(!options[1])
      {
        button.classList.remove('button-selected')
        div.style.display = "none"
      }
      if(checker(options)){document.getElementById("top").style.visibility="hidden"}
      else(document.getElementById("top").style.visibility="visible")
      break;
    case "where":
      var div = document.getElementById("whered")
      var button = document.getElementById("where")
      options[2]=!options[2]
      if(options[2])
      {
        button.classList.add('button-selected')
        div.style.display = "block"
        div.scrollIntoView('smooth')
      }
      if(!options[2])
      {
        button.classList.remove('button-selected')
        div.style.display = "none"
      }
      if(checker(options)){document.getElementById("top").style.visibility="hidden"}
      else(document.getElementById("top").style.visibility="visible")
      break;
    case "when":
      var div = document.getElementById("whend")
      var button = document.getElementById("when")
      options[3]=!options[3]
      if(options[3])
      {
        button.classList.add('button-selected')
        div.style.display = "block"
        div.scrollIntoView('smooth')
      }
      if(!options[3])
      {
        button.classList.remove('button-selected')
        div.style.display = "none"
      }
      if(checker(options)){document.getElementById("top").style.visibility="hidden"}
      else(document.getElementById("top").style.visibility="visible")
      break;
    case "why":
      var div = document.getElementById("whyd")
      var button = document.getElementById("why")
      options[4]=!options[4]
      if(options[4])
      {
        button.classList.add('button-selected')
        div.style.display = "block"
        div.scrollIntoView('smooth')
      }
      if(!options[4])
      {
        button.classList.remove('button-selected')
        div.style.display = "none"
      }
      if(checker(options)){document.getElementById("top").style.visibility="hidden"}
      else(document.getElementById("top").style.visibility="visible")
      break;
    case "how":
      var div = document.getElementById("howd")
      var button = document.getElementById("how")
      options[5]=!options[5]
      if(options[5])
      {
        button.classList.add('button-selected')
        div.style.display = "block"
        div.scrollIntoView('smooth')
      }
      if(!options[5])
      {
        button.classList.remove('button-selected')
        div.style.display = "none"
      }
      if(checker(options)){document.getElementById("top").style.visibility="hidden"}
      else(document.getElementById("top").style.visibility="visible")
      break;
    default:
      break;
  }
}
function addInfo(cover){
  switch(cover)
  {
    case "me":
      var div = document.getElementById("me")
      covers[0]=!covers[0]
      if(covers[0]){
        div.style.display="block"
        div.scrollIntoView("smooth")

      }
      else { document.getElementById("me").style.display = "none"}
      break;
    case "this":
      covers[1] = !covers[1]
      if (covers[1]) 
      {
        document.getElementById("this").style.display = "block"
        document.getElementById("this").scrollIntoView('smooth')
      }
      else { document.getElementById("this").style.display="none"}
      break;
    case "game development":
      covers[2]=!covers[2]
      if(covers[2])
      {
        document.getElementById("gameDev").style.display="block"
        document.getElementById("gameDev").scrollIntoView('smooth')
      }
      else {document.getElementById("gameDev").style.display="none"}
      break;
    case "web development":
      covers[3] = !covers[3]
      if (covers[3]) {
        document.getElementById("webDev").style.display = "block"
        document.getElementById("webDev").scrollIntoView('smooth')
      }
      else { document.getElementById("webDev").style.display = "none" }
      break;
    case "robotics":
      covers[4] = !covers[4]
      if (covers[4]) {
        document.getElementById("robotics").style.display = "block"
        document.getElementById("robotics").scrollIntoView('smooth')
      }
      else { document.getElementById("robotics").style.display = "none" }
      break;
    default:
  }
}
function backToTop() {
  document.body.scrollTop = 0 // for safari
  document.documentElement.scrollTop = 0 // for others
}