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
- Decorator
- Proxy

### Patrones de comportamiento

Mejor propuesta a la forma en que se maneja la interacción y responsabilidades entre clases o de algoritmos implementados.

- Command
- Observer
- Strategy

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
