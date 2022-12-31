const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

const { SRC_PATH, DIST_PATH } = require('./gulp.config');

sass.compiler = require('node-sass');

task('clean', () => {
    return src(`${DIST_PATH}/**/*`, { read: false })
        .pipe(rm());
});

task('copy:html', () => {
    return src(`${SRC_PATH}/*.html`).pipe(dest(`${DIST_PATH}`)).pipe(reload({stream: true}));
});

task('copy:img', () => {
    return src(`${SRC_PATH}/img/**/*`)
        .pipe(dest(`${DIST_PATH}/img`));
});

task('styles', () => {
    return src(`${SRC_PATH}/css/main.scss`)
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(concat('main.scss'))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(env === 'dev',autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        })))
        .pipe(gulpif(env === 'prod', cleanCSS()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(dest(`${DIST_PATH}/css`))
        .pipe(reload({ stream: true }));
});

task('scripts', () => {
    return src(`${SRC_PATH}/js/*.js`)
        .pipe(gulpif(env === 'prod', babel({
            presets: ['@babel/env']
        })))
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(dest(`${DIST_PATH}/js`))
        .pipe(reload({ stream: true }));
});

task('social-icons', () => {
    return src(`${SRC_PATH}/img/social-icons/*.svg`)
        .pipe(svgo({
            plugins: [
                {
                    removeAttrs: {
                        attrs: "(fill|stroke|style|width|height|data.*)"
                    }
                }
            ]
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../social-icons.svg"
                }
            }
        }))
        .pipe(dest(`${DIST_PATH}/img/social-icons`));
});

task('server', () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        //open: false
    });
});

task('watch', () => {
    watch(`./${SRC_PATH}/css/**/*.scss`, series('styles'));
    watch(`./${SRC_PATH}/*.html`, series('copy:html'));
    watch(`./${SRC_PATH}/js/*.js`, series('scripts'));
    watch(`./${SRC_PATH}/img/social-icons/*.svg`, series('social-icons'));
    watch(`${SRC_PATH}/img/**/*`, series('copy:img'));
})



task('default',
    series('clean',
        parallel('copy:html', 'styles', 'copy:img', 'scripts', 'social-icons'),
        parallel('watch', 'server')));
    
task('build',
    series('clean',
        parallel('copy:html', 'styles', 'copy:img', 'scripts', 'social-icons')));

