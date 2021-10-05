// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractPlanetArt, IPlanetConfiguration } from './AbstractPlanetArt';
export declare enum RealPlanetType {
    Earth = 'EARTH',
    Moon = 'MOON',
    Sun = 'SUN',
}
export declare class RealPlanetArt extends AbstractPlanetArt {
    private realPlanetType;
    /**
     * Note: This static creator method makes sence because it creates planet in a real scale but it keep option to user to rescale it as a normal object
     */
    static planetArtFromType(realPlanetType: RealPlanetType): RealPlanetArt;
    constructor(realPlanetType: RealPlanetType);
    getPlanetConfiguration(): IPlanetConfiguration;
    private static planetConfigurationFromType;
}
