Symbol.metadata ??= Symbol.for("Symbol.metadata");

if (typeof Symbol === "function" && Symbol.metadata) {
  const _metadata = Object.create(null);

  Object.defineProperty(globalThis, Symbol.metadata, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _metadata,
  });
}
