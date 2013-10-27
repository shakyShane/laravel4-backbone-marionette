git clone https://github.com/shakyShane/laravel4-backbone-marionette.git $1
cd $1
rm -rf .git
curl -Ss http://getcomposer.org/installer | php
php composer.phar install
npm install
bower install
grunt release
php artisan key:generate
php artisan serve