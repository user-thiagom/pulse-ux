import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TemplatesPage.css'
import NavigationHeader from '../../components/layout/NavigationHeader/NavigationHeader'
import TemplateFilters from '../../components/templates/TemplateFilters/TemplateFilters'
import TemplateCard from '../../components/templates/TemplateCard/TemplateCard'
import initialTemplates from '../../data/initialTemplates'
import { useSurvey } from '../../context/SurveyContext'

const TemplatesPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const navigate = useNavigate()
  const { createSurvey, updateSurvey } = useSurvey()

  const categories = [
    'Todos',
    'Mais Populares',
    'E-commerce',
    'Atendimento',
    'Produto',
    'Modelos Personalizados'
  ]

  const filteredTemplates = useMemo(() => {
    return initialTemplates.filter((template) => {
      const searchText = searchValue.trim().toLowerCase()
      const matchesSearch =
        !searchText ||
        [template.title, template.description, template.category]
          .join(' ')
          .toLowerCase()
          .includes(searchText)

      const matchesCategory =
        selectedCategory === 'Todos' ||
        (selectedCategory === 'Mais Populares'
          ? template.popularityRate >= 80
          : template.category === selectedCategory)

      return matchesSearch && matchesCategory
    })
  }, [searchValue, selectedCategory])

  const handleCreateSurvey = () => {
    const id = createSurvey()
    navigate(`/create-survey/${id}`)
  }

  const handleUseTemplate = (templateId) => {
    const selectedTemplate = initialTemplates.find((item) => item.id === templateId)

    if (!selectedTemplate) {
      return
    }

    const newSurveyId = createSurvey()
    updateSurvey(newSurveyId, {
      title: selectedTemplate.title,
      description: selectedTemplate.description,
      questions: selectedTemplate.questions
    })
    navigate(`/create-survey/${newSurveyId}`)
  }

  const handlePreview = () => {
    // A visualização ainda não está implementada, mas o botão está pronto para acionar o fluxo.
  }

  return (
    <main className="templates-page">
      <NavigationHeader
        title="Templates de Pesquisas"
        subtitle="Escolha um modelo pronto e edite em poucos minutos."
      />

      <div className="templates-page-content">
        <TemplateFilters
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onCreate={handleCreateSurvey}
        />

        <div className="templates-list-header">
          <div>
            <h1 className="templates-list-label">Biblioteca de Templates</h1>
            <p className="templates-list-count">{filteredTemplates.length} templates encontrados</p>
          </div>
        </div>

        {filteredTemplates.length ? (
          <div className="templates-list">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onUseTemplate={handleUseTemplate}
                onPreview={handlePreview}
              />
            ))}
          </div>
        ) : (
          <div className="templates-empty">Nenhum template encontrado. Tente outro termo ou categoria.</div>
        )}
      </div>
    </main>
  )
}

export default TemplatesPage