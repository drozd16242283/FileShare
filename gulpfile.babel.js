import gulp from 'gulp'
import cleanCSS from 'gulp-clean-css'
import gulpIf from 'gulp-if'
import rev from 'gulp-rev'
import del from 'del'

const PUBLIC_DIR = './app/public'
const PATHS = {
    entryPoint: `${PUBLIC_DIR}/build/bundle.js`,
    buildDest:  `${PUBLIC_DIR}/build`,
    bundleDest: `${PUBLIC_DIR}/js`,
    styleDest:  `${PUBLIC_DIR}/css`
}

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';




gulp.task('minify-css', () => {
    return gulp.src(`${PATHS.styleDest}/*.css`)
        .pipe(cleanCSS())
        .pipe(gulp.dest(`${PATHS.styleDest}/styles`))
})


gulp.task('watch', () => {
    gulp.watch(`${PATHS.styleDest}/*.css`, ['minify-css'])
})


gulp.task('default', ['watch'])
