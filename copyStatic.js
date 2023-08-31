const fs = require("fs");
const path = require("path");

const ASSETS_DIR = "./dist/assets";
const FONTS_DIR = "./dist/fonts";

fs.readdir("dist", (err, files) => {
  if (err) return;

  if (!files.length) return;

  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR);
  }
  if (!fs.existsSync(FONTS_DIR)) {
    fs.mkdirSync(FONTS_DIR);
  }

  files.forEach((file) => {
    const sourcePath = path.join("dist", file);
    var dest;
    var isStatic = false;

    if (file.match(/(.webp)|(.jpg)|(.png)|(.jpeg)/gi)) {
      dest = path.join(ASSETS_DIR, file);
      isStatic = true;
    } else if (file.match(/(.ttf)|(.woff)|(.woff2)/gi)) {
      dest = path.join(FONTS_DIR, file);
      isStatic = true;
    }

    if (isStatic) {
      if (!dest) return;

      fs.rename(sourcePath, dest, (err) => {
        if (err) {
          console.error(`Error copying file '${sourcePath}' to '${dest}':`, err);
        } else {
          console.log(`Copied '${sourcePath}' to '${dest}'`);
        }
      });
    } else {
      var stat = fs.statSync(path.join("dist", file));
      var isDir = stat.isDirectory();
      var pathname = isDir ? path.join("./dist", file, "index.html") : path.join("./dist", file);
      var oneDeep = isDir ? "../" : "";
      fs.readFile(pathname, "utf8", function (err, data) {
        if (err) return console.log(`Error in reading not static file: ${err}`);
        var result;
        if (pathname.endsWith(".html")) {
          result = data.replace(/"\/([a-zA-Z-_]*\.\w+\.(webp|png|jpg|jpeg))"/gim, `"${oneDeep}assets/$1"`);
        } else if (pathname.endsWith("css")) {
          result = data.replace(/(url\()/gim, `url(${oneDeep}./fonts/`);
        } else {
          result = null;
        }

        if (!result) return console.log("Not specified result in reading file. Return.");

        fs.writeFile(pathname, result, "utf8", function (err) {
          if (err) return console.log(`Error in writing not static file: ${err}`);
        });
      });
    }
  });
});
