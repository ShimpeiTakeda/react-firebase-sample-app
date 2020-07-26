/* eslint-disable no-loop-func */
import admin from 'firebase-admin';

import { collectionName } from '../services/react-firebase-sample-app/constants';
import { Publisher } from '../services/react-firebase-sample-app/models/publisher';

export const findPublisher = async (
  db: admin.firestore.Firestore,
  id: string
) => {
  const doc = await db
    .collection(collectionName.publishers)
    .doc(id)
    .get();
  const publisher = doc.data() as Publisher;

  return { ...publisher, id: doc.id };
};
