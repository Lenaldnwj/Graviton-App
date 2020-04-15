function instanceExecute (instance, path) {
  switch (path.split('.').pop()) {
    // case 'html':
    //   instance.execute('setLanguage', 'html')
    //   plang = 'HTML'
    //   instance.execute('forceRefresh')
    //   return true
    // case 'css':
    //   instance.execute('setLanguage', 'css')
    //   plang = 'CSS'
    //   instance.execute('forceRefresh')
    //   break
    // case 'js':
    //   instance.execute('setLanguage', 'javascript')
    //   plang = 'JavaScript'
    //   instance.execute('forceRefresh')
    //   break
    // case 'jsx':
    //   instance.execute('setLanguage', 'jsx')
    //   plang = 'React JavaScript'
    //   instance.execute('forceRefresh')
    //   break
    // case 'vue':
    //   instance.execute('setLanguage', 'vue')
    //   plang = 'Vue.js'
    //   instance.execute('forceRefresh')
    //   break
    // case 'json':
    //   instance.execute('setLanguage', 'json')
    //   plang = 'JSON / JavaScript'
    //   instance.execute('forceRefresh')
    //   break
    // case 'go':
    //   instance.execute('setLanguage', 'go')
    //   plang = 'Go'
    //   instance.execute('forceRefresh')
    //   break
    // case 'sql':
    //   instance.execute('setLanguage', 'aql')
    //   plang = 'SQL'
    //   instance.execute('forceRefresh')
    //   break
    // case 'rb':
    // case 'ruby':
    //   instance.execute('setLanguage', 'ruby')
    //   plang = 'Ruby'
    //   instance.execute('forceRefresh')
    //   break
    // case 'php':
    //   instance.execute('setLanguage', 'php')
    //   plang = 'PHP'
    //   instance.execute('forceRefresh')
    //   break
    // case 'sass':
    //   instance.execute('setLanguage', 'sass')
    //   plang = 'Sass'
    //   instance.execute('forceRefresh')
    //   break
    // case 'dart':
    //   instance.execute('setLanguage', 'dart')
    //   plang = 'Dart'
    //   instance.execute('forceRefresh')
    //   break
    // case 'pascal':
    //   instance.execute('setLanguage', 'pascal')
    //   plang = 'Pascal'
    //   instance.execute('forceRefresh')
    //   break
    // case 'md':
    //   instance.execute('setLanguage', 'markdown')
    //   plang = 'Markdown'
    //   instance.execute('forceRefresh')
    //   break
    // case 'py':
    //   instance.execute('setLanguage', 'python')
    //   plang = 'Python'
    //   instance.execute('forceRefresh')
    //   break
    // case 'sh':
    //   instance.execute('setLanguage', 'shell')
    //   plang = 'Shell'
    //   instance.execute('forceRefresh')
    //   break
    // case 'c':
    //   instance.execute('setLanguage', 'c')
    //   plang = 'C'
    //   instance.execute('forceRefresh')
    //   break
    // case 'cpp':
    //   instance.execute('setLanguage', 'cpp')
    //   plang = 'C++'
    //   instance.execute('forceRefresh')
    //   break
    // case 'cs':
    //   instance.execute('setLanguage', 'cs')
    //   plang = 'C#'
    //   instance.execute('forceRefresh')
    //   break
    // case 'java':
    //   instance.execute('setLanguage', 'java')
    //   plang = 'Java'
    //   instance.execute('forceRefresh')
    //   break
    // case 'h':
    //   instance.execute('setLanguage', 'objectivec')
    //   plang = 'Objective-C'
    //   instance.execute('forceRefresh')
    //   break
    // case 'kt':
    //   instance.execute('setLanguage', 'kotlin')
    //   plang = 'Kotlin'
    //   instance.execute('forceRefresh')
    //   break
    // case 'ts':
    //   instance.execute('setLanguage', 'typescript')
    //   plang = 'TypeScript'
    //   instance.execute('forceRefresh')
    //   break
    // case 'toml':
    // case 'rs':
    //   instance.execute('setLanguage', 'rust')
    //   plang = 'Rust'
    //   instance.execute('forceRefresh')
    //   break
    // default:
    //   plang = 'Unknown'
    //   instance.execute('forceRefresh')
  }
}

module.exports = {
  instanceExecute: instanceExecute
}