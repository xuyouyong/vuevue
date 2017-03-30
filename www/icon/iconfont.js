;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M196.277147 225.916333c0 12.674671-10.264182 22.950711-22.951652 22.950711L87.253731 248.867044C74.567285 248.867044 64.300033 238.58998 64.300033 225.916333l0-86.069261C64.300033 127.172401 74.567285 116.895337 87.253731 116.895337l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.950711L196.277147 225.916333z"  ></path>' +
    '' +
    '<path d="M959.45027 225.916333c0 12.674671-10.265205 22.950711-22.951652 22.950711L311.040523 248.867044c-12.686447 0-22.952675-10.276041-22.952675-22.950711l0-86.069261c0-12.674671 10.266228-22.950711 22.952675-22.950711l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.950711L959.45027 225.916333z"  ></path>' +
    '' +
    '<path d="M196.277147 532.893866c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 555.845601C74.567285 555.845601 64.300033 545.568537 64.300033 532.893866l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.951735L196.276124 532.893866z"  ></path>' +
    '' +
    '<path d="M959.45027 532.893866c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 555.845601c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.951735L959.45027 532.893866z"  ></path>' +
    '' +
    '<path d="M196.277147 839.871399c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 862.823134C74.567285 862.823134 64.300033 852.54607 64.300033 839.871399l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l86.071764 0c12.68747 0 22.951652 10.277064 22.951652 22.952758L196.276124 839.871399z"  ></path>' +
    '' +
    '<path d="M959.45027 839.871399c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 862.823134c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l625.458095 0c12.685423 0 22.951652 10.277064 22.951652 22.952758L959.45027 839.871399z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 119.466667c130.133333 0 234.666667 104.533333 234.666667 234.666667s-104.533333 234.666667-234.666667 234.666667-234.666667-104.533333-234.666667-234.666667S381.866667 119.466667 512 119.466667M512 55.466667c-164.266667 0-298.666667 134.4-298.666667 298.666667s134.4 298.666667 298.666667 298.666667 298.666667-134.4 298.666667-298.666667S676.266667 55.466667 512 55.466667L512 55.466667z"  ></path>' +
    '' +
    '<path d="M917.333333 968.533333c-10.666667 0-19.2-4.266667-25.6-12.8C804.266667 832 663.466667 759.466667 512 759.466667c-151.466667 0-292.266667 72.533333-379.733333 196.266667-10.666667 14.933333-29.866667 17.066667-44.8 8.533333-14.933333-10.666667-17.066667-29.866667-8.533333-44.8C179.2 778.666667 341.333333 695.466667 512 695.466667s332.8 83.2 433.066667 224c10.666667 14.933333 6.4 34.133333-8.533333 44.8C930.133333 968.533333 923.733333 968.533333 917.333333 968.533333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)