// Initialize the tinderUser object
const tinderUser = new Object();

tinderUser.personalData = new Object();
tinderUser.applicationData = new Object();

// Add personal data
tinderUser.personalData.fullName = 'Yash Avjekar';
tinderUser.personalData.age = 19;
tinderUser.personalData.email = 'xyz@gmail.com';
tinderUser.personalData.gender = 'male';
tinderUser.personalData.location = 'Jaipur';

// Add application data
tinderUser.applicationData.isOnline = true;
tinderUser.applicationData.streak = ['Monday', 'Tuesday', 'Sunday'];
tinderUser.applicationData.streakCount = tinderUser.applicationData.streak.length;

// Add a Symbol key to applicationData
const userKey = Symbol('Key1_User1');
tinderUser.applicationData[userKey] = 'key1';

// Log tinderUser before merging
console.log("Before merging:", tinderUser);

// Additional restrictions to be merged
const applicationRestrictions = {
    screenTime: 10800,
    swips: 10,
    roses: 3,
    comments: 8
};

// Merge applicationRestrictions into tinderUser (using Object.assign)
Object.assign(tinderUser, applicationRestrictions);

// Log tinderUser after merging
console.log("After merging:", tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//de-structuring an object {} curly braces are used for de-structuring

const uniBag = {
    bag: 'skybags',
    laptop: 'lenovo',
    notebook: 'classmate',
    pen: 'uniball',
    phone: 'oneplus'
}

const { bag: b } = uniBag;
console.log(b);


//JSON stands for JavaScript Object Notation. It is a lightweight, text-based data format used for storing and exchanging data between systems. JSON is easy to read and write for both humans and machines, making it a popular choice for APIs, web applications, and configurations.
// JSON is returnred by backend 
