// const profile = {
//     title: 'エンジニア',
//     department: '開発部'
//   };
  
//   function isEngineer(profile) {
//     var title = profile.title;
//     var department = profile.department;
//     return title === 'エンジニア' && department === '開発部';
//   }

const profile = {
    title: 'エンジニア',
    department: '開発部'
  };
  
  function isEngineer(profile) {
    var {title, department} = profile;
    return title === 'エンジニア' && department === '開発部';
  }