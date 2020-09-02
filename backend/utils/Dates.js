/*********************************************************
 * 
 * Dates.js
 * 1. round_date
 *    - input: 
 *      - an integer
 *    - output: 
 *      - a new Date object
 * 
 * 2. days_ago
 *    - input: 
 *      - a Date object 
 *      - an integer
 *    - output:
 *      - a new Date object 
 * 
 * 3. format
 *    - input: Date object
 *    - output: string
 * 
 * 4. current
 *    - input: (none)
 *    - ouptut: string
 * 
 *********************************************************/
module.exports = {
  round_date: round_date,
  days_ago: days_ago,
  format: format,
  current: current,
  log: log,
  error: error
}
const MAX_URL_NAME_LENGTH = 45; 
function round_date(milliseconds) {
  const days_in_milli = 1000 * 60 * 60 * 24
  return new Date(Math.floor(milliseconds / days_in_milli) * days_in_milli)
}
function days_ago(reference_date, num_days) {
  let new_date = round_date(reference_date.getTime())
  new_date.setDate(new_date.getDate() - num_days)
  return new_date
}
function log(url, message="Successful!"){
  console.log(`[${format_24(new Date())}] ${url.padEnd(MAX_URL_NAME_LENGTH, ' ')} : ${message}`)
}
function error(error, url, message="Failed!") {
  error = error ? `\n${error.toString()}` : ""
  console.log(`[${format_24(new Date())}] ${url.padEnd(MAX_URL_NAME_LENGTH, ' ')} : ${message}${error}`)
}
function format_24(date) {
  const shit = new Date(date.getTime()-(420-date.getTimezoneOffset())*60*1000)
  // Temporary
  console.log(shit.toLocaleString('en-US',{hour12: false}))
  return date.toLocaleString('en-US', {hour12: false}).replaceAll(",", "")
}
function format(date) {
  //return `${date.getFullYear()}-${pad(date.getMonth()+1, 2)}-${pad(date.getDate(), 2)} ${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}:${pad(date.getSeconds(), 2)}`
  return date.toLocaleString('en-US').replaceAll(",", "")
}
function current() {
  return format(new Date())
}