// allow import of scss modules
// since we use "css modules" plugin, the content type is defined as map from string to string
declare module '*.scss' {
    const content: { [key: string]: string };
    export default content;
}
