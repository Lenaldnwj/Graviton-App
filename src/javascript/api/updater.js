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
  console.log(github)
  const client = github.client()
  console.log(client)
  const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
  console.log(ghrepo)
  return ghrepo
}

function checkUpdates () {
  const ghrepo = getGithubInfo()
  ghrepo.releases(function (err, res, body) {
    // console.log(res)
    if (!err) {
      if (res[0].tag_name !== GravitonInfo.version) {
        // console.log(res[i].tag_name + ' ' + GravitonInfo.version)
        // console.log(semver.gt(res[i].tag_name, GravitonInfo.version))
        new Dialog({
          id: 'update',
          title: `<strong>${GravitonInfo.state}</strong> Update avaiable !`,
          content: getTranslation('DetectedUpdateMessage') + ' ' + res[0].tag_name + '?',
          buttons: {
            [getTranslation('No')]: {},
            [getTranslation('Yes')]: {
              click: () => update(),
              important: true
            }
          }
        })
        return
      }
      new Notification({
        title: 'Graviton',
        content: getTranslation('NoUpdateFound')
      })
    }
  })
}

module.exports = {
  checkUpdates: checkUpdates,
  update: update,
  getLink: getLink,
  getGithubInfo: getGithubInfo,
}
