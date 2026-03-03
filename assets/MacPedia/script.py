import os as os

for file in os.listdir("."):
    if os.path.isfile(os.path.join(".", file)) and file != "home.html" and file.split(".")[-1] == "html":
        os.system(f"pandoc -f html -t markdown {file} -o ./md/{'.'.join(file.split('.')[0:-1])}.md")
        print(f"Converted {file} to markdown")
