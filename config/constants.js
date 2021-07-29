import dotenv from 'dotenv'
dotenv.config()

export const nodeUrl = process.env.FLOW_ACCESS_NODE

export const privateKey = process.env.FLOW_ACCOUNT_PRIVATE_KEY

export const accountKeyId = process.env.FLOW_ACCOUNT_KEY_ID

export const accountAddr = process.env.FLOW_ACCOUNT_ADDRESS

export const flowFungibleAddr = process.env.FLOW_FUNGIBLE_ADDRESS

export const publicKey = process.env.FLOW_ACCOUNT_PUBLIC_KEY

const buildPath = (fileName, type) => {
  let filePath = ''
  switch (type) {
    case 'script':
      filePath = `../cadence/scripts/${fileName}`
      break
    default:
      filePath = `../cadence/transactions/${fileName}`
  }
  return filePath
}

export const paths = {
  scripts: {
    checkFusdVaultSetup: buildPath('check_fusd_vault_setup.cdc', 'script'),
    getFusdBalance: buildPath('get_fusd_balance.cdc', 'script'),
  },
  transactions: {
    setupFusdVault: '../cadence/transactions/setup_fusd_vault.cdc',
    transferFusd: '../cadence/transactions/transfer_fusd.cdc',
  },
}
