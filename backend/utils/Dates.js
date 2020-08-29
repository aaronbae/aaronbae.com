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
  current: current
}
function round_date(milliseconds) {
  const days_in_milli = 1000 * 60 * 60 * 24
  return new Date(Math.floor(milliseconds / days_in_milli) * days_in_milli)
}
function days_ago(reference_date, num_days) {
  let new_date = round_date(reference_date.getTime())
  new_date.setDate(new_date.getDate() - num_days)
  return new_date
}
function pad(number, size) {
  return number.toString().padStart(size, "0")
}
function format(date) {
  return `${date.getFullYear()}-${pad(date.getMonth(), 2)}-${pad(date.getDate(), 2)} ${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}:${pad(date.getSeconds(), 2)}`
}
function current() {
  return format(new Date())
}