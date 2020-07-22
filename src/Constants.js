const prod = {
  url: {
    FILE_URL: "https://aaronbae.com/api/files/",
    POST_URL: "https://aaronbae.com/api/posts/",
    USER_URL: "https://aaronbae.com/api/users/",
  }
}
const dev = {
  url: {
    FILE_URL: "http://localhost:4000/api/files/",
    POST_URL: "http://localhost:4000/api/posts/",
    USER_URL: "http://localhost:4000/api/users/",
  }
}
export const config = process.env.NODE_ENV === 'development' ? dev : prod;