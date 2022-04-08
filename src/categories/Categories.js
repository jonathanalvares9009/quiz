import { useContext } from "react";
import "../index.css";

import categories from "./categoryList";
import CategoryContext from "../categoryContext";

function Categories() {
  const { category, setCategory } = useContext(CategoryContext);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="categories flex justify-center">
      <select value={category} onChange={handleChange} className="select">
        {categories.map((category) => (
          <option key={category.id} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
