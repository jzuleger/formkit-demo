import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme"
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin('fk-a3b7684ab0', inputs)

const config = {
  plugins: [pro],
  icons: { ...genesisIcons },
  config: { rootClasses }
}

export default config
