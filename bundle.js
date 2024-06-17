(()=>{var n={159:(n,t,e)=>{"use strict";e.d(t,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"/* Reset default browser styles */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n    line-height: 1.6;\n    background-color: #ffffff;\n    color: #333;\n    padding: 20px;\n}\n\n/* Link Styles */\na {\n    color: #3498db;\n    text-decoration: none;\n    transition: color 0.3s;\n}\n\na:hover {\n    color: #2980b9;\n}\n\n/* Headings */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    font-weight: 600;\n    margin-bottom: 1rem;\n    color: #2c3e50;\n}\n\nh1 {\n    font-size: 2.5rem;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh3 {\n    font-size: 1.75rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1.25rem;\n}\n\nh6 {\n    font-size: 1rem;\n}\n\n/* Paragraphs */\np {\n    margin-bottom: 1rem;\n}\n\n/* Lists */\nul,\nol {\n    margin: 1rem 0;\n    padding-left: 1.5rem;\n}\n\nli {\n    margin-bottom: 0.5rem;\n}\n\n/* Form Elements */\ninput,\nselect,\ntextarea,\nbutton {\n    font-family: inherit;\n    font-size: 1rem;\n}\n\ninput,\nselect,\ntextarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 1rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n    transition: border-color 0.3s;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n    border-color: #3498db;\n    outline: none;\n}\n\nbutton {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #3498db;\n    color: #fff;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\nbutton:hover {\n    background-color: #2980b9;\n}\n\n/* Labels */\nlabel {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: 600;\n}\n\n/* Tables */\ntable {\n    width: 100%;\n    border-collapse: collapse;\n    margin-bottom: 1rem;\n}\n\nth,\ntd {\n    padding: 12px;\n    border: 1px solid #ddd;\n    text-align: left;\n}\n\nth {\n    background-color: #f4f4f4;\n    font-weight: 600;\n}\n\n/* Button Variants */\n.btn-primary {\n    background-color: #3498db;\n    color: #fff;\n}\n\n.btn-primary:hover {\n    background-color: #2980b9;\n}\n\n.btn-secondary {\n    background-color: #2ecc71;\n    color: #fff;\n}\n\n.btn-secondary:hover {\n    background-color: #27ae60;\n}\n\n.btn-danger {\n    background-color: #e74c3c;\n    color: #fff;\n}\n\n.btn-danger:hover {\n    background-color: #c0392b;\n}\n\n/* Cards */\n.card {\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 20px;\n    transition: all 1s ease;\n    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2);\n\n}\n\n.card:hover {\n    box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.2);\n    transition: all 1s ease;\n}\n\n.card-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-size: 1.25rem;\n    font-weight: 600;\n    background-color: #27ae60;\n    color: #fff;\n    padding: 10px;\n    transition: all 1s ease;\n    margin-bottom: 1rem;\n}\n\n.card-header.expand {\n    margin-bottom: 0;\n}\n\n.card-header img,\n.card-header .unmark-btn {\n    width: 0;\n    height: 0;\n    opacity: 0;\n    transition: all 1s ease;\n}\n\n.card-header.expand img,\n.card-header.expand .unmark-btn {\n    display: flex;\n    width: 100px;\n    height: 100px;\n    opacity: 1;\n}\n\n.unmark-btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unmark-btn .colorfill {\n    display: none;\n    position: absolute;\n    z-index: 2;\n    background-color: rgba(252, 0, 0, 0.5);\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    transition: opacity 1s ease, color 1s ease, transform .5s ease;\n}\n\n.card-header.expand .colorfill {\n    display: block;\n}\n\n.unmark-btn .colorfill:hover {\n    display: block;\n    position: absolute;\n    z-index: 2;\n    background-color: rgba(223, 64, 64, 0.5);\n    opacity: 1;\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n}\n\n.card-body {\n    font-size: 1rem;\n}\n\n\n/* Targets Container */\n.targets-container {\n    width: 100%;\n    height: 450px;\n    overflow-x: scroll;\n    gap: 10px;\n    padding: 10px;\n    background-color: rgb(27, 24, 24);\n    scrollbar-width: thin;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n}\n\n.target {\n    min-width: 448px;\n    display: inline-flex;\n    flex: 0 0 auto;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 5px;\n    height: auto;\n    padding: 10px;\n    transition: all 1s linear;\n    position: relative;\n    cursor: pointer;\n}\n\n.target-overview {\n    flex: 0 0 auto;\n    min-width: 400px;\n    margin: 5px;\n    padding: 0;\n    border: 0;\n    color: #ffffff;\n    text-align: center;\n    transition: max-height 1s ease, opacity 1s ease, visibility 1s;\n    max-height: 0;\n    opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n    position: absolute;\n}\n\n.progress-bar {\n    width: 100%;\n    height: 30px;\n    background-color: #ddd;\n    border-radius: 5px;\n    overflow: hidden;\n    /* Hide overflowing progress */\n}\n\n.progress {\n    height: 100%;\n    background-color: #3498db;\n    width: 0%;\n    /* Initial width */\n    transition: width 0.3s ease;\n    /* Smooth transition */\n}\n\n.buttons-container {\n    margin-top: 16px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.target-update-form {\n    min-width: 400px;\n    max-height: 0;\n    opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n    transition: all 1s ease;\n    position: absolute;\n    padding: 0;\n    border: 0;\n}\n\n\n.target-overview.active {\n    max-height: 1000px;\n    /* Adjust this value according to your content size */\n    opacity: 1;\n    visibility: visible;\n    padding: 10px;\n\n}\n\n.target-update-form.active {\n    max-height: 1000px;\n    /* Adjust this value according to your content size */\n    opacity: 1;\n    visibility: visible;\n    padding: 10px;\n}\n\n.card.expand.target-overview .card-header {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2em;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2);\n    /* Adjust the shadow for the expanded state */\n}\n\n.card.expand .card-body,\n.card.expand .buttons-container {\n    display: none;\n}\n\n/* Context Menu */\n.context-menu {\n    display: none;\n    position: absolute;\n    background-color: white;\n    border: 1px solid #ccc;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n    z-index: 1000;\n}\n\n.context-menu ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n.context-menu li {\n    padding: 10px 20px;\n    cursor: pointer;\n}\n\n.context-menu li:hover {\n    background-color: #f0f0f0;\n}\n\n.add-target-btn {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 0px dashed white;\n    transition: opacity 1s ease, border-color 1s ease;\n}\n\n.add-target-btn:hover {\n    width: 100%;\n    opacity: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 8px dashed white;\n}\n\n.placeholder {\n    background-color: rgba(0, 0, 0, 0.1);\n    /* Light gray background */\n    border: 2px dashed #3498db;\n    /* Dashed border */\n    box-sizing: border-box;\n    /* Ensure border doesn't add to the width/height */\n    transition: all 0.3s ease;\n    /* Smooth transition for visual effect */\n    margin: 5px;\n    height: 215px;\n    /* Match the height of .target */\n    width: 460px;\n    /* Match the width of .target */\n}\n\n.deleting {\n    pointer-events: none;\n}",""]);const s=i},314:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var f=e(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(g);else{var p=o(g,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},671:n=>{let t=[],e=0,r=[],o=0;function a(n,t){for(const e of t){if(e.id==n)return e.subTargets;const t=a(n,e.subTargets);if(t)return t}return null}function i(){const n=function(){const n=[...t];for(;n.length>0;){const t=n.pop();if(t.id==r[r.length-1])return t;t.subTargets&&t.subTargets.length>0&&n.push(...t.subTargets)}return null}();if(console.log("parent target",n),null===n){let n=0;for(let e of t)!0===e.isDone&&n++;return o=100*Math.floor(n/t.length),void console.log(o)}let e=0;for(let t of n.subTargets)!0===t.isDone&&e++;0===n.subTargets.length?n.percent=0:n.percent=Math.floor(e/n.subTargets.length*100),Math.abs(n.percent-100)<1e-4||(n.isDone=!1)}n.exports={addTarget:function(n,e,o){let i=null;if(i=0===r.length?t:a(r[r.length-1],t),null==i)throw new Error("Cannot find target with specified id: "+id+".");if(n<0||n>i.length)throw new Error("Index out of bounds");if("left"===e)i.splice(n,0,o);else{if("right"!==e)throw new Error('Invalid position specified. Use "left" or "right".');i.splice(n+1,0,o)}},updateTarget:function(n,e,o,s){let c=null;if(c=0===r.length?t:a(r[r.length-1],t),null==c)throw new Error("Cannot find target with specified id: "+s+".");let d=c.find((n=>n.id==s));if(null!=n&&(d.title=n),null!=e&&(d.description=e),null!=o&&(d.isDone=o),0===d.subTargets.length)d.percent=0;else{let n=0;for(subT of d.subTargets)!0===subT.isDone&&n++;d.percent=Math.floor(n/d.subTargets.length*100)}i()},deleteTarget:function(n){let e=null;if(e=0===r.length?t:a(r[r.length-1],t),null==e)throw new Error("Cannot find current root array from navigation stack.");const o=e.findIndex((t=>t.id==n));if(-1===o)throw new Error("Cannot find target with specified id: "+n+".");e.splice(o,1)},createTarget:function(){return{id:e++,title:"New Target "+(e-1),description:"Description of the new target "+(e-1),percent:0,isDone:!1,createdDate:Date.now(),finishedDate:null,subTargets:[]}},getTargetsAtCurrentLevel:function(){let n=null;if(n=0===r.length?t:a(r[r.length-1],t),null==n)throw new Error("Cannot get targets at current level.");return n},findPositionInCurrentRootFromId:function(n){let e=null;if(e=0===r.length?t:a(r[r.length-1],t),null==e)throw new Error("Cannot find target with specified id: "+n+".");let o=e.findIndex((t=>t.id==n));if(-1===o)throw new Error("Cannot find target with specified id: "+n+".");return o},rearrangeTargets:function(n){let e=null;if(e=0===r.length?t:a(r[r.length-1],t),null==e)throw new Error("Cannot find current root array from navigation stack.");const o=new Map(e.map(((n,t)=>[n.id,t])));for(let t=0;t<n.length;t++){const r=n[t],a=o.get(r);if(void 0===a)throw new Error("Invalid ID in the list: "+r);if(a!==t){const n=e[t];e[t]=e[a],e[a]=n,o.set(e[t].id,t),o.set(e[a].id,a)}}console.log("Targets rearranged:",e)},markTargetAsDone:function(n){let e=null;if(e=0===r.length?t:a(r[r.length-1],t),null==e)throw new Error("Cannot find current root array from navigation stack.");const o=e.find((t=>t.id==n));if(void 0===o)throw new Error("Cannot find element with id "+n+" at current level.");console.log("Target to be mark as done:",o);let s=!0;for(let n of o.subTargets)if(!1===n.isDone){s=!1;break}return s?(o.isDone=!0,o.percent=100,i(),1):0},getProgressOfTargetInCurrentRootFromId:function(n){let e=null;if(e=0===r.length?t:a(r[r.length-1],t),null==e)throw new Error("Cannot find target root with specified id: "+n+".");const o=e.find((t=>t.id==n));if(void 0===o)throw new Error("Cannot find target with specified id: "+n+".");return o.percent},navigationStack:r}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{"use strict";var n=e(72),t=e.n(n),r=e(825),o=e.n(r),a=e(659),i=e.n(a),s=e(56),c=e.n(s),d=e(540),l=e.n(d),u=e(113),f=e.n(u),g=e(159),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),t()(g.A,p),g.A&&g.A.locals&&g.A.locals;const h=e.p+"images/02a394108007327cfd55.png",b=e.p+"images/e2568f6905c9c48934fa.png",{addTarget:m,updateTarget:v,deleteTarget:x,createTarget:w,getTargetsAtCurrentLevel:y,findPositionInCurrentRootFromId:k,rearrangeTargets:T,markTargetAsDone:C,getProgressOfTargetInCurrentRootFromId:D,navigationStack:E}=e(671);function I(){var n=$(this).closest(".target");n.find(".target-overview").removeClass("active"),n.find(".target-update-form").addClass("active"),setTimeout((()=>{var t=n.find(".card.target-update-form.active").height();n.height(t)}),1e3)}function A(){var n=$(this).closest(".target");n.find(".target-update-form").removeClass("active"),n.find(".target-overview").addClass("active"),setTimeout((()=>{var t=n.find(".card.target-overview.active").height();n.height(t)}),1e3)}function z(n){var t=$(this).closest(".target"),e=t.attr("id").split("-")[1],r=t.find(".updateTitle").val(),o=t.find(".updateDescription").val();v(r,o,!1,e),t.find(".updateForm")[0].reset(),U()}function S(){var n=$(this).closest(".target"),t=n.attr("id").split("-")[1];1===C(t)?(n.find(".target-overview").addClass("expand"),n.find(".card-header").addClass("expand"),n.find(".progress").css("width","100%")):alert("All sub-targets of this target must be done first.")}function M(){var n=$(this).closest(".target");n.find(".target-overview").removeClass("expand"),n.find(".card-header").removeClass("expand");var t=n.attr("id").split("-")[1],e=n.find(".updateTitle").val(),r=n.find(".updateDescription").val();v(e,r,!1,t),n.find(".progress").css("width",D(t)+"%")}function j(){var n=$(this).closest(".target");n.addClass("deleting");let t=n.width();n.animate({padding:"0px",opacity:"0","margin-left":"-"+2.95*t+"px","font-size":"0px"},1e3,(function(){var t=n.attr("id").split("-")[1];x(t),$(this).remove(),0===y().length&&$(".targets-container .add-target-btn").show()}))}function F(n){var t;t=$(n.currentTarget).closest(".target").attr("id").split("-")[1],E.push(t),$("#context-menu").hide(),U()}function N(n){n.preventDefault();const t=$(this);$("#context-menu").css({display:"block",left:n.pageX,top:n.pageY}),$("#context-menu").data("targetId",t.attr("id"))}function L(n){const t=w(),e=$("#context-menu").data("targetId").split("-")[1],r=$("#target-"+e),o=$(P(t));"left"===n?r.before(o):r.after(o);let a=k(e);m(a,n,t),$("#context-menu").hide()}function P(n){const t=`${n.percent}%`,e=!0===n.isDone?"expand":"";return`\n        <div class="target" draggable="true" id="target-${n.id}">\n            <div class="card target-overview ${e} active">\n                <div class="card-header ${e}">\n                    ${n.title}\n                    <div class="unmark-wrapper">\n                        <div class="unmark-btn" name="unmark-btn">\n                            <img src="${b}" alt="check-circle">\n                            <div class="colorfill" id="colorfill"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class="card-body">\n                    <p>${n.description}</p>\n                    <div class="progress-bar" id="progressBar">\n                        <div class="progress" id="progress" style="width: ${t};"></div>\n                    </div>\n                </div>\n                <div class="buttons-container">\n                    <button class="update-btn" name="update-btn">Update</button>\n                    <button class="delete-btn" name="delete-btn">Delete</button>\n                    <button class="done-btn" name ="done-btn">Done</button>\n                </div>\n            </div>\n            <div class="card target-update-form">\n                <form class="updateForm">\n                    <label for="updateTitle">Title:</label>\n                    <input id="updateTitle" type="text" class="updateTitle" name="updateTitle" value="${n.title}">\n                    <br>\n                    <label for="updateDescription">Description:</label>\n                    <textarea id="updateDescription" class="updateDescription" name="updateDescription">${n.description}</textarea>\n                    <br>\n                    <button type="button" class="saveUpdate" name="save-btn">Save</button>\n                    <button type="button" class="cancelUpdate" name="cancel-btn">Cancel</button>\n                </form>\n            </div>\n        </div>\n    `}function U(){$(".targets-container .target").remove();const n=y();console.log("current targets: ",n),n.forEach((n=>{const t=P(n);$(".targets-container").append(t)})),0===n.length?$(".targets-container .add-target-btn").show():$(".targets-container .add-target-btn").hide(),0===E.length?$("#backButton").hide():$("#backButton").show()}function B(){$("#context-menu").hide(),E.length>0&&(E.pop(),U())}$(document).ready((function(){$(".add-target-btn img").attr("src",h),$("#backButton").hide(),0===y().length&&$(".targets-container .add-target-btn").show(),$(".targets-container").off("click",".add-target-btn").on("click",".add-target-btn",(function(){m(0,"right",w()),U(),$(".targets-container .add-target-btn").hide()})),$(".targets-container").off("click",".target-overview.active").on("click",".target-overview.active",(function(n){let t=$(n.target)[0].name;"colorfill"!=$(n.target)[0].id&&"update-btn"!=t&&"delete-btn"!=t&&"done-btn"!=t&&"unmark-btn"!=t&&"cancel-btn"!=t&&"save-btn"!=t&&F.call(this,n)})),$(".targets-container").off("click",".update-btn").on("click",".update-btn",I),$(".targets-container").off("click",".cancelUpdate").on("click",".cancelUpdate",A),$(".targets-container").off("click",".saveUpdate").on("click",".saveUpdate",z),$(".targets-container").off("click",".done-btn").on("click",".done-btn",S),$(".targets-container").off("click",".unmark-btn").on("click",".unmark-btn",M),$(".targets-container").off("click",".delete-btn").on("click",".delete-btn",j),$(".targets-container").off("contextmenu",".target").on("contextmenu",".target",N),$("#menu-add-left").off("click").on("click",(()=>L("left"))),$("#menu-add-right").off("click").on("click",(()=>L("right"))),function(){let n,t;$(".targets-container").off("dragstart","target").on("dragstart",".target",(function(e){n=this,t=$('<div class="placeholder"></div>'),setTimeout((()=>$(this).addClass("dragging")),0)})),$(".targets-container").off("dragover").on("dragover",(function(n){if(n.preventDefault(),!document.querySelector(".dragging"))return;const e=(r=n.clientX,[...this.querySelectorAll(".target:not(.dragging)")].reduce(((n,t)=>{const e=t.getBoundingClientRect(),o=r-e.left-e.width/2;return o<0&&o>n.offset?{offset:o,element:t}:n}),{offset:Number.NEGATIVE_INFINITY}).element);var r;null==e?$(this).append(t):$(e).before(t)})),$(".targets-container").off("drop").on("drop",(function(e){if(e.preventDefault(),t){$(t).before(n),$(n).removeClass("dragging"),t.remove();const e=[];$(".targets-container .target").each((function(){const n=$(this).attr("id");if(n){const t=n.split("-");if(2===t.length&&"target"===t[0]){const n=parseInt(t[1],10);isNaN(n)||e.push(n)}}})),T(e)}})),$(".targets-container").off("dragend").on("dragend",".target",(function(){$(this).removeClass("dragging"),t&&t.remove()}))}(),function(){let n=0,t=null;$(".targets-container").on("wheel",(function(e){e.preventDefault();const r=$(this)[0],o=e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta;n+=.2*o,cancelAnimationFrame(t),function e(){r.scrollLeft+=n,Math.abs(n)>.5?(n*=.95,t=requestAnimationFrame(e)):n=0}()})),$("#stopScrollButton").on("click",(function(){n*=-1.5})),$(window).on("unload",(function(){cancelAnimationFrame(t)}))}(),$("#backButton").off("click").on("click",B)}))})()})();