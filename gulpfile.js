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
    'public/js/libs/typeahead.bundle.js',
    'public/js/libs/jquery.unslider.min.js',
    'public/js/plugins.js',
    'public/js/ownit.js'
];

// Lint Task
gulp.task('lint', function() {
    return gulp.src('public/js/ownit.js')
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
        .pipe(gulp.dest('public/js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
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
    //gulp.watch('public/js/*.js', ['lint', 'scripts']);
    gulp.watch('resources/sass/**/*.scss', ['sass']);
});



// Default Task
gulp.task('default', ['sass','scripts']);
