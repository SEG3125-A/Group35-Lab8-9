import { data } from "../Data/data";
import { AccordionItem } from "../components/AccordionItem";
import './styles/Faq.css';

export const Faq = () => {
  return ( 
    // In each accordion, there is a button in the h2; when collapsed is added to that button, the accordion arrow is formatted differently.

    // in the div that wraps the body div, if it's show, then the accordion is shown by default.


    <div className="quest-container container-fluid mx-auto accordion p-3 m-3 col-md-7" id="faqAccordion">
      <h2 className="title m-3 p-3 col-md-3 col-6 mx-auto text-center border-5 border-bottom col-md-10">Frequently asked questions</h2>
      <div className="d-flex flex-column p-3 gap-4 flex-wrap justify-content-center">

        {data.map((item)=>{
          {/* console.log("the item id is",item.id); */}
          return (
            <AccordionItem data={item} key={item.id}/>
          )
        })}

      </div>
    </div>
  );
}
 
export default Faq;