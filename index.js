const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "Hard work outweighs talent every time.",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "Life is too short to get bogged down and be discouraged. You have to keep moving. You have to keep going. Put one foot in front of the other, smile and just keep on rolling",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "Begin, the rest is easy",
        likes: 152
    }
]

const postElement = document.getElementById("posts")
let html = ""

function render() {

for (let i = 0; i < posts.length; i+=1) {
    html+= `
    <Main class="post">
        
            <div class="user-info">
                <img class="avatar" src="${posts[i].avatar}"> 
                <div>
                    <span class="full-name bold">${posts[i].name}</span>
                    <span class="location">${posts[i].location}</span>
                </div>
            </div>
            
            <img src="${posts[i].post}" class="post-image">
            
            <div class="post-info">
                <div class="icons">
                    <img class="icon-style" src="images/icon-heart.png" alt="heart icon"> 
                    <img class="icon-style" src="images/icon-comment.png" alt="comment icon"> 
                    <img class="icon-style" src="images/icon-dm.png" alt="direct message icon"> 
                </div>

                <p  class="likes-comment bold">${posts[i].likes} likes </p>
                <p class="likes-comment"> <span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        
    </Main>
    `    
}

}

// render
render()


function generateHTML() {
    postElement.innerHTML = html;
}

// generateHTML
generateHTML()