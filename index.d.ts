export {};

declare global {
  interface SymbolConstructor {
    readonly metadata: unique symbol;
  }

  interface Function {
    [Symbol.metadata]: DecoratorMetadata | null;
  }
}
