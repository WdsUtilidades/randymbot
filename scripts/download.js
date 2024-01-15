const dotenv = require('dotenv')
dotenv.config({ path: `${__dirname}/../.env` })
const axios = require('axios')
const unflatten = require('flat').unflatten
const fs = require('fs')

;(async function getTranslations() {
  console.log('==== Obtendo localizações')
  const translations = (
    await axios.get('https://localizer.borodutch.com/localizations?tag=web')
  ).data.filter((l) => {
    return l.tags.indexOf('randymbot') > -1
  })
  console.log('==== Obtive localizações:')
  console.log(JSON.stringify(translations, undefined, 2))
  // Get flattened map
  const flattenedMap = {} // { key: {en: '', ru: ''}}
  translations.forEach((t) => {
    const key = t.key
    const variants = t.variants.filter((v) => !!v.selected)
    flattenedMap[key] = variants.reduce((p, c) => {
      p[c.language] = c.text
      return p
    }, {})
  })
  console.log('==== Resposta decodificada:')
  console.log(flattenedMap)
  const unflattened = unflatten(flattenedMap)
  console.log('==== Mapa invertido e não nivelado')
  console.log(unflattened)
  fs.writeFileSync(
    `${__dirname}/../src/helpers/locale.ts`,
    `export function loc(text: string, language: string) {
      return localizations[text][language] || localizations[text].en
    }
    
    export const localizations: { [index: string]: { [index: string]: string } } = ${JSON.stringify(
      unflattened,
      undefined,
      2
    )}`
  )
  console.log('==== Objeto salvo no arquivo')
})()
