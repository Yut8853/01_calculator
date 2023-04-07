window.addEventListener('load', () => {

  const parentdiv = document.createElement('div');
  document.body.appendChild(parentdiv);
  // 親のラッパースタイル
  parentdiv.style.width = '100%';
  parentdiv.style.height = '80vh';
  parentdiv.style.display = 'flex';
  parentdiv.style.justifyContent = 'center';
  parentdiv.style.alignItems = 'center';
  parentdiv.style.flexDirection = 'column';
  parentdiv.style.gap = '30px';

  // ボタン生成用の配列
  const arry = [
    ['1', '2', '3', '/'],
    ['4', '5', '6', '*'],
    ['7', '8', '9', '-'],
    ['0', '.', '=', '+'],
  ];

  for (let i = 0; i < arry.length; i++) {
    const rowdiv = document.createElement('div');
    rowdiv.style.display = 'flex';
    rowdiv.style.flexDirection = 'row';
    rowdiv.style.gap = '30px';

    for (let j = 0; j < arry[i].length; j++) {
      const calcBtn = document.createElement('div');
      // 子のスタイル
      calcBtn.style.display = 'flex';
      calcBtn.style.justifyContent = 'center';
      calcBtn.style.alignItems = 'center';
      calcBtn.style.width = '200px';
      calcBtn.style.height = '100px';
      calcBtn.style.background = '#000';
      calcBtn.style.color = '#fff';
      calcBtn.style.borderRadius = '15px';

      calcBtn.textContent = arry[i][j];
      rowdiv.appendChild(calcBtn);

      calcBtn.addEventListener('click', () => {
        const calcBtnValue = arry[i][j];
        result.textContent += calcBtnValue;
      });
    }
    parentdiv.appendChild(rowdiv);
  }

  // 計算結果とACボタン横並び
  const resultWrapper = document.createElement('div');
  resultWrapper.style.display = 'flex';
  resultWrapper.style.justifyContent = 'center';
  resultWrapper.style.alignItems = 'center';
  document.body.appendChild(resultWrapper)

  // 計算結果表示
  const result = document.createElement('div')
  result.style.width = '100%';
  result.style.height = '80px';
  result.style.border = '1px solid black';
  result.style.textAlign = 'right';
  result.style.fontSize = '30px';
  result.style.padding = '10px';
  resultWrapper.appendChild(result)

  // ACボタン表示
  const clearBtn = document.createElement('button')
  clearBtn.style.width = '50px'
  clearBtn.style.height = '50px'
  clearBtn.innerHTML = 'AC'
  resultWrapper.appendChild(clearBtn)
});
