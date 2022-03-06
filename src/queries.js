//En que locales empleados a media jornada, ordenados de mayor a menor y cuantos tiene

db.empleados.aggregate([
    {$match: 
        {
            HrsSem: {$lte: 30}
        }
    },
    {$sortByCount: "$Local"},
    {$project:
        {
            _id: 0,
            Local: "$_id",
            Empleados: "$count"
        }
    }
])

//Los precios minimos de cada producto

db.suppliers.aggregate([
    {$project:
        {
            IDSuppl: 1,
            Región: 1,
            PreciosKg: 1,
        }
    },
    {$unwind: "$PreciosKg"},
    {$group:
        {
            _id: "$PreciosKg.Producto",
            MasBarato: {$min: "$PreciosKg.Precio"},
        }
    },
])


/* El jefe me pide un archivo para poder utilizarlo en una hoja de calculo en el que pueda ver
cada empleado de cada local de la región de Andalucía. Su cargo, cuanto cobra a la hora y años al servicio */


db.empleados.aggregate([
    {$lookup:
        {
            from: "locales",
            localField: "Local",
            foreignField: "IDLocal",
            as: "Local"
        }
    },
    {$unwind: "$Local"},
    {$lookup: 
        {
            from: "regiones",
            localField: "Local.Ciudad",
            foreignField: "Ciudades",
            as: "Regiones"
        }
    },
    {$unwind: "$Regiones"},
    {$project:
        {
            _id: 0,
            DNI: 1,
            Nombre: 1,
            Apellido: 1,
            Cargo: 1,
            Local: "$Local.IDLocal",
            Ciudad: "$Local.Ciudad",
            Región: "$Regiones.Región",
            Nomina: 1,
            HrsSem: 1,
            AñoIncorp: {$year: "$FechaIncorp" } 
        }
    },
    {$match:
        {
            Región: "Andalucía"
        }
    },
    {$project:
        {
            DNI: 1,
            Nombre: 1,
            Apellido: 1,
            Cargo: 1,
            Local: 1,
            Ciudad: 1,
            Región: 1,
            HrsSem: 1,
            "€-Horas": {$divide: ["$Nomina", 48]},
            AñosTrabajando: {$subtract: [2022, "$AñoIncorp"]},
        }
    },
    {$project:
        {
            DNI: 1,
            Nombre: 1,
            Apellido: 1,
            Cargo: 1,
            Local: 1,
            Ciudad: 1,
            Región: 1,
            "€-Horas": {$round: [{$divide: ["$€-Horas", "$HrsSem"]}, 2]},
            AñosTrabajando: 1
        }
    },
    {$out: 
        {db: "restaurantes", coll: "Empleados-Andalucía"}
    }
])

//mongoexport /d restaurantes /c Empleados-Andalucía /f DNI,Nombre,Apellido,Cargo,Local,Ciudad,Región,AñosTrabajando,€-Horas  /type csv /o <ruta>

//Recaudación total y recaudación media de cada región anual y número de locales y número de empleados ordenados por 
//la recaudación media

db.locales.aggregate([
    {$project:
        {
            _id: 0,
            IDLocal: 1,
            Ciudad: 1,
            Empleados: 1,
            BenefAnu: {$multiply: ["$BenifMens", 12]}
        }
    },
    {$lookup:
        {
            from: "regiones",
            localField: "Ciudad",
            foreignField: "Ciudades",
            as: "Regiones"
        }
    },
    {$unwind: "$Regiones"},
    {$project:
        {
            IDLocal: 1,
            Ciudad: 1,
            Empleados: {$size: "$Empleados"},
            BenefAnu: 1,
            Región: "$Regiones.Región"
        }
    },
    {$group:
        {
            _id: "$Región",
            Locales: {$addToSet: "$IDLocal"},
            TotalBenef: {$sum: "$BenefAnu"},
            MediaPorLocal: {$avg: "$BenefAnu"},
            TotalEmpleados: {$sum: "$Empleados"}
        }
    },
    {$project:
        {
            Región: "$_id",
            NdLocales: {$size: "$Locales"},
            TotalBenef: 1,
            MediaPorLocal: 1,
            TotalEmpleados: 1
        }
    },
    {$sort:
        {
            MediaPorLocal: -1
        }
    }
])
