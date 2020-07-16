# mygrades

After cloning the mygrades please run the following command.

npm install

npm start

Rest APIs:

/users/

/assessments

Get All Users with their respective assessments using include option

/users/?filter[include][][relation]=assessments


Get a specific user with his/her assessments.

/users/{userId}?filter[include][][relation]=assessments


Example for the above. Here the user Id is 4 and it will pull the user with their assesments

/users/4?filter[include][][relation]=assessments




