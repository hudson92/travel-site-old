var gulp = require ('gulp'),
watch = require ('gulp-watch'),
browserSync = require ('browser-sync').create(); /*the '.create' add on means only this part of the browser sync plugin will load*/

gulp.task('watch', function(){
    
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    
   watch('./app/index.html', function(){
      browserSync.reload(); 
   });
    /*These two functions are watching the HTML & CSS files and will fire whenever a change is saved to either doc*/
    watch('./app/assets/styles/**/*.css', function(){
       gulp.start('cssInject'); 
    });
});

gulp.task('cssInject', ['styles'], function(){
   return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

/*the CSS inject task is set up so that the 'styles' task must run first - this means the css is all run through postCSS to the final styles file before it is injected into the browser*/