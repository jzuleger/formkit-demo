import { genesisIcons } from "@formkit/icons"
import { de, en } from '@formkit/i18n'
import { createProPlugin, inputs } from '@formkit/pro'
import { rootClasses } from "./formkit.theme"

const pro = createProPlugin('fk-a3b7684ab0', inputs)

const config = {
  plugins: [pro],
  locales: { de, en },
  locale: 'de',
  icons: { ...genesisIcons },
  config: { rootClasses }
}

export default config
