# Icon

### 图标来源: 
https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free

基于font awesome导入了free-solid筛选条件中的所有icon

### 示例代码

```jsx
import React from 'react'
import { Icon } from 'oli-ui'

export default () => {
  return (
    <>
      <Icon icon="address-book" theme="primary" />
      <Icon icon="plus" theme="success" />
      <Icon icon="arrow-left" theme="default" />
      <Icon icon="arrow-right" theme="primary" />
    </>
  )
}
```