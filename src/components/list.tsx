import React from 'react';

type ListProps<Type> = {
  items: Type[];
  renderItem: (item: Type, index: number) => React.ReactNode;
  className?: string;
};

function List<Type>({ items, renderItem, className }: ListProps<Type>) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}

export default List;