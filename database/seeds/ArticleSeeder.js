"use strict";

/*
|--------------------------------------------------------------------------
| ArticleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Article = use("App/Models/Article");

class ArticleSeeder {
  async run() {
    await Article.createMany([
      {
        title: "Quelques astuces pour être plus productifs sur Laravel 5",
        excerpt:
          "Après 2 ans sur le framework, on vous donne nos conseils pour encore mieux organiser vos projets afin de mieux les maintenir.",
        slug: "quelques-astuces-pour-etre-plus-productifs-sur-laravel-5"
      },
      {
        title: "L'importance des pauses au travail",
        excerpt:
          "Même si on pourrait penser que faire des pauses nous ralentirait, un manque de recul peut lui vous faire perdre encore plus de temps.",
        slug: "importance-des-pauses-au-travail"
      }
    ]);
  }
}

module.exports = ArticleSeeder;
