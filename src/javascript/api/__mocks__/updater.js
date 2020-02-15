'use strict'

// const Dialog = require('../constructors/dialogs').Dialog

// Mocking Graviton Info
function getGravitonInfo () {
  return {
    date: '200119',
    version: '1.11.0',
    state: 'Beta'
  }
}

///////////////////////

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

function checkUpdates () {
  const ghrepo = getGithubInfo()
  ghrepo.releases(function (err, res, body) {
    // console.log(res)
    const GravitonInfo = getGravitonInfo()
    if (!err) {
      if (res[0].tag_name !== GravitonInfo.version) {
        const dialog = Dialog({
          // id: 'update',
          title: `<strong>${GravitonInfo.state}</strong> Update available!`,
          content: 'Do you want to update to version 1.2.0?',
          buttons: {
            ['No']: {},
            ['Yes']: {
              click: () => update(),
              important: true
            }
          }
        })
        // console.log(dialog)
        return 'Dialog Opened'
      }
      new Notification({
        title: 'Graviton',
        content: getTranslation('NoUpdateFound')
      })
    }
  })
}
const puffin = require('@mkenzo_8/puffin')

function Dialog ({ id = Math.random(), title, content, buttons }) {
  if (typeof [...arguments] !== 'object') {
    graviton.throwError('Parsed argument is not object.')
    return
  }
  const openingAnimation = true
  const buttonComponent = puffin.element(`
      <button myID="{{id}}" click="$onClick">{{value}}</button>
    `,{
    methods:{
      onClick(){
        if(typeof buttons[this.getAttribute("value")].click == "function"){
          buttons[this.getAttribute("value")].click()
        }
        closeDialog(this.id)
      }
    },
    props:["value","id"]
  })

  let buttonsContent = "";

  Object.keys(buttons).forEach(function (key, index) {
    buttonsContent += `
        <buttonComponent class="${buttons[key].important == true ? 'important' : ''}" id="${id}" value="${key}"/>
      `
  })

  const dialogComponent = puffin.element(`
      <div id="${id + '_dialog'}" myID="${id}">
        <div myID="${id}" class="background_window" onclick="closeDialog('${id}')"></div>
        <div style="animation: ${openingAnimation}" class="dialog_body">
            <h3 >${title}</h3>
            <div style="font-size:15px; min-height:15px; position:relative;">
              <elastic-container related="self">
              ${content}
              </elastic-container>
            </div>
            <div class="buttons" style="display:flex;">
              ${buttonsContent}
            </div>
          </div>
      </div>
    `,{
    components:{
      buttonComponent
    }
  })

  puffin.render(dialogComponent,document.getElementById("windows"))
  document
    .getElementById('body')
    .setAttribute(
      'windows',
      Number(document.getElementById('body').getAttribute('windows')) + 1
    )
  this.close = function () {
    closeDialog(this.id)
  }
}

module.exports = {
  getLink: getLink,
  update: update,
  getGithubInfo: getGithubInfo,
  checkUpdates: checkUpdates,
  getGravitonInfo: getGravitonInfo,
  // Dialog: Dialog,
}
