import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@atlas/react-single",
  app: () => System.import("@atlas/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@atlas/react-multiples",
  app: () => System.import("@atlas/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@atlas/react-route",
  app: () => System.import("@atlas/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

start({
  urlRerouteOnly: true,
});
