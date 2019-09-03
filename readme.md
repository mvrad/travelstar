<p align="center">
  <a href="https://travelstar.herokuapp.com">
    <img alt="Gatsby" src="public/img/travelstar-logo.svg" height="180px" width="auto" />
  </a>
</p>
<div align="center">
  <h1>TravelStar</h1>
  <h3>Your destination for travel information.</h3>
</div>
<p align="center">
  <a href="https://github.com/mvrad/travelstar/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="TravelStar is released under the MIT license.">
  </a>
  <a href="https://circleci.com/gh/mvrad/travelstar">
    <img src="https://circleci.com/gh/mvrad/travelstar.svg?style=shield" alt="Current CircleCI build status.">
  </a>
  <a href="https://securityheaders.io/?q=https://travelstar.herokuapp.com&hide=on&followRedirects=on">
    <img src="https://securityheadersiobadges.azurewebsites.net/create/badge?domain=https://travelstar.herokuapp.com" alt="Security Header Grade">
  </a>
</p>

## About TravelStar

Search top ten attractions, top twenty activities, dining options, and photos of different locations around the world.

## To Set Up Locally
You can take all the files of this site and run them on your computer as if it were live online, only it's just on your machine. This project uses the [Sygic Travel API](https://travel.sygic.com/en/b2b) to retrieve data about places around the world.
### Requirements
* [Git](http://git-scm.com/)
* [Composer](https://getcomposer.org/)
* [Laravel](https://laravel.com/)

To copy the repository's files from here onto your computer and to view and serve those files locally, at your computer's command line type:
```
git clone https://github.com/mvrad/travelstar.git
```
Install composer then open the files in a text editor such as [Visual Studio Code](https://code.visualstudio.com/) and in the terminal type:
```bash
composer install
```
After installing Homestead, launch the Vagrant VM from within the Homestead directory in the terminal with:
```bash
vagrant up
```
You'll also need to create a *config.js* file in the public/js directory containing the Sygic API Key:
```javascript
const config = {
  KEY : "api_key"
};
```
Note: You will need an environment (.env) file. You can find an example of this at [github.com/laravel](https://github.com/laravel/laravel/blob/master/.env.example). After you create the .env file, enter this command in the terminal:
```bash
php artisan key:generate
```
The APP_KEY in the .env file must match the key generated by this command. If everything went well, you should now be able to visit *travelstar.test* in the browser.
## License
TravelStar is licensed under the [MIT license](https://github.com/mvrad/travelstar/blob/master/LICENSE).