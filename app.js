var options = [false,false,false,false,false,false]
var contactInfo = {email: 'dylanbakr@gmail.com', text:'(815) 993-8931', mail:'425 W Hampton Drive'}

function update(selected){
  switch (selected)
  {
    case 'email':
      console.log('email');
      document.getElementById("contact").href = `"mailto:${contactInfo.email}"`;
      document.getElementById("contact").innerHTML = contactInfo.email;
      break;
    case 'text':
      console.log('text');
      document.getElementById("contact").href = `"tel:${contactInfo.text}"`;
      document.getElementById("contact").innerHTML = contactInfo.text;
      break;
    case 'mail':
      console.log('mail');
      document.getElementById("contact").href = "https://goo.gl/maps/bTkq7kuiwpWBuZMx6";
      document.getElementById("contact").innerHTML = contactInfo.mail;
      break;
    default:
  }
}

function add(pane) {
  switch (pane) {
    case "who":
      options[0]=!options[0]
      if(options[0])
      {
        document.getElementById("who").classList.add('button-selected');
        document.getElementById("whod").style.display = "block";
      }
      if(!options[0])
      {
        document.getElementById("who").classList.remove('button-selected');
        document.getElementById("whod").style.display = "none";
      }
      break;
    case "what":
      options[1]=!options[1]
      if(options[1])
      {
        document.getElementById("what").classList.add('button-selected');
        document.getElementById("whatd").style.display = "block";
      }
      if(!options[1])
      {
        document.getElementById("what").classList.remove('button-selected');
        document.getElementById("whatd").style.display = "none";
      }
      break;
    case "where":
      options[2]=!options[2]
      if(options[2])
      {
        document.getElementById("where").classList.add('button-selected');
        document.getElementById("whered").style.display = "block";
      }
      if(!options[2])
      {
        document.getElementById("where").classList.remove('button-selected');
        document.getElementById("whered").style.display = "none";
      }
      break;
    case "when":
      options[3]=!options[3]
      if(options[3])
      {
        document.getElementById("when").classList.add('button-selected');
        document.getElementById("whend").style.display = "block";
      }
      if(!options[3])
      {
        document.getElementById("when").classList.remove('button-selected');
        document.getElementById("whend").style.display = "none";
      }
      break;
    case "why":
      options[4]=!options[4]
      if(options[4])
      {
        document.getElementById("why").classList.add('button-selected');
        document.getElementById("whyd").style.display = "block";
      }
      if(!options[4])
      {
        document.getElementById("why").classList.remove('button-selected');
        document.getElementById("whyd").style.display = "none";
      }
      break;
    case "how":
      options[5]=!options[5]
      if(options[5])
      {
        document.getElementById("how").classList.add('button-selected');
        document.getElementById("howd").style.display = "block";
      }
      if(!options[5])
      {
        document.getElementById("how").classList.remove('button-selected');
        document.getElementById("howd").style.display = "none";
      }
      break;
    default:

  }
}
