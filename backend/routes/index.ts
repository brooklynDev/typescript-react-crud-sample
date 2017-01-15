import people from './people';
import * as express from 'express';
const router = express.Router();

router.use('/people', people);

export default router;