module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'LIOKM',
      externals: {
        react: 'React'
      }
    }
  }
}
