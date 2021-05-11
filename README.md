# Collboard modules SDK

Modules SDK toolkit for [Collboard.com](https://collboard.com/).
Here is the [sample of very simple module](https://github.com/collboard/module-sample-basic).


## How to develop your first module in 4 steps
### 1) To start install the SDK first:

```bash
npm install @collboard/modules-sdk
```

<!--TODO: Also create option to install from GH repositories -->

### 2) Then create **package.json** file with link to main file:

```json
{
    "version": "1.0.0",
    "main": "./src/sampleButtonModule.tsx",
    "scripts": {
        "start": "colldev"
    },
    "dependencies": {
        "@collboard/modules-sdk": "^10.4.1-6"
    }
}
```

<!--TODO: Auto-update versions in READMEs -->

### 3) Create the main file

It can be either **TypeScript** or **JavaScript**. It can import other files or node modules _(colldev internally uses webpack with ts-loader)_.

<!-- TODO: Some better example -->
```typescript
import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '@collboard/modules-sdk';
import * as React from 'react';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: 'MyFirstModule',
        },
        place: ExtraJsxPlace.EdgeRight,
        createExtraJsx({
            routingSystem,
            translationsSystem,
            apiClient,
            materialArtVersioningSystem: { cornerstoneArts },
        }) {
            return (
                <button
                    onClick={async () => {
                        alert(`Hello from Collboard modules!`);
                    }}
                    className="button button-primary button-vertical"
                >
                    <span>Hello World!</span>
                </button>
            );
        },
    }),
);
```

### 4) And you can start to develop your first module!

```bash
# Linux, WSL
colldev

# Windows, PowerShell
npx colldev


# You can also run full command
colldev develop

# And disable to open dev.collboard.com
colldev develop --open false


# Or open some specific board/url to develop on
colldev develop --open https://dev.collboard.com/dev-TODO:!!!

```

![Colldev running in terminal](./media/colldev-running.png 'Colldev running in terminal')

### How it works under the hood?

Colldev will automatically look into your package.json, finds **main** entry _(it can be typescript or javascript file)_. And watch, build and serve changes to Collboard in development mode.

Then you open [Collboard in developer mode - dev.collboard.com](https://dev.collboard.com) and there you will see modules that you are working on.

Most of the modules make sense on the board (not the homepage) **so you will probably need to create a new board**.

These modules will be automatically installed & hot reloaded _(uninstalled+installed)_ as you go.

Notice that boards+its contents created under development mode will be automatically erased after some time.

## Publishing the module

Run colldev commant with **publish** modifier. This will send module to Collboard server as a release candidate to authorize. Please provide contact to author in package.json if there is some problem with the module to contact you and solve it.

When you are updating, please provide new version in package json.

```bash
# Linux, WSL
colldev publish

# Windows, PowerShell
npx colldev publish
```

_Tip: You can also setup postversion command to publish automatically._



## Systems
<!--TODO: Should be theese sections in primary README or use other markdown files? -->

In setup function you are interacting with Collboard systems. Theese are something like APIs each controlling some part of collboard app.

Typically you are registering something under theese sytems. This will returns you [destroyable](https://collboard.github.io/modules-sdk/interfaces/idestroyable.html) which you can directly return from your setup function.



<!--!!!-->


### SgsdfgSystem
!!!


/**
* Generator: Systems
* Omit: Serializer
* Pattern: ### <System>
*/





<!--
TODO: !!! ## Makers
-->

<!--
TODO: !!! ## Multimodules
-->