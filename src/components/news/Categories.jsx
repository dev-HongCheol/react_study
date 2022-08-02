import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체',
  },
  {
    name: 'businss',
    text: '비지니스',
  },
  {
    name: 'entertainment',
    text: '엔터',
  },
  {
    name: 'health',
    text: '전체',
  },
  {
    name: 'science',
    text: '과학',
  },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover{
        color: #495057;
    }

    &.active{
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &.hover{
        color: #3bc9db;
      }
    }

    & + &{
        margin-left: 1rem;
    }
`;
export default function Categories() {
  return (
    <div>
      <CategoriesBlock>
        {
                categories.map((category) => (
                  <Category
                    className={(isActive) => (isActive ? 'active' : '')}
                    key={category.name}
                    to={Category.name === 'all' ? '/news-api' : `/news-api/${category.name}`}
                  >
                    {category.text}
                  </Category>
                ))
            }
      </CategoriesBlock>
    </div>
  );
}

Categories.defaultProp = {
  // onSelect: () => {},
  // selectCategory: 'all',
};

Categories.propTypes = {
  // onSelect: PropTypes.func.isRequired,
  // selectCategory: PropTypes.string.isRequired,
};
