const { globSync }  = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPluginEntryArray = []

const entryFilesMap = {}

const allEntry = globSync('**/*.js', {
    ignore:'node_modules/*',
    cwd:path.resolve(__dirname, '../src')
})

allEntry.forEach(entryPath => {
    const entryName = entryPath.split('\\').find(el => el.includes('.js')).replace('.js', '')
    entryFilesMap[entryName] = path.join(__dirname, `../src/${entryName}/${entryName}.js`)

    htmlPluginEntryArray.push(
        new HtmlWebpackPlugin({
            title:entryName,
            filename:`${entryName}.html`,
            template:path.join(__dirname, `../src/${entryName}/${entryName}.html`),
            chunks:[entryName] // 指定使用到的chunks
        })
    )
})

module.exports = {
    htmlPluginEntryArray,
    entryFilesMap
}