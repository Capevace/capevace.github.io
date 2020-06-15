## Fields

### Main

- `title`: Title of the project
- `subtitle`: Subtitle / tagline

```
title: XenEdit
subtitle: Edit, preview & export XenHTML widgets for your jailbroken iPhone
```

### Links

- `link`: Link for the project list to redirect to, instead of a product page (_e.g. https://github.com/..._)
- `githubLink`: A link to the GitHub source code
- `buyLink`: A link to buy the product (_e.g. https://codecanyon.net/..._)
- `appStoreLink`: A link to the app store page of the product (_e.g. https://cdn.mateffy.me..._)
- `downloadLink`: A link to download the product (_e.g. https://cdn.mateffy.me..._)
- `visitLink`: A link to visit the product (_e.g. https://sauf.chat/..._)

```
link: https://github.com/Capevace/xenedit
githubLink: https://github.com/Capevace/xenedit
buyLink: https://codecanyon.net/...
appStoreLink: https://apps.itunes.com/...
downloadLink: https://cdn.mateffy.me
visitLink: https://sauf.chat

```

### Metadata

<!-- prettier-ignore -->
* `metadata`: All the metadata for the project 
	- `year`: The year the project was released (_e.g. 2020_)
	- `tech`: The tech that the project used (_e.g. Vue / Node.js_)
	- `platform`: The year the project was released (_e.g. macOS, iOS, Web_)

```
metadata:
  platform: macOS
  tech: JavaScript, Vue
  year: 2020
```

### Changelog

<!-- prettier-ignore -->
* `changelog`: List of versions with notable changes
	- Object consisting of the following properties:
		- `version`: The version of the change (_e.g. Beta v1.3.2_)
		- `name`: The name of the version (_e.g. First release!_)
		- `changes`: Array of changes made

```
changelog:
  - version: 1.0.0
    name: First version
    changes:
      - Hello, World!
```

### Slides

The files for slides have to be placed in a folder with the same name as the markdown file.

<!-- prettier-ignore -->
* `slides`: Array of filenames (_e.g. `- slide-1.png`_)

```
slides:
  - slide-1.png
  - slide-2.png
```

### Other

- `hideIcon` (boolean): Will hide the icon above the title of the product page

```
hideIcon: true
```
