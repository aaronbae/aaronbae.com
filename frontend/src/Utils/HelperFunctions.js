export function format_date(date_string) {
  var given_date = new Date(date_string)
  var corrected_d = new Date(given_date.getTime() - new Date().getTimezoneOffset()*60000) 
  var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  var days = ["Monday","Tueday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  var result = days[corrected_d.getDay()] + ", " + month[corrected_d.getMonth()]+" "+corrected_d.getDate()+", "+corrected_d.getFullYear()
  return result
}
export function isMyImageURL(str) {
  str = str.toLowerCase()
  return str.startsWith("https://aaronbaebucket.s3") && (str.endsWith("jpg") || str.endsWith("png"))
}
export function convertMyImageURL(str) {
  let re = new RegExp('https://aaronbaebucket.s3..*/')
  return str.replace(re, "https://www.aaronbae.com/api/files/") 
}