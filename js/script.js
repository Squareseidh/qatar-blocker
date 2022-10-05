window.onload = replacer

console.log('Qatar blocker Active 2')

String.prototype.replaceArray = function (find) {
 let replaceString = this
 let regex

 for (let i = 0; i < find.length; i++) {
  regex = new RegExp(find[i], 'gi')

  const regexSplitted = find[i].split('')
  const numberOfCharacterToCensor = regexSplitted.length - 2
  let middleWord = ''

  for (let i = 1; i <= numberOfCharacterToCensor; i++) {
   middleWord += '•'
  }

  replaceString = replaceString.replace(regex, regexSplitted[0] + middleWord + regexSplitted[regexSplitted.length - 1])
 }

 return replaceString
}

function replacer () {
 let bannedWords = ['Qatar']
 const elements = document.getElementsByTagName('*')

 for (let i = 0; i < elements.length; i++) {
  const element = elements[i]

  for (let j = 0; j < element.childNodes.length; j++) {
   const node = element.childNodes[j]

   if (node.nodeType === 3) {
    const text = node.nodeValue

    const replacedText = text.replaceArray(bannedWords)

    if (replacedText !== text) {
     element.replaceChild(document.createTextNode(replacedText), node)
    }
   }
  }
 }
}