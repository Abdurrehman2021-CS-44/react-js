import { useEffect, useState } from "react";

const List = ({ getNum }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(getNum);
    console.log("Updating items");
  }, [getNum]);

  return numbers.map((number) => <div key={number}>{number}</div>);
};

export default List;
