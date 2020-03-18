const { getFormat, getLanguageName, updateCodeMode, instanceExecute } = require('../../../../src/javascript/api/format')
// const formatModule = require('../../../../src/javascript/api/format')
// import * as formatModule from '../../../../src/javascript/api/format'
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
  test('getFormat should be a function', () => {
    expect(typeof getLanguageName).toBe('function')
  })
  test('getFormat function should return a defined result', () => {
    expect(getLanguageName).toBeDefined()
  })
  test('getLanguageName function should return HTML when input is html', () => {
    expect(getLanguageName('html')).toBe('HTML')
  })
  test('getLanguageName function should return HTML when input is css', () => {
    expect(getLanguageName('css')).toBe('CSS')
  })
  test('getLanguageName function should return JavaScript when input is js', () => {
    expect(getLanguageName('js')).toBe('JavaScript')
  })
  test('getLanguageName function should return React JavaScript when input is jsx', () => {
    expect(getLanguageName('jsx')).toBe('React JavaScript')
  })
  test('getLanguageName function should return Vue.js when input is vue', () => {
    expect(getLanguageName('vue')).toBe('Vue.js')
  })
  test('getLanguageName function should return JSON when input is json', () => {
    expect(getLanguageName('json')).toBe('JSON ')
  })
  test('getLanguageName function should return Go when input is go', () => {
    expect(getLanguageName('go')).toBe('Go')
  })
  test('getLanguageName function should return SQL when input is sql', () => {
    expect(getLanguageName('sql')).toBe('SQL')
  })
  test('getLanguageName function should return Ruby when input is rb', () => {
    expect(getLanguageName('rb')).toBe('Ruby')
  })
  test('getLanguageName function should return Ruby when input is ruby', () => {
    expect(getLanguageName('ruby')).toBe('Ruby')
  })
  test('getLanguageName function should return PHP when input is php', () => {
    expect(getLanguageName('php')).toBe('PHP')
  })
  test('getLanguageName function should return Sass when input is sass', () => {
    expect(getLanguageName('sass')).toBe('Sass')
  })
  test('getLanguageName function should return Dart when input is dart', () => {
    expect(getLanguageName('dart')).toBe('Dart')
  })
  test('getLanguageName function should return Pascal when input is pascal', () => {
    expect(getLanguageName('pascal')).toBe('Pascal')
  })
  test('getLanguageName function should return Markdown when input is md', () => {
    expect(getLanguageName('md')).toBe('Markdown')
  })
  test('getLanguageName function should return Python when input is py', () => {
    expect(getLanguageName('py')).toBe('Python')
  })
  test('getLanguageName function should return Shell when input is sh', () => {
    expect(getLanguageName('sh')).toBe('Shell')
  })
  test('getLanguageName function should return C when input is c', () => {
    expect(getLanguageName('c')).toBe('C')
  })
  test('getLanguageName function should return C when input is ino', () => {
    expect(getLanguageName('ino')).toBe('C')
  })
  test('getLanguageName function should return C when input is h', () => {
    expect(getLanguageName('h')).toBe('C')
  })
  test('getLanguageName function should return Font when input is woff2', () => {
    expect(getLanguageName('woff2')).toBe('Font')
  })
  test('getLanguageName function should return Font when input is ttf', () => {
    expect(getLanguageName('ttf')).toBe('Font')
  })
  test('getLanguageName function should return C++ when input is cpp', () => {
    expect(getLanguageName('cpp')).toBe('C++')
  })
  test('getLanguageName function should return C++ when input is c++', () => {
    expect(getLanguageName('c++')).toBe('C++')
  })
  test('getLanguageName function should return C++ when input is cc', () => {
    expect(getLanguageName('cc')).toBe('C++')
  })
  test('getLanguageName function should return C++ when input is cxx', () => {
    expect(getLanguageName('cxx')).toBe('C++')
  })
  test('getLanguageName function should return C++ when input is hpp', () => {
    expect(getLanguageName('hpp')).toBe('C++')
  })
  test('getLanguageName function should return C++ when input is h++', () => {
    expect(getLanguageName('h++')).toBe('C++')
  })
  test('getLanguageName function should return C++ when input is hh', () => {
    expect(getLanguageName('hh')).toBe('C++')
  })
  test('getLanguageName function should return C++ when input is hxx', () => {
    expect(getLanguageName('hxx')).toBe('C++')
  })
  test('getLanguageName function should return C# when input is csharp', () => {
    expect(getLanguageName('csharp')).toBe('C#')
  })
  test('getLanguageName function should return Java when input is java', () => {
    expect(getLanguageName('java')).toBe('Java')
  })
  test('getLanguageName function should return Objective-C when input is m', () => {
    expect(getLanguageName('m')).toBe('Objective-C')
  })
  test('getLanguageName function should return Objective-C when input is mm', () => {
    expect(getLanguageName('mm')).toBe('Objective-C')
  })
  test('getLanguageName function should return Kotlin when input is kt', () => {
    expect(getLanguageName('kt')).toBe('Kotlin')
  })
  test('getLanguageName function should return TypeScript when input is ts', () => {
    expect(getLanguageName('ts')).toBe('TypeScript')
  })
  test('getLanguageName function should return Rust when input is toml', () => {
    expect(getLanguageName('toml')).toBe('Rust')
  })
  test('getLanguageName function should return Rust when input is rs', () => {
    expect(getLanguageName('rs')).toBe('Rust')
  })
  test('getLanguageName function should return Image when input is image', () => {
    expect(getLanguageName('image')).toBe('Image')
  })
  test('getLanguageName function should return input string as default string', () => {
    expect(getLanguageName('rtx')).toBe('rtx')
  })

  test('getFormat should be a function', () => {
    expect(typeof updateCodeMode).toBe('function')
  })
  test('getFormat function should return a defined result', () => {
    expect(updateCodeMode).toBeDefined()
  })

  test('updateCodeMode function should return false if ', () => {
    expect(updateCodeMode('../C:/', 'format.html', 'deactivated')).toBeFalsy()
  })
  // test('updateCodeMode function should return false if ', () => {
  //   console.log(formatModule)
  //   const spy = jest.spyOn(formatModule, 'instanceExecute')
  //   const result = formatModule.updateCodeMode('../C:/', 'format.html', 'activated')
  //   expect(spy).toHaveBeenCalledTimes(1)
  // })

})
