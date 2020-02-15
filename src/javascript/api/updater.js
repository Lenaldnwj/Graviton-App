/*
########################################
              MIT License

Copyright (c) 2019 Marc Espin Sanz

License > https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/LICENSE.md

#########################################
*/
'use strict'

// function update () {
//   let shell = new Promise(((resolve, reject) => {
//     resolve(require("electron").shell)
//   }))
//   shell.then(() => {
//     return shell.openExternal(
//       getLink()
//     )
//   }).catch((error) => { console.log(error) })
// }

function update () {
  let shell = require('electron').shell
  return shell.openExternal(getLink())
}

function getLink () {
  return 'https://github.com/Graviton-Code-Editor/Graviton-App/releases'
}

function getGithubInfo () {
  const github = require('octonode')
  // console.log(github)
  const client = github.client()
  // console.log(client)
  const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
  // console.log(ghrepo)
  return ghrepo
}

function getGravitonInfo () {
  return GravitonInfo
}

function checkUpdates () {
  const ghrepo = getGithubInfo()
  ghrepo.releases(function (err, res, body) {
    // console.log(res)
    const GravitonInfo = getGravitonInfo()
    if (!err) {
      if (res[0].tag_name !== GravitonInfo.version) {
        console.log(res[0].tag_name + ' ' + GravitonInfo.version)
        const dialog = new Dialog({
          id: 'update',
          title: `<strong>${GravitonInfo.state}</strong> Update available!`,
          content: getTranslation('DetectedUpdateMessage') + ' ' + res[0].tag_name + '?',
          buttons: {
            [getTranslation('No')]: {},
            [getTranslation('Yes')]: {
              click: () => update(),
              important: true
            }
          }
        })
        return dialog
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
  update: update,
  getGithubInfo: getGithubInfo,
  checkUpdates: checkUpdates,
  getGravitonInfo: getGravitonInfo,
}
