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
  loadPersonnages() {
    this.vue.chargerVue("personnages", () => new persoCtrl());
  }

  // avec function classique
  loadMaison() {
    this.vue.chargerVue("maisons", function () {
      new maisonCtrl();
    });
  }

}
