  let data = [
        {
            marca: "Peugeot",
            modelo: "206",
            puertas: 4,
            precio: "200.000,00"
        },
        {
            marca: "Honda",
            modelo: "Titan",
            cilindrada: "125c",
            precio: "60.000,00"
        },
        {
            marca: "Peugeot",
            modelo: "208",
            puertas: 5,
            precio: "250.000,00"
        },
        {
            marca: "Yamaha",
            modelo: "YBR",
            cilindrada: "160c",
            precio: "80.500,50"
        },
    ];
    
    function printElements(data){
        let pa,pb,containsY,arrAux=[];
        for(d of data){
            arrAux.push(parseFloat(d.precio))
        }
        pa = data.filter(d => parseFloat(d.precio) === Math.max(...arrAux))
        pb = data.filter(d => parseFloat(d.precio) === Math.min(...arrAux)) 
        
        containsY = data.filter(d => d.marca.includes('Y'))
        
        data.sort(function(a,b)
        {
            return  parseFloat(b.precio) - parseFloat(a.precio);
        }
        )
        
        console.log("=============================")
        console.log(`Vehiculo más caro: ${pa[0].marca} ${pa[0].modelo}`)
        console.log(`Vehiculo más barato: ${pb[0].marca} ${pb[0].modelo}`)
        console.log(`Vehiculo que contiene en el modelo la letra 'Y': ${containsY[0].marca}`)
        console.log(data);

    }
    

    printElements(data);

    

    


