import first_page from '../assets/first_page.svg'
import last_page from '../assets/last_page.svg'
import looks_one from '../assets/looks_one.svg'
import navigate_before from '../assets/navigate_before.svg'
import navigate_next from '../assets/navigate_next.svg'

export default function Footer() {
    return (
      <div className="pagination">
        <button className="first"></button>
            <img src={first_page} alt="First" className="icon" />
        <button className="previous"></button>
            <img src={navigate_before} alt="First" className="icon" />
        <button className="page-number"></button>
            <img src={looks_one} alt="First" className="icon" />
        <button className="next"></button>
            <img src={navigate_next} alt="First" className="icon" />
        <button className="back"></button>
            <img src={last_page} alt="First" className="icon" />
      </div>
    );
  }

