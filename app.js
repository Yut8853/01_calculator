window.addEventListener('load', () => {

  const parentdiv = document.createElement('div');

  document.body.appendChild(parentdiv);
  // 親のラッパースタイル
  parentdiv.style.width = '100%';
  parentdiv.style.height = '100vh';
  parentdiv.style.display = 'flex';
  parentdiv.style.justifyContent = 'center';
  parentdiv.style.alignItems = 'center'
  parentdiv.style.flexWrap = 'wrap';
  parentdiv.style.gap = '2%';

  // ボタン生成用の配列
  const arry = [
    ['1', '2', '3', '/'],
    ['4', '5', '6', '*'],
    ['7', '8', '9', '-'],
    ['0', '.', '=', '+'],
  ];

  for (let i = 0; i < arry.length; i++) {
    const calcBtn = document.createElement('div');
    // 子のスタイル
    calcBtn.style.width = '22%';
    calcBtn.style.height = '10%';
    calcBtn.style.display = 'flex';
    calcBtn.style.justifyContent = 'center';
    calcBtn.style.alignItems = 'center';
    calcBtn.style.background = '#000';
    calcBtn.style.color = '#fff';
    calcBtn.style.borderRadius = '15px';

    calcBtn.textContent = arry[i][0];
    parentdiv.appendChild(calcBtn);

    for (let j = 1; j < arry.length; j++) {
      const calcBtn = document.createElement('div');
      // 子のスタイル
      calcBtn.style.width = '22%';
      calcBtn.style.height = '10%';
      calcBtn.style.display = 'flex';
      calcBtn.style.justifyContent = 'center';
      calcBtn.style.alignItems = 'center';
      calcBtn.style.background = 'red';
      calcBtn.style.color = '#fff';
      calcBtn.style.borderRadius = '15px';

      calcBtn.textContent = arry[i][j];
      parentdiv.appendChild(calcBtn);

      calcBtn.addEventListener('click', () => {
        calcBtnValue = calcBtn.innerHTML;
        result.value += calcBtnValue;

        if (result.value) {
          result.value
        } else {
          console.log('no')
        }
      });
    }
  }

  // 計算結果とACボタン横並び
  const resultWrapper = document.createElement('div');
  resultWrapper.style.display = 'flex';
  resultWrapper.style.justifyContent = 'center';
  resultWrapper.style.alignItems = 'bottom';
  parentdiv.appendChild(resultWrapper)

  // 計算結果表示
  let result = document.createElement('input')
  result.style.width = '100%'
  result.style.border = 0
  result.style.borderBottom = 'solid'
  resultWrapper.appendChild(result)

  // ACボタン表示
  const clearBtn = document.createElement('button')
  clearBtn.style.width = '50px'
  clearBtn.style.height = '50px'
  clearBtn.innerHTML = 'AC'
  resultWrapper.appendChild(clearBtn)

});

