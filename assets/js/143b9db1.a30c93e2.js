"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[5453],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var a=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,s=function(e,t){if(null==e)return{};var i,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=a.createContext({}),m=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=m(i),h=s,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return i?a.createElement(k,o(o({ref:t},p),{},{components:i})):a.createElement(k,o({ref:t},p))}));function h(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=i.length,o=new Array(n);o[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var m=2;m<n;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},57974:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>m});var a=i(87462),s=(i(67294),i(3905));const n={},o="Registration",r={unversionedId:"integrate/registration",id:"integrate/registration",title:"Registration",description:"How to Register onto the Cosmos Chain Registry",source:"@site/docs/overview/integrate/registration.md",sourceDirName:"integrate",slug:"/integrate/registration",permalink:"/overview/integrate/registration",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/beta/docs/overview/integrate/registration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Marketing",permalink:"/overview/integrate/marketing"},next:{title:"Token Listings",permalink:"/overview/integrate/token-listings"}},l={},m=[{value:"How to Register onto the Cosmos Chain Registry",id:"how-to-register-onto-the-cosmos-chain-registry",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Steps",id:"steps",level:3},{value:"How to Register an Asset onto the Osmosis Assetlists Registry",id:"how-to-register-an-asset-onto-the-osmosis-assetlists-registry",level:2},{value:"Purpose",id:"purpose-1",level:3},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Requirements",id:"requirements-1",level:3},{value:"Steps",id:"steps-1",level:3},{value:"How to Register a bech32 Prefix onto SLIP173",id:"how-to-register-a-bech32-prefix-onto-slip173",level:2},{value:"Purpose",id:"purpose-2",level:3},{value:"Prerequisites",id:"prerequisites-2",level:3},{value:"Requirements",id:"requirements-2",level:3},{value:"Steps",id:"steps-2",level:3},{value:"How to Enlist an Asset onto CoinGecko",id:"how-to-enlist-an-asset-onto-coingecko",level:2},{value:"Purpose",id:"purpose-3",level:3},{value:"Prerequisites",id:"prerequisites-3",level:3},{value:"Requirements",id:"requirements-3",level:3},{value:"Steps",id:"steps-3",level:3}],p={toc:m};function u(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"registration"},"Registration"),(0,s.kt)("h2",{id:"how-to-register-onto-the-cosmos-chain-registry"},"How to Register onto the Cosmos Chain Registry"),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"The Cosmos Chain Registry is used as a single source of truth and is used to look up chain and asset data"),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Registered to ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md"},"SLIP173"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"See: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/integrate/registration.html#how-to-register-a-bech32-prefix-onto-slip173"},"How to register a bech32 prefix onto SLIP173")))),(0,s.kt)("li",{parentName:"ul"},"Registered to ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP44")," (if coin type is not like ATOM)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: Coin Type 118 represents the Cosmos Hub's ATOM token, registered listed in ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP44"),"; many projects also default to using this coin type, while some have registered their own."))),(0,s.kt)("li",{parentName:"ul"},"Chain added to Mintscan (optional)"),(0,s.kt)("li",{parentName:"ul"},"Assets listed on CoinGecko (optional)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"See: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/integrate/registration.html#how-to-enlist-an-asset-onto-coingecko"},"How to enlist assets onto CoinGecko"))))),(0,s.kt)("h3",{id:"requirements"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Chain data--metadata, locations, network addresses, etc."),(0,s.kt)("li",{parentName:"ul"},"Asset data--metadata, such as name, symbol, minimal denomination, decimal precision, etc.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"CoinGecko ID",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Refer to the latest ",(0,s.kt)("a",{parentName:"li",href:"https://api.coingecko.com/api/v3/coins/list"},"CoinGecko Coins List")))))),(0,s.kt)("li",{parentName:"ul"},"Basic understanding of GitHub, knowing how to fork a repository, create a branch, commit changes, and submit a Pull Request")),(0,s.kt)("h3",{id:"steps"},"Steps"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Review the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/chain-registry"},"Cosmos Chain Registry")," docs:",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/chain-registry/blob/master/README.md"},"README.md")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/chain-registry/blob/master/chain.schema.json"},"chain.schema.json")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/chain-registry/blob/master/assetlist.schema.json"},"assetlist.schema.json"))),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: It is recommended to refer to another registration to serve as an example, such as ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/chain-registry/blob/master/osmosis/chain.json"},"Osmosis' registration")))),(0,s.kt)("li",{parentName:"ol"},"Submit a pull request with necessary changes to the following:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chain.json"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Be sure to include ",(0,s.kt)("inlineCode",{parentName:"li"},"bech32_prefix"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"e.g., ",(0,s.kt)("inlineCode",{parentName:"li"},'"bech32_prefix": "cosmos",')))),(0,s.kt)("li",{parentName:"ul"},"Be sure to include ",(0,s.kt)("inlineCode",{parentName:"li"},"slip44")," (coin type)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"e.g., ",(0,s.kt)("inlineCode",{parentName:"li"},'"slip44": 118,')))),(0,s.kt)("li",{parentName:"ul"},"Be sure to include at least one RPC and one REST under ",(0,s.kt)("inlineCode",{parentName:"li"},"apis")),(0,s.kt)("li",{parentName:"ul"},"For explorers, opt for Mintscan, if available"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"assetlists.json"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"name")," of an asset refers to how the asset should be called in persoanl communication, while ",(0,s.kt)("inlineCode",{parentName:"li"},"symbol")," is like a stock ticker, typically in ALL CAPS, and these values may differ.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"e.g., ",(0,s.kt)("inlineCode",{parentName:"li"},'"name": graviton, "display": "graviton", "symbol": "GRAV"')))),(0,s.kt)("li",{parentName:"ul"},"Be sure to include the CoinGecko ID for each asset where one exists",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"e.g., ",(0,s.kt)("inlineCode",{parentName:"li"},'"coingecko_id": "cosmos"'))))))))),(0,s.kt)("h2",{id:"how-to-register-an-asset-onto-the-osmosis-assetlists-registry"},"How to Register an Asset onto the Osmosis Assetlists Registry"),(0,s.kt)("h3",{id:"purpose-1"},"Purpose"),(0,s.kt)("p",null,"The Osmosis Assetlists Registry is used as a local source of truth for assets displayed on Osmosis' front end."),(0,s.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Registered onto the Cosmos Chain Registry",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"See: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/integrate/registration.html#how-to-register-onto-the-cosmos-chain-registry"},"How to register onto the Cosmos Chain Registry")))),(0,s.kt)("li",{parentName:"ul"},"Opened IBC connection between the source chain and Osmosis",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Selected a sole desigate IBC connection between the registering chain and Osmosis for this asset",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"All native assets from a chain should go through a single connection, but CW20 tokens can be sent through another connection"))))),(0,s.kt)("li",{parentName:"ul"},"There is a liquidity pool on Osmosis with sufficient liquidity.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"See: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/integrate/liquidity.html"},"Liquidity")),(0,s.kt)("li",{parentName:"ul"},"See: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/developing/modules/spec-gamm.html#create-pool"},"GAMM Module: Create pool")," for the CLI command to create a pool"))),(0,s.kt)("li",{parentName:"ul"},"Assets listed on CoinGecko (optional)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"See: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/integrate/registration.html#how-to-enlist-an-asset-onto-coingecko"},"How to enlist assets onto CoinGecko"))))),(0,s.kt)("h3",{id:"requirements-1"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Designate IBC Connection details:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Source channel (Osmosis' channel to the registering chain)"),(0,s.kt)("li",{parentName:"ul"},"Destination channel (Registering chain's channel to Osmosis)"))),(0,s.kt)("li",{parentName:"ul"},"Asset data:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},'IBC denomination (when the asset is transferred to Osmosis, the base denomination looks like "ibc/...")',(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"E.g., For ATOM: ",(0,s.kt)("inlineCode",{parentName:"li"},'"base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",')))),(0,s.kt)("li",{parentName:"ul"},"Name, symbol, exponent, etc."),(0,s.kt)("li",{parentName:"ul"},"CoinGecko ID (optional, but should be included if and when there is one)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Refer to the latest ",(0,s.kt)("a",{parentName:"li",href:"https://api.coingecko.com/api/v3/coins/list"},"CoinGecko Coins List")))))),(0,s.kt)("li",{parentName:"ul"},"Token Logo Image files (both .png and .svg is recommended)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: Currently, a .png is required to be able to render on ",(0,s.kt)("a",{parentName:"li",href:"info.osmosis.zone"},"info.osmosis.zone")))),(0,s.kt)("li",{parentName:"ul"},"Basic understanding of GitHub, knowing how to fork a respository, create a branch, commit changes, and submit a Pull Request")),(0,s.kt)("h3",{id:"steps-1"},"Steps"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Review the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/assetlists"},"Osmosis Assetlists Registry")," docs:",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/assetlists/blob/main/README.md"},"README.md")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/assetlists/blob/main/assetlist.schema.json"},"assetlist.schema.json")))),(0,s.kt)("li",{parentName:"ol"},"Submit a pull request with necessary changes to the following:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"osmosis-1/osmosis-frontier.assetlist.json"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Be sure to include the CoinGecko ID if one exists"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"images/"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Add token logo images")))))),(0,s.kt)("h2",{id:"how-to-register-a-bech32-prefix-onto-slip173"},"How to Register a bech32 Prefix onto SLIP173"),(0,s.kt)("h3",{id:"purpose-2"},"Purpose"),(0,s.kt)("p",null,"CosmosSDK Chain addresses can be represented with a chain-specific string preceding a hash, which helps identify to which chain an address belongs. They are registered on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md"},"SLIP173")),(0,s.kt)("h3",{id:"prerequisites-2"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Chain configured to use bech32 prefixes in wallet addresses",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: A bech32 prefix may still be registered, even before the chain is configured to use the prefixes, but only if the configuration will happen soon.")))),(0,s.kt)("h3",{id:"requirements-2"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Chain data:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Chain name"),(0,s.kt)("li",{parentName:"ul"},"Chain website"),(0,s.kt)("li",{parentName:"ul"},"bech32 prefix(es)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Mainnet"),(0,s.kt)("li",{parentName:"ul"},"Testnet (optional)"),(0,s.kt)("li",{parentName:"ul"},"Regtest (optional)"),(0,s.kt)("li",{parentName:"ul"},"Note: The bech32 prefix must be unique among all registered prefixes. E.g., a new mainnet prefix cannot match a prefix already registered as a testnet prefix."))))),(0,s.kt)("li",{parentName:"ul"},"Basic understanding of GitHub, knowing how to fork, create a branch, commit changes, and submit a Pull Request")),(0,s.kt)("h3",{id:"steps-2"},"Steps"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Review the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md"},"SLIP173 Registry"),":"),(0,s.kt)("li",{parentName:"ol"},"Submit a pull request with necessary changes to the following:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"slip-0173.md"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Add the chain name (as a link to the website) and prefix(es) into the ",(0,s.kt)("em",{parentName:"li"},"Registered human-readable parts")," table")))))),(0,s.kt)("h2",{id:"how-to-enlist-an-asset-onto-coingecko"},"How to Enlist an Asset onto CoinGecko"),(0,s.kt)("h3",{id:"purpose-3"},"Purpose"),(0,s.kt)("p",null,"CoinGecko (",(0,s.kt)("a",{parentName:"p",href:"coingecko.com"},"CoinGecko.com"),") is cryptocurrency price aggregator which can provide asset price data directly to Osmosis Zone via API. Check out their ",(0,s.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/faq"},"FAQ")," to learn more."),(0,s.kt)("p",null,"Osmosis embraces CoinGecko price feeds and prioritizes CoinGecko prices over Osmosis pool spot prices on Osmosis Zone. If as asset is not yet registered on CoinGecko, it should aim to do so. This procedure will guide project administrators to register their Asset onto CoinGecko."),(0,s.kt)("h3",{id:"prerequisites-3"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Chain mainnet is live")),(0,s.kt)("p",null,"From ",(0,s.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/methodology"},"coingecko.com/en/methodology"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Working, functional website that has sufficient information on cryptoasset that is being listed. Websites with no information on purpose, team or social media profiles will be considered as invalid.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Website must be owned by the project/maintaining team. Websites hosted on website builders (i.e Wix) will not be accepted."))),(0,s.kt)("li",{parentName:"ul"},"Working block explorer"),(0,s.kt)("li",{parentName:"ul"},"Listed on at least one (1) active exchanges where CoinGecko is integrated with.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: Because Osmosis is integrated with CoinGecko, this will automatically be fullfilled once a Liquidity Pool containing the new Asset is created on Osmosis."),(0,s.kt)("li",{parentName:"ul"},"See: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/integrate/frontend.html#how-to-add-an-asset-onto-the-osmosis-assets-page"},"How to Add an Asset onto the Osmosis Assets Page"))))),(0,s.kt)("h3",{id:"requirements-3"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Asset data:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Name (e.g., 'Cosmos Hub')"),(0,s.kt)("li",{parentName:"ul"},"ID (e.g., 'cosmos')"),(0,s.kt)("li",{parentName:"ul"},"Symbol (e.g., 'ATOM')"),(0,s.kt)("li",{parentName:"ul"},"Circulating Supply"),(0,s.kt)("li",{parentName:"ul"},"Total Supply"),(0,s.kt)("li",{parentName:"ul"},"Osmosis Address (i.e., the 'ibc/...' denom on Osmosis)")))),(0,s.kt)("h3",{id:"steps-3"},"Steps"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Review CoinGecko's ",(0,s.kt)("a",{parentName:"li",href:"https://www.coingecko.com/en/methodology"},"Methodology page"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Pay special attention to the following sections:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"'Listings',"),(0,s.kt)("li",{parentName:"ul"},"'Listing Criteria',"),(0,s.kt)("li",{parentName:"ul"},"'Do's and Don'ts for Listing Submission', and"),(0,s.kt)("li",{parentName:"ul"},"'Listing Process Flow'"))))),(0,s.kt)("li",{parentName:"ol"},"Fill in and submit a 'CoinGecko Request Form' (a current link can be found on their 'Methodology' page)")))}u.isMDXComponent=!0}}]);