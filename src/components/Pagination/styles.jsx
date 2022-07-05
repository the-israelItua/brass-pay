import styled from "styled-components";

const PaginateContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => `${theme.media.sm}`} {
    display: block;
    padding-bottom: 4rem;
  }

  .pagination {
    display: inline-block;
    cursor: pointer;
    border-radius: 0.4rem;
    background: ${({ theme }) => theme.colors.grey400};
    margin-right: 0.25rem;

    @media ${({ theme }) => `${theme.media.sm}`} {
      margin-bottom: 1.25rem;
    }
  }

  .pagination a {
    color: #999999;
    font-size: 0.875em;
    display: flex;
    height: 2.625rem;
    width: 1.875rem;
    justify-content: center;
    align-items: center;
  }

  .break {
    display: inline-block;
    cursor: pointer;
    margin-right: 0.25rem;
  }

  .break a {
    color: #999999;
    font-size: 0.875em;
    display: flex;
    height: 2.625rem;
    width: 1.875rem;
    justify-content: center;
    align-items: center;
    background: #ffffff;
  }

  .pageLink2 a {
    color: #121212;
  }

  .arrows {
    display: none;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 0.8em;
    color: #121212;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 3.5rem;
  background: ${({ theme }) => theme.colors.grey400};
  border-radius: 0.5rem;
  padding: 0 0.875rem;
  height: 2.625rem;
`;

const DropDownContainer = styled.div`
  margin: 0 2rem;
  position: relative;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.grey400};
  z-index: 99;
  width: 3.5rem;
  border-radius: 0.25rem;
  left: 0.3125rem;
  box-shadow: 22px -20px 16px -4px rgba(238, 238, 238, 0.75);
`;

const ListItem = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875em;
  padding: 0 3.67rem 0 1.25rem;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#eeeeee" : "white")};
  :hover {
    background: #eeeeee;
  }
`;

export {
  PaginateContainer,
  ItemsWrapper,
  SelectWrapper,
  DropDownContainer,
  DropDownListContainer,
  ListItem,
};
