# event horizon
Just before the Black Hole. 

```js
import {EventHorizon} from 'react-event-horizon';

<UpdateSource>
  Will be updated
  <EventHorizon>
    will NOT be updated
  </EventHorizon>
  
  <EventHorizon anyProp={anything}>
      will update when anyProp updates
  </EventHorizon>
  
  <EventHorizon onUpdate={() => alert('updated')} prop={prop}>
        will update and trigger onUpdate (only) when prop updates
    </EventHorizon>
</UpdateSource>
```

## Licence
MIT