# nairi.dev

Website for nairi.dev domain.

## Summary

- [About this repository](#about-this-repository)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## About this repository

The whole files in this repository are used to serve nairi.dev, our IT blog. It uses AdonisJS 4 for the backend, PostgresSQL for the database, and Pug for the front-end.

The articles are produced using our administration panel, and stored in the database, where they are fetched for the users that browse the blog.

## Prerequisites

**If you do not use Docker**

- [NodeJS](https://nodejs.org/en/download/)
- NPM or [Yarn](https://yarnpkg.com/en/docs/install)
- [AdonisJS CLI](https://www.npmjs.com/package/@adonisjs/cli)
- [PostgresSQL](https://www.postgresql.org/download/)

## Installation

**Without docker**

1. Clone this repository: `git clone https://github.com/khalyomede/nairi-dev`
2. Install the dependencies: `npm install` or `yarn install`
3. Install the migrations: `adonis migration:run`
4. Install the data: `adonis seed`
5. Run the project: `adonis serve`

**With docker**

_in construction_

## Usage

1. Browse the public website: `http://localhost:3333`
2. Browse the administration panel: _in construction_
