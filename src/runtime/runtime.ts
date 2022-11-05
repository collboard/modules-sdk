// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
// tslint:disable
/// <reference path="./importImages.d.ts" />

// console.log('Hello from modules SDK runtime!');

// Note: window->declareModule will be replaced by some unique javascript name
export const declareModule = (window as any).declareModule;

// Note: here is all stuff marked with "@collboard SDK"
/**
 * Sanitize HTML
 *
 * @param html dirty html from user (or parter apps like H-edu)
 * @returns clean html to be used in HTMLArt
 *
 * @collboard-modules-sdk
 */
export const sanitizeHtml = (window as any).CollboardSdk.sanitizeHtml;

/**
 * @collboard-modules-sdk
 */
export const ArtScaler = (window as any).CollboardSdk.ArtScaler;

/**
 * List of all possible css animations
 *
 * @collboard-modules-sdk
 */
export const string_animation = (window as any).CollboardSdk.string_animation;

/**
 * Generic icon component
 *
 * Note: If not rendered within a menu, there is no guarantee
 * of being rendered correctly
 *
 * @collboard-modules-sdk
 */
export const Icon = (window as any).CollboardSdk.Icon;

/**
 * Color picker icon component
 *
 * *Note: If not rendered within a menu, there is no guarantee
 * of being rendered correctly*
 *
 * @collboard-modules-sdk
 */

export const IconColor = (window as any).CollboardSdk.IconColor;

/**
 * This type alias represents any available internal icon name
 *
 * This list gets constantly updated, but icons can be only added, so it is safe to assume no icon will disappear
 *
 * Currently available icons:
 * - abacus
 * - add
 * - anchor
 * - bin
 * - block
 * - board-clean
 * - board-options
 * - board
 * - bold
 * - burger
 * - chat
 * - circle
 * - clean
 * - close-down
 * - cone
 * - copy-material
 * - copy-virtual
 * - copy
 * - countdown
 * - cube
 * - cubes
 * - cursor
 * - cylinder
 * - dice
 * - dictation
 * - down
 * - earth
 * - erase
 * - file-image
 * - file-pdf
 * - flag
 * - font-size-1
 * - font-size-2
 * - font-size-3
 * - fullscreen-off
 * - fullscreen-on
 * - group
 * - hand
 * - hejny
 * - home-center
 * - home
 * - image
 * - italic
 * - key
 * - left
 * - line
 * - link
 * - list
 * - lock
 * - mic
 * - minus
 * - moon
 * - no
 * - numbers
 * - options
 * - order-back
 * - order-bottom
 * - order-front
 * - order-top
 * - package
 * - pen-3D
 * - pen
 * - planet-1
 * - planet-2
 * - planet-3
 * - planet-4
 * - planet-5
 * - planet-6
 * - planet-7
 * - planet-8
 * - platonic-12
 * - platonic-20
 * - platonic-4
 * - platonic-6
 * - platonic-8
 * - plus
 * - pyramid
 * - redo
 * - reset
 * - right
 * - run
 * - search
 * - send
 * - shapes
 * - share
 * - sphere
 * - square
 * - start
 * - stroke-1
 * - stroke-2
 * - stroke-3
 * - sun
 * - text
 * - timer
 * - todo
 * - torus
 * - triangle-right
 * - triangle
 * - underline
 * - undo
 * - up
 * - visibility
 * - yes
 * - zoom-in
 * - zoom-out
 *
 * @collboard-modules-sdk
 */
export const string_icon = (window as any).CollboardSdk.string_icon;

/**
 * Icon with text
 *
 * Note: If not rendered within a menu, there is no guarantee
 * of being rendered correctly
 *
 * @collboard-modules-sdk
 */
export const IconText = (window as any).CollboardSdk.IconText;

/**
 * Icon (visual) which can appear on toolbars, buttons,...
 * This interface just represents icon without context and placement
 * (vs. `IToolbarIcon`)
 *
 * @collboard-modules-sdk
 */
export const IIconAnonymous = (window as any).CollboardSdk.IIconAnonymous;

/**
 * Menu component
 *
 * @collboard-modules-sdk
 */
export const Menu = (window as any).CollboardSdk.Menu;

/**
 * Menu separator
 *
 * @collboard-modules-sdk
 */
export const Separator = (window as any).CollboardSdk.Separator;

/**
 * Categorized modal component
 *
 * Wrap the CategorizedModal contents with `CategorizedModalMenu`
 * and `CategorizedModalBody` components
 *
 * @collboard-modules-sdk
 */
export const CategorizedModal = (window as any).CollboardSdk.CategorizedModal;

/**
 * Categorized modal main body wrapper
 * Note: Use only inside component <CategorizedModal
 *
 * @collboard-modules-sdk
 */

export const CategorizedModalBody = (window as any).CollboardSdk.CategorizedModalBody;

/**
 * Categorized modal left sidebar wrapper
 * Note: Use only inside component <CategorizedModal
 *
 * @collboard-modules-sdk
 */

export const CategorizedModalMenu = (window as any).CollboardSdk.CategorizedModalMenu;

/**
 * Modal component
 *
 * @collboard-modules-sdk
 */
export const Modal = (window as any).CollboardSdk.Modal;

/**
 * Categorized modal footer wrapper
 *
 * @collboard-modules-sdk
 */
export const ModalFooter = (window as any).CollboardSdk.ModalFooter;

/**
 * Renders the content inside a darkened page overlay blocking all
 * interactions with page behind
 *
 * **You probably want to use Modal or CategorizedModal instead.**
 *
 * **Warning: Do not try to use more, than one PageOverlay at a time.
 *
 * @collboard-modules-sdk
 */
export const PageOverlay = (window as any).CollboardSdk.PageOverlay;

/**
 * Utility for button with pending state after click
 *
 * @collboard-modules-sdk
 */
export const AsyncButtonComponent = (window as any).CollboardSdk.AsyncButtonComponent;

/**
 * Utility for mounting RxJS observable content
 *
 * @deprecated [📠] Use usePromise/useLoadable hook instead
 * @collboard-modules-sdk
 */
export const AsyncContentComponent = (window as any).CollboardSdk.AsyncContentComponent;

/**
 * @collboard-modules-sdk
 */
export const Clickable = (window as any).CollboardSdk.Clickable;

/**
 * @collboard-modules-sdk
 */
export const CopyComponent = (window as any).CollboardSdk.CopyComponent;

/**
 * Choose on which devices (according to display size) to show certain component
 *
 * @collboard-modules-sdk
 */
export const DisplayOn = (window as any).CollboardSdk.DisplayOn;

/**
 * @collboard-modules-sdk
 */
export const ErrorBoundary = (window as any).CollboardSdk.ErrorBoundary;

/**
 * Preview component of any file
 *
 * @collboard-modules-sdk
 */
export const FileComponent = (window as any).CollboardSdk.FileComponent;

/**
 * @collboard-modules-sdk
 */
export const Loader = (window as any).CollboardSdk.Loader;

/**
 * @collboard-modules-sdk
 */
export const LoaderInline = (window as any).CollboardSdk.LoaderInline;

/**
 * @collboard-modules-sdk
 */
export const Obfuscate = (window as any).CollboardSdk.Obfuscate;

/**
 * Utility for mounting RxJS observable content
 *
 * @deprecated [📠] Use useObservable/useLoadable hook instead
 * @collboard-modules-sdk
 */
export const ObservableContentComponent = (window as any).CollboardSdk.ObservableContentComponent;

/**
 * @collboard-modules-sdk
 */
export const QRCode = (window as any).CollboardSdk.QRCode;

/**
 * Utility for mounting content, which should be regularly refreshed
 *
 * @collboard-modules-sdk
 */
export const RefreshContentComponent = (window as any).CollboardSdk.RefreshContentComponent;

/**
 * Puts inlined javascript into page inside <script> element
 *
 * Note: Script is spacetrimmed
 * Note: It do not use dangerouslySetInnerHTML but still DO NOT PASS HERE ANY USER INPUT
 *
 * @collboard-modules-sdk
 */
export const Script = (window as any).CollboardSdk.Script;

/**
 * Puts inlined javascript into page inside <script> element
 *
 * Note: Script is spacetrimmed
 *
 * @collboard-modules-sdk
 */
export const ScriptForServerRender = (window as any).CollboardSdk.ScriptForServerRender;

/**
 * Select component using html <select>
 *
 * @collboard-modules-sdk
 */
export const AsyncSelectComponent = (window as any).CollboardSdk.AsyncSelectComponent;

/**
 * Utility for mounting self-updating content
 *
 * @deprecated [📠] Use hook instead
 * @collboard-modules-sdk
 */
export const SelfUpdateContentComponent = (window as any).CollboardSdk.SelfUpdateContentComponent;

/**
 * @collboard-modules-sdk
 */
export const TestingSquare = (window as any).CollboardSdk.TestingSquare;

/**
 * Unwraps given JSX element from its container and rewraps it in React fragment
 *
 * It will unwrap its children or content (to be compatible with components like AsyncContentComponent and SelfUpdateContentComponent)
 *
 * @collboard-modules-sdk
 */
export const Unwrap = (window as any).CollboardSdk.Unwrap;

/**
 * @collboard-modules-sdk
 */
export const Additional = (window as any).CollboardSdk.Additional;

/**
 * Merges multiple objects into one.
 * It uses some fuzzy logic to merge objects.
 *
 * @collboard-modules-sdk
 */
export const aggregate = (window as any).CollboardSdk.aggregate;

/**
 * @returns true if current page is embedded in iframe
 *
 * @collboard-modules-sdk
 */
export const amIEmbededInIFrame = (window as any).CollboardSdk.amIEmbededInIFrame;

/**
 * Converts human readable time to seconds
 * @collboard-modules-sdk
 */
export const calculate = (window as any).CollboardSdk.calculate;

/**
 * Throws error if the passed options are incompatible with the passed schema.
 *
 * @param options all options
 * @param compatibleKeys list of compatible keys
 * @returns
 *
 * @collboard-modules-sdk
 */
export const checkOptionsCompatibility = (window as any).CollboardSdk.checkOptionsCompatibility;

/**
 * Util for joining multiple truthy class names into one string
 *
 * @argument classes Classes to join. If not truthy, it is not used in the
 * final string
 *
 * @collboard-modules-sdk
 */
export const classNames = (window as any).CollboardSdk.classNames;

/**
 * Color object is represents rbg color with alpha chanell
 *
 * Note: there is nothing as fromObject and toObject because much better and most logic way how top serialize color is to serialize it to hex string #009EDD
 *
 * @collboard-modules-sdk
 *
 */
export const Color = (window as any).CollboardSdk.Color;

/**
 * Creates a random color
 *
 * @collboard-modules-sdk
 */
export const randomColor = (window as any).CollboardSdk.randomColor;

/**
 * Compares two strings for sorting purposes
 * @param a first string
 * @param b second string
 * @returns -1 if a < b, 0 if a == b, 1 if a > b
 *
 * @collboard-modules-sdk
 */
export const compareStrings = (window as any).CollboardSdk.compareStrings;

/**
 *
 * @deprecated Remove 3D to external modules
 * @collboard-modules-sdk
 */
export const create3dRotation = (window as any).CollboardSdk.create3dRotation;

/**
 * Convert Blob or File to binary string
 *
 * @collboard-modules-sdk
 */
export const blobToBinaryString = (window as any).CollboardSdk.blobToBinaryString;

/**
 * Convert Blob or File to string data url
 *
 * Tip: Consider using ObjectUrl class instead
 * Tip: You can pass dataurl and it will be returned as is
 *
 * @collboard-modules-sdk
 */
export const blobToDataurl = (window as any).CollboardSdk.blobToDataurl;

/**
 * Converts Blob to File
 * This is usefull for:
 *   - Preserving Files that actually has a filename
 *   - Autocomplete the filename for blobs according to its mimetype
 *
 *
 * @collboard-modules-sdk
 */
export const blobToFile = (window as any).CollboardSdk.blobToFile;

/**
 * Convert string data url to blob
 *
 * Tip: If you want to have more versatile tool look at fetchAsFile which in dataurl cases uses internally this function dataurlToBlob
 *
 * @collboard-modules-sdk
 */
export const dataurlToBlob = (window as any).CollboardSdk.dataurlToBlob;

/**
 * Tests if given string is valid DataURL.
 *
 * @collboard-modules-sdk
 */
export const isValidDataurl = (window as any).CollboardSdk.isValidDataurl;

/**
 * Converts Blob, File or MediaSource to url using URL.createObjectURL
 *
 * @collboard-modules-sdk
 */
export const ObjectUrl = (window as any).CollboardSdk.ObjectUrl;

/**
 * Download a File to with a browser
 *
 * @collboard-modules-sdk
 */
export const triggerFileDownload = (window as any).CollboardSdk.triggerFileDownload;

/**
 * Deep clone an object
 * @collboard-modules-sdk
 */
export const deepClone = (window as any).CollboardSdk.deepClone;

/**
 *
 * @collboard-modules-sdk
 */
export const alertDialogue = (window as any).CollboardSdk.alertDialogue;

/**
 *
 * @collboard-modules-sdk
 */
export const confirmDialogue = (window as any).CollboardSdk.confirmDialogue;

/**
 * @returns array of files NOT FileList
 * TODO: As some cathegory of utils which replace alert, prompt, confirm by better async options like this or NotificationSystem
 *
 * @collboard-modules-sdk
 */
export const fileDialogue = (window as any).CollboardSdk.fileDialogue;

/**
 *
 * @collboard-modules-sdk
 */
export const promptDialogue = (window as any).CollboardSdk.promptDialogue;

/**
 *
 * All possible emoji chars like "🍆", "🍡", "🍤"...
 * Note: this will be needed to update annually - now updated at 2022-01-19
 * @see https://getemoji.com/
 *
 * @collboard-modules-sdk
 */
export const EMOJIS_IN_CATHEGORIES = (window as any).CollboardSdk.EMOJIS_IN_CATHEGORIES;

/**
 *
 * All possible emoji chars like "🍆", "🍡", "🍤"...
 *
 * @collboard-modules-sdk
 */
export const EMOJIS = (window as any).CollboardSdk.EMOJIS;

/**
 * Converts typescript enum to array without number values
 * @collboard-modules-sdk
 */
export const enumToArray = (window as any).CollboardSdk.enumToArray;

/**
 * @collboard-modules-sdk
 */

export const BoardAlreadyExistsError = (window as any).CollboardSdk.BoardAlreadyExistsError;

/**
 * @collboard-modules-sdk
 */

export const BoardNotFoundError = (window as any).CollboardSdk.BoardNotFoundError;

/**
 * @collboard-modules-sdk
 */
export const CollisionError = (window as any).CollboardSdk.CollisionError;

/**
 * Wraps the error message with additional info that will be nicely logged to the console bellow thrown error
 *
 * @param errorMessage
 * @returns {string} - error message with reference to additional info in console appended to the end
 *
 * @collboard-modules-sdk
 */
export const errorMessageWithAdditional = (window as any).CollboardSdk.errorMessageWithAdditional;

/**
 * HighOrderError is high order error to wrap lower order error (like parsing).
 * @see https://www.pavolhejny.com/rozsirene-informace-o-chybach/
 *
 * @deprecated use errorMessageWithAdditional instead
 *
 * @collboard-modules-sdk
 */
export const HighOrderError = (window as any).CollboardSdk.HighOrderError;

/**
 * This util catches an error and rethrows more meaningfull error message to better debugging
 * TODO: More oprions how to handle and rewrap the error - for example by a function
 *
 * @collboard-modules-sdk
 */
export const meaningfullError = (window as any).CollboardSdk.meaningfullError;

/**
 * @collboard-modules-sdk
 */

export const ModuleNotFoundError = (window as any).CollboardSdk.ModuleNotFoundError;

/**
 * @collboard-modules-sdk
 */

export const NotBoardError = (window as any).CollboardSdk.NotBoardError;

/**
 * @collboard-modules-sdk
 */
export const NotFoundError = (window as any).CollboardSdk.NotFoundError;

/**
 * Escapes RegExp as string
 *
 * @collboard-modules-sdk
 */
export const escapeRegExp = (window as any).CollboardSdk.escapeRegExp;

/**
 * Amend propper file type to given file or blob
 * If you give a blob there will be also added provisional file name
 *
 * Note: This function is idempotent
 *
 * @param file File or Blob which will be analyzed
 * @returns File with propper type
 *
 * @collboard-modules-sdk
 */
export const amendPropperFileTypeAndName = (window as any).CollboardSdk.amendPropperFileTypeAndName;

/**
 * Makes GET request* and return response as a file.
 *
 * Tip: You can pass dataurl here and then * it converts it to a File
 *
 * @collboard-modules-sdk
 */
export const fetchAsFile = (window as any).CollboardSdk.fetchAsFile;

/**
 * Makes GET request directly and if it fails through the given proxy
 *
 * @collboard-modules-sdk
 */
export const fetchProxied = (window as any).CollboardSdk.fetchProxied;

/**
 * Find propper file type to given file or blob
 *
 * Note: For unknown types there will be returned 'application/octet-stream'
 * Note: Charset will be stripped from file type
 *
 * @param file File or Blob which will be analyzed
 * @returns string with propper type like 'text/plain'
 *
 * @collboard-modules-sdk
 */
export const findPropperFileType = (window as any).CollboardSdk.findPropperFileType;

/**
 * Checks if the given file is executable.
 *
 * - Windows executables are identified as executable
 * - Javascript executables are identified as executable
 * - CSS Styleshees are considered as executable
 * - ⚠️ It is not bulletproof - Other languages can be marked as non-executables
 *
 * @param file checked file or its mime type
 * @returns true if file is executable
 *
 * @collboard-modules-sdk
 */
export const isFileExecutable = (window as any).CollboardSdk.isFileExecutable;

/**
 * Filter array with limit and predicate
 *
 * @deprecated Extend Array prototype instead
 * @collboard-modules-sdk
 */
export const filterWithLimit = (window as any).CollboardSdk.filterWithLimit;

/**
 * Fits object with objectSize inside of container with containerSize.
 * It preserves objectSize ratio
 *
 * @collboard-modules-sdk
 *
 */
export const fitInside = (window as any).CollboardSdk.fitInside;

/**
 * Flattern array by one level
 * @param array for example [[1,2],[3,4]]
 * @return for example [1,2,3,4]
 *
 * @collboard-modules-sdk
 */
export const flatternArray = (window as any).CollboardSdk.flatternArray;

/**
 * Flip negative size values to positive and change according to it translate
 * Or preserves both size and translate when size is positive
 * If there is only one axis negative, it will be flipped and positive axis will be preserved
 *
 * @collboard-modules-sdk
 */
export const flipNegativeSize = (window as any).CollboardSdk.flipNegativeSize;

/**
 * Make a function cacheable.
 *
 * Note: If the result will be null or Promise<null>, result will not be cached
 * Warning: Use only for pure functions.
 *
 * @collboard-modules-sdk
 *
 */
export const FunctionCache = (window as any).CollboardSdk.FunctionCache;

/**
 * Window size as observable object
 *
 * @singleton
 * @collboard-modules-sdk
 */
export const windowSize = (window as any).CollboardSdk.windowSize;

/**
 * @collboard-modules-sdk
 */
export const Factory = (window as any).CollboardSdk.Factory;

/**
 * @collboard-modules-sdk
 */
export const Factorable = (window as any).CollboardSdk.Factorable;

/**
 *
 * @collboard-modules-sdk
 */
export const factor = (window as any).CollboardSdk.factor;

/**
 *
 * @collboard-modules-sdk
 */
export const NOT_CONSTRUCTABLE = (window as any).CollboardSdk.NOT_CONSTRUCTABLE;

/**
 * @collboard-modules-sdk
 */
export const IFactorableWithSystems = (window as any).CollboardSdk.IFactorableWithSystems;

/**
 *
 * @collboard-modules-sdk
 */
export const factorWithSystems = (window as any).CollboardSdk.factorWithSystems;

/**
 * @collboard-modules-sdk
 */
export const IHandler = (window as any).CollboardSdk.IHandler;

/**
 * Adds a white background to an canvas image and returns it as the new canvas
 *
 * @collboard-modules-sdk
 */
export const addWhiteBackground = (window as any).CollboardSdk.addWhiteBackground;

/**
 * Creates an element from file, JSX, string, any object OR return given element
 *
 * @collboard-modules-sdk
 */
export const createPreviewElement = (window as any).CollboardSdk.createPreviewElement;

/**
 * Converts image to canvas
 * Tip: It can be usefull for converting SVG images into bitmap images
 *
 * @collboard-modules-sdk
 */
export const imageToCanvas = (window as any).CollboardSdk.imageToCanvas;

/**
 * Get image size after its rendered on its natural size
 *
 * @collboard-modules-sdk
 */
export const measureImageSize = (window as any).CollboardSdk.measureImageSize;

/**
 * Creates simple TESTING preview overlay on top of the document
 *
 * @collboard-modules-sdk
 */
export const preview = (window as any).CollboardSdk.preview;

/**
 *
 * @param value some char
 * @returns true if value is emoji
 *
 * @collboard-modules-sdk
 */
export const isEmoji = (window as any).CollboardSdk.isEmoji;

/**
 * Compare two arrays
 *
 * @collboard-modules-sdk
 */
export const isEqualArray = (window as any).CollboardSdk.isEqualArray;

/**
 * Check if given url exists and is accessible
 *
 * @param url url to check
 * @returns true if url is valid and returns 200 status code
 *
 * @collboard-modules-sdk
 */
export const isFetchable = (window as any).CollboardSdk.isFetchable;

/**
 *
 * @collboard-modules-sdk
 */
export const isNumeric = (window as any).CollboardSdk.isNumeric;

/**
 *
 * @returns true if the current environment is running on localhost
 *
 * @collboard-modules-sdk
 */
export const isRunningOnLocalhost = (window as any).CollboardSdk.isRunningOnLocalhost;

/**
 *
 * @collboard-modules-sdk
 */
export const isValidUriId = (window as any).CollboardSdk.isValidUriId;

/**
 * Tests if given string is valid URL.
 *
 * Note: Dataurl are considered perfectly valid.
 *
 * @collboard-modules-sdk
 */
export const isValidUrl = (window as any).CollboardSdk.isValidUrl;

/**
 *
 * @collboard-modules-sdk
 */
export const joinWithAny = (window as any).CollboardSdk.joinWithAny;

/**
 * Compares two JSX elements for sorting purposes
 * @param a first JSX Element
 * @param b second JSX Element
 * @returns -1 if a < b, 0 if a == b, 1 if a > b
 *
 * @collboard-modules-sdk
 */
export const compareJsxs = (window as any).CollboardSdk.compareJsxs;

/**
 * Renders jsx to html / xml
 *
 * Note: There are functions:
 *    - **jsxToHtml** uses react-dom to render the jsx to html
 *    - **jsxToHtmlSimple** does not use react-dom to render the jsx to html and it tryes to extract essential information from the js
 *    @see ./jsxToHtml.test.tsx vs. ./jsxToHtmlSimple.test.tsx
 *
 * @param element JSX element
 * @returns html string
 *
 * @collboard-modules-sdk
 */
export const jsxToHtml = (window as any).CollboardSdk.jsxToHtml;

/**
 * Converts jsx to simple provisional html without using react-dom
 *
 * Note: There are functions:
 *    - **jsxToHtml** uses react-dom to render the jsx to html
 *    - **jsxToHtmlSimple** does not use react-dom to render the jsx to html and it tryes to extract essential information from the jsx
 *    @see ./jsxToHtml.test.tsx vs. ./jsxToHtmlSimple.test.tsx
 *
 * @param element JSX element
 * @returns html string
 *
 * @collboard-modules-sdk
 */
export const jsxToHtmlSimple = (window as any).CollboardSdk.jsxToHtmlSimple;

/**
 * Converts jsx to simple provisional text without using react-dom
 *
 * @param element JSX element
 * @returns text string
 *
 * @collboard-modules-sdk
 */
export const jsxToText = (window as any).CollboardSdk.jsxToText;

/**
 * Get size of html
 *
 * @collboard-modules-sdk
 */
export const measureHtmlSize = (window as any).CollboardSdk.measureHtmlSize;

/**
 * Prettify the css code
 *
 * @param css raw css code
 * @returns formatted css code
 *
 * @collboard-modules-sdk
 */
export const prettifyCss = (window as any).CollboardSdk.prettifyCss;

/**
 * Prettify the html code
 *
 * @param css raw html code
 * @returns formatted html code
 *
 * @collboard-modules-sdk
 */
export const prettifyHtml = (window as any).CollboardSdk.prettifyHtml;

/**
 * Load and run an external script
 * @param src url of the script to load
 * @returns a promise that resolves when the script is loaded
 *
 * @collboard-modules-sdk
 */
export const loadAndRunExternalScript = (window as any).CollboardSdk.loadAndRunExternalScript;

/**
 *  Utility which can send next value to BehaviorSubject based on mutation function.
 *
 * @collboard-modules-sdk
 */
export const nextWithMutation = (window as any).CollboardSdk.nextWithMutation;

/**
 * Makes first letter of a string uppercase
 *
 * @collboard-modules-sdk
 */
export const capitalize = (window as any).CollboardSdk.capitalize;

/**
 * Makes first letter of a string uppercase
 *
 * @collboard-modules-sdk
 */
export const decapitalize = (window as any).CollboardSdk.decapitalize;

/**
 * @collboard-modules-sdk
 */
export const nameToUriPart = (window as any).CollboardSdk.nameToUriPart;

/**
 * TODO: Put this into some inpidendent LIB which do normalizing (there are things in Collboard+Czech.events)
 *
 * @collboard-modules-sdk
 * @note normalizeToKebabCase function is not finished because it it not used anywhere
 */
export const normalizeToKebabCase = (window as any).CollboardSdk.normalizeToKebabCase;

/**
 *
 * @collboard-modules-sdk
 */
export const normalizeToCamelCase = (window as any).CollboardSdk.normalizeToCamelCase;

/**
 * TODO: Put this into some inpidendent library which do normalizing (there are things in Collboard+Czech.events)
 *
 * @collboard-modules-sdk
 */
export const normalizeToSCREAMING_CASE = (window as any).CollboardSdk.normalizeToSCREAMING_CASE;

/**
 *
 * TODO: Put this into some inpidendent library which do normalizing (there are things in Collboard+Czech.events)
 *
 * @collboard-modules-sdk
 */
export const parseKeywords = (window as any).CollboardSdk.parseKeywords;

/**
 * @collboard-modules-sdk
 */
export const removeDiacritics = (window as any).CollboardSdk.removeDiacritics;

/**
 * Searches through given keywords
 *
 * @collboard-modules-sdk
 */
export const searchKeywords = (window as any).CollboardSdk.searchKeywords;

/**
 * Traverse through the object and all its children and replace them via the callback
 *
 * @collboard-modules-sdk
 */
export const deepMapObject = (window as any).CollboardSdk.deepMapObject;

/**
 * Parse Collboard module name
 * @see more in MODULE_NAME_REGEX
 *
 * @param moduleName
 * @returns normalized scope and name split into chunks
 *
 * @example @collboard/foo/bar => { scope: 'collboard', name: ['foo','bar'] }
 *
 * @collboard-modules-sdk
 */
export const parseModuleName = (window as any).CollboardSdk.parseModuleName;

/**
 * Converts a string pattern with "*" to a regular expression
 * It can take multiple patterns and will return a union of all patterns in the form of a regular expression
 *
 * @param pattern The pattern to convert to a regular expression; for example "image/*"
 * @returns RegExp; for example /^image\/.*$/
 *
 * @collboard-modules-sdk
 */
export const patternToRegExp = (window as any).CollboardSdk.patternToRegExp;

/**
 * Pick given keys from the recieved options array.
 * Note: It does not mutate recieved object
 *
 * @param options
 * @param keys
 * @returns stripped object
 *
 * @collboard-modules-sdk
 */
export const pickKeys = (window as any).CollboardSdk.pickKeys;

/**
 *
 * Pick random emoji char like "🍆", "🍡", "🍤"...
 *
 * Note: exclude non-graphical and non-colored emojis like "🇧🇾" or "✶"
 *
 * @collboard-modules-sdk
 */
export const randomEmoji = (window as any).CollboardSdk.randomEmoji;

/**
 *
 * Generates a random integer between a given range
 *
 * @param min Minimum number (inclusive)
 * @param max Maximum number (inclusive)
 *
 * @collboard-modules-sdk
 */
export const randomInteger = (window as any).CollboardSdk.randomInteger;

/**
 * Pick random item from the recieved array
 *
 * @collboard-modules-sdk
 */
export const randomItem = (window as any).CollboardSdk.randomItem;

/**
 *
 * Generates a random javascript name like "randomJavascriptName", "randomJavascriptNameAdasjd", "randomJavascriptNameAasfsdff"...
 *
 * @collboard-modules-sdk
 */
export const randomJavascriptName = (window as any).CollboardSdk.randomJavascriptName;

/**
 * Generates random string of given length
 *
 * @collboard-modules-sdk
 */
export const randomString = (window as any).CollboardSdk.randomString;

/**
 *
 * Pick random tag char like "[🍆]", "[🍡]", "[🍤]"...
 *
 * @collboard-modules-sdk
 */
export const randomTag = (window as any).CollboardSdk.randomTag;

/**
 *
 * Generates a random uriId name like "ggpsehhglbdoejrhpmal", "h2m24iceax4qtxnk7pzj", "krc73zrdryyuaebj74du"...
 *
 * @collboard-modules-sdk
 */
export const randomUriId = (window as any).CollboardSdk.randomUriId;

/**
 * Editable is wrapper for innerHTML of a DOM element.
 *
 * @collboard-modules-sdk
 */
export const Editable = (window as any).CollboardSdk.Editable;

/**
 * InnerHtml is wrapper for innerHTML of a DOM element.
 *
 * @collboard-modules-sdk
 */
export const InnerHtml = (window as any).CollboardSdk.InnerHtml;

/**
 * Measure is component that will measure the size of the children.
 * Note: It internally uses useMeasure hook so you can decide if use useMeasure(...) OR <Measure>{...}</Measure>
 *
 * @collboard-modules-sdk
 */
export const Measure = (window as any).CollboardSdk.Measure;

/**
 * NonBrakingSpaces is component that will receive text and will replace all spaces with non-breaking spaces
 *
 * @collboard-modules-sdk
 */
export const NonBrakingSpaces = (window as any).CollboardSdk.NonBrakingSpaces;

/**
 * StaticRender is component that takes a chilren and renders it as a static element.
 *
 * @collboard-modules-sdk
 */
export const StaticRender = (window as any).CollboardSdk.StaticRender;

/**
 * React hook for generating async memoized data.
 * This is a copy of @see https://github.com/awmleer/use-async-memo/blob/master/src/index.ts
 *
 * @collboard-modules-sdk
 */
export const useAsyncMemo = (window as any).CollboardSdk.useAsyncMemo;

/**
 * @collboard-modules-sdk
 */
export const IUseLoadableResultStatus = (window as any).CollboardSdk.IUseLoadableResultStatus;

/**
 * React hook that returns current value of given Loadable.
 *
 * @collboard-modules-sdk
 */
export const useLoadable = (window as any).CollboardSdk.useLoadable;

/**
 * This hook will measure the size of the children.
 * Note: It internally uses useMeasure hook so you can decide if use useMeasure(...) OR <Measure>{...}</Measure>
 *
 * @collboard-modules-sdk
 */
export const useMeasure = (window as any).CollboardSdk.useMeasure;

/**
 * React hook that returns current value of given Observable.
 *
 * @collboard-modules-sdk
 */
export const useObservable = (window as any).CollboardSdk.useObservable;

/**
 * React hook that returns result of Promise or its pending/error state.
 *
 * @collboard-modules-sdk
 */
export const usePromise = (window as any).CollboardSdk.usePromise;

/**
 * Use Collboard skin
 *
 * Note: It @return skin wrapped in object to be used like:
 *     > <FooElement {...useSkin()}
 *
 * @collboard-modules-sdk
 */
export const useSkin = (window as any).CollboardSdk.useSkin;

/**
 * Context for systems container used in modules
 * Note: This context is provided at UserInterfaceSystem
 *
 * @collboard-modules-sdk
 */
export const SystemsContainerContext = (window as any).CollboardSdk.SystemsContainerContext;

/**
 * Use previously requested systems
 *
 * Note: You need first to request the systems you want to use
 *
 * @param requestedSystemsNames Names of requested systems
 * @returns record object which contains all requested systems
 *
 * @collboard-modules-sdk
 */
export const useSystems = (window as any).CollboardSdk.useSystems;

/**
 * Remove given keys from the recieved options array.
 * Note: It does not mutate recieved object
 *
 * @param options
 * @param keys
 * @returns stripped object
 *
 * @collboard-modules-sdk
 */
export const removeKeys = (window as any).CollboardSdk.removeKeys;

/**
 * Checks that value is defined
 * - If YES return the value
 * - If NO then throw error
 *
 * @collboard-modules-sdk
 */
export const requireValue = (window as any).CollboardSdk.requireValue;

/**
 *
 * @collboard-modules-sdk
 */
export const scrapeContentFromUrl = (window as any).CollboardSdk.scrapeContentFromUrl;

/**
 *
 * @collboard-modules-sdk
 */
export const scrapeContentFromUrlUncached = (window as any).CollboardSdk.scrapeContentFromUrlUncached;

/**
 * Create difference set of two sets.
 *
 * @collboard-modules-sdk
 */
export const difference = (window as any).CollboardSdk.difference;

/**
 * Creates a new set with all elements that are present in either set.
 *
 * @collboard-modules-sdk
 */
export const union = (window as any).CollboardSdk.union;

/**
 *
 * TODO: To some system?
 * TODO: Cleanup
 *
 * @collboard-modules-sdk
 */
export const Speech = (window as any).CollboardSdk.Speech;

/**
 * Split an array into subarrays using the specified separator and return them as an array of arrays.
 *
 * @param array An array that will be splitted in chunks
 * @param splitter An item that can split a array.
 * @param limit A value used to limit the number of elements returned in the array.
 *
 * @collboard-modules-sdk
 */
export const splitArray = (window as any).CollboardSdk.splitArray;

/**
 * Split an array into subarrays of the specified length
 *
 * @param array An array that will be splitted in chunks
 * @param length Of each chunk
 *
 * @collboard-modules-sdk
 */
export const splitArrayIntoChunks = (window as any).CollboardSdk.splitArrayIntoChunks;

/**
 * Parses styled components styles from html
 *
 * @returns CSS styles as a string
 * @sideeffect Not pure - reads from window.document style elements
 * @collboard-modules-sdk
 */
export const getGlobalStyles = (window as any).CollboardSdk.getGlobalStyles;

/**
 * Extract all used selectors from html.
 * It extract selectors:
 *  - from class attributes
 *  - from id attributes
 *
 * @param html - html to extract selectors from.
 * @returns Set with all used selectors
 *
 * @collboard-modules-sdk
 */
export const extractUsedSelectorsFromHtml = (window as any).CollboardSdk.extractUsedSelectorsFromHtml;

/**
 * Insert style into html.
 *  - If there is <html> structure it inserts into <head>
 *  - If there is <svg> structure it inserts before </svg>
 *  - If there is no <html> structure it inserts at the end of the document
 *
 * @collboard-modules-sdk
 */
export const insertStyleIntoHtml = (window as any).CollboardSdk.insertStyleIntoHtml;

/**
 *
 * @collboard-modules-sdk
 */
export const pointsToPolygon = (window as any).CollboardSdk.pointsToPolygon;

/**
 * Queue manages tasks running in queue and ensures that every task run (function run) run one after another and not mixed up
 *
 * Imagine timeline of task runs:
 *
 * Input:
 * __🥝🍓🍋_____🍏🍍🍇__🍉_🍌🍒___🥑🍎🍈
 *
 * Output:
 * ___🥝_🍓_🍋______🍏_🍍_🍇__🍉_____🍌_🍒___🥑_🍎_🍈
 *
 * TODO: Error handling
 * TODO: Probably debouncing
 * TODO: timeouts
 *
 * @collboard-modules-sdk
 */
export const Queue = (window as any).CollboardSdk.Queue;

/**
 * @collboard-modules-sdk
 */
export const IThrottleQueueOptions = (window as any).CollboardSdk.IThrottleQueueOptions;

/**
 * ThrottleQueue ensures that in every time block separated by throttler will be runned only one task (function run)
 *
 * Imagine timeline of task runs:
 *
 * Input:
 * __🥝🍓🍋_____🍏🍍🍇__🍉_🍌🍒___🥑🍎🍈
 *
 * Output:
 * _________🍋🍋🍋_________🍇🍇🍇_🍉_🍒🍒_🍈🍈🍈
 *
 * TODO: Error handling
 * TODO: Probably debouncing
 * TODO: timeouts
 *
 * @collboard-modules-sdk
 */
export const ThrottleQueue = (window as any).CollboardSdk.ThrottleQueue;

/**
 * @collboard-modules-sdk
 */
export const ThrottleQueues = (window as any).CollboardSdk.ThrottleQueues;

/**
 *
 * @collboard-modules-sdk
 */
export const toArray = (window as any).CollboardSdk.toArray;

/**
 * Converts any object to meaningful string
 * @collboard-modules-sdk
 */
export const toString = (window as any).CollboardSdk.toString;

/**
 * @collboard-modules-sdk
 */
export const ITrayDynamicItem = (window as any).CollboardSdk.ITrayDynamicItem;

/**
 * @collboard-modules-sdk
 */
export const ITrayDynamicItemList = (window as any).CollboardSdk.ITrayDynamicItemList;

/**
 * @collboard-modules-sdk
 */
export const ITrayDynamicToolbarGroup = (window as any).CollboardSdk.ITrayDynamicToolbarGroup;

/**
 * @collboard-modules-sdk
 */
export const ITrayDynamicToolbarItems = (window as any).CollboardSdk.ITrayDynamicToolbarItems;

/**
 * @collboard-modules-sdk
 */
export const ITrayDynamicItemFilter = (window as any).CollboardSdk.ITrayDynamicItemFilter;

/**
 * @collboard-modules-sdk
 */
export const ITrayDynamicDefinition = (window as any).CollboardSdk.ITrayDynamicDefinition;

/**
 * Definition of the tray
 *
 * @collboard-modules-sdk
 */
export const ITraySimpleDefinition = (window as any).CollboardSdk.ITraySimpleDefinition;

/**
 * Semantic helper
 *
 * For example `"❤️"`
 *
 * Genetated by:
 * > CollboardSdk.EMOJIS.map((e)=>`"${e}"`).join(' | ')
 * @collboard-modules-sdk
 */
export const string_char_emoji = (window as any).CollboardSdk.string_char_emoji;

/**
 * Semantic helper
 *
 * For example `"text/plain"` or `"application/collboard"`
 * @collboard-modules-sdk
 */
export const string_mime_type = (window as any).CollboardSdk.string_mime_type;

/**
 * Semantic helper
 *
 * For example `"text/*"` or `"image/*"`
 * @collboard-modules-sdk
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
 */
export const string_mime_type_with_wildcard = (window as any).CollboardSdk.string_mime_type_with_wildcard;

/**
 * Semantic helper
 *
 * For example `"a"`
 * @collboard-modules-sdk
 */
export const string_char = (window as any).CollboardSdk.string_char;

/**
 * Semantic helper
 *
 * For example `"<div>Hello World!</div>"`
 * @collboard-modules-sdk
 */
export const string_html = (window as any).CollboardSdk.string_html;

/**
 * Semantic helper
 *
 * For example `"<foo>bar</foo>"`
 * @collboard-modules-sdk
 *
 * TODO: [🎞️] Probbably use some object-based method for working with XMLs
 */
export const string_xml = (window as any).CollboardSdk.string_xml;

/**
 * Semantic helper
 *
 * For example `.foo{border: 1px solid red}`
 * @collboard-modules-sdk
 */
export const string_css = (window as any).CollboardSdk.string_css;

/**
 * Semantic helper
 *
 * For example `border`
 * @collboard-modules-sdk
 */
export const string_css_property = (window as any).CollboardSdk.string_css_property;

/**
 * Semantic helper
 *
 * For example `13px`
 * @collboard-modules-sdk
 */
export const string_css_value = (window as any).CollboardSdk.string_css_value;

/**
 * Semantic helper
 *
 * For example `.foo`
 * @collboard-modules-sdk
 */
export const string_css_selector = (window as any).CollboardSdk.string_css_selector;

/**
 * Semantic helper
 *
 * For example `"https://collboard.com/9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export const string_url = (window as any).CollboardSdk.string_url;

/**
 * Semantic helper
 *
 * For example `"data:text/plain;base64,SGVsbG8sIFdvcmxkIQ=="`
 * @collboard-modules-sdk
 */
export const string_data_url = (window as any).CollboardSdk.string_data_url;

/**
 * Semantic helper
 *
 * For example `"https://collboard.com/9SeSQTupmQHwuSrLi"` OR `/9SeSQTupmQHwuSrLi`
 * @collboard-modules-sdk
 */
export const string_href = (window as any).CollboardSdk.string_href;

/**
 * Semantic helper
 *
 * For example `"https://collboard.com/9SeSQTupmQHwuSrLi.png?width=1200&height=630"`
 * @collboard-modules-sdk
 */
export const string_url_image = (window as any).CollboardSdk.string_url_image;

/**
 * Semantic helper
 *
 * For example `"/9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export const string_uri = (window as any).CollboardSdk.string_uri;

/**
 * Semantic helper
 *
 * For example `"9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export const string_uri_part = (window as any).CollboardSdk.string_uri_part;

/**
 * Semantic helper, ID of the board used in URL and API
 *
 * For example `"9SeSQTupmQHwuSrLi"`
 * @collboard-modules-sdk
 */
export const string_uriid = (window as any).CollboardSdk.string_uriid;

/**
 * Semantic helper
 *
 * @collboard-modules-sdk
 */
export const string_protocol = (window as any).CollboardSdk.string_protocol;

/**
 * Semantic helper
 *
 * For example `"localhost"` or `"collboard.com"`
 * @collboard-modules-sdk
 */
export const string_hostname = (window as any).CollboardSdk.string_hostname;

/**
 * Semantic helper
 *
 * For example `"localhost:9977"` or `"collboard.com"`
 * @collboard-modules-sdk
 */
export const string_host = (window as any).CollboardSdk.string_host;

/**
 * Semantic helper
 *
 * For example `"pavol@collboard.com"`
 * @collboard-modules-sdk
 */
export const string_email = (window as any).CollboardSdk.string_email;

/**
 * Semantic helper
 *
 * For example `"5a0a153d-7be9-4018-9eda-e0e2e2b89bd9"`
 * @collboard-modules-sdk
 */
export const string_uuid = (window as any).CollboardSdk.string_uuid;

/**
 * Semantic helper
 * UUID with only the first part of the UUID
 *
 *
 * For example `"5a0a153d"`
 * @collboard-modules-sdk
 */
export const string_uuid_first_segment = (window as any).CollboardSdk.string_uuid_first_segment;

/**
 * Semantic helper
 *
 * For example `"b126926439c5fcb83609888a11283723c1ef137c0ad599a77a1be81812bd221d"`
 * @collboard-modules-sdk
 */
export const string_sha256 = (window as any).CollboardSdk.string_sha256;

/**
 * Semantic helper
 *
 * For example `"4.2.4"`
 * @collboard-modules-sdk
 */
export const string_version = (window as any).CollboardSdk.string_version;

/**
 * Semantic helper
 *
 * For example `"^4.2.4"`
 * @collboard-modules-sdk
 */
export const string_version_dependency = (window as any).CollboardSdk.string_version_dependency;

/**
 * Semantic helper
 *
 * For example `"png"`
 * @collboard-modules-sdk
 */
export const string_file_extension = (window as any).CollboardSdk.string_file_extension;

/**
 * Semantic helper
 *
 * For example `"C:/Users/me/work/collboard/modules-sdk/src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export const string_file_absolute_path = (window as any).CollboardSdk.string_file_absolute_path;

/**
 * Semantic helper
 *
 * For example `"./src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export const string_file_relative_path = (window as any).CollboardSdk.string_file_relative_path;

/**
 * Semantic helper
 *
 * @collboard-modules-sdk
 */
export const string_file_path = (window as any).CollboardSdk.string_file_path;

/**
 * Semantic helper
 *
 * For example `"C:/Users/me/work/collboard/modules-sdk/src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export const string_folder_absolute_path = (window as any).CollboardSdk.string_folder_absolute_path;

/**
 * Semantic helper
 *
 * For example `"./src/colldev/commands/develop/ColldevDevelop.tsx"`
 * @collboard-modules-sdk
 */
export const string_folder_relative_path = (window as any).CollboardSdk.string_folder_relative_path;

/**
 * Semantic helper
 *
 * @collboard-modules-sdk
 */
export const string_folder_path = (window as any).CollboardSdk.string_folder_path;

/**
 * Semantic helper
 *
 * - basically module identifier
 *
 * For example `"@collboard/download"`
 * @pattern /^(@(?<scope>[a-z0-9][a-z0-9-]*))\/(?<name>([a-z0-9][a-z0-9-]*)(\/([a-z0-9][a-z0-9-]*))*)$/
 * @collboard-modules-sdk
 */
export const string_module_name = (window as any).CollboardSdk.string_module_name;

/**
 * Semantic helper
 *
 * - case insensitive
 *
 * For example `"Basic"` or `"Math"`
 *
 * *Note: This may become an enum of values in the near future*
 * @collboard-modules-sdk
 */
export const string_module_category = (window as any).CollboardSdk.string_module_category;

/**
 * Semantic helper
 *
 * For example `"John Smith"`
 * @collboard-modules-sdk
 */
export const string_person_fullname = (window as any).CollboardSdk.string_person_fullname;

/**
 * Semantic helper
 * Full profile of the person with his email and web (like in package.json)
 *
 * For example `"Pavol Hejný <pavol@collboard.com> (https://pavolhejny.com)"`
 * @collboard-modules-sdk
 */
export const string_person_profile = (window as any).CollboardSdk.string_person_profile;

/**
 * Full profile of the person with his email and web (like in package.json)
 *
 * @collboard-modules-sdk
 */
export const IPersonProfile = (window as any).CollboardSdk.IPersonProfile;

/**
 * Semantic helper
 *
 * For example `"MIT"`
 * @collboard-modules-sdk
 */
export const string_license = (window as any).CollboardSdk.string_license;

/**
 * License with its type and url like in package.json
 *
 * @collboard-modules-sdk
 */
export const ILicense = (window as any).CollboardSdk.ILicense;

/**
 * Repository with its type and url like in package.json
 *
 * @collboard-modules-sdk
 */
export const IRepository = (window as any).CollboardSdk.IRepository;

/**
 * Semantic helper
 *
 * Keyword is string without diacritics in lowercase [a-z1-9]
 * Words are splitted between multiple keywords @see IKeywords
 *
 * For example `"keyword"`
 * @collboard-modules-sdk
 */
export const string_keyword = (window as any).CollboardSdk.string_keyword;

/**
 * Semantic helper
 * Array of keywords @see string_keyword
 *
 * @collboard-modules-sdk
 */
export const Keywords = (window as any).CollboardSdk.Keywords;

/**
 * CSS cursor type
 * @collboard-modules-sdk
 */
export const string_css_cursor = (window as any).CollboardSdk.string_css_cursor;

/**
 * Semantic helper for attributes
 *
 * - case insensitive
 *
 * For example `"color"`
 * @collboard-modules-sdk
 */
export const string_attribute = (window as any).CollboardSdk.string_attribute;

/**
 * Semantic helper for attributes context
 * Each attribute value scope with a attribute name has its own current value
 *
 * - case insensitive
 *
 * For example `"tools"`
 * @collboard-modules-sdk
 */
export const string_attribute_value_scope = (window as any).CollboardSdk.string_attribute_value_scope;

/**
 * Semantic helper for css/html colors
 *
 * For example `"white"` or `"#009EDD"`
 * @collboard-modules-sdk
 */
export const string_color = (window as any).CollboardSdk.string_color;

/**
 * Array with at least one item
 *
 * @collboard-modules-sdk
 */
export const ArrayFull = (window as any).CollboardSdk.ArrayFull;

/**
 * Just an item or array of items or set of items
 *
 * @collboard-modules-sdk
 */
export const Arrayable = (window as any).CollboardSdk.Arrayable;

/**
 * Just an item or array of items with at least one item
 *
 * @collboard-modules-sdk
 */
export const ArrayableFull = (window as any).CollboardSdk.ArrayableFull;

/**
 * Array which can be wrapped in a Promise and all items can be also wrapped in a Promise
 *
 * @collboard-modules-sdk
 */
export const PromisableArray = (window as any).CollboardSdk.PromisableArray;

/**
 *
 * @collboard-modules-sdk
 */
export const isValidUuid = (window as any).CollboardSdk.isValidUuid;

/**
 * Replaces all UUID strings in the object but preserve its identity
 * - Same UUIDs will be chnaged into another BUT same UUIDs
 * - Different UUIDs will be different
 *
 * @collboard-modules-sdk
 */
export const replaceUuids = (window as any).CollboardSdk.replaceUuids;

/**
 * Systems do everything in Collboard.
 * They can comunicate between or modules can do things through a systems
 *
 * @collboard-modules-sdk
 */
export const ISystems = (window as any).CollboardSdk.ISystems;

/**
 * Core System
 *
 * @collboard-system
 */
export const Core = (window as any).CollboardSdk.Core;

/**
 * ApiClient provides API calls to the remote server.
 *
 * @collboard-system
 */
export const ApiClient = (window as any).CollboardSdk.ApiClient;

/**
 * @collboard-system
 */
export const BoardApiClient = (window as any).CollboardSdk.BoardApiClient;

/**
 * AppState is not quite a system but an object representing the state of the Collboard app.
 *
 * @deprecated This system will be split into two CollSpace and SelectionSystem and removed
 * @collboard-system
 */
export const AppState = (window as any).CollboardSdk.AppState;

/**
 * ArtVersionSystem synchronizes the arts with the remote server.
 * TODO: This is used a lot so maybe we can figure out some better name
 *
 * @collboard-system
 */
export const MaterialArtVersioningSystem = (window as any).CollboardSdk.MaterialArtVersioningSystem;

/**
 * TODO: VirtualArtVersioningSystem should be a bit les capable then MaterialArtVersioningSystem because it can for example cannot handle persisting (@see IFreshMaterialOperation vs IFreshOperation)
 * TODO: Virtual art operations shoud not require persisting
 * TODO: Virtual art operations should not prevent closing (maybe just canBeClosed always true or completelly not IClosePreventable)
 *
 * @collboard-system
 */
export const VirtualArtVersioningSystem = (window as any).CollboardSdk.VirtualArtVersioningSystem;

/**
 * AttributesSystem manages shared art attributes and modules capable of selecting from them. It auto-installs / uninstalls attribute modules.
 *
 * @collboard-system
 */
export const AttributesSystem = (window as any).CollboardSdk.AttributesSystem;

/**
 * ApiClient provides API calls to the remote server.
 *
 * @collboard-system
 */
export const BoardSystem = (window as any).CollboardSdk.BoardSystem;

/**
 * BusinessSystem tell things about currently used business
 *
 * @private
 * @collboard-system
 */
export const BusinessSystem = (window as any).CollboardSdk.BusinessSystem;

/**
 * Enumerates all the possible businesses. In Collboard, a business for which purpose is Collboard used.
 *
 * @collboard-modules-sdk
 *
 * TODO: Probbably move to some other foleder
 */

export const BusinessName = (window as any).CollboardSdk.BusinessName;

/**
 * @collboard-system
 */
export const ClosePreventionSystem = (window as any).CollboardSdk.ClosePreventionSystem;

/**
 * FakeClosePreventionSystem is a implementation of IClosePreventionSystem which satisfy the interface but does nothing.
 * @collboard-modules-sdk
 */
export const FakeClosePreventionSystem = (window as any).CollboardSdk.FakeClosePreventionSystem;

/**
 * CollSpace manages 3D objects rendered by WebGL (BABYLON JS) and provides all the tooling around the 3D scene, positioning, textures, materials, etc.
 *
 * @collboard-system
 */
export const CollSpace = (window as any).CollboardSdk.CollSpace;

/**
 * Converts appearance in any form to the advanced one
 *
 * @param appearance in any form (simple one material, advanced material)
 * @returns IFullAdvancedAppearance
 *
 * @collboard-modules-sdk
 */
export const getFullAdvancedAppearance = (window as any).CollboardSdk.getFullAdvancedAppearance;

/**
 * Converts material in any form to the phong one
 *
 * @param material in any form (just texture, phong)
 * @returns IFullPhongMaterial
 *
 * @collboard-modules-sdk
 */
export const getFullPhongMaterial = (window as any).CollboardSdk.getFullPhongMaterial;

/**
 * Appearance describes complete appearance of the art.
 * It can be one of the following:
 * - **IMaterial** when you want to use just a single material for every spots, edges and fills of the art
 * - **IAdvancedAppearance**, **IFullAdvancedAppearance** when you want to specify materials for different spots, edges and fills of the art
 *
 * 🟦🟦🟦🟦
 * 🟦🟦🟦🟦
 * 🟦🟦🟦🟦
 * 🟦🟦🟦🟦
 *
 * @collboard-modules-sdk
 */
export const IAppearance = (window as any).CollboardSdk.IAppearance;

/**
 * Appearance when you want to specify materials for different spots, edges and fills of the art and set the default for the rest.
 * For example polygon with red edge and blue fill
 *
 * 🟥🟥🟥🟥
 * 🟥🟦🟦🟥
 * 🟥🟦🟦🟥
 * 🟥🟥🟥🟥
 *
 * @collboard-modules-sdk
 */
export const IAdvancedAppearance = (window as any).CollboardSdk.IAdvancedAppearance;

/**
 * Appearance when you want to specify every material for different spots, edges and fills of the art.
 * For example polygon with red edge and blue fill
 *
 * ❎🟥🟥❎
 * 🟥🟦🟦🟥
 * 🟥🟦🟦🟥
 * ❎🟥🟥❎
 *
 * @collboard-modules-sdk
 */
export const IFullAdvancedAppearance = (window as any).CollboardSdk.IFullAdvancedAppearance;

/**
 * Material describes one material of the art or part of the art
 * It can be one of the following:
 * - **ITexture** when you want to use just an emissive texture without struggle with the lightning, shadows, etc.
 * - **IPhongMaterial** when you want to specify full phong lighting model
 *
 * @collboard-modules-sdk
 */
export const IMaterial = (window as any).CollboardSdk.IMaterial;

/**
 * Material with specified at least parts of phong lighting model
 *
 * @collboard-modules-sdk
 */
export const IPhongMaterial = (window as any).CollboardSdk.IPhongMaterial;

/**
 * Full phong lighting model
 * NOT IMPLEMENTED YET just holding place for future use
 *
 * @collboard-modules-sdk
 */
export const IFullPhongMaterial = (window as any).CollboardSdk.IFullPhongMaterial;

/**
 * Texture is texture or its equivalent like color, gradient, video, etc.
 *
 * @collboard-modules-sdk
 */
export const ITexture = (window as any).CollboardSdk.ITexture;

/**
 * Just a simple color
 * Note: This color can be transparent
 *
 * @collboard-modules-sdk
 */
export const IColorTexture = (window as any).CollboardSdk.IColorTexture;

/**
 * Texture
 * Note: Image for the texture can be transparent
 *
 * @collboard-modules-sdk
 */
export const ITextureTexture = (window as any).CollboardSdk.ITextureTexture;

/**
 * Converts texture to color
 * If the texture is not a simple color, returns average color of the texture
 *
 * @param texture
 * @returns Promise<Color>
 *
 * @collboard-modules-sdk
 */
export const textureToColor = (window as any).CollboardSdk.textureToColor;

/**
 * Converts texture to color
 * If the texture is not a simple color, returns some transparent color instead
 *
 * Note: There are two similar functions:
 * - **textureToColor** Propperly extracts color from image textures but returns a promise
 * - **textureToColorSync** Returns provisional color when image texture is given but works synchronously
 *
 * @param texture
 * @returns Color
 *
 * @collboard-modules-sdk
 */
export const textureToColorSync = (window as any).CollboardSdk.textureToColorSync;

/**
 * Converts texture to SVG props
 *
 * @collboard-modules-sdk
 */
export const textureToSvg = (window as any).CollboardSdk.textureToSvg;

/**
 * Art is a an object on the shared board
 * This interface defines basic requirements of the art
 *
 * Note: Arts that implements this are compliant with new art and attribute system
 *
 * @collboard-modules-sdk
 */
export const IArt = (window as any).CollboardSdk.IArt;

/**
 * @collboard-modules-sdk
 * @sideeffect Creating elements with id={artId} to be findable in the DOM
 * @sideeffect Creating elements with class __ArtShell for findArtShellElement
 */
export const ArtShell = (window as any).CollboardSdk.ArtShell;

/**
 * @collboard-modules-sdk
 */
export const findArtElement = (window as any).CollboardSdk.findArtElement;

/**
 * @collboard-modules-sdk
 * @sideeffect dependent on class __ArtShell maked by <ArtShell component
 */
export const findArtShellElement = (window as any).CollboardSdk.findArtShellElement;

/**
 * @collboard-modules-sdk
 */

export const getBoundingClientRectWithoutTransform = (window as any).CollboardSdk.getBoundingClientRectWithoutTransform;

/**
 * ControlSystem can register and manage keyboard shortcuts like Ctrl + C by modules (or maybe other systems).
 *
 * @collboard-system
 */
export const ControlSystem = (window as any).CollboardSdk.ControlSystem;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 * @collboard-modules-sdk
 */
export const IKey = (window as any).CollboardSdk.IKey;

/**
 * @collboard-modules-sdk
 */
export const IShortcut = (window as any).CollboardSdk.IShortcut;

/**
 * To ignore event (like keypress) because its target is not on board (but for example on input element).
 * TODO: Probably in universal utils not just ControlSystems utils
 *
 * @collboard-modules-sdk
 */
export const isEventOnBoard = (window as any).CollboardSdk.isEventOnBoard;

/**
 * CreateSystem allows importing which allows to import/create arts from other sources.
 * Note: CreateSystem - for individual arts, GenerateSystem - for whole board
 * Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.
 *
 * @collboard-system
 */
export const CreateSystem = (window as any).CollboardSdk.CreateSystem;

/**
 * ExportSystem creates other files from the board or the part of it.
 * Note: This system is not just for exporting but also saves to native format.
 *
 * @collboard-system
 */
export const ExportSystem = (window as any).CollboardSdk.ExportSystem;

/**
 * Picker for exporter (=module =mime type) to use for exporting
 * Note: Need to be used inside of a module
 *
 * @collboard-modules-sdk
 */
export const ExporterPickerComponent = (window as any).CollboardSdk.ExporterPickerComponent;

/**
 * Picker for export scope (=which arts to include in export)
 * Note: Need to be used inside of a module
 *
 * @collboard-modules-sdk
 */
export const ExportScopePickerComponent = (window as any).CollboardSdk.ExportScopePickerComponent;

/**
 * Compine pickers and options for export
 * Note: Need to be used inside of a module
 *
 * @collboard-modules-sdk
 */
export const ExportPrepareComponent = (window as any).CollboardSdk.ExportPrepareComponent;

/**
 * Export scope specifies which arts should be exported
 *
 * @collboard-modules-sdk
 */

export const IExportScope = (window as any).CollboardSdk.IExportScope;

/**
 * Simple export scopes
 *
 * @collboard-modules-sdk
 */

export const ExportScopeSimple = (window as any).CollboardSdk.ExportScopeSimple;

/**
 * Options and util provided for the exporter to as a complete foundation to create exported data
 * Note: Do not need to include the systems because systems are already available in registree module> systems: ISystems;
 *
 * @collboard-modules-sdk
 */
export const IFileExportSupporterOptions = (window as any).CollboardSdk.IFileExportSupporterOptions;

/**
 * Every object which can bound arts to export
 *
 * @collboard-modules-sdk
 */
export const IFramable = (window as any).CollboardSdk.IFramable;

/**
 * Utility for file export supporter which sort art containers by screen position
 * It is usefull for exporting order dependent arts like text or html
 *
 * @collboard-modules-sdk
 */
export const sortArtContainersByScreenPosition = (window as any).CollboardSdk.sortArtContainersByScreenPosition;

/**
 * The standard window that can be used by modules to choose a file.
 *
 * @private
 * @collboard-system
 */
export const FilepickSystem = (window as any).CollboardSdk.FilepickSystem;

/**
 *
 * Represents type of the focus which can be taken each by one thing in the Collboard app
 *
 * @collboard-modules-sdk
 */
export const FocusScopeName = (window as any).CollboardSdk.FocusScopeName;

/**
 * FocusSystem can register and manage unique focuses and icons which there are.
 *
 * @collboard-system
 */
export const FocusSystem = (window as any).CollboardSdk.FocusSystem;

/**
 * FractalSystem can do procedurally generated part of the board - patterns, iterations, etc.
 * Modules can use it for creating the fractal boards or creating massive scales like sun and atoms by procedural generating.
 *
 * @private
 * @collboard-system
 */
export const FractalSystem = (window as any).CollboardSdk.FractalSystem;

/**
 * GamificationSystem creates support for gamification arts like yes-no polls, polls, timers, etc.
 * TODO: Under this  system should be a stopwatch
 *
 * @private
 * @collboard-system
 */
export const GamificationSystem = (window as any).CollboardSdk.GamificationSystem;

/**
 * GenerateSystem is a kind of import system which allows us to import/create whole boards from other sources.
 * Note: CreateSystem - for individual arts, GenerateSystem - for whole board
 * Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.
 *
 * @private
 * @collboard-system
 */
export const GenerateSystem = (window as any).CollboardSdk.GenerateSystem;

/**
 * HintSystem creates support for hinting the User's next steps, for alerts, warnings, etc.
 *
 * @private
 * @collboard-system
 */
export const HintSystem = (window as any).CollboardSdk.HintSystem;

/**
 * IdentitySystem identifies the User by a pseudonym.
 *
 * @collboard-system
 */
export const IdentitySystem = (window as any).CollboardSdk.IdentitySystem;

/**
 * Import system makes support for files which are dragged onto board, imporded or pasted
 * It auto-installs / uninstalls file support modules.
 *
 * @collboard-system
 */
export const ImportSystem = (window as any).CollboardSdk.ImportSystem;

/**
 * Moves given arts to be in center
 *
 * @sideeffect This will mutate passed arts
 *
 * @collboard-modules-sdk
 */
export const centerArts = (window as any).CollboardSdk.centerArts;

/**
 * Moves given arts to be in top left position
 *
 * @sideeffect This will mutate passed arts
 *
 * @collboard-modules-sdk
 */
export const topleftArts = (window as any).CollboardSdk.topleftArts;

/**
 * LicenseSystem is a system that manages the licenses for modules
 *
 * @collboard-system
 */
export const LicenseSystem = (window as any).CollboardSdk.LicenseSystem;

/**
 * System that recieves and executes the post message API
 *
 * @collboard-system
 */
export const MessagesApiSystem = (window as any).CollboardSdk.MessagesApiSystem;

/**
 * List of common-used authors
 *
 * @collboard-modules-sdk
 * @deprecated use external modules package.info instead
 */
export const Authors = (window as any).CollboardSdk.Authors;

/**
 * ModuleStore unites all module store connectors into one API, so consumer have same way how to get internal or external module
 *
 * Note: Modules storage - is just getter / setter for modules
 *       Modules store   - has full logic of mudules domain
 *
 * @collboard-system
 */
export const ModuleStore = (window as any).CollboardSdk.ModuleStore;

/**
 * Installer manages module installations, it takes care of number of running instances, manages reasons of module activation, syncing, etc.
 *
 * @collboard-modules-sdk
 */
export const IInstaller = (window as any).CollboardSdk.IInstaller;

/**
 * Install plan says instruction how modules are installed
 *
 * 1. There are installed all default modules
 * 2. There are uninstalled all modules which are here listed as **uninstall**
 * 3. There are installed all modules which are here listed as **install**
 *
 * @collboard-modules-sdk
 */
export const IInstallPlan = (window as any).CollboardSdk.IInstallPlan;

/**
 * Collboard module is basic unit of functionality. From the technical point of view it is just an object or function which will create this object with manifest and setup function that can make some work and returns a logic how to destroy itself.
 *
 * It can be in two forms:
 * 1) **IModuleDefinition** which will directly contain setup and optionally the manifest @see IModuleDefinition
 * 2) Or function that will return IModuleDefinition. This can be usefull to create unique scope before calling the setup.
 *    When the module is uninstalled and than installed again, this factory will be called again so you do not need to think about some complicated scenarios.
 *    Notice that this factory should not do some heavy work or keep something to destroy. Purpose of it is only to define scope variabliles. Heavy work should be done in the setup.
 *
 * Note: We cannot use just a function setup as and module because than we cannot distinguish between factory of full module and just setup
 *
 * @collboard-modules-sdk
 */
export const IModule = (window as any).CollboardSdk.IModule;

/**
 * Collboard module is basic unit of functionality. From the technical point of view it is just an object with manifest and setup function that can make some work and returns a logic how to destroy itself.
 *
 * @collboard-modules-sdk
 */
export const IModuleDefinition = (window as any).CollboardSdk.IModuleDefinition;

/**
 * Setup is an function that is called when the modules is going to be installed. When the function result is resolved, module is succesfully installed.
 * In the setup should be done all heavy work. Typically you will interact with the systems. You will get systems container and you can request the systems at begining of the setup. Systems are like APIs.
 * Setup should return destroyable object which will cleanup everything after it. In most cases you can just return things from the systems because they are most of the time returning exactly that.
 *
 * @collboard-modules-sdk
 */
export const IModuleSetup = (window as any).CollboardSdk.IModuleSetup;

/**
 * Manifest describes the module.
 *
 * You are able to spread package.json into Collboard module manifest and all types are matching perfectly.
 * It is a bit inspired by all web and mobile app manifests.
 *
 * @collboard-modules-sdk
 */
export const IModuleManifest = (window as any).CollboardSdk.IModuleManifest;

/**
 *
 * @collboard-modules-sdk
 */
export const IModuleFlags = (window as any).CollboardSdk.IModuleFlags;

/**
 * Describes author or contributor of a module.
 * It is in same format as in package.json.
 *
 * @collboard-modules-sdk
 */
export const IModuleManifestAuthor = (window as any).CollboardSdk.IModuleManifestAuthor;

/**
 * Describes software license of a module.
 * It is in same format as in package.json.
 *
 * @collboard-modules-sdk
 */
export const IModuleManifestSoftwareLicense = (window as any).CollboardSdk.IModuleManifestSoftwareLicense;

/**
 * Describes licence for usage of a module.
 *
 * @collboard-modules-sdk
 */
export const IModuleManifestUsageLicense = (window as any).CollboardSdk.IModuleManifestUsageLicense;

/**
 * Describes licence for usage of a module.
 *
 * @collboard-modules-sdk
 */
export const IModuleManifestUsageLicensePayed = (window as any).CollboardSdk.IModuleManifestUsageLicensePayed;

/**
 * Activator saves the information which module should be synced/installed
 *
 * Note: this is not using destroyable pattern because activation of the module is long-term thing
 *
 * @collboard-modules-sdk
 */

export const IModulePersister = (window as any).CollboardSdk.IModulePersister;

/**
 * Represents a query to modules repository
 *
 * @collboard-modules-sdk
 */
export const IModuleSearchCriteria = (window as any).CollboardSdk.IModuleSearchCriteria;

/**
 * IModuleStatusReporter can tell if the module is installed or not
 *
 * @collboard-modules-sdk
 *
 */
export const IModuleStatusReporter = (window as any).CollboardSdk.IModuleStatusReporter;

/**
 * Connect to molules repository and pull modules from there
 *
 * @collboard-modules-sdk
 */
export const IModuleStoreConnector = (window as any).CollboardSdk.IModuleStoreConnector;

/**
 * Represents a result from modules repository
 *
 * @collboard-modules-sdk
 */

export const IModuleStoreConnectorSearchResult = (window as any).CollboardSdk.IModuleStoreConnectorSearchResult;

/**
 * TODO: How to do article translations and flags in window top
 * TODO: Možná by tady nahoře mohlo být menu k dalším stránkám. ArticleSet?
 * TODO: Live reloaded content (like stats)
 * TODO: Scoped css
 * TODO: Namings URL vs SRC
 *
 * Note: There is in git history makeArticleModule but we have removed it. If it will be needed, we can bring it back.
 *
 * @collboard-modules-sdk
 */
export const makeArticlesSetModule = (window as any).CollboardSdk.makeArticlesSetModule;

/**
 * makeArtModule will make UI module
 *
 * Note: Module still needs to be declared
 * @collboard-modules-sdk
 */
export const makeArtModule = (window as any).CollboardSdk.makeArtModule;

/**
 *
 * @collboard-modules-sdk
 */
export const makeAttributeModule = (window as any).CollboardSdk.makeAttributeModule;

/**
 *
 * @collboard-modules-sdk
 */
export const makeIconModule = (window as any).CollboardSdk.makeIconModule;

/**
 * Makes toolbar icon module which setup/unsetup given submodule when user select/unselect icon
 * TODO: Probbably better name (makeIconModuleOnModule vs. makeIconModuleOnRoute)
 *
 * @collboard-modules-sdk
 */
export const makeIconModuleOnModule = (window as any).CollboardSdk.makeIconModuleOnModule;

/**
 * Makes toolbar icon module which setup/unsetup given submodule when user select/unselect icon
 * TODO: Probbably better name (makeIconModuleOnModule vs. makeIconModuleOnRoute)
 *
 * @collboard-modules-sdk
 */
export const makeIconModuleOnRoute = (window as any).CollboardSdk.makeIconModuleOnRoute;

/**
 *
 * @collboard-modules-sdk
 */
export const makeModalModule = (window as any).CollboardSdk.makeModalModule;

/**
 * Takes an array of of modules (or just a setup functions) and create a composition module from it.
 * This is usefull if you want to use some maker with some custom functionality
 * Manifest is either given or it will be taken from the first non-anonymous module or returned module will be anonymous
 * @returns a factory (not definition) which will dynamically makes multimodule again and again because only this can ensure one run per one instance policy.
 *
 * @collboard-modules-sdk
 */
export const makeMultiModule = (window as any).CollboardSdk.makeMultiModule;

/**
 * Maker for creating tray-like modules (like H-edu or Montessori)
 * This is the advanced version of the maker which is usefull for creating modules with can have dynamic number, order or other specific properties
 *
 * Note: There are two makers for tray modules:
 *       - **makeTraySimpleModule** will take pre-defined list of items
 *       - **makeTrayDynamicModule** will allow to define items dynamically
 *
 * @collboard-modules-sdk
 */
export const makeDynamicTrayModule = (window as any).CollboardSdk.makeDynamicTrayModule;

/**
 * Maker for creating tray-like modules
 * This is the simple version of the maker which is usefull for creating modules with have predefined list of items which can be stored in as pure JSON
 *
 * Note: There are two makers for tray modules:
 *       - **makeTraySimpleModule** will take pre-defined list of items
 *       - **makeTrayDynamicModule** will allow to define items dynamically
 *
 * @collboard-modules-sdk
 */
export const makeTraySimpleModule = (window as any).CollboardSdk.makeTraySimpleModule;

/**
 * Makes a module that will add any JSX element on requested place.
 *
 * Note: Making this type of module is not recommended because it is using very low-level API. Consider using higher-level API like makeModalModule, makeTrayToolModule, etc.
 *
 * @collboard-modules-sdk
 */
export const makeUserInterfaceModule = (window as any).CollboardSdk.makeUserInterfaceModule;

/**
 * ArtSupportSyncer installs / uninstalls art support modules
 *
 * @private
 * @collboard-system
 */
export const ArtSupportSyncer = (window as any).CollboardSdk.ArtSupportSyncer;

/**
 * AttributeSupportSyncer installs / uninstalls ONLY STANDARD attribute modules when needed
 *
 * @private
 * @collboard-system
 */
export const AttributeSupportSyncer = (window as any).CollboardSdk.AttributeSupportSyncer;

/**
 * CornerstoneSyncer watches on cornerstone of current board and installs / uninstalls modules according to it
 *
 * @private
 * @collboard-system
 */
export const CornerstoneSyncer = (window as any).CollboardSdk.CornerstoneSyncer;

/**
 * RouteAndBusinessSyncer installs / uninstalls modules according to the app URI
 *
 * @private
 * @collboard-system
 */
export const RouteAndBusinessSyncer = (window as any).CollboardSdk.RouteAndBusinessSyncer;

/**
 * StorageSyncer will install every module what is declared into the storage
 * When the module is redeclared, module is installed and uninstalled
 *
 * TODO: Probably only installer because here we do not use any advantages of the syncer
 *
 * @private
 * @collboard-system
 */
export const StorageSyncer = (window as any).CollboardSdk.StorageSyncer;

/**
 * Create list of keywords from module manifest
 *
 * @collboard-modules-sdk
 */
export const parseKeywordsFromManifest = (window as any).CollboardSdk.parseKeywordsFromManifest;

/**
 *
 * @collboard-system
 */
export const NotificationSystem = (window as any).CollboardSdk.NotificationSystem;

/**
 * PointerSystem allows us to bind a different controller then touch or mouse. For example, it is syncing the phone with accelerometer or VR controllers.
 *
 * @private
 * @collboard-system
 */
export const PointerSystem = (window as any).CollboardSdk.PointerSystem;

/**
 * RoutingSystem provides for core, other systems and modules registration of routes and hashtag routes.
 * @see https://github.com/collboard/collboard/issues/97
 * TODO: What about #hash routes
 *
 * @collboard-system
 */
export const RoutingSystem = (window as any).CollboardSdk.RoutingSystem;

/**
 * Matches a Collboard uri adress
 *
 * For examples of valid/invalid uris:
 *     @see https://regex101.com/r/irJH7h/1
 *     @see /src/50-systems/RoutingSystem/routePath/decodeUrl.test.ts
 *
 * @collboard-modules-sdk
 */
export const URI_PATTERN = (window as any).CollboardSdk.URI_PATTERN;

/**
 * Represents URL in parsed from
 *
 * @collboard-modules-sdk
 */
export const IUrlVariables = (window as any).CollboardSdk.IUrlVariables;

/**
 * Defaults for IUrlVariables
 *
 * @collboard-modules-sdk
 */
export const DEFAULT_URL_VARIABLES = (window as any).CollboardSdk.DEFAULT_URL_VARIABLES;

/**
 * SnapSystem /aka. Playground 2.0/ allows us to define a snap point on each art.
 * Note: This is continuing of the Playground in H-edu.
 *
 * @private
 * @collboard-system
 */
export const SnapSystem = (window as any).CollboardSdk.SnapSystem;

/**
 * SoundSystem can play a sound and keep music and UI sounds library.
 * Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech a view.
 *
 * @private
 * @collboard-system
 */
export const SoundSystem = (window as any).CollboardSdk.SoundSystem;

/**
 * StorageSystem provides storages for other systems / modules
 *
 * @private
 * @collboard-system
 */
export const StorageSystem = (window as any).CollboardSdk.StorageSystem;

/**
 * StyleSystem can register and manage additional CSS styles for modules. It can scope CSS so it will do not affect others.
 *
 * Note: UserInterfaceSystem is for JSX (HTML) vs. StyleSystem is for CSS styles
 *
 * @collboard-system
 */
export const StyleSystem = (window as any).CollboardSdk.StyleSystem;

/**
 * Default skin configuration
 *
 * Note: Always prefer skin provided by StyleSystem, use this only when StyleSystem not available OR as a base object for extending to create new skin module
 *
 * @collboard-modules-sdk
 */
export const DEFAULT_SKIN = (window as any).CollboardSdk.DEFAULT_SKIN;

/**
 * Configuration of the skin
 *
 * @collboard-modules-sdk
 */
export const ISkin = (window as any).CollboardSdk.ISkin;

/**
 * makeSkinModule will make skin confuiguration module
 *
 * Note: Module still needs to be declared
 * @collboard-modules-sdk
 */
export const makeSkinModule = (window as any).CollboardSdk.makeSkinModule;

/**
 * TestSystem just for testing purposes.
 *
 * @collboard-system
 */
export const TestSystem = (window as any).CollboardSdk.TestSystem;

/**
 *
 * TODO: Unite naming ToolbarName, which can be part of IToolbarIcon (similar as section on it) OR combine it with UserInterfaceElementPlace
 *
 * @collboard-modules-sdk
 */
export const ToolbarName = (window as any).CollboardSdk.ToolbarName;

/**
 * ToolbarSystem can register and manage toolbars and icons which there are.
 * TODO: Destroy all its IconsToolbar with it
 *
 * @collboard-system
 */
export const ToolbarSystem = (window as any).CollboardSdk.ToolbarSystem;

/**
 * TranslationsSystem manages messages across core, systems and modules.
 *
 * @collboard-system
 *
 */
export const TranslationsSystem = (window as any).CollboardSdk.TranslationsSystem;

/**
 * ....
 * @collboard-modules-sdk
 */
export const Translate = (window as any).CollboardSdk.Translate;

/**
 * A message which can be a simple string or a object with multiple string translations.
 *
 * @collboard-modules-sdk
 */
export const IStringMessage = (window as any).CollboardSdk.IStringMessage;

/**
 * A message which can be a simple string or JSX element*, or a complex object with multiple translations and rich elements.
 *
 * Note: Please use JSX element only as a text with a formatting like a <b>bold</b> or <i>italic</i> etc.
 *
 * @collboard-modules-sdk
 */
export const IMessage = (window as any).CollboardSdk.IMessage;

/**
 * A message which can be a simple string or JSX element*
 *
 * Note: Please use JSX element only as a text with a formatting like a <b>bold</b> or <i>italic</i> etc.
 *
 * @collboard-modules-sdk
 */
export const IBaseMessage = (window as any).CollboardSdk.IBaseMessage;

/**
 * UsercontentSystem provides API to upload user content to the server.
 *
 * @collboard-system
 */
export const UsercontentSystem = (window as any).CollboardSdk.UsercontentSystem;

/**
 * UserInterfaceSystem can register and manage additional JSX
 *
 * Note: Using UserInterfaceSystem is not recommended to use directly because it is using very low-level API. Consider using higher-level API like ToolbarSystem, NotificationSystem, etc.
 * Note: UserInterfaceSystem is for JSX (HTML) vs. StyleSystem is for CSS styles
 *
 * @collboard-system
 */
export const UserInterfaceSystem = (window as any).CollboardSdk.UserInterfaceSystem;

/**
 * UserInterfaceElementPlace enum lists possible places for an element to be placed.
 *
 * @collboard-modules-sdk
 */
export const UserInterfaceElementPlace = (window as any).CollboardSdk.UserInterfaceElementPlace;

/**
 * VoiceSystem can recognize the voice and play speech from text.
 * Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech.
 *
 * @private
 * @collboard-system
 */
export const VoiceSystem = (window as any).CollboardSdk.VoiceSystem;

/**
 * @collboard-modules-sdk
 */
export const IFontStyleAttributeValue = (window as any).CollboardSdk.IFontStyleAttributeValue;

/**
 * AbstractArt is an abstract class which all art classes extend.
 *
 * It only provides unique identifier for each art
 *
 * @collboard-modules-sdk
 */
export const AbstractArt = (window as any).CollboardSdk.AbstractArt;

/**
 * AbstractEnvironmentArt creates a category of arts that changes the environment on board like background, pattern, skybox etc.
 *
 * @collboard-modules-sdk
 */
export const AbstractEnvironmentArt = (window as any).CollboardSdk.AbstractEnvironmentArt;

/**
 * Constant, which should be used to determine, whether a point is near the art
 *
 * @collboard-modules-sdk
 * @deprecated This should be exported from some system or util to be user-settable
 */
export const NEAR_DISTANCE = (window as any).CollboardSdk.NEAR_DISTANCE;

/**
 * AbstractPlacedArt is an abstract class which all arts with position and size
 * extend.
 *
 * @collboard-modules-sdk
 */
export const AbstractPlacedArt = (window as any).CollboardSdk.AbstractPlacedArt;

/**
 * AbstractUIArt is an abstract class providing functionality regarding
 * adding or removing components from UI
 *
 * @summary AbstractUIArt is not implemented within the system yet
 *
 * @collboard-modules-sdk
 */
export const AbstractUserInterfaceArt = (window as any).CollboardSdk.AbstractUserInterfaceArt;

/**
 * Abstract2dArt is an abstract class which all arts rendered in 2D extend.
 *
 * @collboard-modules-sdk
 */
export const Abstract2dArt = (window as any).CollboardSdk.Abstract2dArt;

/**
 * This art holds information about a backgroud image of the board.
 *
 * @collboard-modules-sdk
 */
export const AbstractBackgroundArt = (window as any).CollboardSdk.AbstractBackgroundArt;

/**
 * Abstract2dArt implements some of the functionality of `Abstract2dArt` to
 * make implementation of square objects simpler.
 *
 * @deprecated use hook useMeasure or Measure component instead @see TextArt
 * @collboard-modules-sdk
 */
export const Abstract2dBoxArt = (window as any).CollboardSdk.Abstract2dBoxArt;

/**
 * @collboard-modules-sdk
 */
export const AbstractTrayArt = (window as any).CollboardSdk.AbstractTrayArt;

/**
 * Cornerstone holds all informations about a particular board, such as
 * board name, active and inactive modules.
 *
 * Every board contains exactly one CornerstoneArt and it cannot be deleted.
 *
 * Cornerstone for a current board can be obtained through
 * `MaterialArtVersioningSystem.cornerstoneArts.value`
 *
 * @extends Abstract2dArt
 *
 * @collboard-modules-sdk
 */
export const CornerstoneArt = (window as any).CollboardSdk.CornerstoneArt;

/**
 * virtualCornerstoneArt is "fake" corner stone for yet non existing boards
 *
 * @collboard-modules-sdk
 */
export const virtualCornerstoneArt = (window as any).CollboardSdk.virtualCornerstoneArt;

/**
 * All removed arts get replaced with DeletedArt as a terminal point of
 * it's existence.
 *
 * *Note: Committing any art with predecessor of type DeletedArt results in
 * undefined behavior since DeletedArts are removed in garbage collection
 * process.*
 *
 * @collboard-modules-sdk
 */
export const DeletedArt = (window as any).CollboardSdk.DeletedArt;

/**
 * ExportArt is art for exporting content from the board.
 *
 * @deprecated do this functionality better in the future via FrameArt
 * @collboard-modules-sdk
 */
export const ExportArt = (window as any).CollboardSdk.ExportArt;

/**
 * ImportArt is art for importing external content into the board.
 * @see ExportArt implementation and comments before looking at this
 *
 * @deprecated This functionality is unused
 * @collboard-modules-sdk
 */
export const ImportArt = (window as any).CollboardSdk.ImportArt;

/**
 * Art setting background with color style
 *
 * @collboard-modules-sdk
 */
export const BackgroundColorArt = (window as any).CollboardSdk.BackgroundColorArt;

/**
 * Art setting background with pattern style (scrolling)
 *
 * @collboard-modules-sdk
 */
export const BackgroundPatternArt = (window as any).CollboardSdk.BackgroundPatternArt;

/**
 * Art setting background with wallpaper style (not scrolling)
 *
 * @collboard-modules-sdk
 */
export const BackgroundWallpaperArt = (window as any).CollboardSdk.BackgroundWallpaperArt;

/**
 * Frame for export
 *
 * @collboard-modules-sdk
 */
export const FrameArt = (window as any).CollboardSdk.FrameArt;

/**
 * Handwritten free line with lot of segments
 *
 * @collboard-modules-sdk
 */
export const FreehandArt = (window as any).CollboardSdk.FreehandArt;

/**
 * Art rendering a given HTML content
 *
 * **Warning: HTML is dangerously set inside a div element, please sanitize the
 * content of any malicious scripts before creating art!**
 *
 * @collboard-modules-sdk
 */
export const HTMLArt = (window as any).CollboardSdk.HTMLArt;

/**
 * Art rendering a given image
 *
 * @collboard-modules-sdk
 */
export const ImageArt = (window as any).CollboardSdk.ImageArt;

/**
 *
 * @collboard-modules-sdk
 */
export const LineArt = (window as any).CollboardSdk.LineArt;

/**
 * Art which renders loading of something
 * It is usefull primarly with virtual commits:
 *  >
 *  > virtualArtVersioningSystem
    >    .createPrimaryOperation()
    >    .newArts(
    >      new LoadingArt('aaa').setShift((collSpace.pickPoint(touch.firstFrame.position)).point),
    >    )
    >    .persist();
 *
 * @collboard-modules-sdk
 */
export const LoadingArt = (window as any).CollboardSdk.LoadingArt;

/**
 * Just a point/flag/marker or whatever pointy on the board
 *
 * @collboard-modules-sdk
 */
export const PointArt = (window as any).CollboardSdk.PointArt;

/**
 * Universal polygon art with N points
 * Polygon is always closed - there is always last edge from last point back to the first point
 *
 * @collboard-modules-sdk
 */
export const PolygonArt = (window as any).CollboardSdk.PolygonArt;

/**
 * @collboard-modules-sdk
 */
export const ShapeName = (window as any).CollboardSdk.ShapeName;

/**
 * @collboard-modules-sdk
 */
export const ShapeArt = (window as any).CollboardSdk.ShapeArt;

/**
 * @collboard-modules-sdk
 */
export const IListStyle = (window as any).CollboardSdk.IListStyle;

/**
 * @collboard-modules-sdk
 */
export const TextArt = (window as any).CollboardSdk.TextArt;

/**
 * Behaviors are parts of functionality of tools, which can be shared
 * among multiple tools. They can be called at any point during the
 * process of `TouchController` subscription
 *
 * Calling a certain behavior can be terminal and it is marked by the
 * return value. If the function returns `true`, it should be considered
 * terminal, because it "did it's job" and we should prevent any other
 * tool functionality from happening.
 *
 * @example
 * let module = {
 *     async setup(systems){
 *         const { touchController } = await systems.request('touchController');
 *
 *         return Registration.fromSubscription((registerAdditionalSubscription) =>
 *             touchController.touches.subscribe((touch) => {
 *                 // do something else
 *                 let props: IBehaviorProps = { systems, registerAdditionalSubscription, touch };
 *                 if (selectionToolBehavior(props)) return;
 *                 if (someOtherBehavior(props)) return;
 *             }),
 *         );
 *     },
 * }
 *
 * @collboard-modules-sdk
 */
export const IBehavior = (window as any).CollboardSdk.IBehavior;

/**
 * Creates behavior of the selection tool
 *
 * @param useBehaviors Specifies, which parts of the selection tool behavior
 * should be used. Defaults to `true` on all.
 * - `isScaling` (Scaling objects)
 * - `isDragging` (Moving objects)
 * - `isSelectionBox` (Creating selection box)
 * - `isRotating` (Rotating objects) - **not yet implemented**
 *
 * @see IBehaviorOptions
 *
 * @collboard-modules-sdk
 */
export const createSelectionToolBehavior = (window as any).CollboardSdk.createSelectionToolBehavior;

/**
 * Conversion table from misc units to board pixels
 *
 * @collboard-modules-sdk
 * @deprecated Make ScaleSystem instead
 */
export const SCALE_PIXELS = (window as any).CollboardSdk.SCALE_PIXELS;

/**
 * Matches a Collboard module name
 *
 * For examples of valid/invalid names:
 *     @see https://regex101.com/r/oDVYWA/1
 *     @see /src/40-utils/parseModuleName.test.ts
 *
 * @collboard-modules-sdk
 */
export const MODULE_NAME_PATTERN = (window as any).CollboardSdk.MODULE_NAME_PATTERN;

/**
 * How much maximum notifications should be shown at one time
 *
 * @collboard-modules-sdk
 */
export const SHOW_MAXIMUM_NOTIFICATIONS = (window as any).CollboardSdk.SHOW_MAXIMUM_NOTIFICATIONS;

/**
 * @collboard-modules-sdk
 */
export const configchecker = (window as any).CollboardSdk.configchecker;

/**
 * @collboard-modules-sdk
 */
export const destroyable = (window as any).CollboardSdk.destroyable;

/**
 * @collboard-modules-sdk
 */
export const React = (window as any).CollboardSdk.React;

/**
 * Styled components all export
 * > import * as styledComponents from 'styled-components';
 * @collboard-modules-sdk
 */
export const styledComponents = (window as any).CollboardSdk.styledComponents;

/**
 * Styled components default export
 * > import styled from 'styled-components';
 * @collboard-modules-sdk
 * @alias of styledComponents
 */
export const styled = (window as any).CollboardSdk.styled;

/**
 * @collboard-modules-sdk
 */
export const touchcontroller = (window as any).CollboardSdk.touchcontroller;

/**
 * @collboard-modules-sdk
 */
export const libraries = (window as any).CollboardSdk.libraries;

/**
 * @collboard-modules-sdk
 * @alias of libraries
 */
export const libs = (window as any).CollboardSdk.libs;
