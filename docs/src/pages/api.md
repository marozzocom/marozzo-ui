<Section name="Concepts">

# Key Concepts

## Variant

The variant api refers to combined styles within the theme, typically under `variants` key, such as

```
// theme.ts
...
variants: {
  buttons: {
    primary: {
      borderRadius: this.radii.normal,
      boxShadow: this.shadows.subtle
    }
  }
}
...
```

Variants are imported to a component via the `useTheme` hook, either by importing the entire theme object, or by deconstructing the variants, or just the needed subset of variants, for example:

`const { theme: { variants: { buttons } } }` = useTheme()`

Variants can be specified elsewhere in the theme, another file or within the component itself as well, if needed.

## Style

Style is a replacement for React's style prop, utilizing an Emotion CSS Object. These can be created inline and they can utilize values from the theme, for example:

```
const { theme: { sizes } } = useTheme()

...
<Box style={{
  padding: sizes[2]
}} />
...
```

## Responsive values

Styles can be given as an array for responsive layouts. A `breakpoints` array of pixel values within the theme is used as basis. With the following breakpoints defined in theme:

`breakpoints = [576, 768, 992, 1200]`

the following style value

`color: ["green", "blue", "pink", "gray"]`

would change the color of the element according to the breakpoints. The array supports values imported from a theme.

</Section>
