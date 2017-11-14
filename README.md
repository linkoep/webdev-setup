# webdev-setup
A basic setup for web development.
Walking from basic html -> css -> JavaScript to adding a package manager, module bundler, etc.
Based off of the excellent article [here](https://medium.com/@peterxjang/modern-JavaScript-explained-for-dinosaurs-f695e9747b70).
This series is a proof of concept of different languages, frameworks, and tools.
<sup><sub>Meaning please ignore any abysmal design and useless/annoying functionality</sub></sup>

### Tools used so far
##### As organized by directory and in order of complexity
1. [Basics](01Basics)
   1. [HTML](01Basics/01HTML)
   1. [CSS](01Basics/02CSS)
   1. [JavaScript](01Basics/03JavaScript)
1. [Installing and Running Node](02Node)
1. [Using a Package Manager (npm)](03PackageManager)
   1. [Using a library without a package manager](03PackageManager/01WithoutPackageManager)
   1. [Using npm to manage libraries](03PackageManager/02UsingNPM)
1. [Using a Module Bundler (webpack)](04WModuleBundler)
   1. [Trying to use libraries with node without a Module Bundler](04ModuleBundler/01WithoutModuleBundler)
   1. [Using webpack to bundle JavaScript](04ModuleBundler/02UsingWebpack)
   1. [Using a configuration file to simplify the build step](04ModuleBundler/03ConfiguringWebpack)
1. [Using a Transpiler (babel)](05Transpiler)
   1. [Trying to use new JavaScript features without a transpiler](05Transpiler/01WithoutTranspiler)
   1. [Using babel to transpile JavaScript](05Transpiler/02UsingBabel)
1. [Using Task Runners (npm scripts)](06TaskRunner)
   1. [A more complex website with a manual build step](06TaskRunner/01WithoutTaskRunner)
   1. [A more complex website with automated build and watch](06TaskRunner/02WithBuildAndWatch)
   1. [A more complex website with an atuomatically updating server](06TaskRunner/03WithServer)