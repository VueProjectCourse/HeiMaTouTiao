import './styles/index.css'
import { h} from 'vue'
import { VPTheme } from 'wltheme'
import Banner from './components/Banner.vue'


export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      banner: () => h(Banner),
      // 'sidebar-top': () => h(PreferenceSwitch)
    })
  }
})
