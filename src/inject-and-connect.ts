import * as React from 'react'
import { IServiceDIContainer } from 'yasdic';
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import * as prp from 'prop-types'

export const injectAndConnect = <TStateProps, TOwnProps, TDispatchProps, State>(
    mapStateToProps: MapStateToProps<TStateProps, TOwnProps, State>,
    injectAndMapDispatchToProps: (...services: any[]) => MapDispatchToPropsFunction<TDispatchProps, TOwnProps>,
    ...connectArgs: any[]
  ) =>
  (
    component: React.ComponentType<TStateProps & TOwnProps & TDispatchProps>
  ): React.ComponentType<TOwnProps> =>
{
  let serviceContainer: IServiceDIContainer;

  const mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, TOwnProps> = (dispatch, ownProps)  => {
    let mdtp: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>
    
    if (!serviceContainer) {
      console.error("No service container . Maybe you forgot to wrap your application in a YasdicContainer ?")
      mdtp = injectAndMapDispatchToProps()
    } else {
      mdtp = serviceContainer!.inject<any>(injectAndMapDispatchToProps)
    }

    return mdtp(dispatch, ownProps) as TDispatchProps
  }

  const connectedComponent = connect(mapStateToProps, mapDispatchToProps, ...connectArgs)(component);
  
  class InjectedAndConnectedComponent extends React.Component<TStateProps & TOwnProps & TDispatchProps> {
    static contextTypes = {
      serviceContainer: prp.any.isRequired
    };

    constructor(props: TStateProps & TOwnProps & TDispatchProps, context: { serviceContainer: IServiceDIContainer }) {
      super(props, context);
      if(!this.context.serviceContainer) {
        console.error("Unable to find service container. Maybe you forgot to wrap your application in a YasdicContainer ?")
      } else {
        serviceContainer = this.context.serviceContainer
      }
    }

    render() {
      return React.createElement(connectedComponent, this.props)
    }
  }

  return InjectedAndConnectedComponent
}

export default injectAndConnect