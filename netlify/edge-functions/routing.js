export default function router(request) {
  const url = new URL(request.url);
  const path = url.pathname.split("/");

  if (path[1] === "macos") {
    // prettier-ignore

    const map = {
      "10.0": "cheetah",
      "10.1": "puma",
      "10.2": "jaguar",
      "10.3": "panther",
      "10.4": "tiger",
      "10.5": "leopard",
      "10.6": "snow-leopard",
      "10.7": "lion",
      "10.8": "mountain-lion",
      "10.9": "mavericks",
      "10.10": "yosemite",
      "10.11": "el-capitan",
      "10.12": "sierra",
      "10.13": "high-sierra",
      "10.14": "mojave",
      "10.15": "catalina",
      "11": "big-sur",
      "12": "monterey",
      "13": "ventura",
      "14": "sonoma",
      "15": "sequoia",
      "26": "tahoe"
    }

    if (map[path[2]]) {
      return Response.redirect(`${url.origin}/macos/${map[path[2]]}/`, 301);
    }
  } else if (path[1] === "windows" || path[1] === "win") {
    // prettier-ignore

    const map = {
      "1": "windows-1.0",
      "1.0": "windows-1.0",
      "2": "windows-2.0",
      "2.0": "windows-2.0",
      "3": "windows-3.0",
      "3.0": "windows-3.0",
      "31": "windows-3.1",
      "3.1": "windows-3.1",
      "95": "windows-95",
      "nt-4.0": "windows-nt-4.0",
      "nt-4": "windows-nt-4.0",
      "nt-40": "windows-nt-4.0",
      "98": "windows-98",
      "2000": "windows-2000",
      "2k": "windows-2000",
      "me": "windows-me",
      "xp": "windows-xp",
      "vista": "windows-vista",
      "7": "windows-7",
      "8": "windows-8",
      "8.1": "windows-8.1",
      "81": "windows-8.1",
      "10": "windows-10",
      "11": "windows-11"
    }

    if (map[path[2]]) {
      return Response.redirect(`${url.origin}/windows/${map[path[2]]}/`, 301);
    }
  }

  return;
}

export const config = { path: "/*" };
