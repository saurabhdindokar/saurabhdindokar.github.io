(function () {
  var current = document.currentScript;
  if (!current) return;

  var scriptUrl = new URL(current.src, window.location.href);
  var base = scriptUrl.pathname.replace(/\/assets\/3d\/embed-3d\.js$/i, "/");
  if (!base.endsWith("/")) base += "/";

  function resolve(path) {
    return new URL(path, "http://placeholder" + base).pathname;
  }

  /* 1. The portfolio uses one consistent dark presentation. */
  document.documentElement.setAttribute("data-theme", "dark");
  try { localStorage.removeItem("theme"); } catch (_) {}
  document.body && document.body.setAttribute("data-3d-embed", "true");

  /* 2. Inject theme CSS */
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = resolve("assets/3d/portfolio-3d.css");
  document.head.appendChild(css);

  /* 3. Inject 3D canvas + vignette */
  var canvas = document.createElement("canvas");
  canvas.id = "scene3d";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);

  var vignette = document.createElement("div");
  vignette.className = "overlay-vignette";
  vignette.setAttribute("aria-hidden", "true");
  document.body.appendChild(vignette);

  /* 4. Inject Three.js import map */
  if (!document.querySelector('script[type="importmap"]')) {
    var map = document.createElement("script");
    map.type = "importmap";
    map.textContent = JSON.stringify({
      imports: {
        three: "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
      }
    });
    document.head.appendChild(map);
  }

  /* 5. Keep the 3D canvas aligned with the site presentation. */
  document.body.setAttribute("data-3d-theme", "dark");

  /* 6. Boot the 3D scene */
  import(resolve("assets/3d/main.js"))
    .then(function (mod) {
      mod.default(canvas);
    })
    .catch(function (err) {
      console.error("[portfolio-3d] failed to start:", err);
    });
})();
