"use strict";

class HomeController {
  index({ view }) {
    return view.render("home.index", {
      articles: [
        {
          title: "Astuces pour être plus productifs sur Laravel 5",
          excerpt:
            "Après 2 ans sur le framework, on vous donne nos conseils pour encore mieux organiser vos projets afin de mieux les maintenir.",
          image: "/img/1.jpg",
          url: "/article/astuces-pour-etre-plus-productif-sur-laravel-5"
        },
        {
          title: "L'importance des pauses au travail",
          excerpt:
            "Même si on pourrait penser que faire des pauses nous ralentirait, un manque de recul peut lui vous faire perdre encore plus de temps.",
          image: "/img/2.jpg",
          url: "/importance-des-pauses-au-travail"
        }
      ]
    });
  }
}

module.exports = HomeController;
