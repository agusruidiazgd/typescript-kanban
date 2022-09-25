import React, { useState, useContext } from 'react';
import {
  Container,
  Header,
  Title,
  FilterContainer,
  StatusesColumnsContainer,
} from './styles';
import ICategory from '../../models/ICategory';
import IColumn from '../../models/IColumns';
import ICard from '../../models/ICard';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';
import  getCategoryBackgroundColor from '../../helpers/getCategoryColor';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

interface KanbanBoardProps {
  toggleTheme: () => void;
}


const KanbanBoard: React.FC<KanbanBoardProps> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const { columns } = useAppSelector((state: any) => state.columns);
  const { cards } = useAppSelector((state) => state.cards);
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>(
    Object.values(ICategory)
  );

  console.log('columns', columns);

  const handleChangeCheckbox = (category: ICategory) => {
    const foundCategory = selectedCategories.find((item) => item === category);

    if (foundCategory) {
      const categoriesWithItemRemoved = selectedCategories.filter(
        (item) => item !== category
      );
      setSelectedCategories(categoriesWithItemRemoved);
      return;
    }

    setSelectedCategories([...selectedCategories, category]);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    console.log('drop end', destination, source, draggableId);
  }

  return (
    <Container>
      <Header>
        <Title>
          <h1 className="text-xl font-bold">PROJECT</h1>
          <h1 className="text-xl font-bold">
            <span>KANBAN BOARD</span>
          </h1>
        </Title>
        {Object.values(ICategory).map((category) => (
          <FilterContainer
            key={category}
            color={getCategoryBackgroundColor(theme, category)}
            onClick={() => handleChangeCheckbox(category)}
          >
            <input
              type="checkbox"
              name={category}
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleChangeCheckbox(category)}
            />
            <label>{category}</label>
          </FilterContainer>
        ))}
      </Header>
      <StatusesColumnsContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column: IColumn, index: number) => {
            const cardsArray: ICard[] = [];

            column.cardsIds.forEach((cardId) => {
              const foundedCard = cards.find((card) => card.id === cardId);
              if (foundedCard) cardsArray.push(foundedCard);
            });

            return (
              // <Column
              //   key={column.id}
              //   index={index}
              //   status={column.id}
              //   cards={cardsArray}
              // />
              <div>{column.title}</div>
            );
          })}
        </DragDropContext>
      </StatusesColumnsContainer>
    </Container>
  );
}

export default KanbanBoard;

