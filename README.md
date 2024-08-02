<h1 align="center">
  <a href="https://github.com/dec0dOS/amazing-github-template">
    <img src="https://github.com/Tianrider/technoskill-workshop-FE/blob/main/src/assets/logo.svg" alt="Logo" width="125" height="125">
  </a>
</h1>

<div align="center">
  <h1>TSManager (TechnoSkill Manager Dashboard)</h1>
  <h3>https://tsmanager.vercel.app/home</h3>
</div>

<div align="center">

[![license](https://img.shields.io/badge/license-exerciseftui-blue)](LICENSE)
[![made with hearth by dec0dOS](https://img.shields.io/badge/made%20with%20%E2%99%A5%20by-el_salpicadero-FF8901.svg?style=flat-square)](https://github.com/dec0dOS)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running Localy](#running-localy)
- [Privacy Policy](#privacy-policy)
- [Authors](#authors)

</details>

---

## About

<table>
<tr>
<td>

TSManager is a comprehensive manager and employee dashboard developed for the TechnoSkill 2024 competition.

<details open="open">
<summary>Server Side</summary>
  The server side repo and documentation for TSManager can be assessed here: https://github.com/javendzk/Technoskill-Comp-BE
</details>

</td>
</tr>
</table>

### Built With

<div >
	<img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
	<img width="50" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite"/>
</div>

## Getting Started

### To open the website just go to: https://tsmanager.vercel.app

Otherwise for local development server:

### Prerequisites

To set up and run the TSManager Dashboard, you need to have Node.js installed on your system.
Node.js includes npm (Node Package Manager), so you don't need to install npm separately.

For manual installation instructions, refer to the [Node.js installation guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

After installing Node.js, clone the TSManager Dashboard repository by running the following commands in your terminal:

```sh
git clone https://github.com/Tianrider/technoskill-workshop-FE.git
cd technoskill-workshop-FE
```

### Running Localy

install the project dependencies using npm:

```sh
npm install
```

running the server:

```sh
npm run dev
```

## Features

### Manager Login, Register And Dashboard
Managers can create or log in to their account and manage their employees, including **editing their salary or division, deleting them, or viewing their full personal information.**
<details>

  <summary>Web Ui</summary>
  
![](https://res.cloudinary.com/djvdforcq/image/upload/v1722616358/rbfhisudwp5xgw9hp27d.png)

![](https://res.cloudinary.com/djvdforcq/image/upload/v1722616555/ja22ogu7fbzgsatz5h0e.png)

</details>

### Add Employee To Your Company

As a logged-in Manager, you can add new employees to your team using a form. The added employee will be saved to your database and can be managed through your dashboard.

After successfully adding an employee, you will **receive their email address and a temporary password for them to log in.**

<details>
<summary>Web Ui</summary>
  
![](https://res.cloudinary.com/djvdforcq/image/upload/v1722617313/noqj6yxfwkpngz1svfvl.png)

</details>

### Login as An Employee

Using the email and password provided by your manager, you can log in as an employee. Here, you can update your personal information that was not filled out by your manager.
**It is also recommended to change the temporary password given to you.**

<details>
<summary>Web Ui</summary>
  
![](https://res.cloudinary.com/djvdforcq/image/upload/v1722617572/csqbx8sxfs7flknpxibm.png)

</details>

## Privacy Policy

TSManager does not use, collect, or sell your data to any third parties. Your data is exclusively used by your Manager. Any further data usage should be discussed with your manager. We use a hashing algorithm to securely hash your password before storing it in our database.

## Authors

This project was built by **El Salpicadero**:
- Benedict Aurelius [@github](https://github.com/benedictaurel)
- Christian Hadiwijaya [@github](https://github.com/Tianrider)
- Javana Muhammad [@github](https://github.com/javendzk)
