[![Discord](https://img.shields.io/discord/484729862368526356.svg?style=for-the-badge)](https://discordapp.com/invite/Z3f3Cxy)
[![Twitter Follow](https://img.shields.io/twitter/follow/3boxdb.svg?style=for-the-badge&label=Twitter)](https://twitter.com/3boxdb)

# <a name="intro"></a> 3ID-Connect
> ⚠️ This package is slowly being phased out in favor of a new more decentralized system called IDX (https://idx.xyz) which is built on top of the Ceramic network. You can use it for now, but be aware that support will be limited as Ceramic is moving closer to a mainnet release.




![3ID Connect Image](./assets/3id-connect_readme-image.png)

[Find 3ID-Connect on Ceramic here.](https://github.com/ceramicstudio/3id-connect)

3ID-Connect is a 3ID account management service run in an iframe. It allows you to authenicate, manage, and permission your 3ID keys to applications. Used by default in [3box-js](https://github.com/3box/3box-js). [identity-wallet-js](https://github.com/3box/identity-wallet-js) handles most operations and the parent window (application) communicates with iframe service over RPC layer as defined by [3ID JSON-RPC](https://github.com/3box/3box/blob/master/3IPs/3ip-10.md)

Right now you authenticate and link ethereum accounts to mange your 3ID, in the future other keypairs, blockchain accounts, and authentication methods can be added.

# <a name="intro-ceramic"></a> 3ID-Connect Ceramic

The next verion of 3ID-Connect is being developed on [Ceramic](https://ceramic.network) and [identity-wallet-js V2](https://github.com/3box/identity-wallet-js). It is being developed in parallel with the current version. You can find 3ID-Connect with Ceramic support in the [following repo](https://github.com/ceramicstudio/3id-connect). In the future this repo will be depracated. It is released at 3id-connect@next and available at 3idconnect.org.

## <a name="structure"></a> Structure

* **/src** - Core logic and consumable interfaces for clients and iframe
  *  **/threeIdConnect.js** -  Application interface (RPC client) to load iframe and return 3ID provider.
  *  **/threeIdConnectService.js** - Identity wallet instance and RPC 'server' to handle requests
  *  **/threeIdProviderProxy.js** -  3ID provider interface that relays request through RPC layer
* **/iframe** - all html, css, js, design assets for iframe and flow
* **/public** - build assets deployed for iframe

## <a name="development"></a> Development

Clone and install dependencies

#### Run Locally

Will serve iframe locally on port 30001

```
$ npm run start
```

#### Build

```
$ npm run build
```

## Maintainers
[@zachferland](https://github.com/zachferland)
