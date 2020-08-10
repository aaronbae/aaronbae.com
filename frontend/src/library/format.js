export function raw_tags_to_array(raw_tags_input) {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
  return raw_tags_input.split(",").map(s => s.trim().replace(punctuation, ''))
}
export function posts_to_array(posts) {
  const sorted_array = Object.values(posts).sort(function(a,b) {
    if(a.createtime >= b.createtime){
      return -1
    }
    return 1
  })
  return sorted_array
}


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


export function summarize_content(content) {
  return content.replace(/<div>|<\/div>|<br>|<img\s+.*\/>/gi, "").substring(0, 200) + "..."
}
// NEEDS TO BE CHANGED
export function find_image_from_post(post){
  let img = ""
  
  for( let i in post.content) {
    let c = post.content[i]
    if(isMyImageURL(c)){
      img = convertMyImageURL(c);
      break;
    }
  }
  return img
}
