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

Typically you are registering something under theese sytems. This will returns you [destroyable](types/40-utils/destroyables/IDestroyable.d.ts) which you can directly return from your setup function.

<!--
    This section is GENERATED WITH generate-modules-sdk
    Warning: Do not edit by hand, all changes will be lost on next execution!
-->
<!--SYSTEMS-BEGIN-->

### [ApiClient](./types/50-systems/ApiClient/0-ApiClient.d.ts)

ApiClient provides API calls to the remote server.

### [BoardApiClient](./types/50-systems/ApiClient/BoardApiClient.d.ts)

### [AppState](./types/50-systems/AppState/0-AppState.d.ts)

AppState is not quite a system but an object representing the state of the Collboard app.

### [MaterialArtVersioningSystem](./types/50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem.d.ts)

ArtVersionSystem synchronizes the arts with the remote server.

### [VirtualArtVersioningSystem](./types/50-systems/ArtVersionSystem/0-VirtualArtVersioningSystem.d.ts)

### [AttributesSystem](./types/50-systems/AttributesSystem/0-AttributesSystem.d.tsx)

AttributesSystem manages shared art attributes and modules capable of selecting from them. It auto-install/uninstall attribute modules.

### [ClosePreventionSystem](./types/50-systems/ClosePreventionSystem/0-ClosePreventionSystem.d.ts)

### [CollSpace](./types/50-systems/CollSpace/0-CollSpace.d.ts)

CollSpace manages 3D objects rendered by WebGL (BABYLON JS) and provides all the tooling around the 3D scene, positioning, textures, materials, etc.

### [CreateSystem](./types/50-systems/CreateSystem/0-CreateSystem.d.ts)

CreateSystem allows importing which allows to import/create arts from other sources.
Note: CreateSystem - for individual arts, GenerateSystem - for whole board
Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.

### [ExportSystem](./types/50-systems/ExportImportSystem/0-ExportSystem.d.ts)

ExportSystem creates other files from the board or the part of it.
Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.
Note: This system is not just for exporting but also saves to native format.

### [ImportSystem](./types/50-systems/ExportImportSystem/0-ImportSystem.d.ts)

Import system makes support for files which are dragged onto board, imporded or pasted
It auto-install/uninstall file support modules.

### [ExtraJsxSystem](./types/50-systems/ExtraJsxSystem/0-ExtraJsxSystem.d.tsx)

ExtraJsxSystem can register and manage additional JSX
Note: ExtraJSXSystem is for JSX (HTML) vs. StyleSystem is for CSS styles

<!--Private system:
### [FilepickSystem](./types/50-systems/FilepickSystem/0-FilepickSystem.d.ts)
The standard window that can be used by modules to choose a file.



-->

<!--Private system:
### [FractalSystem](./types/50-systems/FractalSystem/0-FractalSystem.d.ts)
FractalSystem can do procedurally generated part of the board - patterns, iterations, etc.
Modules can use it for creating the fractal boards or creating massive scales like sun and atoms by procedural generating.



-->

<!--Private system:
### [GamificationSystem](./types/50-systems/GamificationSystem/0-GamificationSystem.d.ts)
GamificationSystem creates support for gamification arts like yes-no polls, polls, timers, etc.




-->

<!--Private system:
### [GenerateSystem](./types/50-systems/GenerateSystem/0-GenerateSystem.d.ts)
GenerateSystem is a kind of import system which allows us to import/create whole boards from other sources.
Note: CreateSystem - for individual arts, GenerateSystem - for whole board
Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.



-->

<!--Private system:
### [HintSystem](./types/50-systems/HintSystem/0-HintSystem.d.ts)
HintSystem creates support for hinting the User's next steps, for alerts, warnings, etc.



-->

### [IdentitySystem](./types/50-systems/IdentitySystem/0-IdentitySystem.d.ts)

IdentitySystem identifies the User by a pseudonym.

### [ModuleStore](./types/50-systems/ModuleStore/connectors/0-ModuleStore.d.ts)

ModuleStore unites all module store connectors into one API, so consumer have same way how to get internal or external module

<!--Private system:
### [ArtSupportSyncer](./types/50-systems/ModuleStore/Syncers/ArtSupportSyncer.d.ts)
ArtSupportSyncer install/uninstall art support modules



-->

<!--Private system:
### [AttributeSupportSyncer](./types/50-systems/ModuleStore/Syncers/AttributeSupportSyncer.d.ts)
AttributeSupportSyncer install/uninstall ONLY STANDARD attribute modules when needed



-->

<!--Private system:
### [BusinessSyncer](./types/50-systems/ModuleStore/Syncers/BusinessSyncer.d.ts)
BusinessSyncer install(TODO: /uninstall) modules according to bussiness (like development)



-->

<!--Private system:
### [CornerstoneSyncer](./types/50-systems/ModuleStore/Syncers/CornerstoneSyncer.d.ts)
CornerstoneSyncer watches on cornerstone of current board and install/uninstall modules according to it



-->

<!--Private system:
### [RouteSyncer](./types/50-systems/ModuleStore/Syncers/RouteSyncer.d.ts)
RouteSyncer install/uninstall modules according to the app URI



-->

<!--Private system:
### [StorageSyncer](./types/50-systems/ModuleStore/Syncers/StorageSyncer.d.ts)
StorageSyncer will install every module what is declared into the storage
When the module is redeclared, module is installed and uninstalled




-->

### [NotificationSystem](./types/50-systems/NotificationSystem/0-NotificationSystem.d.ts)

<!--Private system:
### [PointerSystem](./types/50-systems/PointerSystem/0-PointerSystem.d.ts)
PointerSystem allows us to bind a different controller then touch or mouse. For example, it is syncing the phone with accelerometer or VR controllers.




-->

### [RoutingSystem](./types/50-systems/RoutingSystem/0-RoutingSystem.d.ts)

RoutingSystem provides for core, other systems and modules registration of routes and hashtag routes.
@see https://github.com/collboard/collboard/issues/97

### [Serializer](./types/50-systems/Serializer/0-Serializer.d.ts)

Serializer can serialize/deserialize objects. Primarily it is serialized arts.

### [ShortcutsSystem](./types/50-systems/ShortcutsSystem/0-ShortcutsSystem.d.ts)

ShortcutsSystem can register and manage keyboard shortcuts like Ctrl + C by modules (or maybe other systems).

<!--Private system:
### [SnapSystem](./types/50-systems/SnapSystem/0-SnapSystem.d.ts)
SnapSystem /aka. Playground 2.0/ allows us to define a snap point on each art.
Note: This is continuing of the Playground in H-edu.



-->

<!--Private system:
### [SoundSystem](./types/50-systems/SoundSystem/0-SoundSystem.d.ts)
SoundSystem can play a sound and keep music and UI sounds library.
Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech a view.



-->

<!--Private system:
### [StorageSystem](./types/50-systems/StorageSystem/StorageSystem.d.ts)
StorageSystem provides storages for other systems / modules



-->

### [StyleSystem](./types/50-systems/StyleSystem/0-StyleSystem.d.tsx)

StyleSystem can register and manage additional CSS styles for modules. It can scope CSS so it will do not affect others.

Note: ExtraJSXSystem is for JSX (HTML) vs. StyleSystem is for CSS styles

### [ToolbarSystem](./types/50-systems/ToolbarSystem/0-ToolbarSystem.d.tsx)

ToolbarSystem can register and manage toolbars and icons which there are.

### [TranslationsSystem](./types/50-systems/TranslationsSystem/0-TranslationsSystem.d.tsx)

TranslationsSystem manages messages across core, systems and modules.

<!--Private system:
### [VoiceSystem](./types/50-systems/VoiceSystem/0-VoiceSystem.d.ts)
VoiceSystem can recognize the voice and play speech from text.
Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech.
testx


-->
<!--SYSTEMS-END-->

<!--
TODO: !!! ## Makers
-->
<!--
TODO: !!! ## Multimodules
-->
