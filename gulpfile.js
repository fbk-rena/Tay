//call and init gulp
const gulp = require("gulp");
const sass = require("gulp-sass");

//point of origin to structure the pipes
const origin = {
    html: './src/**/*.html',
    js: './src/js/*.js',
    scss: './src/scss/*.scss'
}

//point of destination to structure the pipes
const dist = {
    html: './dist/',
    js: './dist/js/',
    css: './dist/css/'
}

//Render all the changes in HTML to production 
gulp.task("processHTML", function () {
    gulp.src(origin.html)
        .pipe(gulp.dest(dist.html))
    console.log("Html modified")
});

//Render all the changes in JS to production 
gulp.task("processJS", function () {
    gulp.src(origin.js)
        .pipe(gulp.dest(dist.js))
    console.log("JS modified")
});

//Change SCSS to CSS and render all the changes to production 
gulp.task("processCSS", function () {
    gulp.src(origin.scss)
        .pipe(sass({
                outputStyle: 'expanded'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest(dist.css))
    console.log("CSS adjusted")
});

//Execute all the task in one command
gulp.task("processAll",["processHTML","processJS","processCSS"]);