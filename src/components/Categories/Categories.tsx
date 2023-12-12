import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import {
  fetchCategoriesData,
  selectCategories,
} from '../../feature/categoriesSlice';
import Header from '../Header/Header';

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
    <>
      <Header title="Categories" />
      <div className="ui selection animated list category items">
        {categories?.map(({ id, name }) => (
          <button
            className="category item"
            key={id}
            onClick={handleClick(id)}
            aria-label={name}
          >
            <div className="content leftAligned">
              <div className="header">{name}</div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
