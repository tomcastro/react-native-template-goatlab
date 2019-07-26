import React from 'react'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Button, Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { counterSelector } from '../../Redux/CounterRedux'
import CounterActions from '../../Redux/CounterRedux'
import styles from './CounterScreenStyles'

export default props => {
  const counter = useSelector(counterSelector)
  const dispatch = useDispatch()
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
