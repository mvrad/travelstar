# TravelStar
![screenshot](public/img/screenshot.jpg)

Search points of interest, attractions, media, and maps of different locations around the world.
## Under the Hood
Made with :coffee: and Visual Studio Code in a Linux OS.
## To Set Up Locally
You can take all the files of this site and run them on your computer as if it were live online, only it's just on your machine. This project uses the [Sygic](https://travel.sygic.com/en/b2b) API to retrieve data about certain places around the world.
### Requirements
* [Git](http://git-scm.com/)
* [Composer](https://getcomposer.org/)
* [Homestead](https://laravel.com/docs/5.6/homestead)
* [Laravel 5.6](https://laravel.com/)

To copy the repository's files from here onto your computer and to view and serve those files locally, at your computer's command line type:
```
git clone https://github.com/matthew-conrad/travelstar.git
```
Open the files in a text editor such as [Visual Studio Code](https://code.visualstudio.com/) and, if you have access to [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), in the terminal type:
```bash
php composer.phar install
php composer.phar update
```

## License

TravelStar is licensed under the [MIT license](https://github.com/matthew-conrad/travelstar/blob/master/LICENSE).