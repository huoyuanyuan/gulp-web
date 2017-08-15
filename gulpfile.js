var gulp = require("gulp");
var connect = require("gulp-connect");

var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var less = require("gulp-less");
var minifycss = require("gulp-minify-css");

var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

// 启动本地服务
gulp.task("connect",function(){
	connect.server({
		root:"./",
		host:"localhost",
		port:9999,
		livereload:true
	});
});

// 编译less
gulp.task("less",function(){
	gulp.src("./less/*.less")
	.pipe(less())
	.pipe(postcss([autoprefixer({browsers:['last 2 versions']})]))
	.pipe(minifycss({
		compatibility:"ie7",
		keepSpecialComments:0,
		advanced:false
	}))
	.pipe(gulp.dest("./css"));
});

// 合并文件全局脚本文件
gulp.task("concat",function(){
	gulp.src([
		"js/lib/jquery.js",
		"js/lib/art-template.js"
		])
	.pipe(concat("vendor.js"))
	.pipe(uglify())
	.pipe(rename(function(path){
		path.basename += ".min";
		path.extname = ".js";
	}))
	.pipe(gulp.dest("./js"));
});

gulp.task("reload",function(){
	gulp.src("views/*.html").pipe(connect.reload());
});

gulp.task("watch",function(){
	gulp.watch(["views/*.html"],["reload"]);
	gulp.watch(["less/*.less"],["less"]);
});

gulp.task("web",["connect","watch"]);