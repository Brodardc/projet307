/*
  But :    controleur principal de l'application
  Auteur : Brodard Clara
  Date :   06.06.2023 / V1.0
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  httpApiP = new HttpAPIPersos();
  httpApiM = new httpAPIMaison();
  indexCtrl = new IndexCtrl();  // ctrl principal
  httpApiP.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
  httpApiM.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
  $("li").click(() => {
    $("#container").slideUp(0).slideDown(2000);
  });
  $("a.menu").click(function () {
    $(this).next().slideToggle("slow");
    return false;
  });
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
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
    this.vue.chargerVue("maisons", () => new maisonCtrl());

  }
}
