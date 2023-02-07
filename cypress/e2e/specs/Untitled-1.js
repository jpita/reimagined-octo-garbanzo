// using cypress, writh an API test that will:
// 1. create a new user
// 2. login as that user
// 3. create a new wallet
// 4. add a new address to that wallet
// 5. get the balance of that address
// 6. send some ETH to that address
// 7. get the balance of that address again
// 8. verify that the balance has increased
//
// you can use the following API endpoints:
// POST /api/v1/users
// POST /api/v1/users/login
// POST /api/v1/wallets
// POST /api/v1/wallets/{walletId}/addresses
// GET /api/v1/wallets/{walletId}/addresses/{addressId}/balance
// POST /api/v1/wallets/{walletId}/addresses/{addressId}/send
//
// you can use the following API documentation:
// https://api.trakx.io/swagger/index.html
//
// you can use the following API test as a reference:
//
// import { expect } from "chai";
// import { describe, it } from "mocha";
// import { v4 as uuidv4 } from "uuid";
// import { ApiClient } from "../src/api-client";
// import { User } from "../src/models/user";
// import { Wallet } from "../src/models/wallet";
// import { WalletAddress } from "../src/models/wallet-address";
// import { WalletAddressBalance } from "../src/models/wallet-address-balance";
// import { WalletAddressSend } from "../src/models/wallet-address-send";

// describe("API Test", () => {
//   const apiClient = new ApiClient();
//   const user: User = {
//     email: `test-${uuidv4()}@trakx.io`,
