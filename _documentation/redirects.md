## Redirects Metadata

### Main

- `title`: Title of the project

```
title: Waterbuddy Demo
```

### Links

- `link`: Link for the project list to redirect to, instead of a product page (_e.g. https://github.com/..._)

```
link: https://www.figma.com/proto/zzXWcrEdM1WE2tZIEQIWde/WaterBuddy-Demo---DI-Lab%3A-Group-7
```

### Icon

The icon for the product page will be automatically fetched from `/<project-name>/icon.png` and should be placed in the corresponding project assets folder (e.g. `/projects_apps/alpaca/icon.png`).

You can override this link by specifying a `icon` property in the Liquid metadata. This url will be relative to the root url, so passing `/assets/images/waterbuddy-icon.png` will result in `https://mateffy.me/assets/images/waterbuddy-icon.png`.

<!-- prettier-ignore -->
`icon`: Relative URL to an icon (_e.g. `/assets/images/waterbuddy-icon.png`_)

```
icon: 
```

### Other

- `hideIcon` (boolean): Will hide the icon above the title of the product page
- `disableRedirect` (boolean): Will disable the HTML meta redirect for debug purposes

```
hideIcon: true
disableRedirect: true
```
