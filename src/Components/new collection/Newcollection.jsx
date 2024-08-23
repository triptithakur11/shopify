import React from 'react';
import './newcollection.css';
import new_collection from '../../Assets/new_collections';

const NewCollectionItem = ({ id, name, image, newprice, oldprice }) => {
    return (
        <div key={id} className="collection-item">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>New Price: {newprice}</p>
            <p>Old Price: {oldprice}</p>
        </div>
    );
};

const Newcollection = () => {
    return (
        <div className='newcollections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return (
                        <NewCollectionItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            newprice={item.new_price}
                            oldprice={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Newcollection;
