// Gulp의 기본 모듈. Gulp는 파일을 읽고 변환하며 특정 작업을 수행할 수 있는 스트림 기반 빌드 시스템

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
const ghPages = require("gh-pages");
const path = require("path");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

const SRC_FOLDER = "./src";
const DIST_FOLDER = "./dist";

const SRC_PATH = {
  ASSETS: {
    IMAGES: "./src/assets/images",
    SCSS: "./src/assets/scss",
    JS: "./src/assets/js",
  },
  EJS: path.join(SRC_FOLDER, "ejs"),
};

const DEST_PATH = {
  ASSETS: {
    IMAGES: "./dist/assets/images",
    CSS: "./dist/assets/css",
    JS: "./dist/assets/js",
  },
};

// SCSS 컴파일 옵션
const OPTIONS = {
  outputStyle: "compressed",
  indentType: "space",
  indentWidth: 0,
  precision: 8,
};

const clean = () => del([DIST_FOLDER]);
const cleanDeploy = () => del([".publish"]);

const gh = (done) => {
  ghPages.publish(path.join(__dirname, DIST_FOLDER), {
    branch: 'gh-pages'
  }, (err) => {
    if (err) {
      console.error('Deploy failed:', err);
    } else {
      console.log('Deploy succeeded.');
    }
    done();
  });
};

function html() {
  return gulp.src([SRC_FOLDER + '**/*.html'], {
      base: SRC_FOLDER,
      since: gulp.lastRun(html)
    })
    .pipe(gulp.dest(DIST_FOLDER))
    .pipe(browserSync.stream());
}

function ejsCompile() {
  return gulp
    .src([SRC_PATH.EJS + "/**/!(_)*.ejs", SRC_FOLDER + "/*.ejs"])
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(fileinclude({
      prefix: '@@', // 사용할땐 앞에@@ 를 붙이면됨
      basepath: '@file',
    }))
    .pipe(htmlbeautify({ indentSize: 4 }))
    .pipe(gulp.dest(DIST_FOLDER))
    .pipe(browserSync.stream());
}

function scssCompile() {
  return gulp
    .src(SRC_PATH.ASSETS.SCSS + "/*.scss")
    .pipe(sourcemaps.init())
    .pipe(scss(OPTIONS))
    .pipe(autoprefixer()) // 최신 css를 구형 브라우저에서 이해할 수 있게 prefix를 만들어줌
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST_PATH.ASSETS.CSS))
    .pipe(browserSync.stream());
}

function jsCompile() {
  return gulp
    .src(SRC_PATH.ASSETS.JS + "/**/*.js")
    .pipe(babel())
    .pipe(uglify()) // 자바스크립트 코드를 압축해 용량을 줄임
    .pipe(gulp.dest(DEST_PATH.ASSETS.JS))
    .pipe(browserSync.stream());
}

function images() {
  return gulp
    .src(SRC_PATH.ASSETS.IMAGES + "/**/*.+(png|jpg|jpeg|gif|ico)")
    // .pipe(newer(DEST_PATH.ASSETS.IMAGES))
    // .pipe(imagemin({verbose:true}))
    .pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
    .pipe(browserSync.stream());
}

function svg() {
  return gulp
    .src(SRC_PATH.ASSETS.IMAGES + "/**/*.svg")
    .pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
    .pipe(browserSync.stream());
}

function watchFiles() {
  gulp.watch(SRC_PATH.EJS + "/**/*.ejs", ejsCompile);
  gulp.watch(SRC_PATH.ASSETS.SCSS + "/**/*.scss", scssCompile);
  gulp.watch(SRC_PATH.ASSETS.JS + "/**/*.js", jsCompile);
  gulp.watch(SRC_PATH.ASSETS.IMAGES + "/**/*.+(png|jpg|jpeg|gif|ico)", images);
  gulp.watch(SRC_PATH.ASSETS.IMAGES + "/**/*.svg", svg);
}

function browserSyncInit() {
  browserSync.init({
    port: 9201,
    server: {
      baseDir: ["dist"],
      open: true,
    },
  });
}

const prepare = gulp.series(clean);
const build = gulp.series(prepare, gulp.parallel(html, ejsCompile, scssCompile, jsCompile, images, svg));
const watch = gulp.parallel(watchFiles, browserSyncInit);

exports.clean = clean;
exports.cleanDeploy = cleanDeploy;
exports.prepare = prepare;
exports.build = build;
exports.default = gulp.series(build, watch);
exports.dev = gulp.series(build, watch);
exports.deploy = gulp.series(build, gh, cleanDeploy);
