# Strategy Pattern

Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

```mermaid
classDiagram

    class IFlyBehavior {
        <<interface>>
        +fly(): void
    }

    class FlyWithWings {
        +fly(): void
    }

    class FlyNoWay {
        +fly(): void
    }

    class FlyRocketPowered {
        +fly(): void
    }

    class IQuackBehavior {
        <<interface>>
        +quack(): void
    }

    class Quack {
        +quack(): void
    }

    class Duck {
        <<abstract>>
        -flyBehavior: IFlyBehavior
        -quackBehavior: IQuackBehavior
        +display(): void
        +performFly(): void
        +performQuack(): void
        +swim(): void
        +setFlyBehavior(IFlyBehavior): void
        +setQuackBehavior(IQuackBehavior): void
    }

    class MallardDuck {
        +display(): void
    }

    class ModelDuck {
        +display(): void
    }

    IFlyBehavior <|.. FlyWithWings : implements
    IFlyBehavior <|.. FlyNoWay : implements
    IFlyBehavior <|.. FlyRocketPowered : implements
    IQuackBehavior <|.. Quack : implements
    MallardDuck --|> Duck : extends
    ModelDuck --|> Duck : extends
    Duck <-- IFlyBehavior : HAS-A >
    Duck <-- IQuackBehavior : HAS-A >
```
---

```mermaid
classDiagram

    class IWeaponBehavior {
        <<interface>>
        +useWeapon(): void
    }

    class KnifeBehavior {
        +useWeapon(): void
    }

    class AxeBehavior {
        +useWeapon(): void
    }

    class SwordBehavior {
        +useWeapon(): void
    }

    class Character {
        <<abstract>>
        -weaponBehavior: IWeaponBehavior
        +fight(): void
        +setWeaponBehavior(IWeaponBehavior): void
    }

    class King {
        +fight(): void
    }

    class Queen {
        +fight(): void
    }

    class Knight {
        +fight(): void
    }

    class Troll {
        +fight(): void
    }

    IWeaponBehavior <|.. KnifeBehavior : implements
    IWeaponBehavior <|.. AxeBehavior : implements
    IWeaponBehavior <|.. SwordBehavior : implements
    IWeaponBehavior <|.. BowAndArrowBehavior : implements
    King --|> Character : extends
    Queen --|> Character : extends
    Knight --|> Character : extends
    Troll --|> Character : extends
    Character <-- IWeaponBehavior : HAS-A >
```
---
    
```mermaid
classDiagram
    class Context {
        -strategy: Strategy
        +constructor(strategy: Strategy)
        +setStrategy(strategy: Strategy): void
        +doSomeBusinessLogic(): void
    }

    class Strategy {
        <<interface>>
        +doAlgorithm(data: string[]): string[]
    }

    class ConcreteStrategyA {
        +doAlgorithm(data: string[]): string[]
    }

    class ConcreteStrategyB {
        +doAlgorithm(data: string[]): string[]
    }

    Strategy <|.. ConcreteStrategyA : implements
    Strategy <|.. ConcreteStrategyB : implements
    Context o-- Strategy : HAS-A >

```
