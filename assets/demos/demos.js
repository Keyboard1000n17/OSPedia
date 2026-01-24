let screen = document.querySelector("div.screen_container");
async function createEmulator(diskType, diskUrl) {
  const config = {
    screen_container: screen,
    memory_size: 64 * 1024 * 1024,
    vga_memory_size: 1 * 1024 * 1024,
    bios: {
      url: "./seabios.bin",
    },
    vga_bios: {
      url: "./vgabios.bin",
    },
    wasm_path: "./v86.wasm",
    autostart: true,
  };
  config[diskType] = { url: diskUrl };
  return new V86(config);
}

window.addEventListener("load", async () => {
  window.emulator = await createEmulator(window.disk, window.imagePath);
  context = new AudioContext();
  context.resume();

  screen.addEventListener("click", () => {
    screen.requestPointerLock();
  });

  document.querySelector("button.stop").addEventListener("click", (e) => {
    e.preventDefault();
    screen.innerHTML = "";
    emulator.stop();
    emulator.destroy();
    emulator = null;
  });

  document.querySelector("button.start").addEventListener("click", (e) => {
    e.preventDefault();
    const newScreen = document.createElement("div");
    newScreen.className = "screen_container";
    newScreen.innerHTML =
      '<div style="white-space: pre; font: 14px monospace; line-height: 18px"></div><canvas style="display: none; width: 100%; height: 100%"></canvas>';
    screen.insertAdjacentElement("afterend", newScreen);
    screen.remove();
    screen = newScreen;
    emulator = createEmulator(window.disk, window.imagePath);
  });
});
