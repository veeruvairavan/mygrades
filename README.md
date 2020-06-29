# mygrades

After cloning the mygrades please run the following command.

npm install

npm start

Rest APIs:

http://localhost:3000/users/ 

http://localhost:3000/assessments

Get All Users with their respective assessments using include option

http://localhost:3000/users/?filter[include][][relation]=assessments


Get a specific user with his/her assessments.

http://localhost:3000/users/{userId}?filter[include][][relation]=assessments


Example for the above. Here the user Id is 4 and it will pull the user with their assesments

http://localhost:3000/users/4?filter[include][][relation]=assessments




