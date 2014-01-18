locomotive-azure-boilerplate
============================

A node.js, locomotive.js, passport.js Boilerplate that can be hosted on Windows Azure.
Basically you can login to an account using mongo-db and mongoose over passport.

The account page is protected with your authentication.

Use as you wish.

## Components used
connect & express - web server
locomotive & locomotive-mongoose - MVC framework
bootable & bootable-environment - Init helpers for locomotive
connect-ensure-login - To ensure login for some pages
ejs & ejs-locals - Template engine with layout support
azure - Windows Azure
mongoose & mongoose-types - Database model
moment - Date & time
passport & passport-local - Authentication framework
bcryptjs - To encrypt the passwords stored in the db

## Credits

Based on https://github.com/kuryaki/locomotive-example

## License
The MIT License (MIT)

Copyright (c) 2014 David Hägg

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
