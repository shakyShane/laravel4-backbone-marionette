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
If you don't have these - you'll need to install them globally:

    npm install -g grunt-cli bower karma

#Install (all steps required!)
**Clone the repo**

    git clone https://github.com/shakyShane/laravel4-backbone-marionette.git projectDir

Now `cd` into that newly created directory

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

**Enter your Machine name for Local DEV**

    // Don't forget this, it's how the correct Javascript file is loaded when you are in dev/production environments
    // [bootstrap/start.php]
    $env = $app->detectEnvironment(array(
    	'local' => array('yourmachinename'),
    ));

## That's it
Seriously. Run `php artisan serve` to see for yourself!

## What do I get?
I've just done all the boring config stuff for you. You know, like directory structure, setting up modules & grunt tasks and having a build step.
When you use this set up, you get to use AMD for your javascript development locally, and then create a distribution file with a single command `grunt js-all`. When you run that, everything gets minified, compiled
 down into a single file, all logging is removed & you don't even have to worry about your users having an outdated version of your scripts either because when you run that task, it goes into the
  `master.blade.php` template file and appends a timestamp to the distribution src file (breaking any cached versions on the client-side).

## Config
It's configured to run out-of-the-box, but feel free to dive into `Gruntfile.js` and make any changes.

## Compiling JS
You'll notice that all the dependencies are loaded and compiled automatically into a single file & your modules are done separately via AMD. All you need
to do, is run `grunt js-all` and forget about it.

## Running the tests
As I said, it's fully configured for you already & I've even placed a couple of tests in place, just to show you how to go about loading
modules and testing them.

When ready to start the Karma Test Runner, just run:

    grunt karma

or

    cd public/js/
    karma start

It will continue watching your files and automatically re-run the tests on each save.

#### Quick note on *Fixtures*
You want to load JSON or HTML into your tests from files? No worries, I've pre-configured the Karma Test Runner to use Jasmine-jquery with the correct paths set.
Just take a look at `js/test/collections/OrdersSpec.js` to see how to load fixtures into your tests.


## Compiling SASS
Again, all the config is done for you, so you can just dive into the `public/sass` directory and edit the files. Assuming you have compass installed, just run `grunt server-sass` to automatically watch/compile everything.

## Available grunt tasks

    // Build all the Javascripts into a single file & break the cache
    grunt js-all

    // Build JUST the dependencies without your AMD modules. ( useful when you add a new library )
    grunt js-deps

    // Break the Cache with the latest Javascript build
    grunt break_cache:js

    // Break the Cache with the latest CSS build
    grunt break_cache:css

    // Generate the style.css from the Sass files
    grunt compass

    // Watch all files in the SASS directory & compile on save. (live reload included)
    grunt server-sass --force

    // Start the Karma server to run all tests
    grunt karma

## Possible Issues

**Karma**
If you have problems with Karma running your tests, check the browsers setting in `/public/js/karma.conf.js` - you'll see a comment there that shows how I got it working on Windows

