chrome.runtime.onInstalled.addListener(async () => {
  const url = chrome.runtime.getURL('src/entries/options/index.html')

  const tab = await chrome.tabs.create({ url: url })

  console.log(`Created tab ${tab.id}`)
})
