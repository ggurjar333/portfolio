import React, { useState } from 'react';

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        { name: 'Service name 1', level: 'Experience level 1', reviews: 'Related reviews 1', price: 'Starting from 1' },
        { name: 'Service name 2', level: 'Experience level 2', reviews: 'Related reviews 2', price: 'Starting from 2' },
        // Add more services as needed
    ];

    const handleOnClick = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const generateServiceRow = (service, index) => {
        return (
            <div key={index} onClick={() => handleOnClick(index)} className={`service-row ${activeService === index ? 'active' : ''}`}>
                <div className="service-col">{service.name}</div>
                <div className="service-col">{service.level}</div>
                <div className="service-col">{service.reviews}</div>
                <div className="service-col">{service.price}</div>

                {activeService === index && (
                    <div className="dropdown-menu">
                        {/* Place additional contents for dropdown menu */}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="Services">
            {services.map(generateServiceRow)}
        </div>
    );
};

export default Services;