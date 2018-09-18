# event horizon
Just before the Black Hole. 

```js
import {EventHorizon} from 'react-event-horizon';

<UpdateSource>
  Will be updated
  <EventHorizon>
    will NOT be updated
  </EventHorizon>
  
  <EventHorizon gen={anything}>
      will update when gen update
    </EventHorizon>
</UpdateSource>
```

## Licence
MIT