# meteor-knwl #
A Natural Language Processor in JS - original [Knwl.js](https://github.com/loadfive/Knwl.js) package by [Load Five](https://github.com/loadfive)

*This project is no longer recieving updates from the original package creator, Load Five.*

## About ##
Knwl.js is a Natural Language Processor built with JavaScript, put simply, **Knwl.js scans through text, user data, or just about anything for data of interest**, phone numbers, dates, locations, emails, times, and more. Even check if the string may be spam, or get the overall emotion. 

###Use It

First, create a new instance of the ```Knwl()``` object:
```javascript
var hal = new Knwl();
```

Now, initiate Knwl.js on a string:
```javascript
hal.init("This is a string with information.");
```

Finally, use ```.get()``` to scan the string for certain data:
```javascript
var locsFound = hal.get("places");
var datesFound = hal.get("dates");
```

####.get() Data Types
```"dates"``` - dates found in string.

```"times"``` - times found in string.

```"links"``` - links found in string.

```"emails"``` - emails found in string.

```"phones"``` - phone numbers found in string.

```"places"``` - locations found in string.

```"hashtags"``` - hashtags found in string like #hash.

```"aliases"``` - aliases found in string like @user.

```"readingTime"``` - estimated reading time of string.

```"emotion"``` - estimated emotion, works best with shorter strings (comments, etc).

```"spam"``` - checks if text is possibly spam. Returns true or false.


*Please note that Knwl.js is still in early development, and can yield varying results.*


###License
Meteor package under [MIT License](LICENSE). © by [Agnito Labs, Inc](http://www.agnitolabs.com).
Knwl.js package under [MIT License](LICENSE). © Load Five.