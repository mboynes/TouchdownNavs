 ============
 = Overview =
 ============
A jQuery plugin for better Sons of Suckerfish navigation dropdowns on mobile devices, where "hovering" isn't as intuitive. In short, this plugin duplicates the parent link and sets it as the top-level child, then the parent link's click action is used to show/hide the dropdown navigation.


 ===================
 = Getting Started =
 ===================

1. Include jQuery, the jquery.touchdownnavs.js file:
   <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
   <script src="jquery.touchdown.js" type="text/javascript"></script>

2. Setup your HTML:
   <ul id="navbar">
   	<li><a href="#item1">Item 1</a></li>
   	<li><a href="#item2">Item 2</a><ul>
   			<li><a href="#child1">Child 1</a></li>
   			<li><a href="#child2">Child 2</a></li>
   			<li><a href="#child3">Child 3</a></li>
   		</ul>
   	</li>
   	<li><a href="#item3">Item 3</a></li>
   </ul>

3. Call TouchdownNavs() on your navigation's wrapper
   <script type="text/javascript" charset="utf-8">
   	$(function(){
   		$('#navbar').TouchdownNavs();
   	});
   </script>


 =====================
 = Optional Settings =
 =====================
hide_type: 'display' (default)
           'left'
	>> if your dropdowns are set to display:none, the default 'display' will work. If your nav is hidden via 'left:9999px' (or something similar), set hide_type to 'left', e.g. $('#navbar').TouchdownNavs({hide_type:'left'});


 ===========
 = License =
 ===========
Copyright (c) 2011 Matt Boynes <m@boyn.es>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


