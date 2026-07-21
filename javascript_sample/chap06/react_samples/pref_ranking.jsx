{/* pref_ranking.jsx */}

export const columns = [
  { Header: "[順位]", accessor: "rank" },
  { Header: "[都道府県名]", accessor: "name" },
  { Header: "[面積(平方キロ)]", accessor: "area" }
];

export const data = [
  {
    rank: "1",
    name: "北海道",
    area: "83,456"
  },
  {
    rank: "2",
    name: "岩手県",
    area: "15,278"
  },
  {
    rank: "3",
    name: "福島県",
    area: "13,782"
  },
  {
    rank: "4",
    name: "長野県",
    area: "13,562"
  },
  {
    rank: "5",
    name: "新潟県",
    area: "12,583"
  }
];