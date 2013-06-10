##Laravel 4, Backbone, Marionette, Jasmine, Karma & Sass Boilerplate

This boilerplate sets up the front-end stuff for a Backbone App, follow this guide and pretty soon you'll be up and running.

##Features
1. Uses Grunt for task managment.
2. Uses Bower for front-end dependencies.
3. Uses RequireJs for AMD.
4. Uses the Jasmine Testing Framework.
5. Uses Karma to Run the tests.
6. Has pre-configured build-tasks.
7. Has Sass & Live-reload support.

## Clone the repo
First you need to pull down this repo. Here we cloning it into a directory called `projectDir`

    git clone https://github.com/shakyShane/laravel4-backbone-marionette.git projectDir

Now `cd` into that newly created directory

## Composer install
Now you need composer to install the Laravel Framework.

    curl -Ss http://getcomposer.org/installer | php
    or
    php -r "eval('?>'.file_get_contents('https://getcomposer.org/installer'));"

When that is installed, run `php composer.phar install`

## Install NPM dependencies
Now it's time to grab everything needed for your front-end dev.

    npm install

## Install BOWER dependencies
Bring in all the required Javascript libraries
    bower install

## Set an application key
Needed to secure your app.
    php artisan key:generate

## Enter your Machine name for Local DEV
Don't forget this, it's how the correct Javascript file is loaded when you are in dev/production environments
    // bootstrap/start.php
    $env = $app->detectEnvironment(array(

    	'local' => array('yourmachinename'),

    ));

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


