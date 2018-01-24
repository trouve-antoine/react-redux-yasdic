/// <reference types="react" />
import * as React from 'react';
import { MapStateToProps, MapDispatchToPropsFunction } from 'react-redux';
export declare const injectAndConnect: <TStateProps, TOwnProps, TDispatchProps, State>(mapStateToProps: MapStateToProps<TStateProps, TOwnProps, State>, injectAndMapDispatchToProps: (...services: any[]) => MapDispatchToPropsFunction<TDispatchProps, TOwnProps>, ...connectArgs: any[]) => (component: React.ComponentType<TStateProps & TOwnProps & TDispatchProps>) => React.ComponentType<TOwnProps>;
export default injectAndConnect;
