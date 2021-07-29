# Flow test with javascript

*inspired by flow-js-testing*

Using Jest and fcl define a test scaffold for Javascript developer.

## Quick start

You need install Flow CLI first for prepare testing environment.

Clone this repo and run `yarn` in the folder.

Open a terminal and run flow emulator

```
flow emulator
```

Open another terminal to create two test account

```
yarn init:emulator (not necessary, unless you want to use multi accounts test)
```

Then deploy the FUSD contract

```
flow project deploy
```

Copy the dotenv config to your local use
```
cp .env.example .env
```

The last is runing jest test case with :
```
yarn test
```

You can see the test result in console:

```
 PASS  tests/fusd.test.js
  Fusd test with jest
    ✓ check fusd vault setup (225 ms)
    ✓ setup fusd vaule with another account (176 ms)
    ✓ transfer fusd token to test1 account (184 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.976 s, estimated 3 s

```

## more script and transactions

WIP