'use strict'

// const Dialog = require('../constructors/dialogs').Dialog

const correctGravitonInfo = {
  date: "200119",
  version: "1.11.0",
  state: "Beta"
}


function getGravitonInfo () {
  return correctGravitonInfo
}

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

module.exports = {
  getLink: getLink,
  update: update,
  getGithubInfo: getGithubInfo,
  getGravitonInfo: getGravitonInfo,
}
