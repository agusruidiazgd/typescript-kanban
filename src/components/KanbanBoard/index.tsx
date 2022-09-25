import React, { useState, useContext } from 'react';
import {
  Container,
  Header,
  Title,
  FilterContainer,
  StatusesColumnsContainer,
} from './styles';
import ICategory from '../../models/ICategory';
import { ThemeContext } from 'styled-components';
import  getCategoryBackgroundColor from '../../helpers/getCategoryColor';

interface KanbanBoardProps {
  toggleTheme: () => void;
}


const KanbanBoard: React.FC<KanbanBoardProps> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>(
    Object.values(ICategory)
  );

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

      </StatusesColumnsContainer>
    </Container>
  );
}

export default KanbanBoard;

