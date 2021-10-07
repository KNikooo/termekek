$(function () {
  const termekek = [];
  const fejlec=["Terméknév","Leírás","Készlet","Ár"];
  adatBeolvasas("jsontermekek.json", termekek, tKeszit);

  function adatBeolvasas(fajlNev, tomb, myCallback) {
    $.ajax({
      url: fajlNev,
      success: function (result) {
        //tomb.splice(0, tomb.length);
        result.forEach((elem) => {
          tomb.push(elem);
        });
        console.log(tomb);
        myCallback();
      },
    });
  }

  function tKeszit() {
	console.log(fejlec);
	$("#t").append("<table>");
	
	var txt="<tr>";
    fejlec.forEach((elem) => {
		txt += "<th>" + elem + "</th>";
	});
	txt+="</tr>";
	termekek.forEach(function(value, index){
        txt += "<tr id='" + index + "'>";
        for (let item in value) {
          txt += "<td>" + value[item] + "</td>";
		}
		txt += "<td><input type='button' id='gomb"+index+"' value='Módosít'></td>";
		txt += "</tr>";	
	  });
	$("#t table").html(txt);
	
	  for (let i = 0; i < 4; i++) {
		$("#gomb"+i).click(function () {
			console.log("helobello"+i);
			$("#termeknev").attr("value", termekek[i].Terméknév);
			$("#leiras").attr("value", termekek[i].Leírás);
			$("#keszlet").attr("value", termekek[i].Készlet);
			$("#ar").attr("value", termekek[i].Ár);
		});
	  }
	
	
  }

});
