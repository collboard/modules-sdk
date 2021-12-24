// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { AbstractPlanetArt, IPlanetConfiguration } from './AbstractPlanetArt';
export declare enum RealPlanetType {
    Earth = 'EARTH',
    Moon = 'MOON',
    Sun = 'SUN',
}
export declare class RealPlanetArt extends AbstractPlanetArt {
    private realPlanetType;
    static serializeName: string;
    /**
     * Note: This static creator method makes sence because it creates planet in a real scale but it keep option to user to rescale it as a normal object
     */
    static planetArtFromType(realPlanetType: RealPlanetType): RealPlanetArt;
    constructor(realPlanetType: RealPlanetType);
    getPlanetConfiguration(): IPlanetConfiguration;
    private static planetConfigurationFromType;
}
