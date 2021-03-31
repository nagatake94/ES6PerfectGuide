//url = "https://jsonplaceholder.typicode.com/posts/";
//以下だとcatchには入らない
//url = "https://jsonplaceholder.typicode.com/posts123456/";

//以下だとcatchに入る
url = "https://jsonplaceholder.typicode123456.com/posts/";


fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log("問題発生!!!",error))