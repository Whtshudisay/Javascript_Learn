const tinderUser = new Object();

tinderUser.personalData = new Object();
tinderUser.applicationData = new Object();

tinderUser.personalData.fullName = 'Yash Avjekar';
tinderUser.personalData.age = 19;
tinderUser.personalData.email = 'xyz@gmail.com';
tinderUser.personalData.gender = 'male';
tinderUser.personalData.location = 'Jaipur';

tinderUser.applicationData.isOnline = true;
tinderUser.applicationData.streak = ['Monday', 'Tuesday', 'Sunday'];
tinderUser.applicationData.streakCount = tinderUser.applicationData.streak.length;

console.log(tinderUser);
