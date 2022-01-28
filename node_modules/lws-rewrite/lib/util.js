function parseRewriteRules (rules) {
  const arrayify = require('array-back')

  return arrayify(rules).map(rule => {
    if (typeof rule === 'string') {
      const matches = rule.match(/(\S*)\s*->\s*(\S*)/)
      if (!(matches && matches.length >= 3)) throw new Error('Invalid rule: ' + rule)
      return {
        from: matches[1],
        to: matches[2]
      }
    } else {
      return rule
    }
  })
}

function getTargetUrl (from, to, url) {
  const { pathToRegexp } = require('path-to-regexp')
  const fromParams = []
  const re = pathToRegexp(from, fromParams)
  const fromMatches = re.exec(url)
  if (fromMatches) {
    let toUrl = to

    for (const [index, fromParam] of fromParams.entries()) {
      if (fromMatches && fromMatches[index + 1]) {
        fromParam.value = fromMatches[index + 1]
      }
    }

    /* replace named params */
    for (const fromParam of fromParams) {
      if (typeof fromParam.name === 'string') {
        if (fromParam.value) {
          toUrl = toUrl.replace(new RegExp(`:${fromParam.name}`, 'g'), fromParam.value)
        } else {
          toUrl = url
        }
      }
    }

    /* replace positional params */
    for (const fromParam of fromParams) {
      if (typeof fromParam.name !== 'string') {
        toUrl = url.replace(re, toUrl)
      }
    }

    return toUrl
  } else {
    return url
  }
}

function removeHopSpecificHeaders (headers) {
  const hopSpecificHeaders = ['connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade']
  for (const hopHeader of hopSpecificHeaders) {
    delete headers[hopHeader]
  }
}

function removeCookieAttribute (cookie = '', attr) {
  return cookie.split(';')
    .map(a => a.trim())
    .filter(a => a.toLowerCase() !== attr)
    .join('; ')
}

exports.parseRewriteRules = parseRewriteRules
exports.getTargetUrl = getTargetUrl
exports.removeHopSpecificHeaders = removeHopSpecificHeaders
exports.removeCookieAttribute = removeCookieAttribute
