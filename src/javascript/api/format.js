let { instanceExecute } = require('./executor')

function getFormat (text) {
  switch (text.split('.').pop()) {
    case 'html':
      return {
        lang: 'html',
        format: text.split('.').pop(),
        trust: true
      }
    case 'js':
      return {
        lang: 'js',
        format: text.split('.').pop(),
        trust: true
      }
    case 'ttf':
      return {
        lang: 'unknown',
        format: text.split('.').pop(),
        trust: false
      }
    case 'css':
      return {
        lang: 'css',
        format: text.split('.').pop(),
        trust: true
      }
    case 'json':
      return {
        lang: 'json',
        format: text.split('.').pop(),
        trust: true
      }
    case 'md':
      return {
        lang: 'md',
        format: text.split('.').pop(),
        trust: true
      }
    case 'ts':
      return {
        lang: 'ts',
        format: text.split('.').pop(),
        trust: true
      }
    case 'jpg':
    case 'png':
    case 'ico':
    case 'svg':
      return {
        lang: 'image',
        format: text.split('.').pop(),
        trust: true
      }
    default:
      return {
        lang: 'unknown',
        format: text.split('.').pop(),
        trust: false
      }
  }
}

function getLanguageName (format) {
  switch (format) {
    case 'html':
      return 'HTML'
    case 'css':
      return 'CSS'
    case 'js':
      return 'JavaScript'
    case 'jsx':
      return 'React JavaScript'
    case 'vue':
      return 'Vue.js'
    case 'json':
      return 'JSON '
    case 'go':
      return 'Go'
    case 'sql':
      return 'SQL'
    case 'rb':
    case 'ruby':
      return 'Ruby'
    case 'php':
      return 'PHP'
    case 'sass':
      return 'Sass'
    case 'dart':
      return 'Dart'
    case 'pascal':
      return 'Pascal'
    case 'md':
      return 'Markdown'
    case 'py':
      return 'Python'
    case 'sh':
      return 'Shell'
    case 'c':
    case 'ino':
    case 'h':
      return 'C'
    case 'woff2':
    case 'ttf':
      return 'Font'
    case 'cpp':
    case 'c++':
    case 'cc':
    case 'cxx':
    case 'hpp':
    case 'h++':
    case 'hh':
    case 'hxx':
      return 'C++'
    case 'csharp':
    case 'cs':
      return 'C#'
    case 'java':
      return 'Java'
    case 'm':
    case 'mm':
      return 'Objective-C'
    case 'kt':
      return 'Kotlin'
    case 'ts':
      return 'TypeScript'
    case 'toml':
    case 'rs':
      return 'Rust'
    case 'image':
      return 'Image'
    default:
      return format
  }
}



function updateCodeMode (instance, path) {

  instanceExecute(instance, path)

  return true
}

module.exports = {
  getFormat: getFormat,
  getLanguageName: getLanguageName,
  updateCodeMode: updateCodeMode,
  instanceExecute: instanceExecute
}
