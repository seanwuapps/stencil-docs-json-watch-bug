[Original bug report](https://github.com/ionic-team/stencil/issues/2560)

## Stencil version

```
"@stencil/core": "^2.17.4"
```

[`stencil.config.ts`](./stencil.config.ts)

## Reproduction steps

1. run `stencil build --dev --watch --docs` or the "watch.json" script in package.json

2. Update `src/my-component/readme.md` and observe no change in both terminal and dist json file.
3. Update `src/my-component/usage/my-component.md` and observe no change in both terminal and dist json file.