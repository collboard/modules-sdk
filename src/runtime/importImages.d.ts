// Note: This definition file will allow to make asset imports like "import logo from '../assets/logo.svg';"

declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    const value: any;
    export default value;
}

// TODO: !!! More types sync with rules