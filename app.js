window.addEventListener('load', () => {

  const parentdiv = document.createElement('div');
  document.body.appendChild(parentdiv);
  
  function setStyle(elm, styles) {
    for (let key in styles) {
      elm.style[key] = styles[key];
    }
  }

  setStyle(parentdiv, {
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '30px',
  });

  // ボタン生成用の配列
  const arry = [
    ['1', '2', '3', '/'],
    ['4', '5', '6', '*'],
    ['7', '8', '9', '-'],
    ['0', '.', '=', '+'],
  ];

  for (let i = 0; i < arry.length; i++) {
    const rowdiv = document.createElement('div');

    setStyle(rowdiv, {
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
    });

    for (let j = 0; j < arry[i].length; j++) {

      const calcBtn = document.createElement('div');
      // 子のスタイル
      setStyle(calcBtn, {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '100px',
        background: '#000',
        color: '#fff',
        borderRadius: '15px',
      });

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
  setStyle(resultWrapper, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  document.body.appendChild(resultWrapper)

  // 計算結果表示
  const result = document.createElement('div')
  setStyle(result, {
    width: '100%',
    height: '80px',
    border: '1px solid black',
    textAlign: 'right',
    fontSize: '30px',
    padding: '10px',
  });
  resultWrapper.appendChild(result)

  // ACボタン表示
  const clearBtn = document.createElement('button')
  setStyle(clearBtn, {
    width: '50px',
    height: '50px',
  });
  clearBtn.textContent = 'AC'
  resultWrapper.appendChild(clearBtn)
});
