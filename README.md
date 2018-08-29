# material-react-icons

This package provides all the [Material Design Icons](https://material.io/icons) by Google, as [React](https://reactjs.org/) SVG Components. The main inspiration for this package is from [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons), the only difference being that the latter depends on the Material-UI's SvgIcon React Component, while this package boasts `zero` dependencies.

All the icons, included in the package can be found [here](https://material.io/icons).

---

## Installation

```sh
  npm install material-react-icons
```

---

## Usage

The import path for each Material icon component includes the icon name in PascalCase. For example 'access_alarm' icon is named as 'AccessAlarm'

Note: One exception is '3d rotation', which is named 'ThreeDRotation'.

1.  Recommended Way

```jsx
  import AddIcon from 'material-react-icons/Add';
  import RemoveIcon from 'material-react-icons/Remove';
  ...
  ...
    render() {
      ...
      return (
        ...
        <AddIcon />
        <RemoveIcon />
        ...
      );
  ...
  }
```

2.  With [tree-shaking](https://webpack.js.org/guides/tree-shaking/) configured

```jsx
import { Add, Remove } from 'material-react-icons';
...
  ...
    render() {
      ...
      return (
        ...
        <Add />
        <Remove />
        ...
      );
  ...
  }
```

---

### Props

| Prop        | Type       | Required | Default     | Description                                                                                                                              |
| ----------- | :--------: | :------: | :---------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `color`     | _`string`_ | `false`  | `inherit`   | Color of the icon (Ex: '#000000', 'rgba(255, 255, 255, 1)', 'black'). Default being inherit, the icon will take the color of its parent. |
| `className` | _`string`_ | `false`  | -           | Class Name for the `svg` component                                                                                                       |
| `size`      | _`number`_ | `false`  | 24          | Font size of the icon                                                                                                                    |
| `styles`    | _`object`_ | `false`  | `{}`        | Inline Styles for the `svg` component                                                                                                    |
| `viewBox`   | _`string`_ | `false`  | `0 0 24 24` | View Box attribute to the `svg` tag, which is '0 0 24 24' for the icons                                                                  |

Note: Any other prop passed will be spread on to the root element (`<svg />`).

---

### Default Inline Styles of the Icon Component (Can be overridden by styles prop)
```javascript
  {
    userSelect: 'none',
    width: '100%',
    fill: 'currentColor',
    height: '1em',
    verticalAlign: 'middle',
    width: '1em'
  }
```
Note: The size of the icon can be adjusted font-size CSS property. (24px is the default size).

---

## Peer Dependencies

- react
- prop-types


---

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
