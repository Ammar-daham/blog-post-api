const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  
  let maxLikes = 0
  let favoriteBlog = null
  blogs.forEach((blog) => {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes
      favoriteBlog = blog
    }
  })

  return {
    title: favoriteBlog.title,
    author: favoriteBlog.author,
    likes: favoriteBlog.likes,
  }
}

function mostBlogs(blogs) {
  const blogCount = {};
  
  blogs.forEach(blog => {
    if (blogCount[blog.author]) {
      blogCount[blog.author]++;
    } else {
      blogCount[blog.author] = 1;
    }
  });
  
  let maxAuthor = "";
  let maxBlogs = 0;
  
  for (const author in blogCount) {
    if (blogCount[author] > maxBlogs) {
      maxAuthor = author;
      maxBlogs = blogCount[author];
    }
  }
  
  return {
    author: maxAuthor,
    blogs: maxBlogs
  };
}


function mostLikes(blogs) {
  const likesCount = {};
  
  blogs.forEach(blog => {
    if (likesCount[blog.author]) {
      likesCount[blog.author] += blog.likes;
    } else {
      likesCount[blog.author] = blog.likes;
    }
  });
  
  let maxAuthor = "";
  let maxLikes = 0;
  
  for (const author in likesCount) {
    if (likesCount[author] > maxLikes) {
      maxAuthor = author;
      maxLikes = likesCount[author];
    }
  }
  
  return {
    author: maxAuthor,
    likes: maxLikes
  };
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
