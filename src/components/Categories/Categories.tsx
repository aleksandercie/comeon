import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import {
  fetchCategoriesData,
  selectCategories,
} from '../../feature/categoriesSlice';
import { useEffect } from 'react';

type CategorieType = {
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
};

const Categories = ({ setActiveCategory }: CategorieType) => {
  const dispatch = useAppDispatch();
  const { data: categories } = useSelector(selectCategories);
  const handleClick = (id: number) => () => setActiveCategory(id);

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, [dispatch]);

  return (
    <div className="ui selection animated list category items">
      {categories?.map(({ id, name }) => (
        <div className="category item" key={id} onClick={handleClick(id)}>
          <div className="content">
            <div className="header">{name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
