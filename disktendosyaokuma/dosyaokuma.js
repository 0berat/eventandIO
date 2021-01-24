const fs = require('fs');
console.log(__dirname)
/*fs.readFile('/home/cubee/WebstormProjects/eventsVeIOislemleri/disktendosyaokuma/demo.txt',(error,data) => {
    if (error)
        console.log(error);

    console.log(data.toString());
    console.log("dosya okuma işlemi bittiiii");

});*/
const demoDosyasi = fs.readFileSync('/home/cubee/WebstormProjects/eventsVeIOislemleri/disktendosyaokuma/demo.txt')
console.log(demoDosyasi.toString());
console.log("dosya okuma bitti");
