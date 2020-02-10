/*
########################################
              MIT License

Copyright (c) 2019 Marc Espin Sanz

License > https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/LICENSE.md

#########################################
*/
'use strict'

function getLink () {}

module.exports = {
  check_updates: function () {
    const github = require('octonode')
    const client = github.client()
    const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
    ghrepo.releases(function (err, res, body) {
      console.log('hello')
      console.log(res)
      if (!err) {
        if (res[0].tag_name !== GravitonInfo.version) {
          console.log(res[i].tag_name + ' ' + GravitonInfo.version)
          console.log(semver.gt(res[i].tag_name, GravitonInfo.version))
          new Dialog({
            id: 'update',
            title: `<strong>${GravitonInfo.state}</strong> Update avaiable !`,
            content: getTranslation('DetectedUpdateMessage') + ' ' + res[0].tag_name + '?',
            buttons: {
              [getTranslation('No')]: {},
              [getTranslation('Yes')]: {
                click: ()=> this.update(),
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
  },
  update: function () {
    let shell = new Promise(((resolve, reject) => {
      resolve(require("electron").shell)
    }))
    shell.then(() => {
      shell.openExternal(
        getLink()
      )
    }).catch((error) => { console.log(error) })
  },
  getLink: function () {
    return 'https://github.com/Graviton-Code-Editor/Graviton-App/releases'
  }
}
