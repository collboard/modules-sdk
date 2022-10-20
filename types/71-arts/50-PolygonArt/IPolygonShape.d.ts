// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData } from 'xyzt';
import { number_positive } from '../../40-utils/typeAliases';
export interface IPolygonShape {
    /**
     * Points of the polygon
     *
     * Note: [🌡️] There is a difference how we handle points in the polygons, shapes and lines vs points in the freehand:
     *       - **Freehand** contains frames, each frame includes the point and some additional data like time, hardness of the pencil, etc.
     *       - **Polygon, Shape, Line** contains only points
     */
    points: Array<IVectorData>;
    /**
     * Is the polygon filled
     *
     * Note: This is not only about the graphical part but also as indication of collisions
     * Note: If you want to have selectable polygon from inside but invisible use transparent material in polygon appearance
     */
    isFilled: boolean;
    /**
     * Size of the corners
     * Note: If you want to have no weight set it to 0
     * Note: [🎢] NOT IMPLEMENTED YET IN ART
     */
    spotSize: 0 | number_positive;
    /**
     * Size of the edge
     * Note: If you want to have no weight set it to 0
     */
    edgeSize: 0 | number_positive;
}
/**
 * Reference: [🕺]
 */
