/* GitVelo landing page — language switch + latest release links */
(function () {
  "use strict";

  var REPO = "chdaliu/git-velo-app";
  var RELEASES = "https://github.com/" + REPO + "/releases";
  var API = "https://api.github.com/repos/" + REPO + "/releases/latest";
  var LANG_KEY = "gitvelo:lang";
  var RELEASE_KEY = "gitvelo:latest-release";
  var RELEASE_TTL = 10 * 60 * 1000;

  /* ---------------------------- language ---------------------------- */

  var root = document.documentElement;
  var toggle = document.getElementById("lang-toggle");

  function detectLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {
      /* storage blocked */
    }
    var nav = (navigator.language || "zh").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

    var title = root.getAttribute("data-title-" + lang);
    if (title) document.title = title;

    document.querySelectorAll("[data-zh]").forEach(function (el) {
      var text = el.getAttribute("data-" + lang);
      if (text) el.textContent = text;
    });

    if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "zh" ? "en" : "zh";
      applyLang(next);
      try {
        localStorage.setItem(LANG_KEY, next);
      } catch (e) {
        /* storage blocked */
      }
    });
  }

  applyLang(detectLang());

  /* -------------------------- latest release ------------------------ */

  var ARCH_ARM = /(arm64|aarch64|apple[-_ ]?silicon|\bm1\b)/i;
  var ARCH_INTEL = /(x64|amd64|x86[_-]?64|intel)/i;

  function firstWhere(list, test) {
    for (var i = 0; i < list.length; i++) {
      if (test(list[i])) return list[i];
    }
    return null;
  }

  function pickByExt(assets, re) {
    return assets.filter(function (asset) {
      return re.test(asset.name);
    });
  }

  /* Map download buttons to release assets; null means "not shipped". */
  function resolveAssets(assets) {
    var dmgs = pickByExt(assets, /\.dmg$/i);
    var singleDmg = dmgs.length === 1 ? dmgs[0] : null;

    return {
      "mac-arm64": singleDmg || firstWhere(dmgs, function (asset) {
        return ARCH_ARM.test(asset.name);
      }),
      "mac-x64": singleDmg || firstWhere(dmgs, function (asset) {
        return ARCH_INTEL.test(asset.name) || !ARCH_ARM.test(asset.name);
      }),
      checksums: firstWhere(assets, function (asset) {
        return /sha256/i.test(asset.name);
      })
    };
  }

  function applyRelease(release) {
    if (!release) return;

    if (release.tag_name) {
      document.querySelectorAll("[data-latest-version]").forEach(function (el) {
        el.textContent = release.tag_name;
        el.hidden = false;
      });
    }

    var links = resolveAssets(release.assets || []);
    var fallback = release.html_url || RELEASES + "/latest";

    document.querySelectorAll("[data-asset]").forEach(function (el) {
      var asset = links[el.getAttribute("data-asset")];
      el.setAttribute("href", asset ? asset.browser_download_url : fallback);
    });
  }

  function cachedRelease() {
    try {
      var raw = sessionStorage.getItem(RELEASE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || typeof data.at !== "number") return null;
      if (Date.now() - data.at > RELEASE_TTL) return null;
      return data.release;
    } catch (e) {
      return null;
    }
  }

  function cacheRelease(release) {
    try {
      sessionStorage.setItem(RELEASE_KEY, JSON.stringify({ at: Date.now(), release: release }));
    } catch (e) {
      /* storage blocked */
    }
  }

  function loadRelease() {
    var cached = cachedRelease();
    if (cached) {
      applyRelease(cached);
      return;
    }

    fetch(API, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (res) {
        return res.ok ? res.json() : null;
      })
      .then(function (release) {
        if (!release || !release.tag_name) return;
        cacheRelease(release);
        applyRelease(release);
      })
      .catch(function () {
        /* offline or rate limited: keep the release page links */
      });
  }

  loadRelease();
})();
