/*
  But :     
  Auteur : prénom + nom
  Date :   jj.mm.aaaa / V1.0
*/
class AccueilCtrl {
  constructor(langue) {
    this.changeTitre(langue);
  }

  changeTitre(langue){
    if (langue === "en"){
      $("#bienvenue").text("Good morning Vietnam");
      // $("h3").css({"color":"red"});
    }
    if (langue === "de"){
      $("#bienvenue").text("Grüss Got");
    }
    if (langue === "fr"){
      $("#bienvenue").text("Tcho");
    }
  }


  
}
