export const addDataInPref = (item, name, setfilterValue,setOrientationTitle) => {
  const currentFilterCount = localStorage.getItem("filterCount") || "[]";
  const parseFilterCount = JSON.parse(currentFilterCount);
  let newItem={};
  if(item===name){
     newItem = {
      value: item,
      no: 0,
      name: name,
    };

  }
  else{
     newItem = {
      value: item,
      no: 1,
      name: name,
    };
  }
  const index = parseFilterCount.findIndex(
    (item) => item.name === newItem.name
  );
  if (index === -1) {
    parseFilterCount.push(newItem);
  }
  localStorage.setItem("filterCount", JSON.stringify(parseFilterCount));
  let filterList = localStorage.getItem("filterCount") || "[]";
  const flist = JSON.parse(filterList);

  const totalCount = flist.reduce((total, item) => total + item.no, 0);
  setfilterValue(totalCount);
  setOrientationTitle&& setOrientationTitle(null);
};
