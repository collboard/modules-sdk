# Collboard modules SDK

Modules SDK toolkit for [Collboard.com](https://collboard.com/).
Here is the [sample of very simple module](https://github.com/collboard/module-sample-basic).

## 1/ To start install the SDK first:

```bash
npm install @collboard/modules-sdk
```

<!--TODO: Also create option to install from GH repositories -->

## 2/ Then create **package.json** file with link to main file:

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

## 3/ Create the main file

It can be either **TypeScript** or **JavaScript**. It can import other files or node modules _(colldev internally uses webpack with ts-loader)_.

```typescript
import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '@collboard/modules-sdk';
import * as React from 'react';

// TODO: !!! How to make modules + manual for systems
declareModule(
    makeExtrajsxModule({
        manifest: {
            name: 'SampleButton',
            title: { en: 'Hello World Button"', cs: 'Hello World Tlačítko' },
            description: {
                en: 'Button exported from the SampleButtonModule',
                cs: 'Tlačítko exportované ze SampleButtonModule',
            },
            keywords: [],
            categories: ['Buttons'],
            icon: '/assets/icons/copy-material.svg', // TODO: module scoped assets
            screenshots: [], // TODO: module scoped assets
            author: {
                name: 'Collboard Developers',
                email: 'dev@collboard.com',
                url: 'http://collboard.com/',
            },
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

## 4/ And you can start to develop your first module!

```bash
# Linux, WSL
colldev

# Windows, PowerShell
npx colldev
```

## How it works?

Colldev will automatically look into your package.json, finds **main** entry _(it can be typescript or javascript file)_. And watch, build and serve changes to Collboard in development mode.

Then you open [Collboard in developer mode - dev.collboard.com](https://dev.collboard.com) and there you will see modules that you are working on.

Most of the modules make sense on the board (not the homepage) **so you will probably need to create a new board**.

These modules will be automatically installed & hot reloaded _(uninstalled+installed)_ as you go.

Notice that boards+its contents created under development mode will be automatically erased after some time.

## When you module is finished

Run colldev commant with **publish** modifier. This will send module to Collboard server as a release candidate to authorize. Please provide contact to author in package.json if there is some problem with the module to contact you and solve it.

When you are updating, please provide new version in package json.

```bash
# Linux, WSL
colldev publish

# Windows, PowerShell
npx colldev publish
```

_Tip: You can also setup postversion command to publish automatically._
