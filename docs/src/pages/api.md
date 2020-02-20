# Component Style

## Overview

Each raw<sup>1</sup> component is a descendant of the Box component. These components receive their style from an Emotion Face Paint argument, which is a breakpoints-enabled function around a standard Emotion CSS Object.

The component style is comprised as follows:

**Global styles**

1. Theme global styles and browser defaults for the component element, such as div or p. Box defaults to div but this can be altered via the as prop.

**Component styles**

2. Box default styles
3. Component default styles
4. Component variant
5. Component style overrides

In most cases you can, in the end, override any of the styles with inline overrides, but as of now this is not guaranteed (for example, a Stack component currently can not be made anything other than a flex box -- this may change however with future releases.)

These styles are applied usually in this order.

## Custom props

Some components may expose props that have an effect on their display style, such as Button that lets you specify props primary and small that have an effect on how the button is rendered.

These props can change the components variant or style attributes depending on the component. In the case of Button, they together choose a variant for the button. If a variant is specified, it will override the effects of these props. You should refer to the documentation of each component if you run want to learn more closely how to customize their style and behavior.

## Variant

The variant api refers to combined styles within the theme, typically under variants key, such as

```javascript
const VariantButton = () => (
  <Button
    variants={{
      buttons: {
        primary: {
          borderRadius: this.radii.normal,
          boxShadow: this.shadows.subtle
        }
      }
    }}
  />
)
```

Variants are imported to a component via the useVariants hook, either by importing the entire theme object, or by deconstructing the variants, or just the needed subset of variants, for example:

const { buttons } = useVariants()

Variants can be specified elsewhere in the theme, another file or within the component itself as well, if needed.

Variants can be grouped and combined as you like with array spread operator, for example:

```
variant={{
  ...variants.textStyles.heading,
  ...variants.cards.raised
}}
```

But remember that the Box component will not join given variants with the default variant.

Variants can include responsive styles but setting variant objects as a responsive array is not supported.

## Style

Style is a replacement for React's style prop, utilizing an Emotion CSS Object. These can be created inline and they can utilize values from the theme, for example:

```javascript
const { theme: { sizes } } = useTheme()

...
<Box style={{
  padding: sizes[2]
}} />
...
```

The Box component will join the given styles with the default styles, usually applying them last. To change a default value you need to explicitly override it. Remember that at this stage some style attributes may be forced so that they can not be overridden.

## Responsive values

Styles can be given as an array for responsive layouts. A breakpoints array of pixel values within the theme is used as basis. With the following breakpoints defined in theme:

breakpoints = [576, 768, 992, 1200]

the following style value

color: ["green", "blue", "pink", "gray"]

would change the color of the element according to the breakpoints. The array supports values imported from a theme.

# Pseudo elements and classes

</Section>

# Transitions

# How Marozzo UI works

## Style order

## Overriding styles

## How are styles merged

## Suggested logic for creating styles

# Notes

1. Some components, such as Drawer and Card provide an motionProps container (a Transition wrapper) by default. Some components may also provide other logic wrapped in them by default, and in all these cases a _raw_ version of the component is also provided, such as DrawerRaw or CardRaw. These components can be used as is or (if you prefer) imported with a different name such as import { CardRaw as Card } from "@marozzo/ui". By examining the source code you can recreate the logic around these raw components and change it if you need to.
