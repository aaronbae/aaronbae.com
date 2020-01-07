console.log(process.env.NODE_ENV)

const prod = {
  url: {
    POST_URL: "http://ec2-54-188-201-9.us-west-2.compute.amazonaws.com/api/posts/",
    USER_URL: "http://ec2-54-188-201-9.us-west-2.compute.amazonaws.com/api/users/",
  }
}
const dev = {
  url: {
    POST_URL: "http://localhost:4000/posts/",
    USER_URL: "http://localhost:4000/users/",
  }
}
export const config = process.env.NODE_ENV === 'development' ? dev : prod;