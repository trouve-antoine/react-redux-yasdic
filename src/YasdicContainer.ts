import * as React from 'react'
import { IServiceDIContainer, ServiceDIContainer } from 'yasdic';

import * as prp from 'prop-types'

export interface Props {
  serviceContainer: IServiceDIContainer
}

export class YasdicContainer extends React.Component<Props> {
  static childContextTypes = {
    serviceContainer: prp.instanceOf(ServiceDIContainer)
  }

  getChildContext(){
    return { serviceContainer: this.props.serviceContainer }
  }
  render() {
    return this.props.children
  }
}

export default YasdicContainer