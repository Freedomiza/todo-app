import { Observable } from 'rxjs';
import createFBInstance from './firebase';

let todoRef = undefined;


export default {
  getData: () => {
    const FB = createFBInstance();
    const db = FB.database();
    if (!todoRef) {
      let first = true;
      todoRef = Observable.fromEventPattern(
        (handler) => {
          console.log('Connecting');
          const callback = (data) => {
            first = false;
            handler(data);
          };
          const event = first ? 'value' : 'child_changed';
          db.ref('/todo').on(event, callback);
          return { event, callback };
        },
        (handler, { event, callback }) => {
          console.log('Disconnecting');
          db.ref('/todo').off(event, callback);
        },
      )
        .map(snapshot => snapshot.val())
        .publishReplay(1)
        .refCount();
    }
    const subscription = todoRef.subscribe(value => {
      console.log('From first subscription: ' + value)
      subscription.unsubscribe();
      
      observable.subscribe(value => {
          console.log('From second subscription: ' + value)
      })
  })
  },
};
