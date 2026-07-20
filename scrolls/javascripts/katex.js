// Invoke KaTeX auto-render on every page load (and on Material instant navigation).
// Without this, katex.min.js + auto-render.min.js are loaded but never run,
// so all math stays as raw source. `document$` is provided by Material.
document$.subscribe(() => {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$",  right: "$$",  display: true  },
      { left: "\\[", right: "\\]", display: true  },
      { left: "\\(", right: "\\)", display: false },
      { left: "$",   right: "$",   display: false },
    ],
    throwOnError: false,
    strict: false,
  });
});
