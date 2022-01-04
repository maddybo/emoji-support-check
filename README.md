# emoji-support-check

Check a emoji is supported.

## Install

```
$ npm install git+https://github.com/maddybo/emoji-support-check
```

## Usage

```js
import { ifEmoji } from 'emoji-support-check'
ifEmoji('🛒') // => If your system / browser supports this emoji character correctly, the returned value will be true.
```
