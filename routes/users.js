import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let users = [];

router.get('/', (req, res) => {

    res.send(users);
    console.log(users);

});

router.post('/', (req, res) => {

    console.log('POST ROUTE REACHED');
    const user = req.body;
    const userId = uuidv4(); 
    const userwithId = { ...user, id: userId}
    users.push(userwithId);
    res.send(`User with ${user.name} added to the database!`);
    
    
});

router.get('/:id', (req, res) => {

    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id );
    res.send(foundUser);
  
});

router.delete('/:id', (req, res) => {

    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with id ${id} deleted from the database!`);


});

export default router;