const companies = [
    {name: "Google", location: "マウンテンビュー"},
    {name: "Facebook", location: "メンロパーク"},
    {name: "Uber", location: "サンフランシスコ"},
    {name: "Apple", location: "アップルパーク"}
];

//const location = companies[0].location;
//location; マウンテンビュー

//const [ location ] = companies;
//location; {name: "Google", location: "マウンテンビュー"}

const [ {location} ] = companies;
//location; マウンテンビュー



