window.onload = replacer

console.log('Qatar blocker Active 2')
console.log('https://soutenir.amnesty.fr/b?frequency=once&amount=3000')

String.prototype.replaceArray = function (find, replace) {
 let replaceString = this
 let regex

 for (let i = 0; i < find.length; i++) {
  regex = new RegExp(find[i], 'gi')

  replaceString = replaceString.replace(regex, replace[i])
 }

 return replaceString
}

function replacer () {
 let bannedWords = ['Qatar', 'Coupe du monde', 'Lusail', 'Al Khor', 'Doha', 'Iconic Stadium', 'Al Bayt Stadium', 'Stadium 974', 'Al Thumama Stadium', 'Al Rayyan', 'Khalifa International Stadium', 'Education City Stadium', 'Ahmad bin Ali Stadium', 'Al Wakrah', 'Al Janoub Stadium']
 let replaceWords = ['Q•••r', 'C•••e du monde', 'Lu••l', 'Al K••r', 'D•ha', 'I••••• Stadium', 'Al B••• Stadium', 'Stadium +4000', 'Al T••••• Stadium', 'Al R••••', 'K•••• In••••• Stadium', 'E•••• C•• Stadium', 'A••• •• A•• Stadium', 'Al W••••', 'Al J•••• Stadium']

 const elements = document.getElementsByTagName('*')

 for (let i = 0; i < elements.length; i++) {
  const element = elements[i]

  for (let j = 0; j < element.childNodes.length; j++) {
   const node = element.childNodes[j]

   if (node.nodeType === 3) {
    const text = node.nodeValue

    const replacedText = text.replaceArray(bannedWords, replaceWords)

    if (replacedText !== text) {
     element.replaceChild(document.createTextNode(replacedText), node)
    }
   }
  }
 }
}