/*
########################################
              MIT License

Copyright (c) 2019 Marc Espin Sanz

License > https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/LICENSE.md

#########################################
*/

// Creating a dialog, example:

/*

const my_dialog = new Dialog({
    id:'my_dialog1',
    title:'A title',
    content:'This is an example Dialog.',
    buttons: {
        'Accept':{}
    }
})

closeDialog('my_dialog1'); //Close the dialog by passing the id

*/

// 'use strict'



function animationStatus (config) {
  let status
  status = config.animationsPreferences == 'activated' ? `window_slide_up linear 0.1s;` : ''
  // console.log(status)
  return status
}

/**
 * Dialog constructor
 * @param {string} id       Dialog's id
 * @param {string} title    Dialog's title
 * @param {string} content  Dialog's content
 * @param {object} buttons  Dialog's buttons
 */

function Dialog ({ id = Math.random(), title, content, buttons }) {
  // console.log(id + ' lul   ' + title)
  this.id = id
  if (typeof [...arguments] !== 'object') {
    graviton.throwError('Parsed argument is not object.')
    return
  }
  let { current_config } = require('../../configuration')
  // console.log(current_config)
  const openingAnimation = animationStatus(current_config)

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

function reduceWinCount () {
  // console.log(Number(document.getElementById('body').getAttribute('windows')) - 1)
  document.getElementById('body').setAttribute('windows',Number(document.getElementById('body').getAttribute('windows')) - 1)
}

/**
 * Close a dialog
 * @param {HTML element} ele  DOM element
 */

function closeDialog (id) {
  if (removeDialogEle(id)) {
    reduceWinCount()
    return true
  }
  return false
}

function removeDialogEle (id) {
  if(document.getElementById(id + '_dialog') !=null) {
    document.getElementById(id + '_dialog').remove()
    return true
  }
  return false
}

module.exports = {
  Dialog: Dialog,
  closeDialog: closeDialog,
  animationStatus: animationStatus,
  removeDialogEle: removeDialogEle,
  reduceWinCount: reduceWinCount
}
