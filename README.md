# GoogleService-NodeJs
<center>![](./statics/images/logo11w.png)</center>
## what is GoogleService-NodeJs?
GoogleService-NodeJs is an project that enable Google Search Service available to third parties in NodeJs Programming Language.

It works on HTTP Request, all you need to do is provide the url parameters and you will get the search result in Json format from Google Search.
## How to use it?
1, first start the application in a terminal
```bash
node index.js
```
2, second load the main index page, point your browser to following URL
```bash
http://localhost:3000/
```
because I haven't implemented the main index page, so you can implement it yourself and modify the code to display your own index page.

3, third load the result page, point your browser to following URL
```bash
http://localhost:3000/result
```
result page haven't implemented yet!

4, fourth query and get search result by point your browser to following URL
```bash
http://localhost:3000/search?q=gnome
```
here is the search result
<center>![](./statics/images/GoogleSearchResultJson.png)</center>

## What to do next?
I am a programmer, good at back end, for UI, I implemented one, check out [csrgxtu search](http://www.csrgxtu.com/). next time, if I got time, I will implement the UI for this Project. and also, implement the project in other programming languages.

## Why I start this project?
I use Google Search a lot, and since 2014/7, Google service is blocked in China. and for work reasons I kept learning new Programming languages, to get myself familiar with these languages, I start this project.

If you have a Virtual Host in foreigh countries, then you can deploy this project on your own server and enable others users use your Google Service.