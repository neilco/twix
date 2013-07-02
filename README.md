# Twix

__<span style="color: rgb(180,0,0);">Twix</span>__ is a lightweight JavaScript library for making AJAX requests in places where jQuery won't go.

### ★ Don't let its tiny size deceive you ★

It may weigh-in at just over 1KB, but this puppy has teeth. __WOOF!__ 

Modelled after the ubiquitious jQuery's AJAX methods (_$.ajax_, _$.get_, and _$.post_), you can use this in places were jQuery will not load, such as __inside a WebWorker__<sup>#</sup>. You little ripper!

You may be like me and occasionally think that loading the entire jQuery library (about 80KB minified) just to make an AJAX call is just like filling a thimble using a fire hydrant. __<span style="color: rgb(180,0,0);">Twix</span>__ is written from the ground up to work in modern browsers (IE9+, Firefox, Chrome, Safari, etc. Anything that supports __XMLHttpRequest__, really) and has just enough magic sauce to get the job done. No more, no less. 

---

<sup>#</sup> Actually, providing a simple way to make make AJAX calls inside a WebWorker was the primary use-case when developing this golden nugget. How about that.

## Usage 

Simply add a reference to __twix.js__ or __twix.min.js__ and you're good to go. 

> &lt;script type="text/javascript" src="twix.min.js">&lt;/script>

If you want to make an AJAX call from within a WebWorker, load the __<span style="color: rgb(180,0,0);">Twix</span>__ library using the __importScripts__ function:

> importScripts("twix.min.js");

Making an AJAX request is as simple as calling __Twix.ajax(...)__ or __Twix.get(...)__ or __Twix.post(...)__. If typing the four characters of __Twix__ is too much, you use the optional double-underscore (*__.ajax(...)*) shortcut. 

There's an _ultra-basic_ sample of making a GET request from a WebWorker in the [__sample__](http://github.com/neilco/twix/sample/) directory. 

## Contributors

Well, it's just [__me__](http://github.com/neilco/). It's a little lonely, so feel free to issue a pull request with fixes or enhancements and get your name listed here.


## Why Twix?

Because [two chocolatey fingers](http://www.twix.com) are better than one. 

## License

[MIT license](http://neil.mit-license.org)

Copyright (c) 2013 Neil Cowburn (http://github.com/neilco/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
