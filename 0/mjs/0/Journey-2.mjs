import { html, Component, render, useState} from '../../common/standalone.module.js';

import {STORE} from '../STORE.mjs';
import {Show, Move, Edit, X, Plus, Create} from '../../svg/basicIcons.mjs';

/*
function listMission() {

  const [tfCreatingMission, setCreatingMission] = useState(false);
  
  function startCreatingMission(event) {
   setCreatingMission(true);
}

  return html`

<div class="listMission">

  <div class="headerMs"> 
    <div> </div>
  
    <div class="titleEntireMs"
      > Missions </div>
    
    <div
  onClick=${(event)=> startCreatingMission(event)}
  > <${Create} /> </div>
  </div>
  
  
  ${tfCreatingMission ? html`
  <div class="">
  
    <div> exit </div>
    <input class="inputTitleMs" type="text" placeholder="title" />
    <div> add </div>
    
  </div>
  `
  : html``}
  
  
  
  <div class="mission">
  <div> <${Move} /> </div>
  
  <div
  class="titleMs"
  > work hard  </div>
  
  <div> <${Edit} /> </div>
  </div>
  
  
  
  </div>
  `
}
*/

function Journey({id, title, tfOpen}) {
  
  
  return html`

  <${STORE.Consumer}>
${STORE => html`

<div 
  class="journey"
  data-focus="${tfOpen ? "yes" : "no"}"
  >
  
  
<div class="partBasicJn">
  
  
  <div class="divMoveJn">
    <${Move} />
  </div>
    
  <div 
  class="titleJn"
  onClick=${(event)=> STORE["toggleOpenJn"](event, id)}
  >${title}</div>
  
  <div
    class="divEditJn"
    > <${Edit}/> 
  </div>
  
  <div 
    class="divShow"
    onClick=${(event)=> STORE["toggleOpenJn"](event, id)}
    > 
      <${Show} degree=${tfOpen ? 180 : 90}/>
  </div>
  
  
  <div class="numDoneMissionJn">
  1 done
  </div>
  
  <div class="numLeftMissionJn">
  1 left
  </div>
  
</div>


${tfOpen ? html` `
  : html ``}


</div> 

`} <//>`

}


export {Journey};
