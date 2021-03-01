import React from 'react';
import developers from '../../fakeData/fakeData.json';
import SingleDeveloper from '../Single-Devoloper/SingleDeveloper';

const DeveloperContainer = (props) => {
    return (
        <section className="players col-md-8  border-end shadow-lg">
            <div className="row row-cols-3 gy-3 ">
                    {
                        developers.map ( developer => <SingleDeveloper handleAddDeveloper={props.handleAddDeveloper}     key={developer.id} developer={developer}></SingleDeveloper>)
                    }
             </div>
        </section>
    );
};

export default DeveloperContainer;