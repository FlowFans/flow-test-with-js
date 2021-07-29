import t from '@onflow/types'
import fcl from '@onflow/fcl'
import hash from 'eth-ens-namehash'
import dotenv from 'dotenv'
import { accountAddr } from '../config/constants.js'

import { test1Authz, test2Authz, test1Addr, test2Addr } from '../utils/authz'
import { buildAndExecScript, fclInit, buildAndSendTrx } from '../utils/index'

describe('Fusd test with jest', () => {
  beforeAll(() => {
    // init env and variable
    return fclInit()
    dotenv.config()
  })

  test('check fusd vault setup', async () => {
    const res = await buildAndSendTrx('setupFusdVault', [])
    console.log(res)
    expect(res.status).toBe(4)
    const query = await buildAndExecScript('checkFusdVaultSetup', [fcl.arg(accountAddr, t.Address)])
    expect(query).toBe(true)
  })

  test('setup fusd vaule with another account', async () => {
    const res = await buildAndSendTrx('setupFusdVault', [], test1Authz())
    expect(res.status).toBe(4)

    // check vault resource
    const query = await buildAndExecScript('checkFusdVaultSetup', [fcl.arg(test1Addr, t.Address)])
    expect(query).toBe(true)
  })

  test('transfer fusd token to test1 account', async () => {
    const res = await buildAndSendTrx('transferFusd', [
      fcl.arg('1.00', t.Address),
      fcl.arg(test1Addr, t.Address),
    ])
    expect(res).toBeNull()
   
    const query = await buildAndExecScript('getFusdBalance', [fcl.arg(test1Addr, t.Address)])
    expect(query).toBe("0.00000000")
  })
})
