##Laravel 4, Backbone, Marionette, Jasmine, Karma & Sass Boilerplate

This boilerplate sets up the front-end stuff for a Backbone/Marionette App.

##Features
1. Uses Grunt for task management.
2. Uses Bower for front-end dependencies.
3. Uses RequireJs for AMD.
4. Uses the Jasmine Testing Framework.
5. Uses Karma to Run the tests.
6. Has pre-configured build-tasks, including cache-breaking.
7. Has Sass & Live-reload support.

#Pre-install
If you don't have these - you'll need to install them globally: (run with `sudo` if you get any errors)

    npm install -g grunt-cli bower

#Fast install
If you're on a mac, have curl & php 5.4 or above, you're in luck - it's a one-liner for you.

    curl -Ss https://raw.github.com/shakyShane/laravel4-backbone-marionette/master/install.sh | bash /dev/stdin project-name

#Normal Install (all steps required!)
**Clone the repo**

    git clone https://github.com/shakyShane/laravel4-backbone-marionette.git projectDir

**Now `cd` into that newly created directory**

    cd projectDir
    rm -rf .git

** Alternatively, just download & extract the ZIP **


**Install Composer**

    curl -Ss http://getcomposer.org/installer | php

or

    php -r "eval('?>'.file_get_contents('https://getcomposer.org/installer'));"

**Install Laravel Framework**

    php composer.phar install

**Install NPM dependencies**

    npm install

**Install BOWER dependencies**

    bower install

**Set an application key**

    php artisan key:generate

**Enter your Machine name or localhost for Local DEV**


    // Don't forget this, it's how the correct Javascript file is loaded when you are in dev/production environments
    // [bootstrap/start.php]
    $env = $app->detectEnvironment(array(
    	'local' => array('localhost'),
    ));

## That's it
Seriously. Run `php artisan serve` to see for yourself!

## What do I get?
I've just done all the boring config stuff for you. You know, like directory structure, setting up modules & grunt tasks and having a build step.
When you use this set up, you get to use AMD for your javascript development locally, and then create a distribution file with a single command `grunt release`. When you run that, everything gets minified, compiled
 down into a single file, all logging is removed & you don't even have to worry about your users having an outdated version of your scripts either because when you run that task, it goes into the
  `master.blade.php` template file and appends a timestamp to the distribution src file (breaking any cached versions on the client-side).

## Config
It's configured to run out-of-the-box, but feel free to dive into `Gruntfile.js` and make any changes.

## Compiling JS
You'll notice that all the dependencies are loaded and compiled automatically into a single file & your modules are done separately via AMD. All you need
to do, is run `grunt build-js` and forget about it.

## Running the tests
As I said, it's fully configured for you already & I've even placed a couple of tests in place, just to show you how to go about loading
modules and testing them.

When ready to start the Karma Test Runner, just run:

    grunt karma:unit

or if you want to run the tests on every file-change

    grunt karma:watch


#### Quick note on *Fixtures*
You want to load JSON or HTML into your tests from files? No worries, I've pre-configured the Karma Test Runner to use Jasmine-jquery with the correct paths set.
Just take a look at `js/test/collections/OrdersSpec.js` to see how to load fixtures into your tests.


## Compiling SASS
Again, all the config is done for you, so you can just dive into the `public/sass` directory and edit the files. Assuming you have compass installed, just run `grunt watch:sass` to automatically watch/compile everything.

## Compiling SASS + Live reload via [Browser-sync](https://github.com/shakyShane/grunt-browser-sync)
When you run `grunt server-sass`, you'll get an html snippet in the command line that you can paste into **master.blade.php**. This gives you all
the features of browser-sync including live CSS injecting with no page reload.

## Available grunt tasks

```language-js
    // Lint all Javascripts, combine/minify into a single file & break the cache
    grunt build-js

    // Build JUST the dependencies without your AMD modules. ( useful when you add a new library )
    grunt js-deps

    // Break the Cache with the latest Javascript build
    grunt break_cache:js

    // Break the Cache with the latest CSS build
    grunt break_cache:css

    // Generate the style.css from the Sass files
    grunt compass

    // Generate the style.css from the Sass files & break the cache
    grunt build-css

    // Watch all files in the SASS directory & compile on save.
     grunt watch:sass

    // Watch all files in the SASS directory & compile on save. (browser-sync included)
    grunt server-sass --force

    // Lint JS files & run the tests once
    grunt test

    // Lint JS files. Watching JS files for changes & run tests on each change
    grunt test-watch

    // Run the tests
    grunt karma:unit

    // Watch all JS files and run the tests when a file changes.
    grunt karma:unit

    // alias for test, build-js & build-css - basically everything you want to do on before a release
    grunt release
```

## Possible Issues

**Karma**
If you have problems with Karma running your tests, check the browsers setting in `/public/js/karma.conf.js` - you'll see a comment there that shows how I got it working on Windows

