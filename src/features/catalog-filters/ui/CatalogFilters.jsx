import React from 'react';
import useCatalogFilters from '../model/useCatalogFilters';
import { filters as s } from '../../../shared/ui/styles/catalogFilters.styles';

const CatalogFilters = () => {
  const {
    search,
    onlyInStock,
    sortDirection,
    setSearch,
    setOnlyInStock,
    setSortDirection,
  } = useCatalogFilters();

  return (
    <div className={s.root}>
      <input
        type="text"
        placeholder="Поиск по названию"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={s.search}
      />
      <label className={s.checkboxLabel}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={onlyInStock}
          onChange={(e) => setOnlyInStock(e.target.checked)}
        />
        Только в наличии
      </label>
      <select
        value={sortDirection}
        onChange={(e) => setSortDirection(e.target.value)}
        className={s.select}
      >
        <option value="">Без сортировки</option>
        <option value="asc">Цена: по возрастанию</option>
        <option value="desc">Цена: по убыванию</option>
      </select>
    </div>
  );
};

export default CatalogFilters;
