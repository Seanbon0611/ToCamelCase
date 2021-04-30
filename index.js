function toCamelCase(str){
  if (str.length === 0) {
    return ""
  }
  let result = [];
  let splitStr = str.split(/[-_]/g);
  for (let i=0; i < splitStr.length; i++) {
    if (i === 0) {
      result.push(splitStr[i])
    } else {
    result.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1));
    }
  }
  return result.join("")
}

toCamelCase("Hello_world")
toCamelCase("foo-bar")
toCamelCase("wow_javascript_is_the_best_language")
