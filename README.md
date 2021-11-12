# Plant Project Server

#### Currently In Deveopment Stage

Backend Code for Plant Application

## Tech Stack

**Language:** JavaScript

**Run Time:** Node JS

## Requirements

The Application Runs on Node JS and MySQL as Database. Thus to tun locally, you need following technologies

#### Compilation Requirements

- Node JS v14.x
- MySQL

## Run Locally

Clone the project

```bash
git clone https://github.com/suparthghimire/plant-project-server
```

Go to the project directory

```bash
cd plant-project-server
```

Install Packages

```bash
npm install
```

Install Dev Dependencies

```bash
npm i -D nodemon sequelize-cli
```

Create Database

```bash
mysql> CREATE DATABASE db_plant_project
```

Migrate Tables

```bash
npx sequelize db:migrate
```

Seed Admin

```bash
npx sequelize db:seed:all
```

Start Server

```bash
npm run dev
```

## API Reference

<!-- All API References will be Found in [Swagger Api Reference](https://www.google.com) -->

Comming Soon

## Authors

Contact Developer

- [Suparth Narayan Ghimire](mailto:suparth.business@gmail.com)

## Screenshots

Comming Soon
