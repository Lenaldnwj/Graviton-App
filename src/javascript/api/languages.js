/*
########################################
              MIT License

Copyright (c) 2019 Marc Espin Sanz

License > https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/LICENSE.md

#########################################
*/
'use strict'
/**
 *
 * @desc Load the languages JSON files and push it to an array
 *
 */


function translateToLanguage (language) {
  let returnFlag = false
  console.log(language)
  languages.map((item, index) => {
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
//
// function getLangArr () {
//   const language = require('../configuration').current_config
//   const selectedLangArr = require('../../../languages/' + language).strings
//   return selectedLangArr
// }

function getTranslation (text) {
  // console.log(text)
  // console.log('lul')
  // console.log(current_config.language.strings[text])
  // console.log(current_config.language.strings)
  // const selectedLangArr = getLangArr()
  // if (selectedLangArr[text] === undefined) {
  if (current_config.language.strings[text] === undefined) {
    let output = text
    languages.forEach(lang => {
      if (lang.name === 'english') {
        output = lang.strings[text] !== undefined ? lang.strings[text] : text
      }
    })
    return output
  } else {
    // console.log(current_config.language.strings['Welcome'])
    return current_config.language.strings[text]
    // return selectedLangArr[text]
  }
}

module.exports = {
  loadLanguage: loadLanguage,
  getTranslation: getTranslation,
  translateToLanguage: translateToLanguage,
}
