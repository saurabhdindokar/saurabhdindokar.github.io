import * as THREE from "three";

export default function init3D(canvas) {
  if (!canvas) return null;

  const compactDevice = window.matchMedia("(max-width: 700px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !compactDevice,
    alpha: true,
    powerPreference: compactDevice ? "low-power" : "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, compactDevice ? 1.25 : 1.75));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x03060f, 0.0012);

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  camera.position.set(0, 0, 16);

  const world = new THREE.Group();
  scene.add(world);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0, scroll: 0, tScroll: 0 };

  /* ---------- lights ---------- */
  function pointLight(color, x, y, z, intensity = 45) {
    const l = new THREE.PointLight(color, intensity, 80);
    l.position.set(x, y, z);
    scene.add(l);
    return l;
  }
  pointLight(0xff9900, 14, 9, 14);
  pointLight(0x22d3ee, -14, -7, 12);
  pointLight(0x7c3aed, 0, -11, -13);

  /* ---------- star field ---------- */
  const STAR_COUNT = compactDevice ? 520 : 1200;
  const starGeo = new THREE.BufferGeometry();
  {
    const pos = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 300;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 300;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  }
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ color: 0xbfd4ff, size: 0.22, transparent: true, opacity: 0.8, sizeAttenuation: true })
  );
  scene.add(stars);

  /* ---------- network topology ---------- */
  const NODE_COUNT = compactDevice ? 24 : 38;
  const nodePositions = [];
  const nodeColors = [0xff9900, 0x22d3ee, 0x7c3aed, 0x34d399];
  const nodes = new THREE.Group();
  world.add(nodes);

  const nodeMeshes = [];
  const RADIUS = 6.2;

  function randSphere() {
    const u = Math.random() * 2 - 1;
    const theta = Math.random() * Math.PI * 2;
    const r = RADIUS * (0.45 + Math.random() * 0.55);
    const s = Math.sqrt(1 - u * u);
    return new THREE.Vector3(r * s * Math.cos(theta), r * u, r * s * Math.sin(theta));
  }

  const points = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const p = randSphere();
    nodePositions.push(p);
    points.push(p);
    const color = nodeColors[i % nodeColors.length];
    const size = 0.22 + Math.random() * 0.3;
    const geo = new THREE.SphereGeometry(size, 14, 14);
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 1.6,
      roughness: 0.2,
      metalness: 0.1
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(p);
    nodes.add(mesh);
    nodeMeshes.push(mesh);
  }

  const edges = [];
  for (let i = 0; i < points.length; i++) {
    const dists = points
      .map((p, j) => ({ j, d: p.distanceTo(points[i]) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);
    for (const { j } of dists) {
      if (j > i) {
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([points[i], points[j]]),
          new THREE.LineBasicMaterial({ color: 0x4a68a8, transparent: true, opacity: 0.26 })
        );
        edges.push({ a: i, b: j, line });
        world.add(line);
      }
    }
  }

  /* ---------- data packets ---------- */
  const packets = [];
  const PACKET_COUNT = compactDevice ? 10 : 22;
  for (let i = 0; i < PACKET_COUNT; i++) {
    const geo = new THREE.SphereGeometry(0.09 + Math.random() * 0.08, 8, 8);
    const color = nodeColors[i % nodeColors.length];
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const mesh = new THREE.Mesh(geo, mat);
    const edge = edges[Math.floor(Math.random() * edges.length)];
    packets.push({ mesh, edge, t: Math.random(), speed: 0.0016 + Math.random() * 0.003 });
    world.add(mesh);
  }

  /* ---------- rings + core ---------- */
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.14, wireframe: true });
  const ringGeo = new THREE.TorusGeometry(RADIUS + 0.9, 0.05, 8, 90);
  const ring1 = new THREE.Mesh(ringGeo, ringMat.clone());
  const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
  ring2.material = ringMat.clone();
  ring2.material.color.setHex(0xff9900);
  ring1.rotation.x = Math.PI / 2.2;
  ring2.rotation.y = Math.PI / 3;
  world.add(ring1, ring2);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.2, 1),
    new THREE.MeshBasicMaterial({ color: 0xff9900, wireframe: true, transparent: true, opacity: 0.22 })
  );
  world.add(core);

  const innerGlow = new THREE.Mesh(
    new THREE.SphereGeometry(1.1, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0xff9900, transparent: true, opacity: 0.12 })
  );
  world.add(innerGlow);

  /* ---------- AWS / K8s / DevOps logo cloud (sprites) ---------- */
  const LOGO_DIR = new URL("../logos/", import.meta.url).href;
  const LOGO_NAMES = [
    "aws", "kubernetes", "terraform", "docker", "jenkins",
    "github", "grafana", "prometheus", "linux", "nginx", "git", "ansible"
  ];
  const logoSprites = [];
  const logoGroup = new THREE.Group();
  world.add(logoGroup);

  function makeLogoTexture(src, onReady) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const S = 256;
      const c = document.createElement("canvas");
      c.width = S;
      c.height = S;
      const ctx = c.getContext("2d");
      const glow = ctx.createRadialGradient(S / 2, S / 2, 8, S / 2, S / 2, S / 2);
      glow.addColorStop(0, "rgba(255,153,0,0.32)");
      glow.addColorStop(0.45, "rgba(15,23,42,0.55)");
      glow.addColorStop(1, "rgba(15,23,42,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, S, S);
      ctx.beginPath();
      ctx.arc(S / 2, S / 2, 96, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(8,14,30,0.82)";
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(255,153,0,0.55)";
      ctx.stroke();
      const d = 150;
      ctx.drawImage(img, (S - d) / 2, (S - d) / 2, d, d);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      onReady(tex);
    };
    img.src = src;
  }

  const LOGO_COUNT = compactDevice ? 14 : 30;
  for (let i = 0; i < LOGO_COUNT; i++) {
    const name = LOGO_NAMES[i % LOGO_NAMES.length];
    const tex = new THREE.Texture();
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      opacity: 0.92,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(mat);
    const u = Math.random() * 2 - 1;
    const theta = Math.random() * Math.PI * 2;
    const r = 13 + Math.random() * 14;
    const s = Math.sqrt(1 - u * u);
    const base = new THREE.Vector3(r * s * Math.cos(theta), r * u, r * s * Math.sin(theta));
    sprite.position.copy(base);
    sprite.userData.base = base;
    sprite.userData.phase = Math.random() * Math.PI * 2;
    sprite.userData.drift = 0.3 + Math.random() * 0.7;
    sprite.userData.scale = 2.6 + Math.random() * 1.9;
    sprite.scale.setScalar(sprite.userData.scale);
    sprite.material.opacity = 0.45 + Math.random() * 0.5;
    logoGroup.add(sprite);
    logoSprites.push(sprite);
    makeLogoTexture(LOGO_DIR + name + ".svg", (t) => {
      sprite.material.map = t;
      sprite.material.needsUpdate = true;
    });
  }

  /* ---------- input ---------- */
  window.addEventListener("pointermove", (e) => {
    mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ty = -((e.clientY / window.innerHeight) * 2 - 1);
  });
  window.addEventListener("scroll", () => {
    mouse.tScroll = Math.min(window.scrollY / window.innerHeight, 1.6);
  }, { passive: true });

  /* ---------- resize ---------- */
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  /* ---------- animation loop ---------- */
  let t = 0;
  const clock = new THREE.Clock();

  let frameId = 0;
  function animate() {
    frameId = 0;
    if (document.hidden) return;
    frameId = requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    t += dt;

    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    mouse.scroll += (mouse.tScroll - mouse.scroll) * 0.06;

    world.rotation.y += dt * 0.09;
    world.rotation.x = mouse.y * 0.38;
    world.rotation.z = mouse.x * 0.13;

    stars.rotation.y += dt * 0.012;
    stars.rotation.x = mouse.y * 0.06;

    camera.position.x = mouse.x * 1.7;
    camera.position.y = mouse.y * 1.2;
    camera.position.z = 16 + mouse.scroll * 6;
    camera.lookAt(0, 0, 0);

    ring1.rotation.z += dt * 0.35;
    ring2.rotation.z += dt * 0.22;
    core.rotation.y += dt * 0.3;
    core.rotation.x += dt * 0.16;
    innerGlow.scale.setScalar(1 + Math.sin(t * 1.4) * 0.08);

    for (let i = 0; i < nodeMeshes.length; i++) {
      const m = nodeMeshes[i];
      m.scale.setScalar(1 + Math.sin(t * 1.6 + i) * 0.22);
    }

    for (const p of packets) {
      p.t += p.speed;
      if (p.t >= 1) {
        p.t = 0;
        p.edge = edges[Math.floor(Math.random() * edges.length)];
      }
      const a = nodePositions[p.edge.a];
      const b = nodePositions[p.edge.b];
      p.mesh.position.lerpVectors(a, b, p.t);
      const fade = Math.sin(p.t * Math.PI) * 0.8 + 0.2;
      p.mesh.material.opacity = fade;
      p.mesh.scale.setScalar(1 + fade * 1.6);
    }

    for (const sp of logoSprites) {
      const b = sp.userData.base;
      sp.position.set(b.x, b.y, b.z);
      sp.position.y += Math.sin(t * sp.userData.drift + sp.userData.phase) * 1.6;
      sp.position.x += Math.cos(t * 0.6 + sp.userData.phase) * 0.8;
    }

    renderer.render(scene, camera);
  }
  if (reducedMotion) {
    renderer.render(scene, camera);
  } else {
    animate();
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !reducedMotion && !frameId) animate();
  });

  return {
    mouse: () => ({ x: mouse.x, y: mouse.y }),
    destroy: () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      renderer.dispose();
    }
  };
}
