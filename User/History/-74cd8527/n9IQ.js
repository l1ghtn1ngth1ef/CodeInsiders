import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useState, useEffect } from "react";
const viteLogo = "/assets/loaded-fga3Ki61.png";
const foxLogo = "/assets/logo-jMfs_qdh.svg";
function VitePrint() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "https://vitejs.dev", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: foxLogo,
        className: "logo",
        alt: "Vite logo",
        style: { width: "600px", height: "265px" }
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "https://vitejs.dev", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: viteLogo,
        className: "logo",
        alt: "Vite logo",
        style: { width: "600px", height: "170px" }
      }
    ) }) }),
    /* @__PURE__ */ jsx("h1", { children: "Vite + React + Prettier + ESLint" }),
    /* @__PURE__ */ jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
        "count is ",
        count
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Edit",
        /* @__PURE__ */ jsx("code", { children: "src/App.tsx " }),
        "and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
function App() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: domLoaded ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(VitePrint, {}) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(VitePrint, {}) }) });
}
const render = () => {
  return renderToString(/* @__PURE__ */ jsx(App, {}));
};
export {
  render
};
