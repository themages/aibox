// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
console.log('preload.ts loaded，检查必要的钩子是否生效，比如系统功能权限等',process);
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
