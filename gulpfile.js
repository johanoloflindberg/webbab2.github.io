// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');

var scripts = [
    'assets/js/vendor/jquery.1.11.2.js',
    'assets/js/vendor/ie10-viewport-bug-workaround.js',
    'assets/js/plugins.js',
    'assets/js/main.js'
];

// Lint Task
gulp.task('lint', function() {
    return gulp.src('assets/js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('resources/sass/**/*.scss')
        .pipe(sass({sourcemap: false, style: 'compressed'}))
        .pipe(prefix("last 2 versions", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({ message: 'Sass file compiled!' }));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(scripts)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
        .pipe(notify({ message: 'Scripts compiled!' }));
});

// Optimize images
gulp.task('images', function () {
    gulp.src('public/img/**/*.{png,gif,jpg}')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/js/main.js', ['lint', 'scripts']);
    gulp.watch('resources/sass/**/*.scss', ['sass']);
});



// Default Task
gulp.task('default', ['sass','scripts']);
