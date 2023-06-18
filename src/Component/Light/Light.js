import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";

const Light = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button type="button" onClick={() => setOpen(true)}>
                
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "images/c.jpeg" },
                    { src: "images/d.jpeg" },
                    { src: "images/e.jpeg" },
                ]}
            />
        </div>
    );
};

export default Light;