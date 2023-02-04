const parentdiv = document.createElement('div');
parentdiv.classList.add('parentElm');

document.body.appendChild(parentdiv)

function numberCreate(number) {
  // ボタン雛形作成
  const calcBtn = document.createElement('div');
  calcBtn.classList.add('calcBtn');
  calcBtn.innerHTML = number;
  calcBtn.style.width = '23%';
  calcBtn.style.display = 'flex'
  calcBtn.style.justifyContent = 'center'
  calcBtn.style.alignItems = 'center'
  calcBtn.style.background = '#000'
  calcBtn.style.color = '#fff'
  calcBtn.style.borderRadius = '15px'

  parentdiv.appendChild(calcBtn);
}

numberCreate(1)
numberCreate(2)
numberCreate(3)
numberCreate('/')
numberCreate(4)
numberCreate(5)
numberCreate(6)
numberCreate('*')
numberCreate(7)
numberCreate(8)
numberCreate(9)
numberCreate('-')
numberCreate('0')
numberCreate('.')
numberCreate('=')
numberCreate('+')

parentdiv.style.width = '600px'
parentdiv.style.height = '600px'
parentdiv.style.display = 'flex'
parentdiv.style.flexWrap = 'wrap'
parentdiv.style.gap = '10px'
