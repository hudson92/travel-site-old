var gulp = require ('gulp'),
postcss = require ('gulp-postcss'),
autoprefixer = require ('autoprefixer'),
cssvars = require ('postcss-simple-vars'),
nested = require ('postcss-nested'),
cssImport = require ('postcss-import'),
mixins = require ('postcss-mixins');
    
gulp.task('styles', function(){
    /*This is moving the code along the pipe - from source to destination - then adding in transformative programs to change the code we originally generated*/ /*This function needs return at the start so gulp is aware when it completes*/
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) /*This is where the transformation of the code automates - add in any gulp plugins here to apply the postcss*/
        .on('error', function (errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })  /*Above task provides an error message in the console while keeping gulp watch running*/
        .pipe(gulp.dest('./app/temp/styles'));
});