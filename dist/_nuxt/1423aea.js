(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,n,t){"use strict";var r={},o=t(47),component=Object(o.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"wrap-parent min-h-screen flex flex-col"},[n("div",{staticClass:"flex flex-grow"},[n("div",{staticClass:"w-full overflow-hidden py-4"},[n("Nuxt")],1)])])])])])}),[],!1,null,null,null);n.a=component.exports},196:function(e,n,t){t(197),e.exports=t(198)},260:function(e,n,t){var content=t(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(133).default)("17bc9ac2",content,!0,{sourceMap:!1})},261:function(e,n,t){var r=t(131)((function(i){return i[1]}));r.push([e.i,'/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.static{position:static;}.relative{position:relative;}.z-0{z-index:0;}.z-10{z-index:10;}.m-0{margin:0px;}.mx-auto{margin-left:auto;margin-right:auto;}.mb-3{margin-bottom:0.75rem;}.mb-4{margin-bottom:1rem;}.mt-10{margin-top:2.5rem;}.block{display:block;}.inline-block{display:inline-block;}.flex{display:flex;}.inline-flex{display:inline-flex;}.grid{display:grid;}.hidden{display:none;}.min-h-screen{min-height:100vh;}.w-full{width:100%;}.min-w-0{min-width:0px;}.max-w-7xl{max-width:80rem;}.max-w-4xl{max-width:56rem;}.flex-auto{flex:1 1 auto;}.flex-grow{flex-grow:1;}.grid-cols-\\[2fr_2fr_7fr\\]{grid-template-columns:2fr 2fr 7fr;}.grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr));}.flex-col{flex-direction:column;}.items-center{align-items:center;}.items-stretch{align-items:stretch;}.justify-center{justify-content:center;}.-space-x-px > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(-1px * var(--tw-space-x-reverse));margin-left:calc(-1px * calc(1 - var(--tw-space-x-reverse)));}.overflow-hidden{overflow:hidden;}.rounded-md{border-radius:0.375rem;}.rounded{border-radius:0.25rem;}.border{border-width:1px;}.border-2{border-width:2px;}.border-t{border-top-width:1px;}.border-solid{border-style:solid;}.border-indigo-500{--tw-border-opacity:1;border-color:rgb(99 102 241 / var(--tw-border-opacity));}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity));}.border-blue-600{--tw-border-opacity:1;border-color:rgb(37 99 235 / var(--tw-border-opacity));}.bg-indigo-50{--tw-bg-opacity:1;background-color:rgb(238 242 255 / var(--tw-bg-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-clip-padding{background-clip:padding-box;}.p-2{padding:0.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.pl-10{padding-left:2.5rem;}.text-center{text-align:center;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-base{font-size:1rem;line-height:1.5rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-5xl{font-size:3rem;line-height:1;}.font-medium{font-weight:500;}.font-normal{font-weight:400;}.font-black{font-weight:900;}.uppercase{text-transform:uppercase;}.leading-tight{line-height:1.25;}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity));}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity));}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity));}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235 / var(--tw-text-opacity));}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-150{transition-duration:150ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));}.hover\\:bg-opacity-5:hover{--tw-bg-opacity:0.05;}.hover\\:text-sky-700:hover{--tw-text-opacity:1;color:rgb(3 105 161 / var(--tw-text-opacity));}.focus\\:border-blue-600:focus{--tw-border-opacity:1;border-color:rgb(37 99 235 / var(--tw-border-opacity));}.focus\\:bg-white:focus{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.focus\\:text-gray-700:focus{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity));}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}@media (min-width: 640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}}@media (min-width: 768px){.md\\:inline-flex{display:inline-flex;}}',""]),r.locals={},e.exports=r},262:function(e,n,t){"use strict";t.r(n),t.d(n,"state",(function(){return o})),t.d(n,"getters",(function(){return d})),t.d(n,"mutations",(function(){return l})),t.d(n,"actions",(function(){return c}));var r=t(9),o=(t(61),t(26),t(263),t(14),t(267),function(){return{apiUrl:"",apiKey:"7d24edd2d4064ad1be59bfd3aba4a32b",searchWord:"",currentPage:1,totalResults:0,maxPerPage:20,articles:[]}}),d={},l={addArticles:function(e,data){for(var i=0;i<data.articles.length;i++)e.articles.push({date:data.articles[i].publishedAt,source:data.articles[i].source.name,title:data.articles[i].title,url:data.articles[i].url});e.articles.sort((function(a,b){return a.date>b.date?-1:1})),e.articles=e.articles.reduce((function(e,n){return e.find((function(e){var title=e.title;return n.title==title}))||e.push(n),e}),[])},addSearchWord:function(e,n){e.searchWord=n},resetSearchInput:function(e){e.currentPage=1,e.articles=[]}},c={getData:function(e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,o=e.state,t.next=3,n.$axios.$get("https://newsapi.org/v2/everything?q="+o.searchWord+"&pageSize="+o.maxPerPage+"&apiKey="+o.apiKey+"&page="+o.currentPage);case 3:data=t.sent,r("addArticles",data);case 5:case"end":return t.stop()}}),t)})))()}}}},[[196,5,1,6]]]);