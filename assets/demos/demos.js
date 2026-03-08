let screen = document.querySelector("div.screen-container");

function createEmulator(diskType, diskUrl) {
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
    autostart: false,
  };
  config[diskType] = { url: diskUrl };
  return new V86(config);
}

window.addEventListener("load", () => {
  window.emulator = createEmulator(window.disk, window.imagePath);

  document.querySelector("button.stop").addEventListener("click", (e) => {
    e.preventDefault();
    emulator.stop();
    emulator.destroy();
    let temp = "";
    [screen.innerHTML, temp] = ["", screen.innerHTML];
    screen.innerHTML = temp;
  });

  document.querySelector("button.start").addEventListener("click", (e) => {
    e.preventDefault();
    emulator = createEmulator(window.disk, window.imagePath);
    console.log(emulator);
    emulator.add_listener("emulator-ready", () => {
      emulator.run();
      screen.addEventListener("click", () => {
        screen.requestPointerLock();
      });
    });
  });
});
