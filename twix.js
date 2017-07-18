/*
 * Twix v1.0 - a lightweight library for making AJAX requests.
 * Author: Neil Cowburn (neilco@gmail.com)
 * 
 * Copyright (c) 2013 Neil Cowburn (http://github.com/neilco/)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Twix = (function () {
    function Twix() { }
    
    Twix.ajax = function(options) {
        options = options || {url:""};
        options.type = options.type.toUpperCase() || 'GET';
        options.headers = options.headers || {};
        options.timeout = parseInt(options.timeout) || 0;
        options.success = options.success || function() {};
        options.error = options.error || function() {};
        options.async = typeof options.async === 'undefined' ? true : options.async;

        var client = new XMLHttpRequest();
        if (options.timeout > 0) {
            client.timeout = options.timeout;
            client.ontimeout = function () { 
                options.error('timeout', 'timeout', client); 
            };
        }
        client.open(options.type, options.url, options.async);

        for (var i in options.headers) {
            if (options.headers.hasOwnProperty(i)) {
                client.setRequestHeader(i, options.headers[i]);
            }
        }
        
        client.send(options.data);
        client.onreadystatechange = function() {
            if (this.readyState == 4 && ((this.status >= 200 && this.status < 300) || this.status == 304)) {
                var data = this.responseText;
                var contentType = this.getResponseHeader('Content-Type');
                if (contentType && contentType.match(/json/)) {
                    data = JSON.parse(this.responseText);
                }
                options.success(data, this.statusText, this);
            } else if (this.readyState == 4) {
                options.error(this.status, this.statusText, this);
            }
        };

        if (options.async == false) {
            if (client.readyState == 4 && ((client.status >= 200 && client.status < 300) || client.status == 304)) {
                options.success(client.responseText, client);
            } else if (client.readyState == 4) {
                options.error(client.status, client.statusText, client);
            }
        } 

        return client;
    };

    var _ajax = function(type, url, data, callback) {
        if (typeof data === "function") {
            callback = data;
            data = undefined;
        }
        return Twix.ajax({
            url: url,
            data: data, 
            type: type,
            success: callback
        });
    };

    Twix.get = function(url, data, callback) {
        return _ajax("GET", url, data, callback);
    };

    Twix.head = function(url, data, callback) {
        return _ajax("HEAD", url, data, callback);
    };

    Twix.post = function(url, data, callback) {
        return _ajax("POST", url, data, callback);
    };

    Twix.patch = function(url, data, callback) {
        return _ajax("PATCH", url, data, callback);
    };

    Twix.put = function(url, data, callback) {
        return _ajax("PUT", url, data, callback);
    };

    Twix.delete = function(url, data, callback) {
        return _ajax("DELETE", url, data, callback);
    };

    Twix.options = function(url, data, callback) {
        return _ajax("OPTIONS", url, data, callback);
    };
    
    
    return Twix;
})();

__ = Twix;
