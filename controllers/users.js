import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {

    console.log('POST ROUTE REACHED');
    const user = req.body;
    const userId = uuidv4(); 
    const userwithId = { ...user, id: userId}
    users.push(userwithId);
    res.send(`User with ${user.name} added to the database!`);
    
}

export const getUser = (req, res) => {

    res.send(users);
    console.log(users);

}

export const getUserbyId =  (req, res) => {

    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id );
    res.send(foundUser);
  
}

export const deleteUser = (req, res) => {

    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with id ${id} deleted from the database!`);

}

export const editUser =  (req, res) => {

    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    const { name, lastname, age} = req.body;
    if(name){
        user.name = name;
    }
    if(lastname){
        user.lastname = lastname;
    }
    if(age){
        user.age = age;
    }

    res.send(`User with id: ${id} updated!`);

}


