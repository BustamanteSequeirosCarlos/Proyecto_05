//4 colecciones sobre una cadena de restaurantes Empleado, Locales, Distribuidores, Registro

//Base de Datos Restaurantes

//Coleccion empleado

db.empleados.insertMany([
    {
        _id: 1,
        DNI: "97456388A",
        Nombre: "Juan",
        Apellido: "Dominguez",
        Local: "AND1",
        Cargo: ["JefeCocina", "Encargado"],
        Nomina: 30000,
        HrsSem: 40,
        FechaIncorp: new Date ("2007-3-12")
    },
    {
        _id:2,
        DNI: "75978504M",
        Nombre: "Carlos",
        Apellido: "Bautista",
        Local: "AND1",
        Cargo: ["Camarero"],
        Nomina: 10500,
        HrsSem: 30,
        FechaIncorp: new Date ("2018-4-11")
    },
    {
        _id:3,
        DNI: "77889943H",
        Nombre: "Marcos",
        Apellido: "Marquez",
        Local: "AND1",
        Cargo: ["Cocinero"],
        Nomina: 20000,
        HrsSem: 40,
        FechaIncorp: new Date ("2016-6-19")
    },
    {
        _id:4,
        DNI: "51525521R",
        Nombre: "José",
        Apellido: "Díaz",
        Local: "AND1",
        Cargo: ["Camarero"],
        Nomina: 10500,
        HrsSem: 30,
        FechaIncorp: new Date ("2007-7-17")
    },
    {
        _id:5,
        DNI: "73478142L",
        Nombre: "Andres",
        Apellido: "Guerra",
        Local: "AND2",
        Cargo: ["Encargado"],
        Nomina: 40500,
        HrsSem: 45,
        FechaIncorp: new Date ("2007-3-19")
    },
    {
        _id:6,
        DNI: "44171929S",
        Nombre: "Carla",
        Apellido: "Quero",
        Local: "AND2",
        Cargo: ["Cocinero"],
        Nomina: 12000,
        HrsSem: 40,
        FechaIncorp: new Date ("2007-6-20")
    },
    {
        _id:7,
        DNI: "44171929Q",
        Nombre: "Hanane",
        Apellido: "Cañizares",
        Local: "AND2",
        Cargo: ["Camarero"],
        Nomina: 10800,
        HrsSem: 30,
        FechaIncorp: new Date ("2008-7-19")
    },
    {
        _id:8,
        DNI: "30213713Q",
        Nombre: "Daniel",
        Apellido: "Parejo",
        Local: "AND3",
        Cargo: ["Cocinero","Camarero"],
        Nomina: 13000,
        HrsSem: 40,
        FechaIncorp: new Date ("2008-7-19")
    },
    {
        _id:9,
        DNI: "19925300D",
        Nombre: "Esther",
        Apellido: "Castañeda",
        Local: "AND3",
        Cargo: ["Encargado"],
        Nomina: 40000,
        HrsSem: 40,
        FechaIncorp: new Date ("2008-8-13")
    },
    {
        _id:10,
        DNI: "29734399E",
        Nombre: "Triana",
        Apellido: "Merino",
        Local: "AND3",
        Cargo: ["Cocinero", "Camarero"],
        Nomina: 12600,
        HrsSem: 40,
        FechaIncorp: new Date ("2007-3-15")
    },
    {
        _id:11,
        DNI: "48732760S",
        Nombre: "Fernando",
        Apellido: "Egea",
        Local: "AND4",
        Cargo: ["Encargado"],
        Nomina: 45500,
        HrsSem: 40,
        FechaIncorp: new Date ("2009-8-22")
    },
    {
        _id:12,
        DNI: "68731879J",
        Nombre: "Edurne",
        Apellido: "Sampedro",
        Local: "AND4",
        Cargo: ["Limpiador"],
        Nomina: 9900,
        HrsSem: 27,
        FechaIncorp: new Date ("2009-8-9")
    },
    {
        _id:13,
        DNI: "90390873E",
        Nombre: "Imanol",
        Apellido: "Escobar",
        Local: "AND4",
        Cargo: ["Cocinero"],
        Nomina: 15500,
        HrsSem: 40,
        FechaIncorp: new Date ("2008-8-15")
    },
    {
        _id:14,
        DNI: "31136109C",
        Nombre: "Claudio",
        Apellido: "Parejo",
        Local: "MAD1",
        Cargo: ["Encargado"],
        Nomina: 40000,
        HrsSem: 40,
        FechaIncorp: new Date ("2015-8-17")
    },
    {
        _id:15,
        DNI: "83922273B",
        Nombre: "Damian",
        Apellido: "Mercado",
        Local: "MAD1",
        Cargo: ["Cocinero"],
        Nomina: 12500,
        HrsSem: 30,
        FechaIncorp: new Date ("2010-4-27")
    },
    {
        _id:16,
        DNI: "98254639L",
        Nombre: "Rodrigo",
        Apellido: "Lobato",
        Local: "MAD2",
        Cargo: ["Camarero"],
        Nomina: 10500,
        HrsSem: 30,
        FechaIncorp: new Date ("2014-4-5")
    },
    {
        _id:17,
        DNI: "98570786P",
        Nombre: "Maria",
        Apellido: "Trinidad",
        Local: "MAD2",
        Cargo: ["Encargado"],
        Nomina: 48000,
        HrsSem: 45,
        FechaIncorp: new Date ("2013-3-9")
    },
    {
        _id:18,
        DNI: "14848514J",
        Nombre: "Kevin",
        Apellido: "Mejias",
        Local: "MAD3",
        Cargo: ["Cocinero"],
        Nomina: 12500,
        HrsSem: 30,
        FechaIncorp: new Date ("2012-7-11")
    },
    {
        _id:19,
        DNI: "06481981Y",
        Nombre: "Aritz",
        Apellido: "Quiros",
        Local: "MAD3",
        Cargo: ["Encargado"],
        Nomina: 39000,
        HrsSem: 40,
        FechaIncorp: new Date ("2012-7-11")
    },
    {
        _id:20,
        DNI: "21830804D",
        Nombre: "Marcos",
        Apellido: "Peralta",
        Local: "VAL1",
        Cargo: ["Limpiador", "Mesero"],
        Nomina: 10000,
        HrsSem: 28,
        FechaIncorp: new Date ("2007-7-21")
    },
    {
        _id:21,
        DNI: "17036635Y",
        Nombre: "Naiara",
        Apellido: "Nogales",
        Local: "VAL2",
        Cargo: ["Encargado", "JefeCocina"],
        Nomina: 45500,
        HrsSem: 40,
        FechaIncorp: new Date ("2010-6-11")
    },
    {
        _id:22,
        DNI: "73674810Z",
        Nombre: "José",
        Apellido: "Arnaiz",
        Local: "GAL1",
        Cargo: ["Cocinero"],
        Nomina: 10500,
        HrsSem: 30,
        FechaIncorp: new Date ("2014-9-11")
    },
    {
        _id:23,
        DNI: "15001377H",
        Nombre: "Lluc",
        Apellido: "Canovas",
        Local: "GAL2",
        Cargo: ["Cocinero", "Camarero"],
        Nomina: 11500,
        HrsSem: 30,
        FechaIncorp: new Date ("2013-1-9")
    },
    {
        _id:24,
        DNI: "29032125F",
        Nombre: "Bernardino",
        Apellido: "Luna",
        Local: "CAT1",
        Cargo: ["JefeCocina", "Cocinero"],
        Nomina: 15000,
        HrsSem: 40,
        FechaIncorp: new Date ("2011-4-28")
    },
    {
        _id:25,
        DNI: "27567473H",
        Nombre: "Joan",
        Apellido: "Jorda",
        Local: "EXT1",
        Cargo: ["Cocinero", "Camarero"],
        Nomina: 11000,
        HrsSem: 35,
        FechaIncorp: new Date ("2015-5-22")
    }
])
    

//Creamos un index unique de DNI para que no pueda duplicarse

db.empleados.createIndex(
    {
        DNI: 1
    },
    {
        unique: true,
        name: "Pk_Empleados"
    }
)


//Coleccion Locales

db.locales.insertMany([
    {
        _id: 1,
        IDLocal: "AND1",
        Ciudad: "Sevilla",
        Empleados: ["97456388A", "75978504M", "77889943H","51525521R"],
        CapacidadLocal: 40,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 40}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 30}
                    ],
        FechaApert: new Date ("2006-6-26"),
        HabSuppliers: ["Sup1", "Sup2"],
        BenifMens: 10000,
    },
    {
        _id: 2,
        IDLocal: "AND2",
        Ciudad: "Huelva",
        Empleados: ["44171929Q", "44171929S", "73478142L"],
        CapacidadLocal: 25,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 30}, 
                        {Alimento: "Carne", Capacidad: 40}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 23}
                    ],
        FechaApert: new Date ("2006-10-26"),
        HabSuppliers: ["Sup3", "Sup2"],
        BenifMens: 95000,
    },
    {
        _id: 3,
        IDLocal: "AND3",
        Ciudad: "Malaga",
        Empleados: ["29734399E", "19925300D", "30213713Q"],
        CapacidadLocal: 30,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 35}, 
                        {Alimento: "Pescado", Capacidad: 60},
                        {Alimento: "Vino", Capacidad: 20}
                    ],
        FechaApert: new Date ("2007-2-20"),
        HabSuppliers: ["Sup4", "Sup2"],
        BenifMens: 13000,
    },
    {
        _id: 4,
        IDLocal: "AND4",
        Ciudad: "Cadiz",
        Empleados: ["90390873E", "68731879J", "48732760S"],
        CapacidadLocal: 40,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 40}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 15}
                    ],
        FechaApert: new Date ("2007-2-20"),
        HabSuppliers: ["Sup1", "Sup2"],
        BenifMens: 20000,
    },
    {
        _id: 5,
        IDLocal: "MAD1",
        Ciudad: "Madrid",
        Empleados: ["83922273B", "31136109C"],
        CapacidadLocal: 60,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 40}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 30}
                    ],
        FechaApert: new Date ("2010-3-15"),
        HabSuppliers: ["Sup5", "Sup7"],
        BenifMens: 30000,
    },
    {
        _id: 6,
        IDLocal: "MAD2",
        Ciudad: "Salamanca",
        Empleados: ["98570786P", "98254639L"],
        CapacidadLocal: 35,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 40}, 
                        {Alimento: "Carne", Capacidad: 35}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 35}
                    ],
        FechaApert: new Date ("2013-2-10"),
        HabSuppliers: ["Sup6", "Sup7"],
        BenifMens: 18000,
    },
    {
        _id: 7,
        IDLocal: "MAD3",
        Ciudad: "Toledo",
        Empleados: ["06481981Y", "14848514J"],
        CapacidadLocal: 28,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 42}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 26}
                    ],
        FechaApert: new Date ("2012-6-26"),
        HabSuppliers: ["Sup5", "Sup7"],
        BenifMens: 8000,
    },
    {
        _id: 8,
        IDLocal: "VAL1",
        Ciudad: "Valencia",
        Empleados: ["21830804D"],
        CapacidadLocal: 40,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 40}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 35}
                    ],
        FechaApert: new Date ("2007-7-19"),
        HabSuppliers: ["Sup8", "Sup12"],
        BenifMens: 15000,
    },
    {
        _id: 9,
        IDLocal: "VAL2",
        Ciudad: "Alicante",
        Empleados: ["17036635Y"],
        CapacidadLocal: 50,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 40}, 
                        {Alimento: "Carne", Capacidad: 60}, 
                        {Alimento: "Pescado", Capacidad: 45},
                        {Alimento: "Vino", Capacidad: 34}
                    ],
        FechaApert: new Date ("2010-5-3"),
        HabSuppliers: ["Sup8", "Sup12"],
        BenifMens: 25000,
    },
    {
        _id: 10,
        IDLocal: "GAL1",
        Ciudad: "Coruña",
        Empleados: ["73674810Z"],
        CapacidadLocal: 40,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 40}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 28}
                    ],
        FechaApert: new Date ("2014-8-26"),
        HabSuppliers: ["Sup11", "Sup13"],
        BenifMens: 10000,
    },
    {
        _id: 11,
        IDLocal: "GAL2",
        Ciudad: "Lugo",
        Empleados: ["15001377H"],
        CapacidadLocal: 42,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 35}, 
                        {Alimento: "Pescado", Capacidad: 40},
                        {Alimento: "Vino", Capacidad: 30}
                    ],
        FechaApert: new Date ("2012-11-16"),
        HabSuppliers: ["Sup11", "Sup13"],
        BenifMens: 12000,
    },
    {
        _id: 12,
        IDLocal: "CAT1",
        Ciudad: "Barcelona",
        Empleados: ["29032125F"],
        CapacidadLocal: 40,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 40}, 
                        {Alimento: "Pescado", Capacidad: 45},
                        {Alimento: "Vino", Capacidad: 30}
                    ],
        FechaApert: new Date ("2011-4-26"),
        HabSuppliers: ["Sup9", "Sup14"],
        BenifMens: 14000,
    },
    {
        _id: 13,
        IDLocal: "EXT1",
        Ciudad: "Merida",
        Empleados: ["27567473H"],
        CapacidadLocal: 15,
        CapacidadAlm: [
                        {Alimento: "Vegetales", Capacidad: 35}, 
                        {Alimento: "Carne", Capacidad: 35}, 
                        {Alimento: "Pescado", Capacidad: 25},
                        {Alimento: "Vino", Capacidad: 32}
                    ],
        FechaApert: new Date ("2015-7-18"),
        HabSuppliers: ["Sup10", "Sup15"],
        BenifMens: 7000,
    }
])



//Creamos un index unique de IDLocal
db.locales.createIndex(
    {
        IDLocal: 1
    },
    {
        unique: true,
        name: "Pk_locales"
    }
)

//Coleccion Distribuidores

db.suppliers.insertMany([
    {
        _id: 1,
        IDSuppl: "Sup1",
        Región: "Andalucía",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 1.20}, 
                        {Producto: "Pescado", Precio: 2}
                ],
        RepFinde: false
    },
    {
        _id: 2,
        IDSuppl: "Sup2",
        Región: "Andalucía",
        Alimentos: ["Carne", "Vino"],
        PreciosKg: [
                    {Producto: "Carne", Precio: 2.60}, 
                    {Producto: "Vino", Precio: 4.20}
                ],
        RepFinde: true
    },
    {
        _id: 3,
        IDSuppl: "Sup3",
        Región: "Andalucía",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                    {Producto: "Vegetales", Precio: 1.20},
                    {Producto: "Legumbres", Precio: 0.90}
                ],
        RepFinde: true
    },
    {
        _id: 4,
        IDSuppl: "Sup4",
        Región: "Andalucía",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 1.60}, 
                        {Producto: "Pescado", Precio: 2.30}
                ],
        RepFinde: true
    },
    {
        _id: 5,
        IDSuppl: "Sup5",
        Región: "Madrid",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 1.40}, 
                        {Producto: "Pescado", Precio: 2.70},
                ],
        RepFinde: true
    },
    {
        _id: 6,
        IDSuppl: "Sup6",
        Región: "Madrid",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 1.40}, 
                        {Producto: "Pescado", Precio: 2.70},
                ],
        RepFinde: false
    },
    {
        _id: 7,
        IDSuppl: "Sup7",
        Región: "Madrid",
        Alimentos: ["Carne", "Vino"],
        PreciosKg: [
                        {Producto: "Carne", Precio: 1.60}, 
                        {Producto: "Vino", Precio: 5}
                ],
        RepFinde: true
    },
    {
        _id: 8,
        IDSuppl: "Sup8",
        Región: "Valencia",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 1.20}, 
                        {Producto: "Pescado", Precio: 2}
                ],
        RepFinde: false
    },
    {
        _id: 9,
        IDSuppl: "Sup9",
        Región: "Cataluña",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 1.20}, 
                        {Producto: "Pescado", Precio: 2}
                ],
        RepFinde: false
    },
    {
        _id: 10,
        IDSuppl: "Sup10",
        Región: "Extremadura",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 0.90}, 
                        {Producto: "Pescado", Precio: 2}
                ],
        RepFinde: false
    },
    {
        _id: 11,
        IDSuppl: "Sup11",
        Región: "Galicia",
        Alimentos: ["Vegetales", "Pescado"],
        PreciosKg: [
                        {Producto: "Vegetales", Precio: 1.20}, 
                        {Producto: "Pescado", Precio: 2.10}
                ],
        RepFinde: false
    },
    {
        _id: 12,
        IDSuppl: "Sup12",
        Región: "Valencia",
        Alimentos: ["Carne", "Vino"],
        PreciosKg: [
                        {Producto: "Carne", Precio: 2.20}, 
                        {Producto: "Vino", Precio: 4}
                ],
        RepFinde: false
    },
    {
        _id: 13,
        IDSuppl: "Sup13",
        Región: "Galicia",
        Alimentos: ["Carne", "Vino"],
        PreciosKg: [
                        {Producto: "Carne", Precio: 2.20}, 
                        {Producto: "Vino", Precio: 4}
                ],
        RepFinde: false
    },
    {
        _id: 14,
        IDSuppl: "Sup14",
        Región: "Cataluña",
        Alimentos: ["Carne", "Vino"],
        PreciosKg: [
                        {Producto: "Carne", Precio: 2.20}, 
                        {Producto: "Vino", Precio: 4}
                ],
        RepFinde: false
    },
    {
        _id: 15,
        IDSuppl: "Sup15",
        Región: "Extremadura",
        Alimentos: ["Carne", "Vino"],
        PreciosKg: [
                        {Producto: "Carne", Precio: 2.20}, 
                        {Producto: "Vino", Precio: 4}
                ],
        RepFinde: false
    }
])

//Creamos un index unique de IDSuppl
db.suppliers.createIndex(
    {
        IDSuppl: 1
    },
    {
        unique: true,
        name: "Pk_suppliers"
    }
)

//Colección Regiones

db.regiones.insertMany([
    {
        _id: 1,
        Región: "Andalucía",
        Ciudades: ["Jaen", "Cordoba", "Sevilla", "Huelva", "Cadiz", "Malaga", "Granada", "Almería"]
    },
    {
        _id: 2,
        Región: "Extremadura",
        Ciudades: ["Badajoz", "Caceres", "Merida"]
    },
    {
        _id: 3,
        Región: "Valencia",
        Ciudades: ["Valencia", "Castellon", "Alicante", "Elche"]
    },
    {
        _id: 4,
        Región: "Madrid",
        Ciudades: ["Madrid", "Toledo", "Avila", "Salamanca"]
    },
    {
        _id: 5,
        Región: "Cataluña",
        Ciudades: ["Tarragona", "Barcelona", "Gerona", "Lleida"]
    },
    {
        _id: 6,
        Región: "Galicia",
        Ciudades: ["Coruña", "Lugo", "Pontevedra", "Ourense"]

    },
])

db.regiones.createIndex(
    {
        Región: 1
    },
    {
        unique: true,
        name: "Pk_regiones"
    }
)