![](http://imgur.com/t3teAxi.png)

# Destructors E-Commerce -- Frontend

[![HoundCI](https://img.shields.io/badge/houndci-passing-brightgreen.svg)](https:/houndci.com) [![Coverage Status](https://coveralls.io/repos/github/atlp-rwanda/destructors-ec-fe/badge.svg?branch=develop)](https://coveralls.io/github/atlp-rwanda/destructors-ec-fe?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/cbd9fc55fe213b1a3f65/maintainability)](https://codeclimate.com/github/atlp-rwanda/destructors-ec-fe/maintainability)
![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge)

# Introduction

Welcome to our E-commerce frontend repository built with [ReactJS](https://react.dev/learn), [Tailwind](https://tailwindcss.com/docs/installation), and [Redux](https://redux-toolkit.js.org/introduction/getting-started). This repository contains the frontend code for an online marketplace that enables users to purchase products and sellers to sell their products.

## Features

<b>Authentication & Authorization</b>

| Feature           |  Coded?  | Description                                              |
| ----------------- | :------: | :------------------------------------------------------- |
| SignUp            | &#10004; | A user should be able of to register into e-commerce app |
| SignIn            | &#10004; | A user should be able of to login into e-commerce        |
| Login with google | &#10004; | A user can login with google Account                     |
| Update Password   | &#10004; | Ability to update password                               |
| Reset Password    | &#10004; | Ability of Resetting password                            |
| Logout            | &#10004; | Ability to logout into the app                           |

<b>Buyers Features</b>

| Feature               |  Coded?  | Description                                                             |
| --------------------- | :------: | :---------------------------------------------------------------------- |
| View All Product      | &#10004; | Ability of listing all product                                          |
| View Single Product   | &#10004; | Ability of to view single products                                      |
| Recommended Product   | &#10004; | A buyer can be able to view recommended products                        |
| Reviewing Product     | &#10004; | A buyer can provide review/feedback+ratings to the product they boughts |
| Noitifications events | &#10004; | A user can receive the notification of important actions happened       |
| Profile Managements   | &#10004; | A user can update profile/address                                       |
| Create a Cart         | &#10004; | Ability of Create a new Cart                                            |
| See Cart              | &#10004; | Ability to see the Cart and it items                                    |
| Remove a Cart         | &#10004; | Ability of Remove a Cart                                                |
| Add Item              | &#10004; | Ability of add a new Item on the Cart                                   |
| Remove a Item         | &#10004; | Ability of Remove a Item from the Cart                                  |
| WishLists             | &#10004; | Ability to add/remove products from wishlists                           |
| Checkout              | &#10004; | Ability to Checkout by using [StripeAPI](https://stripe.com/docs/api)   |
| Invoice report        | &#10004; | Ability to receive an invoice via email after purchase                  |

<b>Sellers Features</b>

| Feature                        |  Coded?  | Description                                                   |
| ------------------------------ | :------: | :------------------------------------------------------------ |
| Two factors Authentication     | &#10004; | A Seller must login using two factor auth to improve security |
| Listing Products in collection | &#10004; | A seller can add/update products in their collection          |
| Sales Stastics                 | &#10004; | A seller can get sales, wished products and expired ones      |
| Sales Status                   | &#10004; | Ability to update the status of sales                         |

<b>Additional features</b>

| Feature      |  Coded?  | Description                                    |
| ------------ | :------: | :--------------------------------------------- |
| Public Chats | &#10004; | Users can be able to chat and share experience |

## Online App

You can visit the fully integrated app [here](https://destructors-ec-fe.vercel.app/)

## REST API Docs

You can visit the api documentation [here](https://destructors-ecommerce-be.onrender.com/api-docs/)

## Installation and usage instructions

- Clone the repository using: `git clone https://github.com/atlp-rwanda/destructors-ec-fe.git`
- Copy the file **_.env.sample_** then rename it to **_.env_** input the right credentials.
- Run `npm install` To install the project dependencies
- Run `npm run dev` To start the application locally
- Run `npm test` to run test

## Contributors

Thanks goes to these wonderful people

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/denislohan"><img src="https://avatars.githubusercontent.com/u/25966922?v=4" width="100px;" alt="Denis"/><br /><sub><b>Denis Niwemugisha (Manager)</b></sub></a><br /><a href="https://github.com/denislohan" title="Tests">⚠️</a> <a href="https://github.com/denislohan" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/Abdulkeza"><img src="https://avatars.githubusercontent.com/u/78693678?v=4" width="100px;" alt="Abdul"/><br /><sub><b>Adeodatus Abdul (TTL)</b></sub></a><br /><a href="https://github.com/Abdulkeza" title="Tests">⚠️</a> <a href="https://github.com/Abdulkeza" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/katros1"><img src="https://avatars.githubusercontent.com/u/101397608?v=4" width="100px;" alt="Katros1"/><br /><sub><b>Katros1</b></sub></a><br /><a href="https://github.com/katros1" title="Tests">⚠️</a> <a href="https://github.com/katros1" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/leandreAlly"><img src="https://avatars.githubusercontent.com/u/78492995?s=400&u=78b9e342acbf035a480cf61911606dece828b904&v=4" width="100px;" alt="Leandre"/><br /><sub><b>Leandre</b></sub></a><br /><a href="https://github.com/leandreAlly" title="Tests">⚠️</a> <a href="https://leandredev.netlify.app" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/buka1calvin"><img src="https://avatars.githubusercontent.com/u/63565027?v=4" width="100px;" alt="buka1calvin"/><br /><sub><b>buka1calvin</b></sub></a><br /><a href="https://github.com/buka1calvin" title="Tests">⚠️</a> <a href="https://github.com/buka1calvin" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/nkurunziza1"><img src="https://avatars.githubusercontent.com/u/111529772?v=4" width="100px;" alt="nkurunziza1"/><br /><sub><b>nkurunziza1</b></sub></a><br /><a href="https://github.com/nkurunziza1" title="Tests">⚠️</a> <a href="https://github.com/nkurunziza1" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/divinecharlotte"><img src="https://avatars.githubusercontent.com/u/60146030?v=4" width="100px;" alt="divinecharlotte"/><br /><sub><b>divinecharlotte</b></sub></a><br /><a href="https://github.com/divinecharlotte" title="Tests">⚠️</a> <a href="https://github.com/divinecharlotte" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/ba-lambert"><img src="https://avatars.githubusercontent.com/u/50544115?v=4" width="100px;" alt="Ba-lambert"/><br /><sub><b>Ba-lambert</b></sub></a><br /><a href="https://github.com/ba-lambert" title="Tests">⚠️</a> <a href="https://github.com/ba-lambert" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/mjeanbosco19"><img src="https://avatars.githubusercontent.com/u/102979159?v=4" width="100px;" alt="mjeanbosco19"/><br /><sub><b>mjeanbosco19</b></sub></a><br /><a href="https://github.com/mjeanbosco19" title="Tests">⚠️</a> <a href="https://github.com/mjeanbosco19" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/JENNY-257"><img src="https://avatars.githubusercontent.com/u/84919325?v=4" width="100px;" alt="JENNY-257"/><br /><sub><b>JENNY-257</b></sub></a><br /><a href="https://github.com/JENNY-257" title="Tests">⚠️</a> <a href="https://github.com/JENNY-257" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>
