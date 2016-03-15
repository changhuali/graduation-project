var gulp = require('gulp');
var del  = require('del');

gulp.task('app_js', function(){
  gulp.src('./dist/assets/app/js/*.js')
      .pipe(gulp.dest('./dist/assets/app/js'));
})

gulp.task("app_css", function(){

})

gulp.task("app_font", function(){

})

gulp.task("clean", function(){
  del('./dist/**/*');
})

gulp.task("build", ["app_js", "app_css", "app_font"]);
