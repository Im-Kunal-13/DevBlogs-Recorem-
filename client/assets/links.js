import { metal, cement, chemical, mining, oil } from "./images/index";

export const headerLinks = [
  {
    link: "/home",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/featuers",
    label: "Featuers",
  },

  {
    link: "#1",
    label: "More",
    links: [
      {
        link: "/docs",
        label: "Documentation",
      },
      {
        link: "/resources",
        label: "Resources",
      },
      {
        link: "/community",
        label: "Community",
      },
      {
        link: "/blog",
        label: "Blog",
      },
    ],
  },
];

export const slidelinks = [
  { label: "Metal Industry", value: "metal" },
  { label: "Mining", value: "mining" },
  { label: "Cement", value: "cement" },
  { label: "Oil", value: "oil" },
  { label: "Chemical", value: "chemical" },
];

export const slideItems = {
  metal: {
    label: "Reducing Downtime in Metal Industry",
    detail:
      "Our IoT driven Predictive maintenance solution helps to reduce downtime, monitor, collect exchange and analyze data from machines to enhance manufacturing processes",
    image: metal,
  },
  mining: {
    label: "Machine failure in the mines?",
    detail:
      "Our solutions can add immense value to your entire mining supply chain by harnessing the power of Industry 4.0. The asset performance will be optimized, costs and machine downtime can be reduced leading to a boost in ROI.",
    image: mining,
  },
  cement: {
    label: "No more unplanned downtime in Cement",
    detail:
      "Our Industry 4.0 digital solutions can help you tackle the challenges in cement production such as large energy consumption, high costs and complex processes. Our advanced analytics can simplify complexities and help in real-time decisionmaking. Equipment lifespan and reliability will amplify due to our condition monitoring system.",
    image: cement,
  },
  oil: {
    label: "Protect your assets with Zone Approved",
    detail:
      "Our digitization solutions in industrial equipment maintenance can help oil and gas companies streamline maintenance. Our predictive analytics and conditional data monitoring help anticipate failures, reducing unplanned maintenance and unscheduled downtime.",
    image: oil,
  },
  chemical: {
    label: "No more Downtime in Chemical Plants",
    detail:
      "Our AI driven analytics can propel your chemical business to new heights of reliability by optimizing asset longevity and impacting top-line growth through proactive identification of upcoming machine failures. IoT driven asset maintenance solutions can provide immense flexibility and agility to production.",
    image: chemical,
  },
};
