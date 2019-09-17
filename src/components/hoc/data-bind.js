import React from 'react';
import {ServiceConsumer} from '../service-context/service-context';

const dataBind = () => (ComponentToAccessData) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (service) => {
                        return(
                            <ComponentToAccessData {...props} 
                            cinemaService={service} jopa={'jopa'} />
                        );
                    }
                }
            </ServiceConsumer>
        );
    }
};

export default dataBind;