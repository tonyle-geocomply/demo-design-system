let e,t,l,n=!1,s=!1,o=!1,i=!1,c=!1;const r="undefined"!=typeof window?window:{},f=r.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),d=(e,t,l)=>{l&&l.map((([l,n,s])=>{const o=b(e,l),i=h(t,s),c=y(l);a.ael(o,n,i,c),(t.o=t.o||[]).push((()=>a.rel(o,n,i,c)))}))},h=(e,t)=>l=>{try{256&e.t?e.i[t](l):(e.u=e.u||[]).push([t,l])}catch(e){fe(e)}},b=(e,t)=>8&t?r:e,y=e=>0!=(2&e),m="http://www.w3.org/1999/xlink",p=new WeakMap,w=e=>"sc-"+e.$,g={},k=e=>"object"==(e=typeof e)||"function"===e,v=(e,t,...l)=>{let n=null,s=null,o=null,i=!1,c=!1;const r=[],f=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?f(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!k(n))&&(n+=""),i&&c?r[r.length-1].h+=n:r.push(i?j(null,n):n),c=i)};if(f(l),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const a=j(e,null);return a.m=t,r.length>0&&(a.p=r),a.g=s,a.k=o,a},j=(e,t)=>({t:0,v:e,h:t,j:null,p:null,m:null,g:null,k:null}),S={},O=(e,t,l,n,s,o)=>{if(l!==n){let i=re(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=M(l),o=M(n);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=k(n);if((i||r&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(m,t):e.removeAttribute(t)):(!i||4&o||s)&&!r&&(n=!0===n?"":n,f?e.setAttributeNS(m,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):re(r,c)?c.slice(2):c[2]+t.slice(3),l&&a.rel(e,t,l,!1),n&&a.ael(e,t,n,!1)}},C=/\s/,M=e=>e?e.split(C):[],x=(e,t,l,n)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.m||g,i=t.m||g;for(n in o)n in i||O(s,n,o[n],void 0,l,t.t);for(n in i)O(s,n,o[n],i[n],l,t.t)},P=(s,c,r,a)=>{const u=c.p[r];let $,d,h,b=0;if(n||(o=!0,"slot"===u.v&&(e&&a.classList.add(e+"-s"),u.t|=u.p?2:1)),null!==u.h)$=u.j=f.createTextNode(u.h);else if(1&u.t)$=u.j=f.createTextNode("");else{if(i||(i="svg"===u.v),$=u.j=f.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.t?"slot-fb":u.v),i&&"foreignObject"===u.v&&(i=!1),x(null,u,i),null!=e&&$["s-si"]!==e&&$.classList.add($["s-si"]=e),u.p)for(b=0;b<u.p.length;++b)d=P(s,u,b,$),d&&$.appendChild(d);"svg"===u.v?i=!1:"foreignObject"===$.tagName&&(i=!0)}return $["s-hn"]=l,3&u.t&&($["s-sr"]=!0,$["s-cr"]=t,$["s-sn"]=u.k||"",h=s&&s.p&&s.p[r],h&&h.v===u.v&&s.j&&R(s.j,!1)),$},R=(e,t)=>{a.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(W(s).insertBefore(s,E(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&R(s,t)}a.t&=-2},T=(e,t,n,s,o,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===l&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=P(null,n,o,e),c&&(s[o].j=c,r.insertBefore(c,E(t))))},L=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(o=n.j,D(n),s=!0,o["s-ol"]?o["s-ol"].remove():R(o,!0),o.remove())},N=(e,t)=>e.v===t.v&&("slot"===e.v?e.k===t.k:e.g===t.g),E=e=>e&&e["s-ol"]||e,W=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{const l=t.j=e.j,n=e.p,s=t.p,o=t.v,c=t.h;let r;null===c?(i="svg"===o||"foreignObject"!==o&&i,"slot"===o||x(e,t,i),null!==n&&null!==s?((e,t,l,n)=>{let s,o,i=0,c=0,r=0,f=0,a=t.length-1,u=t[0],$=t[a],d=n.length-1,h=n[0],b=n[d];for(;i<=a&&c<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==h)h=n[++c];else if(null==b)b=n[--d];else if(N(u,h))A(u,h),u=t[++i],h=n[++c];else if(N($,b))A($,b),$=t[--a],b=n[--d];else if(N(u,b))"slot"!==u.v&&"slot"!==b.v||R(u.j.parentNode,!1),A(u,b),e.insertBefore(u.j,$.j.nextSibling),u=t[++i],b=n[--d];else if(N($,h))"slot"!==u.v&&"slot"!==b.v||R($.j.parentNode,!1),A($,h),e.insertBefore($.j,u.j),$=t[--a],h=n[++c];else{for(r=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].g&&t[f].g===h.g){r=f;break}r>=0?(o=t[r],o.v!==h.v?s=P(t&&t[c],l,r,e):(A(o,h),t[r]=void 0,s=o.j),h=n[++c]):(s=P(t&&t[c],l,c,e),h=n[++c]),s&&W(u.j).insertBefore(s,E(u.j))}i>a?T(e,null==n[d+1]?null:n[d+1].j,l,n,c,d):c>d&&L(t,i,a)})(l,n,t,s):null!==s?(null!==e.h&&(l.textContent=""),T(l,null,t,s,0,s.length-1)):null!==n&&L(n,0,n.length-1),i&&"svg"===o&&(i=!1)):(r=l["s-cr"])?r.parentNode.textContent=c:e.h!==c&&(l.data=c)},F=e=>{const t=e.childNodes;let l,n,s,o,i,c;for(n=0,s=t.length;n<s;n++)if(l=t[n],1===l.nodeType){if(l["s-sr"])for(i=l["s-sn"],l.hidden=!1,o=0;o<s;o++)if(c=t[o].nodeType,t[o]["s-hn"]!==l["s-hn"]||""!==i){if(1===c&&i===t[o].getAttribute("slot")){l.hidden=!0;break}}else if(1===c||3===c&&""!==t[o].textContent.trim()){l.hidden=!0;break}F(l)}},H=[],U=e=>{let t,l,n,o,i,c,r=0;const f=e.childNodes,a=f.length;for(;r<a;r++){if(t=f[r],t["s-sr"]&&(l=t["s-cr"])&&l.parentNode)for(n=l.parentNode.childNodes,o=t["s-sn"],c=n.length-1;c>=0;c--)l=n[c],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(q(l,o)?(i=H.find((e=>e.S===l)),s=!0,l["s-sn"]=l["s-sn"]||o,i?i.O=t:H.push({O:t,S:l}),l["s-sr"]&&H.map((e=>{q(e.S,l["s-sn"])&&(i=H.find((e=>e.S===l)),i&&!e.O&&(e.O=i.O))}))):H.some((e=>e.S===l))||H.push({S:l}));1===t.nodeType&&U(t)}},q=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,D=e=>{e.m&&e.m.ref&&e.m.ref(null),e.p&&e.p.map(D)},V=e=>oe(e).C,_=(e,t,l)=>{const n=V(e);return{emit:e=>z(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},z=(e,t,l)=>{const n=a.ce(t,l);return e.dispatchEvent(n),n},B=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},G=(e,t)=>{if(e.t|=16,!(4&e.t))return B(e,e.P),we((()=>I(e,t)));e.t|=512},I=(e,t)=>{const l=e.i;let n;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>Y(l,e,t))),e.u=null),n=Y(l,"componentWillLoad")),Z(n,(()=>J(e,l,t)))},J=async(e,t,l)=>{const n=e.C,s=n["s-rc"];l&&(e=>{const t=e.R,l=e.C,n=t.t,s=((e,t)=>{let l=w(t);const n=$e.get(l);if(e=11===e.nodeType?e:f,n)if("string"==typeof n){let t,s=p.get(e=e.head||e);s||p.set(e,s=new Set),s.has(l)||(t=f.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l})(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=s,l.classList.add(s+"-h"),2&n&&l.classList.add(s+"-s"))})(e);K(e,t),s&&(s.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>Q(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},K=(i,c)=>{try{c=c.render&&c.render(),i.t&=-17,i.t|=2,((i,c)=>{const r=i.C,u=i.R,$=i.T||j(null,null),d=(e=>e&&e.v===S)(c)?c:v(null,null,c);if(l=r.tagName,u.L&&(d.m=d.m||{},u.L.map((([e,t])=>d.m[t]=r[e]))),d.v=null,d.t|=4,i.T=d,d.j=$.j=r.shadowRoot||r,e=r["s-sc"],t=r["s-cr"],n=0!=(1&u.t),s=!1,A($,d),a.t|=1,o){let e,t,l,n,s,o;U(d.j);let i=0;for(;i<H.length;i++)e=H[i],t=e.S,t["s-ol"]||(l=f.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<H.length;i++)if(e=H[i],t=e.S,e.O){for(n=e.O.parentNode,s=e.O.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&F(d.j),a.t&=-2,H.length=0})(i,c)}catch(e){fe(e,i.C)}return null},Q=e=>{const t=e.C,l=e.i,n=e.P;64&e.t||(e.t|=64,ee(t),Y(l,"componentDidLoad"),e.N(t),n||X()),e.W(t),e.M&&(e.M(),e.M=void 0),512&e.t&&pe((()=>G(e,!1))),e.t&=-517},X=()=>{ee(f.documentElement),pe((()=>z(r,"appload",{detail:{namespace:"gc-web-design-system"}})))},Y=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){fe(e)}},Z=(e,t)=>e&&e.then?e.then(t):t(),ee=e=>e.classList.add("hydrated"),te=(e,t,l)=>{if(t.A){e.watchers&&(t.F=e.watchers);const n=Object.entries(t.A),s=e.prototype;if(n.map((([e,[n]])=>{31&n||2&l&&32&n?Object.defineProperty(s,e,{get(){return((e,t)=>oe(this).H.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=oe(e),o=s.C,i=s.H.get(t),c=s.t,r=s.i;if(l=((e,t)=>null==e||k(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.A[t][0]),(!(8&c)||void 0===i)&&l!==i&&(!Number.isNaN(i)||!Number.isNaN(l))&&(s.H.set(t,l),r)){if(n.F&&128&c){const e=n.F[t];e&&e.map((e=>{try{r[e](l,i,t)}catch(e){fe(e,o)}}))}2==(18&c)&&G(s,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0}):1&l&&64&n&&Object.defineProperty(s,e,{value(...t){const l=oe(this);return l.U.then((()=>l.i[e](...t)))}})})),1&l){const l=new Map;s.attributeChangedCallback=function(e,t,n){a.jmp((()=>{const t=l.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const s=n[1]||e;return l.set(s,e),512&n[0]&&t.L.push([e,s]),s}))}}return e},le=e=>{Y(e,"connectedCallback")},ne=(e,t={})=>{const l=[],n=t.exclude||[],s=r.customElements,o=f.head,i=o.querySelector("meta[charset]"),c=f.createElement("style"),u=[];let h,b=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map((e=>{e[1].map((t=>{const o={t:t[0],$:t[1],A:t[2],q:t[3]};o.A=t[2],o.q=t[3],o.L=[],o.F={};const i=o.$,c=class extends HTMLElement{constructor(e){super(e),ce(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),b?u.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=oe(e),l=t.R,n=()=>{};if(1&t.t)d(e,t,l.q),le(t.i);else{t.t|=1,12&l.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){B(t,t.P=l);break}}l.A&&Object.entries(l.A).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=ue(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(l.F=s.watchers,te(s,l,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){fe(e)}t.t&=-9,t.t|=128,e(),le(t.i)}if(s.style){let e=s.style;const t=w(l);if(!$e.has(t)){const n=()=>{};((e,t,l)=>{let n=$e.get(e);$&&l?(n=n||new CSSStyleSheet,"string"==typeof n?n=t:n.replaceSync(t)):n=t,$e.set(e,n)})(t,e,!!(1&l.t)),n()}}}const o=t.P,i=()=>G(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}})(this)))}disconnectedCallback(){a.jmp((()=>(()=>{if(0==(1&a.t)){const e=oe(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),Y(t,"disconnectedCallback")}})()))}componentOnReady(){return oe(this).D}};o.V=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,te(c,o,1)))}))})),c.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,i?i.nextSibling:o.firstChild),b=!1,u.length?u.map((e=>e.connectedCallback())):a.jmp((()=>h=setTimeout(X,30)))},se=new WeakMap,oe=e=>se.get(e),ie=(e,t)=>se.set(t.i=e,t),ce=(e,t)=>{const l={t:0,C:e,R:t,H:new Map};return l.U=new Promise((e=>l.W=e)),l.D=new Promise((e=>l.N=e)),e["s-p"]=[],e["s-rc"]=[],d(e,l,t.q),se.set(e,l)},re=(e,t)=>t in e,fe=(e,t)=>(0,console.error)(e,t),ae=new Map,ue=e=>{const t=e.$.replace(/-/g,"_"),l=e.V,n=ae.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(ae.set(l,e),e[t])),fe)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},$e=new Map,de=[],he=[],be=(e,t)=>l=>{e.push(l),c||(c=!0,t&&4&a.t?pe(me):a.raf(me))},ye=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){fe(e)}e.length=0},me=()=>{ye(de),ye(he),(c=de.length>0)&&a.raf(me)},pe=e=>u().then(e),we=be(he,!0);export{S as H,ne as b,_ as c,V as g,v as h,u as p,ie as r}