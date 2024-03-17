import '../main.css';
import '../pages/styles/Faq.css';

export const AccordionItem = ({data})=>{
    return(
        <div key={data.id} className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#q${data.id}`} aria-expanded="false" aria-controls={`q${data.id}`}>
                    <strong>{data.question}</strong>
                </button>
            </h2>
            <div id={`q${data.id}`} className="accordion-collapse collapse">
                <div className="accordion-body">
                    {data.answer}
                </div>
            </div>
        </div>
    )
}