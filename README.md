Patrón de Diseño Creacional Prototype

Índice

1. Introducción
2. Patron de diseño creacional Prototype
3. Material visual
4.Cómo ejecutar el codigo


1. Introducción

El patrón de diseño Creacional Prototype es un patrón de diseño que permite crear objetos a partir de otros objetos existentes, utilizando la clonación como mecanismo de creación. Este patrón es especialmente útil en situaciones en las que la creación de objetos es costosa o compleja, ya que permite reutilizar objetos existentes y simplificar el proceso de creación.


2. Patrón de Diseño Creacional Prototype

El patrón de diseño Creacional Prototype se basa en la idea de crear objetos a partir de otros objetos existentes, utilizando la clonación como mecanismo de creación. 

Este patrón se compone de las siguientes partes:

-Prototype: Es una interfaz o clase abstracta que define el método clone() para la clonación de objetos.
-ConcretePrototype: Es una clase concreta que implementa la interfaz o clase abstracta Prototype y define los atributos y métodos que tendrán los objetos que se creen a partir de ella.
-Client: Es la clase que utiliza los objetos creados a partir de los prototipos.

El funcionamiento del patrón de diseño Creacional Prototype es el siguiente:

-Se crea un objeto a partir de un prototipo concreto.
-Se llama al método clone() del objeto para crear una copia exacta del mismo.
-Se utiliza la copia del objeto en lugar del objeto original.


3. Material visual

*Prototype
----------
+clone(): Prototype
----------

*ConcretePrototype1
----------
-attribute1: string
-attribute2: number
----------
+clone(): ConcretePrototype1
+getAttribute1(): string
+getAttribute2(): number
----------

*ConcretePrototype2
----------
-attribute3: boolean
-attribute4: string[]
----------
+clone(): ConcretePrototype2
+getAttribute3(): boolean
+getAttribute4(): string[]
----------

*Client
----------
-prototype1: ConcretePrototype1
-prototype2: ConcretePrototype2
----------
+operation1(): void
+operation2(): void
----------


4.Cómo ejecutar el código

-Clona este repositorio en tu máquina local.

-Abre una terminal en la carpeta raíz del repositorio.

-Instala las dependencias con el siguiente comando:
npm install

Compila el código TypeScript con:
npm run build

Ejecuta el código compilado con:
npm run start
