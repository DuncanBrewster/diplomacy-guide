import React from 'react';
import FlagAustria from '../flags/FlagAustria';
import Topics from '../Topics';
import GeneralAustria from './bodyAustria/GeneralAustria';
import HelpfulResourcesAustria from './bodyAustria/HelpfulResourcesAustria';
import NeighborsAustria from './bodyAustria/NeighborsAustria';
import OpeningsAustria from './bodyAustria/OpeningsAustria';


const StrategyAustria = () => {
  return (
    <div className="bodySection">
      <h3>AUSTRIA</h3>
      <FlagAustria />
      <Topics />
      <div className="content">
        <GeneralAustria />
        <NeighborsAustria />
        <OpeningsAustria />
        <HelpfulResourcesAustria />
      </div>
    </div>
  )
}

export default StrategyAustria;