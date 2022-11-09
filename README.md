# tailwind-child
A simple [TailwindCSS](https://tailwindcss.com/ "TailwindCSS") plugin that helps you to register class variants and change styles with simple class toggle on a parent node.

```html
<body class="contrast">
  <a href="" class="text-gray-500 cst:text-black">
    READ MORE
  </a>
</body>
```

```javascript
module.exports = {
  content: [],
  theme: {
    extend: {
      classVariants: {
        // variant: "toggleableClass"
        contrast: "contrast",

        // Can be different if necessary
        cst: "contrast"
      }
    },
  },
  plugins: [
    [
      require("@stefanracic/tailwind-classvariants")
    ]
  ],
}
```