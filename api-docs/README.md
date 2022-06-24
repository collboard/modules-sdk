# Collboard API

This document describe API outside of [modules SDK](../README.md).

## Rest API

### /new endpoint

Creating new board wit **/new** endpoint supports multiple GET parameters:

```typescript
interface ICreateBoardOptions {
    uriId?: string;
    boardname?: string;
    redirect?: boolean;
    importAsMaterialize?: string_url;
    importAsLink?: string_url;
    modulesOn?: string | string[];
    modulesOff?: string | string[];
}
```

<!--
-   **uri** what URI I prefer.
-   **name** name of the newly created board
-   **redirect** should I be redirected to a new board or (in case of ?redirect=false) get information about the creating.
-   **brand** URI brand prefix
-   `IN PROGRESS` **importAsMaterialize** immdiately import this with MATERIALIZE strategy.
-   `IN PROGRESS` **importAsLink** immediately import this with LINK strategy.

-    uriId?: string;
-    boardname?: string;
-    redirect?: yes | no;
-    importAsMaterialize?: string*url;
-    _(Not working)_ importAsLink?: string_url;
-    modulesOn?: string | string[];
-    modulesOff?: string | string[];

-   https://collboard.com/new?redirect=yes
-   https://collboard.com/new?redirect=yes&modulesOn=HeduColorAttribute%2CHeduToolV2%2CHeduV2Art%2CDiceTool%2CDiceArt%2CCurtainArt%2CCurtainTool&modulesOff=ColorAttribute
-->

## Message API

# Window postMessage


<!--

TODO:

## Integrations

[comment]: # 'TODO: '

## Embeding

[comment]: # 'TODO: '

## Previews

If you go end the path of the Cornerstone or export with **.[extension]**, you will get a special format export:

### .png, .jpg , .jpeg

If you put **.png**, **.jpg** or **.jpeg** as a postfix of a board it will be screenshoted and exported as image.
You can also provide there a GET params **width** and **height**.

https://collboard.com/XqYLhRVCCTZu7VmpD/Collboard.png?width=1200&height=800

### .pdf

If you put **.pdf** as a postfix of a board it will be exported as pdf document.

https://collboard.com/XqYLhRVCCTZu7VmpD/Collboard.pdf

### .mp4

`IN PROGRESS`

### .mp3

`IN PROGRESS`

## Modules

Every functionality accepts core features is wrapped up into the modules.
Modules are in some way, independent pieces of software. Thre are several types of modules:

**1) External modules**
External means from module store _(and it is not implemented yet)_.

**2) Internal modules**
Internal modules are integrated into the main code. Typically there are two types of internal modules - Arts and Tools.

**3) Internal modules (with auto activate)**
Typically internal modules are auto-activated. It means that by default, it makes more sense to have them activated in a newly created board, but also it makes sense to deactivate them.

**4) Core features (not modules)**
Some Arts (for example, CornestoneArt) are so essential for working in the system that makes no sense to not have it there. So they are not activated with modules but registered in art serializer separately, and there is no option to deactivate/deactivate them.

-->
