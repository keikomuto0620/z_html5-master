// autoprefixer, compass, reload
var gulp = require('gulp');
var compass = require('gulp-compass')
var browser = require("browser-sync");
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var styledocco = require('gulp-styledocco');
var reload = browser.reload;
//server
gulp.task('server', function() {
	browser({
		server: {
			baseDir: "./"
		},
		port: 9900
	});
});
// compass
gulp.task('compass', function() {
	gulp.src('./scss/*.scss')
	.pipe(plumber())
	.pipe(compass({
		config_file: './config.rb',
		sass: 'scss',
		css: 'css'
	}))
	.pipe(autoprefixer({
			// ☆IEは9以上、Androidは4以上、iOS Safariは8以上
			// その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
			browsers: ["last 2 versions", "Android >= 4","ios_saf >= 8"],
			cascade: false
		}))
	.pipe(gulp.dest('css'));;
});

//styledocco
gulp.task('styledocco', function () {
  gulp.src('**/styles/style.css')
    .pipe(styledocco({
      out: 'docs',
      name: 'style guide'
    }));
});
//task
gulp.task("default", ['server'], function() {
	gulp.watch('**/scss/**/*.scss', ['compass']);
	// gulp.watch(['**/styles/style.css','*.md'], ['styledocco']);
	// gulp.watch(['**/styles/style.css','*.md']);
	// gulp.watch([
	// 	'**/*.html',
	// 	'**/*.jpg',
	// 	'**/*.png',
	// 	'**/*.gif',
	// 	'**/*.js',
	// 	'**/*.css'
	// ], reload);
});