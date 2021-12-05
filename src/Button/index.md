---
nav:
  title: Components
  path: /components
group:
  title: 通用
---

## Button 按钮

###### 常用的操作按钮

Basic Examples:

```tsx
import React from 'react';
import { GuButton } from 'gould-ui';
import '../../assets/css/demo.less';

export default () => (
  <>
    <GuButton>Default</GuButton>
    <GuButton type="primary">Primary</GuButton>
    <GuButton type="success">Success</GuButton>
    <GuButton type="danger">Danger</GuButton>
    <GuButton type="warning">Warning</GuButton>
    <GuButton type="info">Info</GuButton>
    <GuButton type="link">Link</GuButton>
  </>
);
```

Outline Buttons

```tsx
import React from 'react';
import { GuButton } from 'gould-ui';
import '../../assets/css/demo.less';

export default () => (
  <>
    <GuButton outline>Default</GuButton>
    <GuButton type="primary" outline>
      Primary
    </GuButton>
    <GuButton type="success" outline>
      Success
    </GuButton>
    <GuButton type="danger" outline>
      Danger
    </GuButton>
    <GuButton type="warning" outline>
      Warning
    </GuButton>
    <GuButton type="info" outline>
      Info
    </GuButton>
  </>
);
```

## API

<API hideTitle></API>
