var options = [false,false,false,false,false,false, false, false] // who, what, where, when, why, how, resume, extras
var covers = [false,false, false, false, false, false, false, false,false, false, false] // child options ... hindsight 2023 this should have been named childOptions or subOptions or something
// hindsight 2024, this should have been an object with keys and values
var myChart = null
const discrete_waveform = [
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 2, y: 1 },
  { x: 3, y: 0 },
  { x: 4, y: 1 },
  { x: 5, y: 0 },
  { x: 6, y: 1 },
  { x: 7, y: 0 },
  { x: 8, y: 1 },
  { x: 9, y: 0 },
  { x: 10, y: 1 },
  { x: 11, y: 0 },
  { x: 12, y: 1 },
  { x: 13, y: 0 },
  { x: 14, y: 1 },
  { x: 15, y:0 }
];

const config = {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    datasets: [
      {
        label: 'input value',
        data: discrete_waveform.map(row => row.y),
        borderColor: '#000',
        fill: false,
        stepped: true,
      }
    ]
  },
  options: {
    responsiveness: true,
    interaction: {
      intersect: false,
      axis: 'x'
    },
    scales: {
      x: {
        grid : {
          color: "#fff"
        },
        ticks:
        {
          color: '#000'
        }
      },
      y: {
        ticks: {
          color: '#000',
          sampleSize: 2,
          maxTicksLimit: 2
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'discrete waveform'
      }
    }
  }
}
// var checker = arr => arr.every(v => v === false) // this is awesome
var show = arr => arr.filter(x => x === true).length > 2 // logic for showing the 'back to top' & 'close all' buttons
var contactInfo = { email: 'dylanbakr@gmail.com', text:'+1 (815) 993-8931', mail:'1806 Woodlawn Avenue' }




function updateContact(selected){
  switch (selected)
  {
    case 'email':
      console.log('email')
      document.getElementById('contact').href = `mailto:${contactInfo.email}`
      document.getElementById('contact').innerHTML = contactInfo.email
      break;
    case 'text':
      console.log('text')
      document.getElementById('contact').href = `tel:${contactInfo.text}`
      document.getElementById('contact').innerHTML = contactInfo.text
      break;
    case 'mail':
      console.log('mail')
      document.getElementById('contact').href = 'https://goo.gl/maps/8GrA8GrprMHgGwrm6'
      document.getElementById('contact').innerHTML = contactInfo.mail
      break;
    default:
  }
}

add = (pane) => {
  switch (pane) {
    case 'who':
      var div = document.getElementById('whod')
      var button = document.getElementById('who')
      options[0]=!options[0]
      if(options[0])
      {
        button.classList.add('button-selected')
        div.style.display = 'block'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[0])
      {
        button.classList.remove('button-selected')
        div.style.display = 'none'
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    case 'what':
      var div = document.getElementById('whatd')
      var button = document.getElementById('what')
      options[1]=!options[1]
      if(options[1])
      {
        button.classList.add('button-selected')
        div.style.display = 'block'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[1])
      {
        button.classList.remove('button-selected')
        div.style.display = 'none'
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    case 'where':
      var div = document.getElementById('whered')
      var button = document.getElementById('where')
      options[2]=!options[2]
      if(options[2])
      {
        button.classList.add('button-selected')
        div.style.display = 'block'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[2])
      {
        button.classList.remove('button-selected')
        div.style.display = 'none'
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    case 'when':
      var div = document.getElementById('whend')
      var button = document.getElementById('when')
      options[3]=!options[3]
      if(options[3])
      {
        button.classList.add('button-selected')
        div.style.display = 'block'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[3])
      {
        button.classList.remove('button-selected')
        div.style.display = 'none'
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    case 'why':
      var div = document.getElementById('whyd')
      var button = document.getElementById('why')
      options[4]=!options[4]
      if(options[4])
      {
        button.classList.add('button-selected')
        div.style.display = 'block'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[4])
      {
        button.classList.remove('button-selected')
        div.style.display = 'none'
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    case 'how':
      var div = document.getElementById('howd')
      var button = document.getElementById('how')
      options[5]=!options[5]
      if(options[5])
      {
        button.classList.add('button-selected')
        div.style.display = 'block'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[5])
      {
        button.classList.remove('button-selected')
        div.style.display = 'none'
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    case 'resume':
      var div = document.getElementById('resumed')
      var button = document.getElementById('resume')
      var doc = document.getElementById('pdf')
      options[6]=!options[6]
      if(options[6])
      {
        button.classList.add('button-selected')
        div.style.visibility = 'visible'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[6])
      {
        div.style.visibility = 'hidden'
        button.classList.remove('button-selected')
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    case 'extras':
      var div = document.getElementById('extrasd')
      var button = document.getElementById('extras')
      options[7]=!options[7]
      if(options[7])
      {
        button.classList.add('button-selected')
        div.style.display = 'block'
        div.scrollIntoView('smooth')
        window.scrollBy(0,-90)
      }
      if(!options[7])
      {
        button.classList.remove('button-selected')
        div.style.display = 'none'
      }
      if(show(options))
      {
        document.getElementById('top').style.visibility='visible';
        document.getElementById('close').style.visibility='visible'
      }
      else
      {
        document.getElementById('top').style.visibility='hidden';
        document.getElementById('close').style.visibility='hidden'
      }
      break
    default:
      break;
  }
}
function addInfo(cover){
  switch(cover)
  {
    case 'me':
      var div = document.getElementById('me')
      covers[0]=!covers[0]
      if(covers[0]){
        div.style.display='block'
      }
      else { document.getElementById('me').style.display = 'none'}
      break;
    case 'this':
      covers[1] = !covers[1]
      if (covers[1])
      {
        document.getElementById('this').style.display = 'block'
      }
      else { document.getElementById('this').style.display='none'}
      break;
    case 'game development':
      covers[2]=!covers[2]
      if(covers[2])
      {
        document.getElementById('gameDev').style.display='block'
      }
      else {document.getElementById('gameDev').style.display='none'}
      break;
    case 'web development':
      covers[3] = !covers[3]
      if (covers[3]) {
        document.getElementById('webDev').style.display = 'block'
      }
      else { document.getElementById('webDev').style.display = 'none' }
      break;
    case 'robotics':
      covers[4] = !covers[4]
      if (covers[4]) {
        document.getElementById('robotics').style.display = 'block'
      }
      else { document.getElementById('robotics').style.display = 'none' }
      break;
    default:
    case 'uiux':
      covers[5] = !covers[5]
      if (covers[5]) {
        document.getElementById('uiux').style.display = 'block'
      }
      else { document.getElementById('uiux').style.display = 'none' }
      break;
    case 'database':
      covers[6] = !covers[6]
      if (covers[6]) {
        document.getElementById('database').style.display = 'block'
      }
      else { document.getElementById('database').style.display = 'none' }
      break;
    case 'coming-soon':
      covers[7] = !covers[7]
      if (covers[7]) {
        document.getElementById('coming-soon').style.display = 'block'
      }
      else { document.getElementById('coming-soon').style.display = 'none' }
      break;
    case 'hex colors':
      covers[8] = !covers[8]
      if (covers[8]) {
        document.getElementById('hexColors').style.display = 'block'
      }
      else { document.getElementById('hexColors').style.display = 'none' }
      break;
    case 'quotes':
      covers[9] = !covers[9]
      if (covers[9]) {
        document.getElementById('quotes').style.display = 'block'
      }
      else { document.getElementById('quotes').style.display = 'none' }
      break;
    case 'space':
      covers[10] = !covers[10]
      if (covers[10]) {
        document.getElementById('space').style.display = 'block'
      }
      else { document.getElementById('space').style.display = 'none' }
      break;
    case 'binary':
      covers[11] = !covers[11]
      if (covers[11]) {
        document.getElementById('binary').style.display = 'block'
      }
      else { document.getElementById('binary').style.display = 'none' }
      break;
  }
}
function backToTop() {
  document.body.scrollTop = 0 // for safari
  document.documentElement.scrollTop = 0 // for others
}
function closeAll() {
  var arr = document.getElementsByClassName('button-selected')
  console.log(arr.length)
  for (let x of arr)
  {
    setTimeout(() => { x.click() }, 300);
  }
  backToTop()
}
// rig up event listeners for the number inputs
addEventListener('load', () => {
  const ctx = document.getElementById('chart')
  console.log('chart: ', ctx)
  myChart = new Chart(ctx, config);

  document.getElementById('inputRed').addEventListener('input', (event) => {
    console.log("red:", event.target.value, Number(event.target.value).toString(16).padStart(2, '0'))
    parseInt(event.target.value) > 255 ? event.target.value = 255 : parseInt(event.target.value) < 0 ? event.target.value = 0 : event.target.value = event.target.value
    recolor('red', event.target.value)
  })
  document.getElementById('inputGreen').addEventListener('input', (event) => {
    console.log("green:", event.target.value, parseInt(event.target.value).toString(16))
    parseInt(event.target.value) > 255 ? event.target.value = 255 : parseInt(event.target.value) < 0 ? event.target.value = 0 : event.target.value = event.target.value
    recolor('green', event.target.value)
  })
  document.getElementById('inputBlue').addEventListener('input', (event) => {
    console.log("blue:", event.target.value, parseInt(event.target.value).toString(16))
    parseInt(event.target.value) > 255 ? event.target.value = 255 : parseInt(event.target.value) < 0 ? event.target.value = 0 : event.target.value = event.target.value
    recolor('blue', event.target.value)
  })
  document.getElementById('binaryInput').addEventListener('keydown', (event) => {
    console.log(event.key, `b: ${char2Binary(event.key)}`)
    let b = char2Binary(event.key)
    for (let c of b)
    {
      discrete_waveform.push({x:discrete_waveform.length, y: parseInt(c)})
      discrete_waveform.shift()
    }
    console.log("staged data: ",discrete_waveform)
    myChart.data.datasets[0].data = discrete_waveform.map(row => row.y)
    myChart.update()
  })
})
goToExternal = (location) => { window.open(location, '_blank') }
recolor = (flavor, val) => {
  document.getElementById(`color-${flavor}`).style.backgroundColor = flavor == 'red' ? `#${toHex(val)}0000` : flavor == 'green' ? `#00${toHex(val)}00` : `#0000${toHex(val)}`
  document.documentElement.style.setProperty(`--color-${flavor}`, flavor == 'red' ? `#${toHex(val)}0000` : flavor == 'green' ? `#00${toHex(val)}00` : `#0000${toHex(val)}`)
  // change css variable --rgb to the new color value
  document.querySelector('#color').value = `#${toHex(document.getElementById('inputRed').value)}${toHex(document.getElementById('inputGreen').value)}${toHex(document.getElementById('inputBlue').value)}`
  document.documentElement.style.setProperty('--rgb', document.querySelector('#color').value)
}
toHex = (dec) => { return Number(dec).toString(16).padStart(2, '0') }

text2Binary = (string) => {
  return string.split('').map(function (c) {
    char2Binary(c)
  }).join(' ');
}

char2Binary = (char) => {
  let a = char.charCodeAt(0).toString(2)
  return new Array(9 - a.length).join('0') + a;
}