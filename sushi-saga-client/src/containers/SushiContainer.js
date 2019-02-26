import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiList.slice((props.firstRendered), (props.firstRendered+4)).map(sushi => <Sushi eaten={props.eaten} sushiEaten={props.sushiEaten} sushi={sushi} />)}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer