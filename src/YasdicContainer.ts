import * as React from 'react'
import { IServiceDIContainer } from 'yasdic';

import * as prp from 'prop-types'

export interface Props {
  serviceContainer: IServiceDIContainer
}

export class YasdicContainer extends React.Component<Props> {
  static childContextTypes = {
    serviceContainer: prp.any.isRequired
  }

  getChildContext(){
    return { serviceContainer: this.props.serviceContainer }
  }
  render() {
    return this.props.children
  }
}

export default YasdicContainer