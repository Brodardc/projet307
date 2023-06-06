/*
  But :    controleur principal de l'application
  Auteur : Brodard Clara
  Date :   06.06.2023 / V1.0
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  http = new HttpService();
  indexCtrl = new IndexCtrl();  // ctrl principal
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
    this.loadLogin();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }


  //changer avec les bonnes vues
  // avec arrow function
  loadLogin() {
    this.vue.chargerVue("login", () => new LoginCtrl());
  }

  // avec function classique
  loadAccueil(langue) {
    this.vue.chargerVue("accueil", function () {
      new AccueilCtrl(langue);
    });
  }

  loadCompte() {
    this.vue.chargerVue("compte", function () {
      new CompteCtrl();
    })
  }
}
