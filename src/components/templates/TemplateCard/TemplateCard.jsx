import React from 'react'
import './TemplateCard.css'
import { Eye } from 'lucide-react'

const TemplateCard = ({ template, onUseTemplate, onPreview }) => {
  return (
    <article className="template-card">
      <div className="template-card-header">
        <span className={`template-card-tag ${template.status === 'pro' ? 'pro' : ''}`}>
          {template.category}
        </span>
        {template.status === 'pro' && <span className="template-card-pro">PRO</span>}
      </div>

      <div className="template-card-body">
        <div className="template-card-title-row">
          <h2>{template.title}</h2>
        </div>
        <p>{template.description}</p>
      </div>

      <div className="template-card-stats">
        <div className="template-card-stat">
          <span>Taxa de resposta média</span>
          <strong>{template.responseRate}%</strong>
        </div>
        <div className="template-card-stat">
          <span>Validação</span>
          <strong>{template.validation.label}</strong>
        </div>
      </div>

      <div className="template-card-progress">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${template.validation.rate}%` }} />
        </div>
        <span>{template.popularity}</span>
      </div>

      <div className="template-card-actions">
        <button className="template-card-button primary" type="button" onClick={() => onUseTemplate(template.id)}>
          Usar Template
        </button>
        <button className="template-card-button secondary" type="button" onClick={() => onPreview(template.id)}>
          <Eye size={16} /> Visualizar
        </button>
      </div>
    </article>
  )
}

export default TemplateCard;
