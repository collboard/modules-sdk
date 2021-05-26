# Collboard modules SDK

Modules SDK toolkit for [Collboard.com](https://collboard.com/).
Here is the [sample of very simple module](https://github.com/collboard/module-sample-basic). And here you can read [full manual](https://collboard.github.io/modules-sdk/).

## How to develop your first module in 4 steps

### 1) To start install the [@collboard/modules-sdk](https://www.npmjs.com/package/@collboard/modules-sdk) first:

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
        "@collboard/modules-sdk": "^11.2.2-1"
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

# Or by NPM
npm start

# You can also run full command
# Note: "colldev" is just shortcut for "colldev develop"
colldev develop

# And disable to open browser on dev.collboard.com
colldev develop --open false

```

![Colldev running in terminal](./media/colldev-running.png 'Colldev running in terminal')

### 5) Create gitignore file *(optional if using git)* 

Create file **.gitignore** and ignore temporary files and modules. 

```
.coldev
node_modules
```


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

Typically you are registering something under theese sytems. This will returns you [destroyable](types/40-utils/destroyables/IDestroyable.d.ts) which you can directly return from your setup function.

<!--
    This section is GENERATED WITH generate-modules-sdk
    Warning: Do not edit by hand, all changes will be lost on next execution!
-->
<!--SYSTEMS-BEGIN-->

### [ApiClient](https://collboard.github.io/modules-sdk/classes/apiclient.html)

ApiClient provides API calls to the remote server.

### [BoardApiClient](https://collboard.github.io/modules-sdk/classes/boardapiclient.html)

### [AppState](https://collboard.github.io/modules-sdk/classes/appstate.html)

AppState is not quite a system but an object representing the state of the Collboard app.

### [MaterialArtVersioningSystem](https://collboard.github.io/modules-sdk/classes/materialartversioningsystem.html)

ArtVersionSystem synchronizes the arts with the remote server.

### [VirtualArtVersioningSystem](https://collboard.github.io/modules-sdk/classes/virtualartversioningsystem.html)

### [AttributesSystem](https://collboard.github.io/modules-sdk/classes/attributessystem.html)

AttributesSystem manages shared art attributes and modules capable of selecting from them. It auto-install/uninstall attribute modules.

### [ClosePreventionSystem](https://collboard.github.io/modules-sdk/classes/closepreventionsystem.html)

### [CollSpace](https://collboard.github.io/modules-sdk/classes/collspace.html)

CollSpace manages 3D objects rendered by WebGL (BABYLON JS) and provides all the tooling around the 3D scene, positioning, textures, materials, etc.

### [CreateSystem](https://collboard.github.io/modules-sdk/classes/createsystem.html)

CreateSystem allows importing which allows to import/create arts from other sources.
Note: CreateSystem - for individual arts, GenerateSystem - for whole board
Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.

### [ExportSystem](https://collboard.github.io/modules-sdk/classes/exportsystem.html)

ExportSystem creates other files from the board or the part of it.
Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.
Note: This system is not just for exporting but also saves to native format.

### [ImportSystem](https://collboard.github.io/modules-sdk/classes/importsystem.html)

Import system makes support for files which are dragged onto board, imporded or pasted
It auto-install/uninstall file support modules.

### [ExtraJsxSystem](https://collboard.github.io/modules-sdk/classes/extrajsxsystem.html)

ExtraJsxSystem can register and manage additional JSX
Note: ExtraJSXSystem is for JSX (HTML) vs. StyleSystem is for CSS styles

<!--Private system:
### [FilepickSystem](https://collboard.github.io/modules-sdk/classes/filepicksystem.html)
The standard window that can be used by modules to choose a file.



-->

<!--Private system:
### [FractalSystem](https://collboard.github.io/modules-sdk/classes/fractalsystem.html)
FractalSystem can do procedurally generated part of the board - patterns, iterations, etc.
Modules can use it for creating the fractal boards or creating massive scales like sun and atoms by procedural generating.



-->

<!--Private system:
### [GamificationSystem](https://collboard.github.io/modules-sdk/classes/gamificationsystem.html)
GamificationSystem creates support for gamification arts like yes-no polls, polls, timers, etc.




-->

<!--Private system:
### [GenerateSystem](https://collboard.github.io/modules-sdk/classes/generatesystem.html)
GenerateSystem is a kind of import system which allows us to import/create whole boards from other sources.
Note: CreateSystem - for individual arts, GenerateSystem - for whole board
Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.



-->

<!--Private system:
### [HintSystem](https://collboard.github.io/modules-sdk/classes/hintsystem.html)
HintSystem creates support for hinting the User's next steps, for alerts, warnings, etc.



-->

### [IdentitySystem](https://collboard.github.io/modules-sdk/classes/identitysystem.html)

IdentitySystem identifies the User by a pseudonym.

### [ModuleStore](https://collboard.github.io/modules-sdk/classes/modulestore.html)

ModuleStore unites all module store connectors into one API, so consumer have same way how to get internal or external module

<!--Private system:
### [ArtSupportSyncer](https://collboard.github.io/modules-sdk/classes/artsupportsyncer.html)
ArtSupportSyncer install/uninstall art support modules



-->

<!--Private system:
### [AttributeSupportSyncer](https://collboard.github.io/modules-sdk/classes/attributesupportsyncer.html)
AttributeSupportSyncer install/uninstall ONLY STANDARD attribute modules when needed



-->

<!--Private system:
### [BusinessSyncer](https://collboard.github.io/modules-sdk/classes/businesssyncer.html)
BusinessSyncer install(TODO: /uninstall) modules according to bussiness (like development)



-->

<!--Private system:
### [CornerstoneSyncer](https://collboard.github.io/modules-sdk/classes/cornerstonesyncer.html)
CornerstoneSyncer watches on cornerstone of current board and install/uninstall modules according to it



-->

<!--Private system:
### [RouteSyncer](https://collboard.github.io/modules-sdk/classes/routesyncer.html)
RouteSyncer install/uninstall modules according to the app URI



-->

<!--Private system:
### [StorageSyncer](https://collboard.github.io/modules-sdk/classes/storagesyncer.html)
StorageSyncer will install every module what is declared into the storage
When the module is redeclared, module is installed and uninstalled




-->

### [NotificationSystem](https://collboard.github.io/modules-sdk/classes/notificationsystem.html)

<!--Private system:
### [PointerSystem](https://collboard.github.io/modules-sdk/classes/pointersystem.html)
PointerSystem allows us to bind a different controller then touch or mouse. For example, it is syncing the phone with accelerometer or VR controllers.




-->

### [RoutingSystem](https://collboard.github.io/modules-sdk/classes/routingsystem.html)

RoutingSystem provides for core, other systems and modules registration of routes and hashtag routes.
@see https://github.com/collboard/collboard/issues/97

### [Serializer](https://collboard.github.io/modules-sdk/classes/serializer.html)

Serializer can serialize/deserialize objects. Primarily it is serialized arts.

### [ShortcutsSystem](https://collboard.github.io/modules-sdk/classes/shortcutssystem.html)

ShortcutsSystem can register and manage keyboard shortcuts like Ctrl + C by modules (or maybe other systems).

<!--Private system:
### [SnapSystem](https://collboard.github.io/modules-sdk/classes/snapsystem.html)
SnapSystem /aka. Playground 2.0/ allows us to define a snap point on each art.
Note: This is continuing of the Playground in H-edu.



-->

<!--Private system:
### [SoundSystem](https://collboard.github.io/modules-sdk/classes/soundsystem.html)
SoundSystem can play a sound and keep music and UI sounds library.
Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech a view.



-->

<!--Private system:
### [StorageSystem](https://collboard.github.io/modules-sdk/classes/storagesystem.html)
StorageSystem provides storages for other systems / modules



-->

### [StyleSystem](https://collboard.github.io/modules-sdk/classes/stylesystem.html)

StyleSystem can register and manage additional CSS styles for modules. It can scope CSS so it will do not affect others.

Note: ExtraJSXSystem is for JSX (HTML) vs. StyleSystem is for CSS styles

### [ToolbarSystem](https://collboard.github.io/modules-sdk/classes/toolbarsystem.html)

ToolbarSystem can register and manage toolbars and icons which there are.

### [TranslationsSystem](https://collboard.github.io/modules-sdk/classes/translationssystem.html)

TranslationsSystem manages messages across core, systems and modules.

<!--Private system:
### [VoiceSystem](https://collboard.github.io/modules-sdk/classes/voicesystem.html)
VoiceSystem can recognize the voice and play speech from text.
Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech.



-->
<!--SYSTEMS-END-->

## Makers

Makers are helpers which helps to create an module. Maker is a pure function that transforms a simpler form of module definition to [module definition which will be accepted by declareModule](https://collboard.github.io/modules-sdk/interfaces/imodule.html). So you still need to call declareModule.

### makeArtModule

### makeAttributeModule

### makeExtrajsxModule

### makeIconModule

### makeIconModuleOnModule

### makeIconModuleOnRoute

### makeModalModule

### makeMultiModule

<!--
TODO: !!! ## Multimodules
-->
