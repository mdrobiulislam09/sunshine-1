import React from 'react';
import './Gallary.css';

const Gallary = () => {
    return (
        <div>
            <div className='galaxy grid md:grid-cols-5 lg:grid-cols-7 sm:grid-cols-4 gap-1 m-2'>
                <a href="images/a.webp" data-lightbox="mygallery"><img src="images/a.webp" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/b.jpeg" data-lightbox="mygallery"><img src="images/b.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/c.jpeg" data-lightbox="mygallery"><img src="images/c.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/d.jpeg" data-lightbox="mygallery"><img src="images/d.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/e.jpeg" data-lightbox="mygallery"><img src="images/e.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/f.jpeg" data-lightbox="mygallery"><img src="images/f.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/g.jpeg" data-lightbox="mygallery"><img src="images/g.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/h.jpeg" data-lightbox="mygallery"><img src="images/h.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/i.jpeg" data-lightbox="mygallery"><img src="images/i.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/j.jpeg" data-lightbox="mygallery"><img src="images/j.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/k.jpg" data-lightbox="mygallery"><img src="images/k.jpg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/l.webp" data-lightbox="mygallery"><img src="images/l.webp" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                <a href="images/m.jpeg" data-lightbox="mygallery"><img src="images/m.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
                {/* <a href="images/n.jpeg" data-lightbox="mygallery"><img src="images/n.jpeg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a> */}
                <a href="images/0.jpg" data-lightbox="mygallery"><img src="images/o.jpg" alt="react logo" style={{ width: '300px', height: '200px' }}/></a>
            </div>
        </div>
    );
};

export default Gallary;