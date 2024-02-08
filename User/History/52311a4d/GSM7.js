import { jsx, jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { useState, Suspense } from "react";
import "react-dom";
const App = () => {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx("main", { children: [
    /* @__PURE__ */ jsx("h1", { children: "App" }),
    /* @__PURE__ */ jsx("p", { children: "Lorem Ipsum" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { children: count }),
      /* @__PURE__ */ jsx("button", { onClick: () => setCount(count + 1), children: "Count" })
    ] })
  ] }) });
};
createRoot(document.getElementById("app")).render(/* @__PURE__ */ jsx(App, {}));
