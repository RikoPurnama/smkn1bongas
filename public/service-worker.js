if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),o={module:{uri:c},exports:t,require:r};a[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Dash.png",revision:"fd3d9896685b3583fe903e864bf5f71f"},{url:"/_next/static/QMfaxQUiSsrzgi6uDG2Ku/_buildManifest.js",revision:"a68f51f415bf7b958b39156f1804f9a7"},{url:"/_next/static/QMfaxQUiSsrzgi6uDG2Ku/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-32a9cb9e2e047673.js",revision:"32a9cb9e2e047673"},{url:"/_next/static/chunks/7779ef99-3f81be268de32a56.js",revision:"3f81be268de32a56"},{url:"/_next/static/chunks/framework-7a7e500878b44665.js",revision:"7a7e500878b44665"},{url:"/_next/static/chunks/main-106e49212302998d.js",revision:"106e49212302998d"},{url:"/_next/static/chunks/pages/_app-ea939d30199d7bb1.js",revision:"ea939d30199d7bb1"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/hubungi-kami/kotak-pertanyaan-027ce2dd1d55d55c.js",revision:"027ce2dd1d55d55c"},{url:"/_next/static/chunks/pages/hubungi-kami/pusat-bantuan-160b3b6ee81b6532.js",revision:"160b3b6ee81b6532"},{url:"/_next/static/chunks/pages/index-24538d93c6b4e726.js",revision:"24538d93c6b4e726"},{url:"/_next/static/chunks/pages/jurusan/%5Bid%5D-2aabefce37bc31e1.js",revision:"2aabefce37bc31e1"},{url:"/_next/static/chunks/pages/program/ekstrakulikuler-58547626289d1f4c.js",revision:"58547626289d1f4c"},{url:"/_next/static/chunks/pages/tentang-kami/data-guru-51cfd72a174dc3ce.js",revision:"51cfd72a174dc3ce"},{url:"/_next/static/chunks/pages/tentang-kami/fasilitas-9b16f09d4738aa4a.js",revision:"9b16f09d4738aa4a"},{url:"/_next/static/chunks/pages/tentang-kami/hubungan-industri-bcffd5418da7bba2.js",revision:"bcffd5418da7bba2"},{url:"/_next/static/chunks/pages/tentang-kami/profile-sekolah-98d3a0a6268edc9a.js",revision:"98d3a0a6268edc9a"},{url:"/_next/static/chunks/pages/tentang-kami/visi-misi-d2484c3ffd4d9ce7.js",revision:"d2484c3ffd4d9ce7"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/92aa6b44dd56931a.css",revision:"92aa6b44dd56931a"},{url:"/_next/static/css/f33d32d81b5dee29.css",revision:"f33d32d81b5dee29"},{url:"/about.png",revision:"3d53470a2ae86192d97734c86ee643e2"},{url:"/android-chrome-192x192.png",revision:"66829e637c30edbe19e44c67d664237c"},{url:"/android-chrome-512x512.png",revision:"6514568a6e25598a3a10baa71c9c75c4"},{url:"/apple-touch-icon.png",revision:"c64ea6986284f5b088fcb532d79d54ae"},{url:"/background.jpg",revision:"38cc957eada6c52afb350ffc45b3c8ba"},{url:"/fav/android-chrome-192x192.png",revision:"66829e637c30edbe19e44c67d664237c"},{url:"/fav/android-chrome-512x512.png",revision:"6514568a6e25598a3a10baa71c9c75c4"},{url:"/fav/apple-touch-icon.png",revision:"c64ea6986284f5b088fcb532d79d54ae"},{url:"/fav/favicon-16x16.png",revision:"7234b8a2d72861e8e49b1072c81a23c2"},{url:"/fav/favicon-32x32.png",revision:"23f346f79c6ce14e0edb9495ab9f3f45"},{url:"/fav/favicon.ico",revision:"083e860c03a5cd87c3f961b37dae5909"},{url:"/fav/site.webmanifest",revision:"247e23faae47c19cc18a1f6443ab6c68"},{url:"/favicon-16x16.png",revision:"7234b8a2d72861e8e49b1072c81a23c2"},{url:"/favicon-32x32.png",revision:"23f346f79c6ce14e0edb9495ab9f3f45"},{url:"/favicon.ico",revision:"083e860c03a5cd87c3f961b37dae5909"},{url:"/ph.jpg",revision:"24857f7fbd791c853739135af1518249"},{url:"/quote.svg",revision:"3ffe47fde064506f5fb7e7c071bcccea"},{url:"/site.webmanifest",revision:"247e23faae47c19cc18a1f6443ab6c68"},{url:"/sw.js",revision:"8b9bd3abef0b653c0e9edc3b49db6acc"},{url:"/sw.js.map",revision:"0e40ee304595be1d91479b0dc04e3447"},{url:"/tbsm.jpg",revision:"a32f1d41d0d2b0d9e7dcbd971348cb0b"},{url:"/tkro.jpg",revision:"4c05a9a7cccb501c092919d24ed7a48c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
