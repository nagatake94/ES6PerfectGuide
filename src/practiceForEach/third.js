// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'JSニュース' },
//       { id: 52, title: 'リファクター・シティ' },
//       { id: 105, title: 'Rubyの良いところ' }
//     ];
    
//     for (var i = 0; i < posts.length; i++) {
//       savePost(posts[i]);
//     }
// }

function savePost(post){
    console.log(post);
}

function handlePosts() {
    var posts = [
      { id: 23, title: 'JSニュース' },
      { id: 52, title: 'リファクター・シティ' },
      { id: 105, title: 'Rubyの良いところ' }
    ];

    posts.forEach(savePost)

}

