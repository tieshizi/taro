(window.webpackJsonp=window.webpackJsonp||[]).push([[1148],{1285:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(1),n=a(9),c=(a(0),a(1791)),b={id:"2018-08-24-the-birth-of-taro-ui",title:"\u9996\u4e2a\u591a\u7aef UI \u7ec4\u4ef6\u5e93 - Taro UI \u53d1\u5e03",author:"jimczj",author_url:"https://github.com/jimczj",author_image_url:"https://avatars3.githubusercontent.com/u/13499146?s=460&u=a5a6d4c6bcc746b3b6353c245346d7a832f4649b&v=4"},o={permalink:"/taro/blog/2018-08-24-the-birth-of-taro-ui",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-08-24-the-birth-of-taro-ui.md",source:"@site/blog/2018-08-24-the-birth-of-taro-ui.md",description:"![image](https://misc.aotu.io/jimczj/2018-08-27taro-ui.jpg)",date:"2018-08-24T00:00:00.000Z",tags:[],title:"\u9996\u4e2a\u591a\u7aef UI \u7ec4\u4ef6\u5e93 - Taro UI \u53d1\u5e03",readingTime:1.27,truncated:!0,prevItem:{title:"Taro \u5728\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e0a\u7684\u5b9e\u8df5",permalink:"/taro/blog/2018-09-11-taro-in-jd"},nextItem:{title:"\u4e3a\u4f55\u6211\u4eec\u8981\u7528 React \u6765\u5199\u5c0f\u7a0b\u5e8f - Taro \u8bde\u751f\u8bb0",permalink:"/taro/blog/2018-06-25-the-birth-of-taro"}},i=[{value:"Taro UI",id:"taro-ui",children:[]},{value:"\u7279\u6027",id:"\u7279\u6027",children:[]},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[{value:"\u5b89\u88c5 Taro",id:"\u5b89\u88c5-taro",children:[]},{value:"\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",children:[]},{value:"\u5b89\u88c5 Taro UI",id:"\u5b89\u88c5-taro-ui",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u7f16\u8bd1\u5e76\u9884\u89c8",id:"\u7f16\u8bd1\u5e76\u9884\u89c8",children:[]}]},{value:"\u610f\u89c1\u53cd\u9988",id:"\u610f\u89c1\u53cd\u9988",children:[]}],p={rightToc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://misc.aotu.io/jimczj/2018-08-27taro-ui.jpg",alt:"image"}))),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro"}),"Taro")," \u662f\u7531\u51f9\u51f8\u5b9e\u9a8c\u5ba4\u503e\u529b\u6253\u9020\u7684\u591a\u7aef\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\uff0c\u65e8\u5728\u8ba9\u4e00\u5957\u4ee3\u7801\u5728\u591a\u7aef\u8fd0\u884c\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u4e30\u5bcc Taro \u7684\u5f00\u53d1\u751f\u6001\uff0c\u8ba9\u5f00\u53d1\u8005\u6709\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u548c\u66f4\u5feb\u7684\u5f00\u53d1\u901f\u5ea6\uff0c\u51f9\u51f8\u5b9e\u9a8c\u5ba4\u81ea\u4e3b\u8bbe\u8ba1\u4e86\u4e00\u5957 UI \u7ec4\u4ef6\u5e93\uff0c\u7ecf\u8fc7\u4e24\u4e2a\u591a\u6708\u7684\u7cbe\u96d5\u7ec6\u7422\uff0c\u7ec8\u4e8e\u8ddf\u968f Taro 1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\u3002"),Object(c.b)("h2",{id:"taro-ui"},"Taro UI"),Object(c.b)("p",null,"Taro UI \u662f\u4e00\u6b3e\u7531\u51f9\u51f8\u5b9e\u9a8c\u5ba4\u6253\u9020\u3001\u57fa\u4e8e Taro \u7f16\u5199\u7684\u591a\u7aef UI \u7ec4\u4ef6\u5e93\u3002\u9664\u4e86\u9ad8\u989c\u503c\uff0cTaro UI \u6700\u5927\u7684\u4eae\u70b9\u5c31\u662f\u652f\u6301\u591a\u7aef\u8fd0\u884c\u3002Taro UI \u501f\u52a9 Taro \u652f\u6301\u591a\u7aef\u8fd0\u884c\u7684\u7279\u70b9\uff0c\u53ea\u9700\u89e3\u51b3\u4e0d\u540c\u5e73\u53f0 CSS \u7684\u8868\u73b0\u5dee\u5f02\u95ee\u9898\uff0c\u5c31\u53ef\u4ee5\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f/ H5 / ReactNative \u7b49\u591a\u7aef\u9002\u914d\u8fd0\u884c\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Github"),"\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-ui"}),"https://github.com/NervJS/taro-ui")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6587\u6863"),"\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://taro-ui.aotu.io/"}),"https://taro-ui.aotu.io/")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"H5 \u7248\u672c\u9884\u89c8"),"\uff1a "),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/13499146/44632148-8a054080-a9a8-11e8-85a8-dfafd073dfdf.png",alt:"image"}))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9884\u89c8"),"\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/13499146/44643836-8e5f4700-aa04-11e8-87bd-d930eb04e87c.png",alt:"image"}))),Object(c.b)("p",null,"\u7b2c\u4e00\u7248\u7ec4\u4ef6\u5171\u6709\u516d\u4e2a\u6a21\u5757\u3001\u4e09\u5341\u4e09\u4e2a\u7ec4\u4ef6\uff0c\u672a\u6765\u8fd8\u5c06\u7ee7\u7eed\u4e30\u5bcc\u7ec4\u4ef6\uff0c\u589e\u52a0\u4e00\u4e9b\u5e38\u7528\u4e1a\u52a1\u7ec4\u4ef6\u3002"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/13499146/44502719-6d75b980-a6c5-11e8-8491-b6b47d87ee3d.png",alt:"image"}))),Object(c.b)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u7b80\u5355\u6613\u7528"),"\uff1a\u652f\u6301 npm \u5b89\u88c5\uff0c\u81ea\u52a8\u5904\u7406 npm \u8d44\u6e90\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u6846\u67b6\u652f\u6301"),"\uff1a\u57fa\u4e8e Taro \u5f00\u53d1\u7ec4\u4ef6\uff0c\u4e0e Taro \u65e0\u7f1d\u8854\u63a5"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u591a\u7aef\u9002\u914d"),"\uff1a\u4e00\u5957\u7ec4\u4ef6\u53ef\u4ee5\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f/ H5 / ReactNative \u7b49\u591a\u7aef\u9002\u914d\u8fd0\u884c"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u6837\u5f0f\u7f8e\u89c2"),"\uff1a\u5c0f\u660e\u54e5(",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/at-ui/at-ui"}),"AT-UI")," \u8bbe\u8ba1\u8005\u3001\u4e3b\u7a0b)\u4eb2\u81ea\u8bbe\u8ba1\uff0c\u7ec6\u8282\u628a\u5173\uff0c\u7b26\u5408\u73b0\u4ee3\u6241\u5e73\u5316\u8bbe\u8ba1\u5ba1\u7f8e"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u7ec4\u4ef6\u4e30\u5bcc"),"\uff1a\u63d0\u4f9b\u4e30\u5bcc\u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u8986\u76d6\u5927\u90e8\u5206\u4f7f\u7528\u573a\u666f\uff0c\u6ee1\u8db3\u5404\u79cd\u529f\u80fd\u9700\u6c42"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u6309\u9700\u5f15\u7528"),"\uff1a\u53ef\u6309\u9700\u4f7f\u7528\u72ec\u7acb\u7684\u7ec4\u4ef6\uff0c\u4e0d\u5fc5\u5f15\u5165\u6240\u6709\u6587\u4ef6\uff0c\u53ef\u6700\u5c0f\u5316\u6ce8\u5165\u5230\u9879\u76ee\u4e2d"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u591a\u5957\u4e3b\u9898"),"\uff1a\u5185\u7f6e\u591a\u5957\u4e3b\u9898\u989c\u8272\uff0c\u4efb\u541b\u9009\u62e9\uff08\u5c06\u5728 1.1 \u7248\u672c\u5f00\u653e\u6b64\u7279\u6027\uff09")),Object(c.b)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),Object(c.b)("h3",{id:"\u5b89\u88c5-taro"},"\u5b89\u88c5 Taro"),Object(c.b)("p",null,"\u5b89\u88c5 Taro \u5f00\u53d1\u5de5\u5177 @tarojs/cli"),Object(c.b)("p",null,"\u4f7f\u7528 npm \u6216\u8005 yarn \u5168\u5c40\u5b89\u88c5\uff0c\u6216\u8005\u76f4\u63a5\u4f7f\u7528 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install -g @tarojs/cli\n$ yarn global add @tarojs/cli\n")),Object(c.b)("h3",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\u521d\u59cb\u5316\u9879\u76ee"),Object(c.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u521b\u5efa\u6a21\u677f\u9879\u76ee"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ taro init myApp\n")),Object(c.b)("h3",{id:"\u5b89\u88c5-taro-ui"},"\u5b89\u88c5 Taro UI"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cd myApp\n$ npm i taro-ui\n")),Object(c.b)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(c.b)("p",null,"\u5728\u4ee3\u7801\u4e2d ",Object(c.b)("inlineCode",{parentName:"p"},"import")," \u7ec4\u4ef6\u5e76\u6309\u7167\u6587\u6863\u8bf4\u660e\u8fdb\u884c\u4f7f\u7528"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"import { AtButton } from 'taro-ui'")),Object(c.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("p",null,"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"/myApp/src/pages/index/index.jsx")," \u6587\u4ef6\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component, Config } from '@tarojs/taro'\nimport { View } from '@tarojs/components'\nimport { AtButton } from 'taro-ui'\nimport './index.scss'\n\nexport default class Index extends Component {\n  config: Config = {\n    navigationBarTitleText: '\u9996\u9875'\n  }\n  render () {\n    return (\n      <View className='index'>\n         <AtButton type='primary'>\u6309\u94ae\u6587\u6848</AtButton>\n      </View>\n    )\n  }\n}\n\n")),Object(c.b)("h3",{id:"\u7f16\u8bd1\u5e76\u9884\u89c8"},"\u7f16\u8bd1\u5e76\u9884\u89c8"),Object(c.b)("p",null,"\u8fdb\u5165\u9879\u76ee\u76ee\u5f55\u5f00\u59cb\u5f00\u53d1\uff0c\u53ef\u4ee5\u9009\u62e9\u5c0f\u7a0b\u5e8f\u9884\u89c8\u6a21\u5f0f\uff0c\u6216\u8005 H5 \u9884\u89c8\u6a21\u5f0f\uff0c\u82e5\u4f7f\u7528\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9884\u89c8\u6a21\u5f0f\uff0c\u5219\u9700\u8981\u81ea\u884c\u4e0b\u8f7d\u5e76\u6253\u5f00\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u9009\u62e9\u9884\u89c8\u9879\u76ee\u6839\u76ee\u5f55\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u9884\u89c8\u6a21\u5f0f")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# npm script\n$ npm run dev:weapp\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type weapp --watch\n# npx\u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type weapp --watch\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"H5\u7f16\u8bd1\u9884\u89c8\u6a21\u5f0f")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# npm script\n$ npm run dev:h5\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type h5 --watch\n# npx\u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type h5 --watch\n")),Object(c.b)("h2",{id:"\u610f\u89c1\u53cd\u9988"},"\u610f\u89c1\u53cd\u9988"),Object(c.b)("p",null,"\u5982\u679c\u6709\u4efb\u4f55\u7684\u610f\u89c1\u6216\u8005\u5efa\u8bae\uff0c\u6b22\u8fce\u5728 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-ui"}),"Github")," \u521b\u5efa issue\uff0c\u611f\u8c22\u4f60\u7684\u652f\u6301\u548c\u8d21\u732e\u3002"))}l.isMDXComponent=!0},1791:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),j=r,s=u["".concat(b,".").concat(j)]||u[j]||m[j]||c;return a?n.a.createElement(s,o({ref:t},p,{components:a})):n.a.createElement(s,o({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=j;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var p=2;p<c;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);