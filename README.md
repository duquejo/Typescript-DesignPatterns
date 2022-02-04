# Patrones de diseño

## Tipos de patrones

### Patrones creacionales

Solucionan problemas de instancia o creación de objeto

- Singleton

  - Crear una sola instancia de una clase.
  - Uso global de la misma.
  - Ejemplo:
    - Si se desea realizar una configuración de una única vez, es recomendable el uso de este patrón, ahorra recursos a través de una sola instancia de clase.
    - Base de datos única (Si es dinámica éste es un antipatrón, ya que debería ser dinámico)

- Factory

  - Permite instanciar objetos en tiempo de ejecución
  - Ejemplo:
    - Módulos de ordenes de compra y cálculo de costos a través de un método de pago. (Paypal 6% retención, Visa 5% retención, MasterCard 10% retención), son métodos de pago que podrían tener una misma base, pero cuentan con parámetros a medida.

- Abstract factory

  - Agrupa familias de objetos para su creación, en una sola clase se agrupan una o muchas fábricas.
  - Ejemplo:
    - Debe publicarse un mensaje en distintas redes sociales y canales de chat (Facebook, LinkedIn, etc), para conectarnos a cada canal, necesitamos varias clases, una para conectarnos, otra para publicar, etc...
    - Se vuelve complicado administrar tantos canales en una sola factoría y se olvida el principio de las fábricas que es concentrarse en la implementación más que en el comportamiento.

### Patrones estructurales

Solucionan problemas de relación de una clase con otra

- Adapter

  - Permite solucionar incompatibilidad entre clases
  - Ejemplo:
    - Tenemos código legacy que tiene una funcionalidad en particular. (Un publicador de Facebook) El requerimiento exige que ahora se agregarán otros proveedores como Slack y etc..
    - La clase a adaptar debe implementar una interfaz, y todo se resuelve de manera polifórmica a través de la interfaz.
    - No se puede refactorizar, debido a que ya está en producción y las nuevas librerías a agregar no son modificables, ambas deben adaptarse.

- Decorator

  - Permite agregar comportamiento sin alterar su estructura, todo en tiempo de ejecución.
  - Si se piensa por capas, cada capa añadida extra da funcionalidades diferentes, pero no modifica la esencia del mismo
    - Al anidar los decoradores, serán ejecutados en orden de pila, es decir, primero el último y así sucesivamente.
  - Ejemplo:
    - Una tienda de música da descuentos de acurdo a la primera compra del usuario, con base al cliente y a la campaña actual. Posiblemente una estructura de condicionales puede solucionarlo, pero y ¿si se agregan N cantidad de descuentos?.
    - Este patrón también aplica para combinaciones entre comportamiento de clases.

- Proxy

  - Trabaja como intermediario para cambiar el comportamiento de una clase sin cambiar su estructura. Con esto evitamos que el comportamiento original sea alterado.
  - Ejemplo:
    - Un sitio web tiene un flujo de visitas muy grande y debido al alto flujo, el proveedor de servicio puede generar delays o sanciones debido a que no es capaz de soportar tanto.
      - La solución entonces sería crear un proxy que se conecte a este recurso del sitio web y almacene todo en caché local para su uso posterior.

### Patrones de comportamiento

Mejor propuesta a la forma en que se maneja la interacción y responsabilidades entre clases o de algoritmos implementados.

- Command
  - Permite resolver una operación sin conocer el contenido de esta o el receptor. El sólamente ejecuta una tarea. lo que contenga le da igual. Sólo expone el contrato, de la ejecución se encarga él. Proporciona el beneficio de la segregación.
- Observer
  - Permite que un objeto publicador pueda notificar un evento a los suscriptores.
  - Ejemplo:
    - Al realizar un usuario una compra en una plataforma, automáticamente se envía un SMS y un Email notificando la transacción.
- Strategy
  - Permite definir una familia de algoritmos para cambiar el comportamiento de la aplicación en tiempo de ejecución.
  - Ejemplo: La empresa que actualmente trabaja con Paypal, añadió nuevas formas de pago, convenio con VISA y MasterCard.

## Lenguaje de trabajo

TypeScript

## Referencias

Head first design patterns O'reilly

- Eric Freeman
- Elisabetg Robson

Design Patterns Element of reusable Object-oriented software

- Erich Gamma
- Richard Helm
- Ralph Johnson
- John Vlissides
