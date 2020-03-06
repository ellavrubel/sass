const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function copy(done) {

  gulp.src('./SCSS/style.scss')
     .pipe(rename({suffix: '.min'}) ); // rename - отдельно подключаемый плагин, через npm install --save-dev gulp-rename
     // .pipe( gulp.dest('./CSS/') ); //    pipe() - добавление задачи к уже существующей, выполняется как Promise, последовательно

    done();
}
gulp.task(copy);



// exports.default = defaultSomeTask;
