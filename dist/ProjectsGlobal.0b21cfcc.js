// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"Styles/ProjectsGlobal.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../Assets/Images/Project1/Project1Hero-Portfolio.png":[["Project1Hero-Portfolio.b3b9417a.png","Assets/Images/Project1/Project1Hero-Portfolio.png"],"Assets/Images/Project1/Project1Hero-Portfolio.png"],"./../Assets/Images/Project2/Project2-Hero.png":[["Project2-Hero.36c0d7a2.png","Assets/Images/Project2/Project2-Hero.png"],"Assets/Images/Project2/Project2-Hero.png"],"./../Assets/Images/Project3/Project3-Hero.png":[["Project3-Hero.1481f95d.png","Assets/Images/Project3/Project3-Hero.png"],"Assets/Images/Project3/Project3-Hero.png"],"./../Assets/Images/Project4/Project4-Hero.png":[["Project4-Hero.318a053a.png","Assets/Images/Project4/Project4-Hero.png"],"Assets/Images/Project4/Project4-Hero.png"],"./../Assets/Images/Project2/Specialized-SidebySide.jpg":[["Specialized-SidebySide.82b64a7c.jpg","Assets/Images/Project2/Specialized-SidebySide.jpg"],"Assets/Images/Project2/Specialized-SidebySide.jpg"],"./../Assets/Images/Project1/Project1Section1Image.png":[["Project1Section1Image.618d40d3.png","Assets/Images/Project1/Project1Section1Image.png"],"Assets/Images/Project1/Project1Section1Image.png"],"./../Assets/Images/Project4/Project4-Image1.png":[["Project4-Image1.a00fe6cd.png","Assets/Images/Project4/Project4-Image1.png"],"Assets/Images/Project4/Project4-Image1.png"],"./../Assets/Images/Project1/Project1DesktopWindow.png":[["Project1DesktopWindow.a65d1435.png","Assets/Images/Project1/Project1DesktopWindow.png"],"Assets/Images/Project1/Project1DesktopWindow.png"],"./../Assets/Images/Project2/Specialized-DesktopLanding.png":[["Specialized-DesktopLanding.e32f9e9b.png","Assets/Images/Project2/Specialized-DesktopLanding.png"],"Assets/Images/Project2/Specialized-DesktopLanding.png"],"./../Assets/Images/Project1/Project1-DesktopDisplay2Image.png":[["Project1-DesktopDisplay2Image.252aadec.png","Assets/Images/Project1/Project1-DesktopDisplay2Image.png"],"Assets/Images/Project1/Project1-DesktopDisplay2Image.png"],"./../Assets/Images/Project4/Project4-DesktopView1.png":[["Project4-DesktopView1.a1d7b127.png","Assets/Images/Project4/Project4-DesktopView1.png"],"Assets/Images/Project4/Project4-DesktopView1.png"],"./../Assets/Images/Project1/Project1-MobileDisplayBig.png":[["Project1-MobileDisplayBig.bbe45bd3.png","Assets/Images/Project1/Project1-MobileDisplayBig.png"],"Assets/Images/Project1/Project1-MobileDisplayBig.png"],"./../Assets/Images/Project2/Specialized-Responsive1.jpg":[["Specialized-Responsive1.54ff0766.jpg","Assets/Images/Project2/Specialized-Responsive1.jpg"],"Assets/Images/Project2/Specialized-Responsive1.jpg"],"./../Assets/Images/Project2/Specialized-Responsive3.jpg":[["Specialized-Responsive3.649991d5.jpg","Assets/Images/Project2/Specialized-Responsive3.jpg"],"Assets/Images/Project2/Specialized-Responsive3.jpg"],"./../Assets/Images/Project2/Specialized-Responsive4Big.jpg":[["Specialized-Responsive4Big.110cf927.jpg","Assets/Images/Project2/Specialized-Responsive4Big.jpg"],"Assets/Images/Project2/Specialized-Responsive4Big.jpg"],"./../Assets/Images/Project1/Project1DisplayImage1Big.png":[["Project1DisplayImage1Big.f4b0d6bd.png","Assets/Images/Project1/Project1DisplayImage1Big.png"],"Assets/Images/Project1/Project1DisplayImage1Big.png"],"./../Assets/Images/Project1/Project1MobileDisplay3Small.png":[["Project1MobileDisplay3Small.25e4952a.png","Assets/Images/Project1/Project1MobileDisplay3Small.png"],"Assets/Images/Project1/Project1MobileDisplay3Small.png"],"./../Assets/Images/Project3/Project3-ResponsiveDisplay1.png":[["Project3-ResponsiveDisplay1.8f1e7e86.png","Assets/Images/Project3/Project3-ResponsiveDisplay1.png"],"Assets/Images/Project3/Project3-ResponsiveDisplay1.png"],"./../Assets/Images/Project3/Project3-ResponsiveDisplay3.png":[["Project3-ResponsiveDisplay3.7a1ba1ba.png","Assets/Images/Project3/Project3-ResponsiveDisplay3.png"],"Assets/Images/Project3/Project3-ResponsiveDisplay3.png"],"./../Assets/Images/Project3/Project3-ResponsiveDisplay4.png":[["Project3-ResponsiveDisplay4.88a478c5.png","Assets/Images/Project3/Project3-ResponsiveDisplay4.png"],"Assets/Images/Project3/Project3-ResponsiveDisplay4.png"],"./../Assets/Images/Project4/Project4-Responsive3.png":[["Project4-Responsive3.5d1fcf78.png","Assets/Images/Project4/Project4-Responsive3.png"],"Assets/Images/Project4/Project4-Responsive3.png"],"./../Assets/Images/Project4/Project4-Responsive4.png":[["Project4-Responsive4.041165eb.png","Assets/Images/Project4/Project4-Responsive4.png"],"Assets/Images/Project4/Project4-Responsive4.png"],"./../Assets/Images/Project4/Project4-MobileImageBIG.png":[["Project4-MobileImageBIG.7d58cf93.png","Assets/Images/Project4/Project4-MobileImageBIG.png"],"Assets/Images/Project4/Project4-MobileImageBIG.png"],"./../Assets/Images/Project3/Project3-DesktopView2.png":[["Project3-DesktopView2.471e7df0.png","Assets/Images/Project3/Project3-DesktopView2.png"],"Assets/Images/Project3/Project3-DesktopView2.png"],"./../Assets/Images/Project2/Specialized-Desktop2.jpg":[["Specialized-Desktop2.b2d38280.jpg","Assets/Images/Project2/Specialized-Desktop2.jpg"],"Assets/Images/Project2/Specialized-Desktop2.jpg"],"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49248" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/ProjectsGlobal.0b21cfcc.js.map