const style = require('style-loader!../../style.scss')
const assets = require('./assets/assets.js')

const providerSelect = (data, isMobile) => `
  <div class='${style.actions}'>
    <div class='${style.walletSelect} ${isMobile ? style.walletSelectMobile : ''}' onClick="handleOpenWalletOptions()" id="walletSelect">
      <div class='${style.walletSelect_content}'>
        <div class='${style.providerImage}' id='chosenWallet'>
          ${getProviderDisplayImage(data.request.opts.address)}
        </div>

        <h5 id='selectedWallet' class='${style.providerImageText}'>
          ${getProviderDisplayName(data.request.opts.address) || `Choose wallet`}
        </h5>
      </div>
    </div>

    <div class='${style.providerBox} ${isMobile ? style.providerBoxMobile : ''}' id='walletOptions' onClick="handleOpenWalletOptions()">
      <div class='${style.provider}' onClick="providerNameFunc('injected', '${data.request.opts.address}', '${data.request.injectedMetamask ? 'MetaMask' : 'Default Wallet'}')">
        <div class='${style.providerImage}'>
          ${data.request.injectedMetamask ? assets.MetaMask : assets.Wallet}
        </div>
        <div class='${style.providerText}'> ${data.request.injectedMetamask ? 'MetaMask' : 'Default Wallet'} </div>
      </div>

      <div class='${style.provider}' onClick="providerNameFunc('fortmatic', '${data.request.opts.address}', 'Fortmatic')">
        <div class='${style.providerImage}'>
          ${assets.Fortmatic}
        </div>
        <div class='${style.providerText}'> Fortmatic </div>
      </div>

      <div class='${style.provider}' onClick="providerNameFunc('portis', '${data.request.opts.address}', 'Portis')">
        <div class='${style.providerImage}'>
          ${assets.Portis}
        </div>
        <div class='${style.providerText}'> Portis </div>
      </div>

      <div class='${style.provider}' onClick="providerNameFunc('authereum', '${data.request.opts.address}', 'Authereum')">
        <div class='${style.providerImage}'>
          ${assets.Authereum}
        </div>
        <div class='${style.providerText}'> Authereum </div>
      </div>

      <div class='${style.provider}' onClick="providerNameFunc('wallet', '${data.request.opts.address}', 'WalletConnect')" >
        <div class='${style.providerImage}'>
          ${assets.WalletConnect}
        </div>
        <div class='${style.providerText}'> WalletConnect</div>
      </div>
    </div>

    <button id='accept' class='${style.primaryButton}'>
      Continue
    </button>

    <button id='decline' class='${style.secondaryButton}' onClick="hideIframe()">
      Cancel
    </button>
  </div>
`

export default providerSelect
