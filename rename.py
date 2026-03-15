from pathlib import Path

path = input("Select dir in assets: ")
ext = input("Select extension: ")

for path in Path(f"assets/{path}").rglob(f"*.{ext}"):
    prefix = path.name.split("-")[0]
    path.rename(Path(f"/home/keyboard1000n17/Documents/OSPedia/assets/macos/{prefix}/{prefix}-wallpaper.{ext}"))

    print(path.name)
