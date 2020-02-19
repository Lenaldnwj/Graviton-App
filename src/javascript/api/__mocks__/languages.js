// mocks
let current_config = {
  language: 'english'
}

let french = require('../../../../languages/french')
let italian = require('../../../../languages/italian')
let english = require('../../../../languages/english')

let languages = [
  french,
  italian,
  english
]

// Gets translation from various JSON files of different language, apply selected language to Graviton
function translateToLanguage (language) {
  let returnFlag = false
  // console.log(language)
  languages.map((item, index) => {
    // console.log('item name:language  ' + item.name + ' : ' + language)
    if (item.name === language) {
      current_config.language = item
      const toTranslate = document.getElementsByClassName('translate_word')
      for (i = 0; i < toTranslate.length; i++) {
        toTranslate[i].innerText = getTranslation(
          toTranslate[i].getAttribute('idT')
        )
      }
      returnFlag = true
    }
  })
  return returnFlag
}

function loadLanguage (language) {
  // console.log('language: ' + language)
  // console.log('languages: ' + JSON.stringify(languages, null, 2))
  if (translateToLanguage(language) === true) {
    document.dispatchEvent(graviton.events.languageLoaded());
  }
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
  getTranslation: getTranslation,
  translateToLanguage: translateToLanguage
}
