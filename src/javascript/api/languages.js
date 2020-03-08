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

let arabic = require('../../../languages/arabic')
let brazilian_portuguese = require('../../../languages/brazilian_portuguese')
let catalan = require('../../../languages/catalan')
let english = require('../../../languages/english')
let esperanto = require('../../../languages/esperanto')
let french = require('../../../languages/french')
let german = require('../../../languages/german')
let hebrew = require('../../../languages/hebrew')
let hungarian = require('../../../languages/hungarian')
let italian = require('../../../languages/italian')
let polish = require('../../../languages/polish')
let russian = require('../../../languages/russian')
let spanish = require('../../../languages/spanish')
let turkish = require('../../../languages/turkish')


let current_config = {
  language: 'english'
}

let languages = [
  arabic,
  brazilian_portuguese,
  catalan,
  english,
  esperanto,
  french,
  german,
  hebrew,
  hungarian,
  italian,
  polish,
  russian,
  spanish,
  turkish
]

function translateToLanguage (language) {
  let returnFlag = false
  languages.map((item, index) => {
    if (item.name === language) {
      current_config.language = item
      const toTranslate = document.getElementsByClassName('translate_word')
      for (var i = 0; i < toTranslate.length; i++) {
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
    document.dispatchEvent(graviton.events.languageLoaded())
    return true
  }
  return false
}
//
// function getLangArr () {
//   const language = require('../configuration').current_config
//   const selectedLangArr = require('../../../languages/' + language).strings
//   return selectedLangArr
// }

function getTranslation (text) {
  // console.log(text)
  // console.log(current_config.language.strings[text])
  // console.log(current_config.language.strings)
  // const selectedLangArr = getLangArr()
  // if (selectedLangArr[text] === undefined) {
  // console.log('text: ' + text)

  // console.log(current_config.language)
  if (current_config.language.strings[text] === undefined) {
    let output = text
    languages.forEach(lang => {
      if (lang.name === 'english') {
        output = lang.strings[text] !== undefined ? lang.strings[text] : text
      }
    })
    // console.log('output: ' + output)
    return output
  } else {
    // console.log(current_config.language.strings['Welcome'])
    // console.log('else:   ' + current_config.language.strings[text])

    return current_config.language.strings[text]
    // return selectedLangArr[text]
  }
}

module.exports = {
  loadLanguage: loadLanguage,
  getTranslation: getTranslation,
  translateToLanguage: translateToLanguage,
}