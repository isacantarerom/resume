function WorkCard({ title, company, dates, highlights, reflection, logo }) {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
            {logo && (
                <img
                    src={logo}
                    alt={`${company} logo`}
                    className="me-3"
                />
            )}

            <h5 className="card-title mb-0">{title}</h5>
        </div>
        
        <h6 className="card-subtitle mb-2 text-muted">{company} · {dates}</h6>
        <ul className="list-group list-group-flush mb-3">
          {highlights.map((point, index) => (
            <li key={index} className="list-group-item">{point}</li>
          ))}
        </ul>
        <p className="card-text fst-italic text-secondary">💬 {reflection}</p>
      </div>
    </div>
  );
}

export default WorkCard;