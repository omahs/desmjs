"use strict";(self.webpackChunkdesmjs_documentation=self.webpackChunkdesmjs_documentation||[]).push([[1812],{5318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[d]="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});t(7378);var o=t(5318);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const r={sidebar_label:"DesmJS WalletConnect v2",id:"desmsj-walletconnect-v2",sidebar_position:3},c="DesmJS WalletConnect v2",s={unversionedId:"packages/desmsj-walletconnect-v2",id:"packages/desmsj-walletconnect-v2",title:"DesmJS WalletConnect v2",description:"This package provides a Signer capable of sign transactions through WalletConnect v2.",source:"@site/docs/packages/walletconnect-v2.md",sourceDirName:"packages",slug:"/packages/desmsj-walletconnect-v2",permalink:"/packages/desmsj-walletconnect-v2",draft:!1,editUrl:"https://github.com/desmos-labs/desmjs/tree/master/docs/docs/packages/walletconnect-v2.md",tags:[],version:"current",lastUpdatedAt:1706703101,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"DesmJS WalletConnect v2",id:"desmsj-walletconnect-v2",sidebar_position:3},sidebar:"docs",previous:{title:"DesmJS Keplr",permalink:"/packages/desmsj-keplr"},next:{title:"DesmJS Web3Auth Web",permalink:"/packages/desmsj-web3auth-web"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Initializing a WalletConnect <code>SignClient</code> instance",id:"initializing-a-walletconnect-signclient-instance",level:3},{value:"Building a <code>DesmosClient</code> using <code>WalletConnectSigner</code>",id:"building-a-desmosclient-using-walletconnectsigner",level:2},{value:"Connecting to a client",id:"connecting-to-a-client",level:3},{value:"Creating a new connection",id:"creating-a-new-connection",level:4},{value:"Reconnecting to a session",id:"reconnecting-to-a-session",level:4},{value:"Disconnecting",id:"disconnecting",level:3},{value:"Customize the QR code modal",id:"customize-the-qr-code-modal",level:2}],m={toc:d};function u(e){var{components:n}=e,t=i(e,["components"]);return(0,o.kt)("wrapper",l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){a(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"desmjs-walletconnect-v2"},"DesmJS WalletConnect v2"),(0,o.kt)("p",null,"This package provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer")," capable of sign transactions through ",(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.org"},"WalletConnect v2"),"."),(0,o.kt)("admonition",{title:"Verify client implementation  ",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This package assumes that the other client implements the following RPC methods:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmos_signAmino"),": Sign a amino encoded transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmos_signDirect"),": Sign a protobuf encoded transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmos_getAccountData"),": Gets the details of the account"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install the package run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @desmoslabs/desmjs-walletconnect-v2 @walletconnect/types\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"initializing-a-walletconnect-signclient-instance"},"Initializing a WalletConnect ",(0,o.kt)("inlineCode",{parentName:"h3"},"SignClient")," instance"),(0,o.kt)("p",null,"Before creating the ",(0,o.kt)("a",{parentName:"p",href:"/api/walletconnect-v2/classes/WalletConnectSigner"},(0,o.kt)("inlineCode",{parentName:"a"},"WalletConnectSigner")),"\nyou must create an instance of the WalletConnect ",(0,o.kt)("inlineCode",{parentName:"p"},"SignClient"),".  "),(0,o.kt)("p",null,"To initialize a ",(0,o.kt)("inlineCode",{parentName:"p"},"SignClient")," instance you need a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/2.0/cloud/relay"},"project id")," that\ncan be obtained from the ",(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.com"},"WalletConnect website"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { SignClient } from "@desmoslabs/desmjs-walletconnect-v2";\n\nconst signClient = await SignClient.init({\n  projectId: "<YOUR_PROJECT_ID>",\n  metadata: {\n    name: "Example Dapp",\n    description: "Example Dapp",\n    url: "#",\n    icons: ["https://walletconnect.com/walletconnect-logo.png"],\n  },\n});\n')),(0,o.kt)("h2",{id:"building-a-desmosclient-using-walletconnectsigner"},"Building a ",(0,o.kt)("inlineCode",{parentName:"h2"},"DesmosClient")," using ",(0,o.kt)("inlineCode",{parentName:"h2"},"WalletConnectSigner")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { WalletConnectSigner, QRCodeModal } from "@desmoslabs/desmjs-walletconnect-v2";\n\nconst signer = new WalletConnectSigner(signClient, {\n  // Id of the chain you are connecting to\n  chain: "desmos:desmos-mainnet",\n  // Signer sign mode\n  signingMode: SigningMode.DIRECT,\n  // Controller used to display the QR Code that can be scanned from a wallet \n  qrCodeModalController: QRCodeModal,\n});\n\nconst client = await DesmosClient.connectWithSigner(\'https://rpc.mainnet.desmos.network\', signer, {\n  // Common gas price in the Desmos mainnet.\n  gasPrice: GasPrice.fromString("0.01udsm"),\n});\n\n// Use the client to perform operations...\n')),(0,o.kt)("h3",{id:"connecting-to-a-client"},"Connecting to a client"),(0,o.kt)("p",null,"After you have initialized the signer you can create a new session or reconnect to a previously established\nconnection."),(0,o.kt)("admonition",{title:"Custom QR code modal   ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your application needs a custom UI to show the QR code you can see how to customize it\n",(0,o.kt)("a",{parentName:"p",href:"#customize-qr-modal"},"here"),".")),(0,o.kt)("h4",{id:"creating-a-new-connection"},"Creating a new connection"),(0,o.kt)("p",null,"To create a new connection you can call the\n",(0,o.kt)("a",{parentName:"p",href:"/api/walletconnect-v2/classes/WalletConnectSigner#connect"},(0,o.kt)("inlineCode",{parentName:"a"},"connect"))," method.",(0,o.kt)("br",{parentName:"p"}),"\n","This will show to the user a QR code that can be scanned from a wallet to connect to your DApp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await signer.connect();\n")),(0,o.kt)("h4",{id:"reconnecting-to-a-session"},"Reconnecting to a session"),(0,o.kt)("p",null,"To reconnect to a previously established session, you can call the\n",(0,o.kt)("a",{parentName:"p",href:"/api/walletconnect-v2/classes/WalletConnectSigner#connecttosession"},(0,o.kt)("inlineCode",{parentName:"a"},"connectToSession")),"\nmethod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { WalletConnectSigner, SignClient } from "@desmoslabs/desmjs-walletconnect-v2";\n\nconst signClient: SignClient; // Your initialized SignClient\nconst signer: WalletConnectSigner; // Your initialized Signer\n\n// Get sessions from WalletConnect SignClient\nconst sessions = signClient.session.values;\n\n// Reconnect to the first one\nawait signer.connectToSession(sessions[0]);\n')),(0,o.kt)("h3",{id:"disconnecting"},"Disconnecting"),(0,o.kt)("p",null,"When you have finished to perform the operations, or if the user wants to disconnect from your app, you can\ncall the ",(0,o.kt)("a",{parentName:"p",href:"/api/walletconnect-v2/classes/SignClient#disconnect"},(0,o.kt)("inlineCode",{parentName:"a"},"disconnect"))," method\nto terminate the session."),(0,o.kt)("h2",{id:"customize-the-qr-code-modal"},"Customize the QR code modal"),(0,o.kt)("p",null,"To customize the UI that present the QR code to the user, you can create an object that implements the\n",(0,o.kt)("a",{parentName:"p",href:"/api/walletconnect-v2/interfaces/QrCodeModalController"},(0,o.kt)("inlineCode",{parentName:"a"},"QrCodeModalController")),"\ninterface.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": An example of implementation can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/desmjs/tree/main/packages/walletconnect-modal"},"https://github.com/desmos-labs/desmjs/tree/main/packages/walletconnect-modal"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { QrCodeModalController } from "@desmoslabs/desmjs-walletconnect-v2";\n\nconst customController: QrCodeModalController = {\n  open(uri: string, onCloseCb: () => void) {\n    // Show the QR code to the user.\n    // uri - Uri to be displayed as QR Code\n    // onCloseCb - callback to be called when the user closes the UI.\n  },\n  close() {\n    // Close the QR code ui.\n  },\n};\n')),(0,o.kt)("p",null,"With the custom ",(0,o.kt)("inlineCode",{parentName:"p"},"QrCodeModalController"),", now you can pass it as ",(0,o.kt)("inlineCode",{parentName:"p"},"qrCodeController")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," field of\n",(0,o.kt)("a",{parentName:"p",href:"/api/walletconnect-v2/classes/WalletConnectSigner#constructor"},(0,o.kt)("inlineCode",{parentName:"a"},"WalletConnectSigner")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { WalletConnectSigner } from "@desmoslabs/desmjs-walletconnect-v2";\nimport { QrCodeModalController } from "@desmoslabs/desmjs-walletconnect-v2";\n\nconst customController: QrCodeModalController = {\n  open(uri: string, onCloseCb: () => void) {\n    // Show the QR code to the user.\n    // uri - Uri to be displayed as QR Code\n    // onCloseCb - callback to be called when the user closes the UI.\n  },\n  close() {\n    // Close the QR code ui.\n  },\n};\n\nconst signer = new WalletConnectSigner(signClient, {\n  // Id of the chain you are connecting to\n  chain: "desmos:desmos-mainnet",\n  // Signer sign mode\n  signingMode: SigningMode.DIRECT,\n  // Controller used to display the QR Code that can be scanned from a wallet \n  qrCodeModalController: customController,\n});\n')))}u.isMDXComponent=!0}}]);