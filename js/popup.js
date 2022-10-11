window.onload = onLoad

async function onLoad () {
 document.getElementById("donation_button").addEventListener("click", donate);
 const result = await chrome.storage.sync.get(['nbWordsReplaced'])

 let nbWordsReplaced
 if (result.nbWordsReplaced) {
  nbWordsReplaced = result.nbWordsReplaced
 } else {
  nbWordsReplaced = 0
 }

 const price = Math.round(nbWordsReplaced * 0.10 * 100) / 100;

 document.getElementById('number').innerText = nbWordsReplaced
 document.getElementById('calculate_number').innerText = nbWordsReplaced
 document.getElementById('donation_price').value = price
}

function donate() {
 const price = document.getElementById('donation_price').value;

 chrome.tabs.create({url: "https://soutenir.amnesty.fr/b?frequency=once&amount=" + (price * 100)});
}