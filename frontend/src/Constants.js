const prod = {
  url: {
    POST_URL: "http://localhost:4000/posts/",
    USER_URL: "http://localhost:4000/users/",
  }
}
const dev = {
  url: {
    POST_URL: "http://localhost:4000/posts/",
    USER_URL: "http://localhost:4000/users/",
  }
}
export const config = process.env.NODE_ENV === 'development' ? dev : prod;