import { useEffect , useState } from "react";
import { getAllToys } from "./api.js";
import ListItem from "./ListItem";

const List = () => {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    getAllToys().then(res => {
      setArr(res.data);
      console.log(res);
    })
      .catch(err => {
        alert("התרחשה תקלה");
        console.log(err);
      });
  }, []);

  return (
    <div>
      רשימת המשחקים
      <ul>
        {arr.map(item => (
          <li key={item._id}>
            <ListItem one={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

   
      
        