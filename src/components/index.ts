import SvgIcon from './SvgIcon/index.vue'
import Pag from './Pag/index.vue'
import { App } from 'vue'
const allGlobalComponent = {SvgIcon,Pag}
export default {
    install(app:App) {
        Object.keys(allGlobalComponent).forEach(key => {
            app.component(key, allGlobalComponent[key as keyof typeof allGlobalComponent])
        })
    }
}