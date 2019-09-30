"use strict";

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Post = use("App/Models/Post");

class PostSeeder {
  async run() {
    await Post.createMany([
      {
        title: "Quelques astuces pour être plus productifs sur Laravel 5",
        excerpt:
          "Après 2 ans sur le framework, on vous donne nos conseils pour encore mieux organiser vos projets afin de mieux les maintenir.",
        slug: "quelques-astuces-pour-etre-plus-productifs-sur-laravel-5",
        image: "/img/1.jpg",
        publishedAt: "2019-09-30 22:59:00",
        content: `Après 2 ans de projets personnels et un projet professionnel toujours sur pied, voilà quelques conseils pour vous permettre de garder une web app scalable et maintenable.

## Allégez vos controlleurs

On a souvent tendance à allourdir nos controlleurs plus on repasse dessus. Que ça soit pour ajouter des fonctionnalités de dernières minutes demandées par votre client, ou pour résoudre des bug, on prend pas assez le temps de garder à l'esprit ce détail pourtant vital : un controlleur, c'est fait pour rerouter les requêtes vers une action en particulier. **Ni plus, ni moins !**

Du coup, on oublie l'objectif des modèles, qui ne sont pas fait seulement pour faire des appels à la base de données via Eloquent. On peut aussi les utiliser pour encapsuler des logiques métiers complexes, afin de les abstraire et les utiliser dans nos controlleurs. Voilà un exemple d'un controlleur difficile à maintenir:

\`\`\`php
<?php

namespace Controller;

use App\\Http\\Requests\\LoginRequest;
use App\User;
use Firebase\\JWT\\JWT;
use Crypt;

class CheckAuthController {
	public function store(LoginRequest $request): Response {
		if ($request->wantsJson()) {
			$token = Crypt::decodeString($request->input("token"));
			$decoded = JWT::decode($token, config("app.key"), ["HS256"]);

			$user = User::findOrFail($decoded->data->id);

			if (!$user->blocked) {
				return response()->json("blocked", 403);
			} else {
				return response()->json("authorized", 200);
			}
		} else {
			abort(403);
		}
	}
}
\`\`\`	
		`
      },
      {
        title: "L'importance des pauses au travail",
        excerpt:
          "Même si on pourrait penser que faire des pauses nous ralentirait, un manque de recul peut lui vous faire perdre encore plus de temps.",
        slug: "importance-des-pauses-au-travail",
        image: "/img/2.jpg",
        publishedAt: "2019-09-30 23:00:00",
        content: ""
      }
    ]);
  }
}

module.exports = PostSeeder;
