# Introduction
One of the main reasons why the user experience of using EOAs is so difficult is because the wallet owner needs to find a way to get some ETH before they can perform any actions on-chain.

With paymasters, ERC-4337 allows abstracting gas payments altogether, meaning ​​someone other than the wallet owner can pay for the gas instead.

Gas abstraction offers plenty of benefits, such as:

* The need to acquire ETH before performing on-chain actions creates a significant friction point for users who are not crypto-savvy.
* Users don’t pay AWS fees for using web2 apps, so paying gas fees for using dapps could feel foreign and wrong to them. Paymasters allow dapps to sponsor those fees instead. Alternatively, dapps can instead allow the user to pay for gas in some ERC-20 token other than ETH, for example with USDC.
* To preserve privacy, a user can interact with assets in their account (for example, claimed tokens), without having to dox themselves by sending ETH from another KYCed wallet or CEX to pay for gas fees.


