export default function PreviewModal({open, onClose, data}) {
  const { title, desc, img, tags = [], github, live } = data || {}
  if (!open) return null

  return (
    <div className="preview-backdrop show" aria-hidden="false" onClick={(e)=>{ if(e.target.classList.contains('preview-backdrop')) onClose() }}>
      <div className="preview-modal" role="dialog" aria-modal="true">
        <button className="preview-close" type="button" aria-label="ปิด" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="preview-media">
          {img ? <img src={img} alt={title ? `${title} preview` : 'Project preview'} /> : <div style={{height:240}} />}
        </div>

        <div className="preview-content">
          <h3 className="preview-title mb-2">{title}</h3>
          <p className="preview-desc mb-3">{desc}</p>

          <div className="preview-tags mb-4">
            {tags.map((t) => <span className="preview-tag" key={t}>{t}</span>)}
          </div>

          <div className="preview-actions">
            {github && (
              <a className="btn btn-github" href={github} target="_blank" rel="noopener">
                <i className="bi bi-github"></i> GitHub
              </a>
            )}
            {live && (
              <a className="btn btn-live" href={live} target="_blank" rel="noopener">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
