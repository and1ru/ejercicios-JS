```js
/*
========================
NIVEL 1 — FUNDAMENTOS
========================
*/

/*
1.
Una tienda tiene un array de productos.

Debes:
- mostrar el producto más caro
- mostrar el más barato
- calcular el promedio de precios

Ejemplo:
[
  { name: "mouse", price: 20 },
  { name: "keyboard", price: 50 },
  { name: "monitor", price: 200 }
]
*/

/*
2.
Una API devuelve usuarios repetidos.

Debes eliminar usuarios duplicados usando el id.

Ejemplo:
[
  { id: 1, name: "juan" },
  { id: 2, name: "pedro" },
  { id: 1, name: "juan" }
]
*/

/*
3.
Tienes un carrito de compras.

Debes calcular:
- subtotal
- IVA (19%)
- total final

Ejemplo:
[
  { name: "camisa", price: 50, quantity: 2 },
  { name: "zapatos", price: 100, quantity: 1 }
]
*/

/*
4.
Una red social almacena likes así:

[
  "juan",
  "pedro",
  "juan",
  "maria",
  "pedro"
]

Debes contar cuántos likes tiene cada usuario.
*/

/*
5.
Tienes un array de estudiantes.

Debes retornar:
- el mejor promedio
- el peor promedio
- cuántos aprobaron

La nota mínima es 3.0
*/


/*
========================
NIVEL 2 — INTERMEDIO
========================
*/

/*
1.
Tienes productos en un ecommerce.

Debes agruparlos por categoría.

Resultado esperado:

{
  tecnologia: [...],
  ropa: [...],
  hogar: [...]
}
*/

/*
2.
Debes construir un buscador de productos.

El usuario puede buscar por:
- nombre
- categoría
- rango de precio

Todo debe funcionar al mismo tiempo.
*/

/*
3.
Una API devuelve órdenes de compra.

Debes obtener:
- total vendido
- producto más vendido
- cliente que más compró
*/

/*
4.
Tienes comentarios anidados.

Debes imprimir TODOS los comentarios
sin importar el nivel de profundidad.

Ejemplo:
[
  {
    text: "hola",
    replies: [
      {
        text: "respuesta",
        replies: []
      }
    ]
  }
]
*/

/*
5.
Debes mover todos los productos agotados
al final del array SIN perder el orden original.
*/


/*
========================
NIVEL 3 — AVANZADO
========================
*/

/*
1.
Debes construir un sistema de inventario.

Funciones:
- agregar producto
- eliminar producto
- actualizar stock
- buscar por id
- calcular valor total del inventario
*/

/*
2.
Una empresa guarda transacciones bancarias.

Debes detectar:
- transacciones duplicadas
- transacciones sospechosas (> 10.000)
- usuarios con más movimientos
*/

/*
3.
Debes construir un sistema de recomendaciones.

Dado un usuario y sus compras:
- recomendar productos relacionados
- excluir productos ya comprados
*/

/*
4.
Tienes datos de ventas por meses.

Debes transformar:

[
  { month: "enero", sales: 100 },
  { month: "febrero", sales: 200 }
]

en una estructura optimizada
para mostrar gráficos.
*/

/*
5.
Debes implementar paginación manual.

La función debe recibir:
- página
- límite

y retornar:
- datos
- total de páginas
- página actual
*/


/*
========================
NIVEL 4 — ENTREVISTA REAL
========================
*/

/*
1.
Debes construir el carrito completo
de un ecommerce.

Requisitos:
- agregar productos
- eliminar productos
- aumentar cantidad
- disminuir cantidad
- calcular total
- aplicar descuentos
- evitar productos duplicados
*/

/*
2.
Debes construir un sistema de analytics.

A partir de miles de eventos:

[
  { userId: 1, type: "click" },
  { userId: 1, type: "purchase" }
]

Debes obtener:
- usuarios más activos
- eventos más comunes
- promedio de eventos por usuario
*/

/*
3.
Debes construir un sistema de permisos.

Ejemplo:

{
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  user: ["read"]
}

Debes verificar:
- si un usuario tiene permisos
- permisos heredados
- permisos únicos
*/

/*
4.
Debes construir un sistema tipo Twitter.

Funciones:
- crear tweet
- eliminar tweet
- dar like
- quitar like
- mostrar tweets ordenados
- mostrar tendencias (#hashtags más usados)
*/

/*
5.
Debes construir un mini sistema de reservas.

Cada reserva tiene:
- usuario
- fecha
- hora
- sala

Debes validar:
- conflictos de horario
- salas disponibles
- reservas futuras
- historial de reservas
*/
```
