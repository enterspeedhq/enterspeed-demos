module.exports = {
  tenants: [
    {
      name: "devbeer",
      enterspeedDomain: "https://www.devbeer.com",
      domains: [
        {
          development: "dev.devbeer.com",
          stage: "stage.devbeer.com",
          production: "devbeer.com",
        },
      ],
    },
    {
      name: "tobeer",
      enterspeedDomain: "https://www.tobeer.com",
      domains: [
        {
          development: "dev.tobeer.com",
          stage: "stage.tobeer.com",
          production: "tobeer.com",
        },
      ],
    },
    {
      name: "lorembeer",
      enterspeedDomain: "https://www.lorembeer.com",
      domains: [
        {
          development: "dev.lorembeer.com",
          stage: "stage.lorembeer.com",
          production: "lorembeer.com",
        },
      ],
    },
    {
      name: "icebeer",
      enterspeedDomain: "https://www.icebeer.com",
      domains: [
        {
          development: "dev.icebeer.com",
          stage: "stage.icebeer.com",
          production: "icebeer.com",
        },
      ],
    },
  ],
};
