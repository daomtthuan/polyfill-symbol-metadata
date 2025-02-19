# polyfill-symbol-metadata

A polyfill for Symbol.metadata to support [@tc39/proposal-decorator-metadata](https://github.com/tc39/proposal-decorator-metadata)

These packages are only temporary for _stage 3_ of decorators until TC39 officially supports decorators.

## Usage

```typescript
import "polyfill-symbol-metadata";

function meta(key, value) {
  return (_, context) => {
    context.metadata[key] = value;
  };
}

@meta("a", "x")
class C {
  @meta("b", "y")
  m() {}
}

C[Symbol.metadata].a; // 'x'
C[Symbol.metadata].b; // 'y'
```

## REF

- <https://github.com/tc39/proposal-decorator-metadata/issues/14#issuecomment-2136289464>

## Relative issues

- <https://github.com/denoland/deno/issues/22111>
