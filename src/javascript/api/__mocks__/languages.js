let current_config = {
  language: 'english'
}

let french = require('../../../../languages/french')
let italian = require('../../../../languages/italian')

let languages = [
  french,
  italian
]

function loadLanguage (language) {
  languages.map((item, index) => {
    // console.log(item.name + " " + index)

    if (item.name === language) {
      current_config.language = item
      const toTranslate = document.getElementsByClassName('translate_word')
      // console.log(toTranslate)
      for (i = 0; i < toTranslate.length; i++) {
        toTranslate[i].innerText = getTranslation(
          toTranslate[i].getAttribute('idT')
        )
      }
      document.dispatchEvent(graviton.events.languageLoaded());
    }
  })
}

function getFrenchLangArr () {
  const selectedLangArr = require('../../../../languages/french').strings
  return selectedLangArr
}

function getTranslation (text) {
  const selectedLangArr = getFrenchLangArr()
  if (selectedLangArr[text] === undefined) {
    let output = text
    languages.forEach(lang => {
      if (lang.name === 'english') {
        output = lang.strings[text] !== undefined ? lang.strings[text] : text
      }
    })
    return output
  } else {
    // console.log(current_config.language.strings['Welcome'])
    return selectedLangArr[text]
  }
}

module.exports = {
  loadLanguage: loadLanguage,
  getTranslation: getTranslation
}
