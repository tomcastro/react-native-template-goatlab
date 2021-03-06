import React, { FC } from 'react'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Button, Text } from 'react-native-ui-kitten'

import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'

import Container from 'appSrc/Components/Container'
import Header from 'appSrc/Components/Header'
import CounterActions from 'appSrc/Redux/CounterRedux'
import { counterSelector } from 'appSrc/Redux/CounterRedux'
import { PropsWithNavigation } from 'appSrc/Types/PropsWithNavigation'
import styles from './CounterScreenStyles'

const CounterScreen: FC<PropsWithNavigation> = props => {
  const counter = useSelector(counterSelector)
  const dispatch: Dispatch = useDispatch()
  const actions = {
    increase: () => dispatch(CounterActions.increase()),
    decrease: () => dispatch(CounterActions.decrease())
  }

  const ButtonText: string = `Counter: ${counter}`

  return (
    <Container>
      <Header />
      <Grid style={styles.grid}>
        <Row style={styles.row}>
          <Col style={styles.button}>
            <Button
              textStyle={styles.buttonText}
              onPress={() => actions.decrease()}
            >
              -
            </Button>
          </Col>
          <Col style={styles.center}>
            <Text category="h1">{ButtonText}</Text>
          </Col>
          <Col style={styles.button}>
            <Button onPress={() => actions.increase()}>+</Button>
          </Col>
        </Row>
      </Grid>

      <Button onPress={() => props.navigation.goBack()}>Go back</Button>
    </Container>
  )
}
export default CounterScreen
