/**
### Coding Challenge: Blog Post Relationship Finder

#### Objective:
You are provided with a list of blog posts, each having a title and a list of tags. Your task is to find and list all related posts for each blog post based on common tags. A related post is one that shares the most number of common tags with the reference post.

#### Given:

- An array of objects, where each object represents a blog post. Each blog post has a title and a list of tags.
- Tags are represented as strings and are case-sensitive.

#### Requirements:

1. Write a function `addRelatedPosts` that takes in an array of post objects and returns a new array of post objects.
2. Each post object in the returned array must have a new property, `relatedPosts`, an array containing other posts that have the most tags in common with the current post, in descending order of the number of common tags.
3. The `relatedPosts` array for each post should not include the post itself.
4. If two posts have the same number of common tags, their order in the `relatedPosts` array does not matter.
5. Each post object in the `relatedPosts` array should also contain an additional property, `commonTags`, which is an array of strings representing the tags common between the two posts.
6. Do not modify the original posts array or the post objects within it. Return a new array with new objects.
7. Print the title of each post followed by its related posts and a separator.

#### Example:
Input:

```javascript
const posts = [
  { title: 'Title1', tags: ['a', 'b', 'c'] },
  { title: 'Title2', tags: ['a', 'd', 'e'] },
  { title: 'Title3', tags: ['c', 'f', 'g'] },
];
```

Output:
```
Title1
[ { title: 'Title2', tags: ['a', 'd', 'e'], commonTags: ['a'] }, { title: 'Title3', tags: ['c', 'f', 'g'], commonTags: ['c'] }]
------------------
Title2
[ { title: 'Title1', tags: ['a', 'b', 'c'], commonTags: ['a'] }, { title: 'Title3', tags: ['c', 'f', 'g'], commonTags: [] }]
------------------
Title3
[ { title: 'Title1', tags: ['a', 'b', 'c'], commonTags: ['c'] }, { title: 'Title2', tags: ['a', 'd', 'e'], commonTags: [] }]
------------------
```

#### Note:

- Do not use any external libraries or packages.
- Ensure your code is clean, readable, and well-commented.
- Consider optimal time and space complexity.

#### Evaluation Criteria:

- Correctness
- Code readability and organization
- Efficiency of the solution in terms of time and space complexity.
 */

const post1 = {
    title: 'How to become a web developer',
    tags: ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'python'],
};
const post2 = {
    title: 'Programming languages',
    tags: ['ruby', 'rails', 'c++', 'javascript', 'html', 'css', 'python'],
};
const post3 = {
    title: 'Python programming',
    tags: ['javascript', 'c++', 'python'],
};
const post4 = {
    title: 'Front-end development',
    tags: ['front-end development', 'html', 'css', 'javascript'],
};
const post5 = {
    title: 'Back-end development',
    tags: ['back-end development', 'ruby', 'rails', 'c++', 'javascript', 'python', 'php'],
};
const post6 = {
    title: 'Full-stack development',
    tags: ['front-end development', 'back-end development', 'ruby', 'rails', 'c++', 'javascript', 'python', 'php'],
};

const post7 = {
    title: 'DevOps',
    tags: ['devops', 'linux', 'bash', 'python', 'c++', 'javascript'],
};

const posts = [post1, post2, post3, post4, post5, post6, post7];

// for each post add an extra property called 'relatedPosts' which contains an array of posts that have most tags in common with the current post, in descending order

const addRelatedPosts = (posts) => {
    return posts.map((post) => {
        const relatedPosts = posts
            .filter((p) => p.title !== post.title)
            .map((p) => {
                const commonTags = p.tags.filter((tag) => post.tags.includes(tag));
                return {
                    ...p,
                    commonTags,
                };
            })
            .sort((a, b) => b.commonTags.length - a.commonTags.length);
        return {
            ...post,
            relatedPosts,
        };
    });
};

const postsWithRelatedPosts = addRelatedPosts(posts);

postsWithRelatedPosts.forEach((post) => {
    console.log(post.title);
    console.log(post.relatedPosts);
    console.log('------------------');
});

/**
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 * Concepts: Array.prototype.map(), Array.prototype.filter(), Array.prototype.sort()
 */
