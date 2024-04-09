import {Firestore} from '@google-cloud/firestore';

const firestore = new Firestore({ "keyFilename": 'src/credentials/firestore.json' });

export default firestore;