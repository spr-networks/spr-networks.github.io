"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[209],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,b=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={},c=void 0,p={unversionedId:"apis/web_api_authentication",id:"apis/web_api_authentication",title:"web_api_authentication",description:"Authentication",source:"@site/docs/apis/web_api_authentication.md",sourceDirName:"apis",slug:"/apis/web_api_authentication",permalink:"/docs/apis/web_api_authentication",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web API",permalink:"/docs/apis/web_api"},next:{title:"DHCP",permalink:"/docs/apis/unix_sockets/dhcp_unix_socket"}},l=[{value:"Authentication",id:"authentication",children:[{value:"Basic Authentication",id:"basic-authentication",children:[],level:3},{value:"WebAuthN",id:"webauthn",children:[],level:3}],level:2}],s={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("h3",{id:"basic-authentication"},"Basic Authentication"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"state/api/auth_users contains username, password pairs for basic authentication"),(0,a.kt)("li",{parentName:"ul"},"state/api/auth_tokens contains authentication tokens")),(0,a.kt)("h3",{id:"webauthn"},"WebAuthN"),(0,a.kt)("p",null,"WebAuthN support is a work in progress"),(0,a.kt)("p",null,"GET /register/?username={username}"),(0,a.kt)("p",null,"POST /register/"),(0,a.kt)("p",null,"GET /login/?username=username"),(0,a.kt)("p",null,"POST /login/"))}f.isMDXComponent=!0}}]);