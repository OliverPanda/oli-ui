import reportWebVitals from './reportWebVitals'
import './styles/index.scss'

// fontawesome中icon接受一个对象, 要想icon接受字符串得生成icon lib
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// export每个组件, 才能import { Button } from 'oli-ui'
export { default as Button } from './packages/Button'
export { default as Icon } from './packages/Icon'
export { default as Menu } from './packages/Menu'
export { default as MenuItem } from './packages/Menu/MenuItem'

reportWebVitals()