```js id="k9z4pa"
/*
========================
NIVEL 1 — FUNDAMENTOS
========================
*/

/*
1. SRP — Single Responsibility Principle

Tienes una clase User
que:
- guarda usuarios
- valida usuarios
- envía emails

Debes refactorizarla
para que cada clase
tenga una sola responsabilidad.
*/

/*
2. OCP — Open/Closed Principle

Tienes un sistema de pagos:

if (type === "paypal") {}
if (type === "card") {}

Debes refactorizarlo
para agregar nuevos métodos
sin modificar código existente.
*/

/*
3. LSP — Liskov Substitution Principle

Tienes:

Animal
 └─ Perro
 └─ Pez

Pero Pez tiene:
walk()

Debes detectar
el problema de herencia.
*/

/*
4. ISP — Interface Segregation Principle

Tienes una interfaz enorme:

UserActions:
- login()
- buy()
- drive()
- cook()

Debes dividir interfaces
innecesariamente grandes.
*/

/*
5. DIP — Dependency Inversion Principle

Tienes un AuthService
acoplado directamente
a MySQL.

Debes desacoplarlo
para soportar:
- MySQL
- MongoDB
- APIs
*/


/*
========================
NIVEL 2 — INTERMEDIO
========================
*/

/*
1.
Debes refactorizar un carrito
de ecommerce mal diseñado.

Problemas:
- demasiadas responsabilidades
- lógica duplicada
- dependencias directas
*/

/*
2.
Debes construir un sistema
de notificaciones extensible.

Debe soportar:
- email
- SMS
- push notifications

sin modificar lógica existente.
*/

/*
3.
Debes construir un sistema
de autenticación desacoplado.

Debe soportar:
- JWT
- OAuth
- Session Auth
*/

/*
4.
Debes construir un sistema
de exportación de reportes.

Formatos:
- PDF
- Excel
- CSV

sin llenar el código
de condicionales.
*/

/*
5.
Debes refactorizar una app
con demasiados if/else
según roles de usuario.
*/


/*
========================
NIVEL 3 — AVANZADO
========================
*/

/*
1.
Debes diseñar la arquitectura
de un ecommerce escalable.

Módulos:
- productos
- pagos
- usuarios
- órdenes
- descuentos

Aplicando SOLID.
*/

/*
2.
Debes construir un sistema
de permisos empresarial.

Debe soportar:
- permisos dinámicos
- herencia de roles
- múltiples fuentes de datos
*/

/*
3.
Debes construir un motor
de recomendaciones desacoplado.

Debe soportar:
- recomendaciones por compras
- por likes
- por historial
*/

/*
4.
Debes construir un sistema
de procesamiento de pagos.

Cada proveedor:
- Stripe
- PayPal
- MercadoPago

debe ser intercambiable.
*/

/*
5.
Debes construir un sistema
de logs empresarial.

Debe soportar:
- consola
- archivos
- base de datos
- servicios externos
*/


/*
========================
NIVEL 4 — ENTREVISTA REAL
========================
*/

/*
1.
Debes refactorizar el backend
completo de una startup.

Problemas:
- clases gigantes
- dependencias acopladas
- lógica duplicada
- código difícil de escalar
*/

/*
2.
Debes diseñar la arquitectura
de una red social.

Módulos:
- usuarios
- posts
- comentarios
- likes
- notificaciones

Todo desacoplado y extensible.
*/

/*
3.
Debes construir un sistema
de microservicios.

Servicios:
- auth
- payments
- analytics
- notifications

Cada uno independiente
pero reutilizable.
*/

/*
4.
Debes construir una plataforma
de streaming tipo Netflix.

Debe soportar:
- múltiples planes
- recomendaciones
- analytics
- reproducción
- descargas

sin romper arquitectura.
*/

/*
5.
Debes diseñar un framework interno
para una empresa.

Debe permitir:
- plugins
- extensiones
- módulos dinámicos
- nuevas funcionalidades

sin modificar el núcleo principal.
*/
```
