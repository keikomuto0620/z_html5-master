// autoprefixer, compass, reload
var gulp = require('gulp');
var compass = require('gulp-compass')
var browser = require("browser-sync");
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var reload = browser.reload;
var aigis = require("gulp-aigis");
var rimraf = require('rimraf');

//server
gulp.task('server', function() {
	browser({
		server: {
			baseDir: "./"
		},
		port: 9900
	});
});

gulp.task('clean', function (cb) {
  rimraf('./styleguide', cb);
});

gulp.task("aigis", function() {
    gulp.src("./aigis/aigis_config.yml")
        .pipe(aigis());
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
			browsers: ["last 2 versions",'ie 11','ie 10'
			 // ,"Android >= 4","ios_saf >= 8"
			 ],
			cascade: false
		}))
	.pipe(gulp.dest('css'));;
});

//task
gulp.task("default", ['server'
	// ,'clean'
	],
	function() {
	gulp.watch('**/scss/**/*.scss', ['compass']);
	// gulp.watch(['**/scss/**/*.scss','**/scss/**/*.scss','**/*.md'], ['aigis']);
	// gulp.watch(['**/styles/style.css','*.md']);
	gulp.watch([
		'**/*.html',
		'**/*.jpg',
		'**/*.png',
		'**/*.gif',
		'**/*.js',
		'**/*.css'
	], reload);
});