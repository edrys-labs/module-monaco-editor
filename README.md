# Module Monaco Editor

This is a collaborative code editor for Edrys-Lite.

![screen](./screenshot.png)

## Usage

Use this URL to add the module to your Edrys-Lite classroom:

```html
https://edrys-labs.github.io/module-monaco-editor/
```

You may optionally specify any of the following module config, the `runCommand` is the only setting that is required:

```json
{
    "value": "Starting text in editor...",
    "runCommand": "execute", 
    "language": "cpp",
    "theme": "vs-light" # or "vs-dark",
    "synchronize": false
}
```

`runCommand` defines the subject under which the current editor-input will be published.
Other modules such as the [edrys_module-pyxtermjs](https://github.com/Cross-Lab-Project/edrys_module-pyxtermjs) can be configured to listen to this specific subject and execute some action when they receive this event.

By default, the editor will be synchronized with the other students in the classroom. If you want to disable this feature, set `synchronize` to `false`.