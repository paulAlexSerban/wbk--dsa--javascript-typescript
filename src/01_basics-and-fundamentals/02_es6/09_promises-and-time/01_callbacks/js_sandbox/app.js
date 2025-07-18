const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

/**
 * the function `createPosts()` will get called, and then the `getPosts()` functions which is passed as a parameter will be called as a callback 2000ms later
 */
function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
/**
 * calling the `createPosts()` with the `getPosts()` as a callback, so the output gets visible in the HTML 3 seconds later
 */
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
