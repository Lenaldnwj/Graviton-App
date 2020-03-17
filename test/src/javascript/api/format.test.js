const { getFormat, getLanguageName, updateCodeMode } = require('../../../../src/javascript/api/format')

describe('Test Control Component', () => {
  test('getFormat should be a function', () => {
    expect(typeof getFormat).toBe('function')
  })
  test('getFormat function should return a defined result', () => {
    expect(getFormat).toBeDefined()
  })
  test('getFormat function should return obj with language and format property of string html, trust = true', () => {
    expect(getFormat('index.html')).toStrictEqual({ lang: 'html', format: 'html', trust: true })
  })
  test('getFormat function should return obj with language and format property of string js, trust = true', () => {
    expect(getFormat('format.js')).toStrictEqual({ lang: 'js', format: 'js', trust: true })
  })
  test('getFormat function should return obj with language property of string unknown and format property of string tff, trust = false', () => {
    expect(getFormat('format.ttf')).toStrictEqual({ lang: 'unknown', format: 'ttf', trust: false })
  })
  test('getFormat function should return obj with language and format property of string css, trust = true', () => {
    expect(getFormat('format.css')).toStrictEqual({ lang: 'css', format: 'css', trust: true })
  })
  test('getFormat function should turn obj with language and format property of string json, trust = true', () => {
    expect(getFormat('format.json')).toStrictEqual({ lang: 'json', format: 'json', trust: true })
  })
  test('getFormat function should turn obj with language and format property of string md, trust = true', () => {
    expect(getFormat('format.md')).toStrictEqual({ lang: 'md', format: 'md', trust: true })
  })
  test('getFormat function should turn obj with language and format property of string ts, trust = true', () => {
    expect(getFormat('format.ts')).toStrictEqual({ lang: 'ts', format: 'ts', trust: true })
  })
  test('getFormat function should turn obj with language and format property of string jpg, trust = true', () => {
    expect(getFormat('format.jpg')).toStrictEqual({ lang: 'image', format: 'jpg', trust: true })
  })
  test('getFormat function should turn obj with language and format property of string png, trust = true', () => {
    expect(getFormat('format.png')).toStrictEqual({ lang: 'image', format: 'png', trust: true })
  })
  test('getFormat function should turn obj with language and format property of string ico, trust = true', () => {
    expect(getFormat('format.ico')).toStrictEqual({ lang: 'image', format: 'ico', trust: true })
  })
  test('getFormat function should turn obj with language and format property of string svg, trust = true', () => {
    expect(getFormat('format.svg')).toStrictEqual({ lang: 'image', format: 'svg', trust: true })
  })
  test('getFormat function should turn obj with language = unkown if invalid file format', () => {
    expect(getFormat('format.errorFormat')).toStrictEqual({ lang: 'unknown', format: 'errorFormat', trust: false })
  })
  test('getLanguageName function should return formatted language string', () => {
    expect(getLanguageName('html')).toBe('HTML')
    expect(getLanguageName('css')).toBe('CSS')
    expect(getLanguageName('js')).toBe('JavaScript')
    expect(getLanguageName('jsx')).toBe('React JavaScript')
    expect(getLanguageName('vue')).toBe('Vue.js')
    expect(getLanguageName('json')).toBe('JSON ')
    expect(getLanguageName('go')).toBe('Go')
    expect(getLanguageName('sql')).toBe('SQL')
    expect(getLanguageName('rb')).toBe('Ruby')
    expect(getLanguageName('ruby')).toBe('Ruby')
    expect(getLanguageName('php')).toBe('PHP')
    expect(getLanguageName('sass')).toBe('Sass')
    expect(getLanguageName('dart')).toBe('Dart')
    expect(getLanguageName('pascal')).toBe('Pascal')
    expect(getLanguageName('md')).toBe('Markdown')
    expect(getLanguageName('py')).toBe('Python')
    expect(getLanguageName('sh')).toBe('Shell')
    expect(getLanguageName('c')).toBe('C')
    expect(getLanguageName('ino')).toBe('C')
    expect(getLanguageName('h')).toBe('C')
    expect(getLanguageName('woff2')).toBe('Font')
    expect(getLanguageName('ttf')).toBe('Font')
    expect(getLanguageName('cpp')).toBe('C++')
    expect(getLanguageName('c++')).toBe('C++')
    expect(getLanguageName('cc')).toBe('C++')
    expect(getLanguageName('cxx')).toBe('C++')
    expect(getLanguageName('hpp')).toBe('C++')
    expect(getLanguageName('h++')).toBe('C++')
    expect(getLanguageName('hh')).toBe('C++')
    expect(getLanguageName('hxx')).toBe('C++')
    expect(getLanguageName('csharp')).toBe('C#')
    expect(getLanguageName('java')).toBe('Java')
    expect(getLanguageName('m')).toBe('Objective-C')
    expect(getLanguageName('mm')).toBe('Objective-C')
    expect(getLanguageName('kt')).toBe('Kotlin')
    expect(getLanguageName('ts')).toBe('TypeScript')
    expect(getLanguageName('toml')).toBe('Rust')
    expect(getLanguageName('rs')).toBe('Rust')
    expect(getLanguageName('image')).toBe('Image')
  })

  test('getLanguageName function should return input string as default string', () => {
    expect(getLanguageName('rtx')).toBe('rtx')
  })

  })
