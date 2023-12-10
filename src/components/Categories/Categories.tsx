import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import {
  fetchCategoriesData,
  selectCategories,
} from '../../feature/categoriesSlice';
import { useEffect } from 'react';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { data: categories } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, [dispatch]);

  return (
    <div className="ui selection animated list category items">
      {categories?.map(({ id, name }) => (
        <div className="category item" key={id}>
          <div className="content">
            <div className="header">{name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
