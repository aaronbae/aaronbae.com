import { config } from '../Constants'

export function query_param_string_to_objects(query_string){
  let result = {}
  for(const p of  query_string.toLowerCase().replace("?", "").split("&")){
    let p_split = p.toString().split("=")
    result[p_split[0]] = p_split[1]
  }
  return result
}

export function post_to_url(post) {
  let modified_title = post.title.replace(/[^A-Za-z0-9\s]/g,"").toLowerCase()
  modified_title = modified_title.split(" ").join("-")
  return `/blog/${modified_title}-${post._id}`
}
export function url_to_post_id(url) {
  let splitted = url.split("-");
  return splitted[splitted.length - 1]
}

export function format_date(date_string) {
  var given_date = new Date(date_string)
  var corrected_d = new Date(given_date.getTime() - new Date().getTimezoneOffset() * 60000)
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var days = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  var result = days[corrected_d.getDay()] + ", " + month[corrected_d.getMonth()] + " " + corrected_d.getDate() + ", " + corrected_d.getFullYear()
  return result
}
export function isMyImageURL(str) {
  if (!str) return false
  str = str.toLowerCase()
  return str.startsWith("https://aaronbaebucket.s3") && (str.endsWith("jpg") || str.endsWith("png"))
}
export function convertMyImageURL(str) {
  let re = new RegExp('https://aaronbaebucket.s3..*/')
  return str.replace(re, config.url.FILE_URL)
}