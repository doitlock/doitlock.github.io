const gulp = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require('gulp-file-include');
const htmlbeautify = require('gulp-html-beautify');
const ejs = require("gulp-ejs");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const del = require("del");
const ghPages = require("gulp-gh-pages");

const SRC_FOLDER = "./src/";
const DIST_FOLDER = "./dist";

const SRC_PATH = {
    ASSETS: {
      FONTS: "./src/assets/font",
      IMAGES: "./src/assets/images",
      SCSS: "./src/assets/scss",
      JS: "./src/assets/js",
    },
    EJS: "./src/ejs",
  },
  DEST_PATH = {
    ASSETS: {
      FONTS: "./dist/assets/font",
      IMAGES: "./dist/assets/images",
      CSS: "./dist/assets/css",
      JS: "./dist/assets/js",
    },
  },
  // 옵션
  OPTIONS = {
    outputStyle: "expanded",
    indentType: "space",
    indentWidth: 4,
    precision: 8,
};

gulp.task("clean", function() {
  return del(["dist"]);
});

gulp.task("cleanDeploy", function() {
  return del([".publish"]);
});

gulp.task('html', () => {
  return gulp.src([ SRC_FOLDER + '**/*.html' ], {
    base: SRC_FOLDER,
    since: gulp.lastRun('html')
  })
    .pipe(gulp.dest(DIST_FOLDER))
    .pipe(browserSync.stream());
});

gulp.task("ejs", function () {
  return gulp
    .src([SRC_FOLDER + "/ejs/**/!(_)*.ejs", SRC_FOLDER + "/*.ejs"])
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(fileinclude({
      prefix: '@@', //사용할땐 앞에@@ 를 붙이면됨
      basepath: '@file',
    }))
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest(DIST_FOLDER))
    .pipe(browserSync.stream());
});

gulp.task("scss:compile", function () {
  return gulp
    .src(SRC_PATH.ASSETS.SCSS + "/*.scss")
    .pipe(sourcemaps.init())
    .pipe(scss(OPTIONS))
    .pipe(autoprefixer()) //최신 css를 구형 브라우저에서 이해할 수 있게 prefix를 만들어줌
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST_PATH.ASSETS.CSS))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
  return gulp
    .src(SRC_PATH.ASSETS.JS + "/**/*.js")
    .pipe(babel())
    .pipe(uglify()) //자바스크립트 코드를 압축해 용량을 줄임
    .pipe(gulp.dest(DEST_PATH.ASSETS.JS))
    .pipe(browserSync.stream());
});


gulp.task("images", () => {
  return gulp
    .src(SRC_PATH.ASSETS.IMAGES + "/**/*.+(png|jpg|jpeg|gif|ico)")
    .pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
    .pipe(browserSync.stream());
});

gulp.task("svg", () => {
  return gulp
    .src(SRC_PATH.ASSETS.IMAGES + "/**/*.svg")
    .pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
    .pipe(browserSync.stream());
});

gulp.task("font", () => {
  return gulp
    .src(SRC_PATH.ASSETS.FONTS + "/**/*.+(eot|otf|svg|ttf|woff|woff2)")
    .pipe(gulp.dest(DEST_PATH.ASSETS.FONTS))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch(SRC_PATH.EJS + "/**/*.ejs", gulp.series("ejs"));
  gulp.watch(SRC_PATH.ASSETS.SCSS + "/**/*.scss", gulp.series("scss:compile"));
  gulp.watch(SRC_PATH.ASSETS.JS + "/**/*.js", gulp.series("js"));
  gulp.watch(SRC_PATH.ASSETS.IMAGES + "/**/*.+(png|jpg|jpeg|gif|ico)",gulp.series("images"));
  gulp.watch(SRC_PATH.ASSETS.IMAGES + "/**/*.svg", gulp.series("svg"));
  gulp.watch(SRC_PATH.ASSETS.FONTS + "/**/*.+(eot|otf|svg|ttf|woff|woff2)",gulp.series("font"));
});

gulp.task("browserSync", function () {
  browserSync.init({
    port: 8080,
    server: {
      baseDir: ["dist"],
      // index: "./html/guide/intro/index.html",
      open: true,
    },
  });
});

gulp.task("gh", () => {
  return gulp.src(DIST_FOLDER + "/**/*")
  .pipe(ghPages());
});

gulp.task(
  "build",
  gulp.series('html',"ejs","scss:compile","js","images","svg","font", gulp.parallel("browserSync", "watch"))
);

gulp.task(
  "default",
  gulp.series("clean", "build", gulp.parallel("browserSync", "watch"))
);

gulp.task(
  "dev", 
  gulp.series("build")
);

gulp.task(
  "deploy", 
  gulp.series("gh", "cleanDeploy")
);