import * as express from 'express';
import { people } from '../db';
import { isPerson } from '../models/Person';

const router = express.Router();

router.get('/', async (req, res) => {
    let result = await people.getPeople();
    res.json(result);
});

router.post('/', async (req, res) => {
    if (!isPerson(req.body)) {
        res.status(403).json({ error: 'Invalid Person object' });
        return;
    }
    let result = await people.addPerson(req.body);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    let result = await people.deletePerson(req.params.id);
    res.json(result);
});

router.put('/', async (req, res) => {
    if (!isPerson(req.body)) {
        res.status(403).json({ error: 'Invalid Person object' });
        return;
    }
    let result = await people.updatePerson(req.body);
    res.json(result);
});

export default router;