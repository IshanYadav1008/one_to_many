#                           One to Many Model Relations 
#                           ===========================

📁 Project Structure

project/
│
├── models/
│   ├── User.js
│   └── Post.js
│
├── routes/
│   ├── user.routes.js
│   └── post.routes.js
│
└── server.js

* Ab hum 2-models ke beech "one to many" relation ko develop krenge.

==================================================================================

1. Lekin hmara ye project abhi filhal yhi "one_to_one" project hai 
   mtlb same hai kyuki humne copy kiya hai bas naam hi toh folder 
   ka change kr diya hai usse project thodi naa change ho jayega.

   Agr hum apne es project mai koi change krke ise deploy krenge toh 
   ye GITHUB pr same es 'one_to_one' waali repo mai push ho jayega.

   Lekin hum aisa nhi chahte hume ise alg se push krna hai.

* Toh iske liye sbse pehle hume es project mai se '.git' folder ko hatana 
  pdega kyuki abhi .git folder same hai, es project k liye hume new .git 
  folder banana hai toh pehle old waale ko remove krna padega.

  Toh uski command hai:

Command:
--------

=> rm -rf .git

=> git status

fatal: not a git repository (or any of the parent directories): .git

* Toh ab .git folder hat gaya hai yaani ab ye git repo nhi hai toh hum 
  ab ise starting se ek new git repo banayenge.

<-------------------------------------------------------------------------------->

* Ab hum apne es project ko git repo banayenge:

Commands:
---------

=> git init

=> git status

================================================================================

2. Lekin hume apne es project ke liye new DB chyiae toh uske liye ab hum
   kya krenge:

   .env file mai jayenge.

=> .env  // Or isme last mai ye name ('one_to_many') add kr 
            denge.

# URL of Local MongoDB Server
MONGODB_URL_LOCAL = mongodb://localhost:27017/one_to_many

================================================================================

#                                   POSTMAN:
#                                   ========

STEP 1️⃣ Create User
-------------------

3. Ab hum user create krenge:

=> one_to_many => POST => http://localhost:3000/user => Body => raw => JSON

{
    "name": "Ishan"
}

=> Send

O/P:
----
{
    "name": "Ishan",
    "_id": "695a0659541cbe76e5d22729",
    "__v": 0
}

📌 User ID copy kar lo (important)

----------------------------------------------------------------------------------

STEP 2️⃣ Create Post for that User
---------------------------------

* Ab hum user ki posts create krenge jismei userId present hogi.

* creating post for user:

=> one_to_many => POST => http://localhost:3000/post => Body => raw => JSON

{
    "title": "This is my 1st Post",
    "content": "This is my 1st post 1st content",
    "user": "695a0659541cbe76e5d22729"
}

=> Send

O/P:
----
{
    "title": "This is my 1st Post",
    "content": "This is my 1st post 1st content",
    "user": "695a0659541cbe76e5d22729",
    "_id": "695a0818bc236f6c0669e886",
    "__v": 0
}

----------------------------------------------------------------------------------

STEP 3️⃣ Get all posts of user
-----------------------------

* Ab hum es user ki saari posts ko get krenge:

=> one_to_many => GET => http://localhost:3000/posts/user/695a0659541cbe76e5d22729

=> Send => 

O/P:
----
[
    {
        "_id": "695a0818bc236f6c0669e886",
        "title": "This is my 1st Post",
        "content": "This is my 1st post 1st content",
        "user": {
            "_id": "695a0659541cbe76e5d22729",
            "name": "Ishan",
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "695a0860bc236f6c0669e888",
        "title": "This is my 1st Post",
        "content": "This is my 1st post 2nd content",
        "user": {
            "_id": "695a0659541cbe76e5d22729",
            "name": "Ishan",
            "__v": 0
        },
        "__v": 0
    }
]

==================================================================================

4. Ab GITHUB pr jaa kr new repo create krenge:

Ab local git repo ko remote se kaise connect kare ??

jaise GitHub se kyuki hume hmara code ab online kahi par rakhna 
hai or uske liye GitHub ek free hoisting service provide krta 
hai code ko save or manage karne ke liye:
   
STEPS:
------
=> google => github => signin => email
                                 password

* Ab hum ek new repo banayenge:
-------------------------------

=> new repository => Repository name => one_to_many

=> public => create repository

Command:
--------
git remote add origin https://github.com/IshanYadav1008/one_to_many.git

* Ab hmri local repo, remote repo se connect ho chuki hai.

==================================================================================

* Ab hum apni local repo ko push krenge:

Commands:
---------

=> git status

=> git add .

=> git commit -m "Applied one to many relation between 2 models"

=> git push origin master