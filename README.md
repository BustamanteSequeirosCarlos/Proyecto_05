# Proyecto Final 2º Trimestre de MongoDB
###### Carlos Bustamante Sequeiros 1ASIR-A

Esta es una base de datos creada como proyecto final del segundo trismetre de la asignatura de Gestion de Base de Datos

La principal intención de este proyecto es crear una base de datos con varias colecciones y extraer información de ellas a traves del metodo **aggregate**.

He creado una base de datos de una cadena de restaurantes creando 4 colecciones que me serviran para tener información mas completa y ordenada:

- Empleados: Guarda una lista con todos los empleados de la franquicia con la información relevante a los empleados
- Locales: Guarda todos los locales de la franquicia 
- Suppliers: Los distribuidores de alimento
- Regiones: Una pequeña colección que me permite ordenar las ciudades por regiones

A la hora de hacer las consultas he utilizado los siguientes operadores de etapa:

- $match
- $sortByCount
- $project
- $unwind
- $lookup
- $group
- $out
- $sort

Y los siguientes operadores:

- $lte
- $ArrayElemAt
- $multiply
- $addToSet
- $year
- $divide
- $subtract
- $round

## Instalación

Puedes usar esta base de datos de forma local importando los documentso JSON que se encuentran en la carpeta **datos**
*>mongoimport /d restaurantes /c <colección> /type json /file <Ruta del Archivo>*


O puedes trabajar con ella directamente desde la nube con el siguiente comando:
*>mongosh "mongodb+srv://cluster0.n56fb.mongodb.net/test" --apiVersion 1 --username usuario1*

### Mas Información

Dentro del manual que se encuentra en la carpeta **doc** encontraras toda la información relativa a cada campo: significado, tipo, posibles valores etc. Ademas de una explicación expandida de las consultas que he realizado
