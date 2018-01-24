/// <reference types="react" />
import * as React from 'react';
import { IServiceDIContainer } from 'yasdic';
import * as prp from 'prop-types';
export interface Props {
    serviceContainer: IServiceDIContainer;
}
export declare class YasdicContainer extends React.Component<Props> {
    static childContextTypes: {
        serviceContainer: prp.Validator<any>;
    };
    getChildContext(): {
        serviceContainer: IServiceDIContainer;
    };
    render(): React.ReactNode;
}
export default YasdicContainer;
