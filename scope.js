var a = 1, b = 8, c = 6;

    (function firstFunction(){
        var b = 5, c = 6;

        (function secondFunction(){
            var b = 8;

            (function thirdFunction(){
                var a = 7, c = 9;

                (function fourthFunction(){
                    var a = 1, c = 8;

                })();
            })();
        })();
    })();
console.log("a: "+a+", b: "+b+", c: "+c);

//Usa tu conocimiento sobre el ámbito de las variables y ubica el siguiente
//código dentro de alguna de las funciones en scope.js para que la salida
//sea a: 1, b: 8, c: 6
//
//console.log("a: "+a+", b: "+b+", c: "+c);
