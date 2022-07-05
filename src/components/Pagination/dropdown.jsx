import { useState, useRef } from "react";
import { ChevronDown } from "assets/svgs";
import { useOnClickOutside } from "utils/hooks";
import {
  SelectWrapper,
  DropDownContainer,
  DropDownListContainer,
  ListItem,
} from "./styles";

const Select = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const selectedRef = useRef(null);

  useOnClickOutside(selectedRef, () => setIsOpen(false));

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <DropDownContainer ref={selectedRef}>
      <SelectWrapper onClick={toggling}>
        <p>{selectedOption}</p>
        <ChevronDown />
      </SelectWrapper>
      {isOpen && (
        <DropDownListContainer>
          {options.map((option) => (
            <ListItem
              onClick={onOptionClicked(option)}
              key={Math.random()}
              selected={option === selectedOption}
            >
              {option}
            </ListItem>
          ))}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Select;
