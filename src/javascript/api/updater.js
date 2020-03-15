/*
########################################
              MIT License

Copyright (c) 2019 Marc Espin Sanz

License > https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/LICENSE.md

#########################################
*/
'use strict'

const { Dialog } = require('../api/constructors/dialogs')
const { getTranslation } = require('../api/languages')
let shell = require('electron').shell

const GravitonInfo = {
  date: "200119",
  version: "1.11.0",
  state: "Beta"
}

// function update () {
//   let shell = require('electron').shell
//   shell.openExternal(getLink())
//   return true
// }

function getLink () {
  return 'https://github.com/Graviton-Code-Editor/Graviton-App/releases'
}

function getGithubInfo () {
  const github = require('octonode')
  // console.log(github)
  const client = github.client()
  // console.log(client)
  const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
  return ghrepo
}

function updateValidity (gVersion, gDate, gState) {
  const version = GravitonInfo.version, date = GravitonInfo.date, state = GravitonInfo.state
  // var result
  // const github = require('octonode')
  // // console.log(github)
  // const client = github.client()
  // // console.log(client)
  // const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
  // ghrepo.releases(function (err, res, body) {
  //   result = res[0]
  // })
  // console.log('lullulululu')
  // console.log(result.tag_name)

  return version < gVersion && date < gDate && state === gState

}

function getGravitonInfo () {
  // console.log('non mock')
  return GravitonInfo
}

function checkUpdates () {
  const ghrepo = getGithubInfo()
  // console.log(ghrepo.releases())
  updateValidity(GravitonInfo.version, GravitonInfo.date, GravitonInfo.state)

  ghrepo.releases(function (err, res, body) {
    // console.log(res)
    const GravitonInfo = getGravitonInfo()
    if (!err) {
      if (res[0].tag_name !== GravitonInfo.version) {
        console.log(res[0].tag_name + ' ' + GravitonInfo.version)
        // console.log(JSON.stringify(res[0],null, 2) + ' ' + JSON.stringify(GravitonInfo,null, 2))
        const dialog = Dialog({
          id: 'update',
          title: `<strong>${GravitonInfo.state}</strong> Update available!`,
          content: getTranslation('DetectedUpdateMessage') + ' ' + res[0].tag_name + '?',
          buttons: {
            [getTranslation('No')]: {},
            [getTranslation('Yes')]: {
              click: () => shell.openExternal(getLink()),
              important: true
            }
          }
        })
        return true
      }
      new Notification({
        title: 'Graviton',
        content: getTranslation('NoUpdateFound')
      })
    }
  })
}

module.exports = {
  getLink: getLink,
  updateValidity: updateValidity,
  getGithubInfo: getGithubInfo,
  checkUpdates: checkUpdates,
  getGravitonInfo: getGravitonInfo,
}
