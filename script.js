console.log('javascript connected')

let userCollectionMain = document.querySelector('#main')


window.onload = function getData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((allUsers) => {  

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        allUsers.forEach((user) => {
            renderUser(user, posts) 
        })
    })
 })
}

function renderUser(user, posts){
     
    // Grab posts made by user. 
    let userPosts = posts.filter(post => user.id === post.userId);


    let userDiv = document.createElement('div');
    userDiv.className = 'user-div';

    let userFullName = document.createElement('h2'); 
    userFullName.className = `${user.name}`;
    userFullName.innerText= user.name;
    
    let userName = document.createElement('h3'); 
    userName.className = `${user.username}`;
    userName.innerText = `KSense account: ${user.username}`;
    
    let seePostButton = document.createElement('button'); 
    seePostButton.className = `see-post-button-${user.id}`;
    seePostButton.innerText = 'View Posts';
    seePostButton.name = 'post-button';
    seePostButton.type = 'button';
  
    userDiv.append(userFullName, userName, seePostButton);
    userCollectionMain.append(userDiv);


    //Render posts onclick. 
    seePostButton.addEventListener('click', (e) => {
        
        userPosts.forEach(post => {

            let divPost = document.createElement('div');
            divPost.className = 'div-post';
            
            let titlePost = document.createElement('h4');
            titlePost.className = "user-post";
            titlePost.innerText= post.title;
            
            let postBody = document.createElement('p');
            postBody.className = 'post-body';
            postBody.innerText = post.body;

            divPost.append(titlePost, postBody);
            userDiv.append(divPost);
            
        })
    })
};


 