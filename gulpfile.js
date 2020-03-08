const    gulp = require('gulp'),
         rename = require('gulp-rename'),
         sass = require('gulp-sass'),
         autoprefixer = require('gulp-autoprefixer'),
         sourcemaps = require('gulp-sourcemaps');

function css_style(done) {

  gulp.src('./scss/**/*.scss')       // отсюда берем файл
      .pipe(sourcemaps.init())        // инициализация плагина
     .pipe(sass({                     // конвертация из SASS в СSS
       errorLogToConsole: true,       // вывод ошибок в консоль
        outputStyle: 'compressed'     // минифицировать CSS code

     }))
      .on('error', console.error.bind(console))  // обработчик события
      .pipe(autoprefixer({
          cascade: false
      }))
     .pipe(rename({suffix: '.min'}) ) // rename - отдельно подключаемый плагин, через npm install --save-dev gulp-rename
     .pipe(sourcemaps.write('./'))
     .pipe( gulp.dest('./css/') );    // pipe() - добавление задачи к уже существующей, выполняется как Promise, последовательно

    done();
}

        function print (done){
        console.log('Horray!');
            done()
        }

        function watchSass(){  // параметр не обязателен
    gulp.watch('./scss/**/*', css_style); // 1. какие файлы отслеживать 2. какую при этом применять функцию
        }



    gulp.task('default', gulp.series(print, watchSass)); // прописывать задачи можно в том порядке в кот. нужно их вызывать


// gulp.task(css_style);
// exports.default = defaultSomeTask;
