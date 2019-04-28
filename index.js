function shout(string) {
  return string.toUpperCase()
}
//returns STRING 

function whisper(string) {
  return string.toLowerCase()
}
//returns string

function logShout(string) {
  console.log(shout(string))
}
//console.log message in all caps
//BEST WAY TO WRITE THIS?  OR console.log(string.toUpperCase()) better?  Obviously this is the only way to do it if I didn't write the code above.

function logWhisper(string) {
  console.log(whisper(string))
}
//console.log message in all lower case

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return `I can't hear you!`
  }
  else if (string === shout(string)) {
    return `YES INDEED!`
  }
  else if (string === `I love you, Grandma.`) {
    return `I love you, too.`
  }
}
//if the string is in all lower case Grandma cannot hear it.
//if the string is all upper case Grandma says YES INDEED. 
//if the string matches i love you grandma then she responds.


