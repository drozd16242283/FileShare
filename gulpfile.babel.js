import gulp from 'gulp'
import cleanCSS from 'gulp-clean-css'
import gulpIf from 'gulp-if'
import del from 'del'

const PUBLIC_DIR = './app/public'
const PATHS = {
    entryPoint:   `${PUBLIC_DIR}/build/bundle.js`,
    buildFolder:  `${PUBLIC_DIR}/build`,
    scriptFolder: `${PUBLIC_DIR}/js`,
    stylesFolder:  `${PUBLIC_DIR}/css`
}

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';



gulp.task('cleanCssDir', () => {
    return del(`${PATHS.stylesFolder}/styles/`)
})

gulp.task('minify-css', () => {
    return gulp.src(`${PATHS.stylesFolder}/*.css`)
        .pipe(cleanCSS())
        .pipe(gulp.dest(`${PATHS.stylesFolder}/styles`))
})


gulp.task('script', () => {
    return gulp.src(PATHS.entryPoint)
        .pipe(gulp.dest(PATHS.scriptFolder))
})

gulp.task('cleanScriptDir', () => {
    return del(PATHS.buildFolder)
})

/*gulp.task('watch', () => {
    gulp.watch(`${PATHS.stylesFolder}/*.css`, ['minify-css'])
})*/

gulp.task('buildCss', ['cleanCssDir', 'minify-css'])
gulp.task('buildJS', ['script', 'cleanScriptDir'])

gulp.task('watch', () => {
    gulp.watch(`${PATHS.stylesFolder}/*.css`, ['buildCss'])
    //gulp.watch(`${PATHS.entryPoint}`, ['buildJS'])
})

gulp.task('default', ['watch'])
