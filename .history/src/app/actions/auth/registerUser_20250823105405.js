"use import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from '~/store'
import { registerUser } from '../registerUser'

describe('<registerUser />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
     <registerUser {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})"