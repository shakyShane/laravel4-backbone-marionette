##Laravel 4, Backbone, Marionette, Jasmine, Karma & Sass Boilerplate

This boilerplate sets up the front-end stuff for a Backbone App, follow this guide and pretty soon you'll be up and running.

##Features
1. Uses Grunt for task management.
2. Uses Bower for front-end dependencies.
3. Uses RequireJs for AMD.
4. Uses the Jasmine Testing Framework.
5. Uses Karma to Run the tests.
6. Has pre-configured build-tasks.
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

## That's IT
Seriously. Run `php artisan serve` to see for yourself!
It's been set up to allow you to develop locally in modules, and then you just use `grunt js-all` to build the Javascript.
For more details, I'll be writing a blog post about it shorty.

## Available grunt tasks

    // Build all the Javascripts into a single file & break the cache
    grunt js-all

    // Build JUST the dependencies without your AMD modules. ( useful when you add a new library )
    grunt js-deps

    // Break the Cache with the latest Javascript build
    grunt break-cache-js

    // Break the Cache with the latest CSS build
    grunt break-cache-css

    // Generate the style.css from the Sass files
    grunt compass

    // Watch all files in the SASS directory & compile on save. (live reload included)
    grunt server-sass --force

    // Start the Karma server to run all tests
    grunt karma

## Possible Issues

**Karma**
If you have problems with Karma running your tests, check the browsers setting in `/public/js/karma.conf.js` - you'll see a comment there that show how I got it working on windows.

