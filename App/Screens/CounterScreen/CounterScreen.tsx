import React, { FC } from 'react'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Button, Text } from 'react-native-elements'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'

import Container from 'appSrc/Components/Container'
import Header from 'appSrc/Components/Header'
import CounterActions from 'appSrc/Redux/CounterRedux'
import { counterSelector } from 'appSrc/Redux/CounterRedux'
import styles from './CounterScreenStyles'

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const CounterScreen: FC<Props> = props => {
  const counter: Number = useSelector(counterSelector)
  const dispatch: Dispatch = useDispatch()
  const actions = {
    increase: () => dispatch(CounterActions.increase()),
    decrease: () => dispatch(CounterActions.decrease())
  }
  return (
    <>
      <Header />
      <Container>
        <Grid style={styles.grid}>
          <Row style={styles.row}>
            <Col style={styles.button}>
              <Button title="-" onPress={() => actions.decrease()} />
            </Col>
            <Col style={styles.center}>
              <Text style={styles.text}>Counter: {counter}</Text>
            </Col>
            <Col style={styles.button}>
              <Button title="+" onPress={() => actions.increase()} />
            </Col>
          </Row>
        </Grid>

        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </Container>
    </>
  )
}
export default CounterScreen
