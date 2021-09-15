# Button

### 按钮类型 type
```jsx
import React from 'react'
import { Button } from 'oli-ui'

export default () => {
  return (
    <>
      <Button type="primary">primary button</Button>
      <Button type="default">default button</Button>
      <Button type="danger">danger button</Button>
      <Button type="link" href="http://www.baidu.com">link button</Button>
      <Button type="link">text(link button no href)</Button>
    </>
  )
}
```
### 按钮尺寸 size
```jsx
import React from 'react'
import { Button } from 'oli-ui'

export default () => {
  return (
    <>
      <Button size="lg">size=lg</Button>
      <Button>normal size</Button>
      <Button type="sm">size=sm</Button>
    </>
  )
}
```

### 不可用状态 disbled
```jsx
import React from 'react'
import { Button } from 'oli-ui'

export default () => {
  return (
    <>
      <Button type="primary" disabled>primary disabled</Button>
       <Button type="default" disabled>default disabled</Button>
      <Button type="danger" disabled>danger disabled</Button>
      <Button type="link" href="http://www.baidu.com" disabled>link disabled</Button>
      <Button type="link" size="lg" href="http://www.baidu.com" disabled>link disabled lg</Button>
    </>
  )
}
```

### 按钮图标 icon
```jsx
import React from 'react'
import { Button } from 'oli-ui'

export default () => {
  return (
    <>
      <Button type="primary" icon="plus">primary icon button</Button>
      <Button type="default" icon="arrow-left"></Button>
      <Button type="link" icon="arrow-right">text icon</Button>
      <Button type="link" icon="arrow-right" href="http://www.baidu.com">跳转到百度</Button>
    </>
  )
}
```