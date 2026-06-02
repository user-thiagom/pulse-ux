import React from 'react'
import './TemplateFilters.css'
import { Search } from 'lucide-react'

const TemplateFilters = ({
  searchValue,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  onCreate
}) => {
  return (
    <section className="template-filters">
      <div className="template-filters-top">
        <label className="template-search-field">
          <Search size={18} />
          <input
            type="search"
            value={searchValue}
            placeholder="Buscar templates..."
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="Buscar templates"
          />
        </label>

        {/* <button className="template-create-button" type="button" onClick={onCreate}>
          + Criar do Zero
        </button> */}
      </div>

      <div className="template-categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === selectedCategory ? 'template-category active' : 'template-category'}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}

export default TemplateFilters;
