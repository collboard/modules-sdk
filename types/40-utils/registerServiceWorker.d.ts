// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
* This lets the app load faster on subsequent visits in production, and gives it offline capabilities. However, it also means that developers (and users) will only see deployed updates on subsequent visits to a page, after all the existing tabs open on the page have been closed, since previously cached resources are updated in the background. To learn more about the benefits of this model and instructions on how to opt-in, read https://bit.ly/CRA-PWA
* @param config
* /
function registerServiceWorker(config?: IServiceWorkerRegistrationConfig) {
//if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
// The URL constructor is available in all browsers that support SW.
/*
const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
if (publicUrl.origin !== window.location.origin) {
// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;
}
* /

window.addEventListener('load', () => {
const serviceWorkerUrl = `${PUBLIC_URL}/service-worker.js`;

/*
TODO: Do we need different behaviour on localhost?
if (isRunningOnLocalhost()) {
// This is running on localhost. Let's check if a service worker still exists or not.
checkIfServiceWorkerIsValid(serviceWorkerUrl, config);

// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(() => {
consolex.log(
'This web app is being served cache-first by a service ' +
'worker. To learn more, visit https://bit.ly/CRA-PWA',
);
});
} else {
// Is not localhost. Just register service worker

* /
registerValidServiceWorker(serviceWorkerUrl, config);
//}
});
//}
}
*/
export declare function registerValidServiceWorker(serviceWorkerUrl: string): Promise<void>;
