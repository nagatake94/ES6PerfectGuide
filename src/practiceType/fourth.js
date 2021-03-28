// var statuses = [ 
//     { code: 'OK', response: '正常に完了しました' },
//     { code: 'FAILED', response: 'エラーが発生しました' },
//     { code: 'PENDING', response: '処理中です...' }
//   ];
//   var message = '';
//   var currentCode = 'OK';
  
//   for (var i = 0; i < statuses.length; i++) {
//     if (statuses[i].code === currentCode) {
//       message = statuses[i].response;
//     }
//   }

/**上記をリファクタリング */

let statuses = [ 
    { code: 'OK', response: '正常に完了しました' },
    { code: 'FAILED', response: 'エラーが発生しました' },
    { code: 'PENDING', response: '処理中です...' }
  ];
  let message = '';
  const currentCode = 'OK';
  
  for (var i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
      message = statuses[i].response;
    }
  }