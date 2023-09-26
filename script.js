

let savollar = [
  {
    savol: " ismiz kim ?",
    variant: ["A. Alisa", "B. Malisa", "C. Katusha", "D.Aytmayman "],
       javobi: "d"
   },
   {
      savol: "qaysi rang yoqadi?",
      variant: [ "A. oq ", "B. qora", "C. sariq", ],
      javobi: "c"
   },
   {
    
      savol: " nechchi soni yoqmaydi?",
      variant: [ "A. 2", "B. 3", 
      "C. 5", "D. 6 "],
      javobi: "d"
   },
   {
      savol: "sizning do`stiz kim ?",
      variant: [ "A. Mahmud", "B. Muhammadali", "C. Mustafo", "D. Usmon"],
      javobi: "b"
   },

]

let togriJavoblar =0;


for (let i = 0; i < savollar.length; i++) {
  const userJavobi = prompt(savollar[i].savol + "\nVariant:\n " + savollar[i].variant.join("\n"));

  if (userJavobi ==  savollar[i].javobi) {
      togriJavoblar++;
  } 
      else if(userJavobi == "quit" ){
          break;
      }
      else if ( userJavobi== "next"){
          continue;
      }

      else if(userJavobi == ""||userJavobi == null){
          alert("Siz variant belgilamadingiz");
      }

}

alert("Siz " + savollar.length  + " ta savoldan " +  togriJavoblar+ " ta to'gri bajardingiz.");

if ( togriJavoblar >= savollar.length-3) {
  alert(" Siz bu testni to'g'ri bajardingiz");
}
else if( togriJavoblar == savollar.length-5   < savollar.length-3){
  alert("  Siz  bu testni 50% bajardingiz.");
}
else{
  alert(" Siz bu testni bajara olmadingiz");
}