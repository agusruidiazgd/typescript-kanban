import React, { useState, useContext } from 'react';

import ICategory from '../../models/ICategory';
import IColumn from '../../models/IColumns';
import ICard from '../../models/ICard';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';
import getCategoryBackgroundColor from '../../helpers/getCategoryColor';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

interface KanbanBoardProps {
  toggleTheme: () => void;
}

const Column: React.FC<KanbanBoardProps> = ({ toggleTheme }) => {
//   const theme = useContext(ThemeContext);
//   const { columns } = useAppSelector((state: any) => state.columns);
//   const { cards } = useAppSelector((state) => state.cards);
//   const [selectedCategories, setSelectedCategories] = useState<ICategory[]>(
//     Object.values(ICategory)
//   );

//   console.log('columns', columns);

//   const handleChangeCheckbox = (category: ICategory) => {
//     const foundCategory = selectedCategories.find((item) => item === category);

//     if (foundCategory) {
//       const categoriesWithItemRemoved = selectedCategories.filter(
//         (item) => item !== category
//       );
//       setSelectedCategories(categoriesWithItemRemoved);
//       return;
//     }

//     setSelectedCategories([...selectedCategories, category]);
//   };

//   const onDragEnd = (result: DropResult) => {
//     const { destination, source, draggableId } = result;
//     console.log('drop end', destination, source, draggableId);
//   };

  return (
    <div>hola</div>
  );
};

export default Column;
