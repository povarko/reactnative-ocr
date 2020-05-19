export default (initParams = {
  sort: [
    {
      id: 0,
      isSelected: true,
      name: "Newest Added",
      value: "newest_added"
    },
    {
      id: 1,
      isSelected: false,
      name: "Most Popular",
      value: "most_popular"
    },
    {
      id: 2,
      isSelected: false,
      name: "Top 100",
      value: "top_100"
    }
  ],
  filter: [
    {
      id: 0,
      isSelected: true,
      name: "Pro Sport",
      value: "pro"
    },
    {
      id: 1,
      isSelected: true,
      name: "Amateur Sport",
      value: "amateur"
    },
    {
      id: 2,
      isSelected: true,
      name: "Semi-Pro Sport",
      value: "semiPro"
    }
  ]
});
