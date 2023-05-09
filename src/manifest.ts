import pkg from '../package.json'

const manifest: chrome.runtime.Manifest = {
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  background: {
    service_worker: 'src/background.ts',
  },
  options_ui: {
    page: 'index.html',
    open_in_tab: false,
  },
  action: {
    default_popup: 'index.html',
  },
}

export default manifest
