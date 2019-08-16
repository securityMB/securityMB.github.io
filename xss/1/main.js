window.CONFIG = window.CONFIG || {
  version: "v20190816",
  test: false,
  appName: "XSS Challenge",
}

function loadModule(moduleName) {
  const scriptSrc = new URL(document.currentScript.src);
  let url = '';
  
  
  if (CONFIG.test && window.testPath) {
    url = window.testPath.protocol + '//' + window.testPath.host;
  } else {
    url = scriptSrc.origin;
  }
  url += `/modules/${CONFIG.version}/${moduleName}.js`;
  const sc = document.createElement('script');
  sc.src = url;
  document.body.appendChild(sc);
}

loadModule('h1-magic');
loadModule('tracker');