import images from './images'
export const usersComments = [

]
export const social = {
    youtube : images.youtube,
    instagram : images.insta,
    tiktok : images.tiktok,
    phone: images.phone
}
export const idUser = {
        id : 557
    }
export const detailUser = {
    job :'Software Engineer',
    address :'123 Main Street',
    marriage: 'Single',
    dataOfBirth : '14/02/2202',
    interest :'book, game,code'
}

export const users = [
    {
        id : '1',
        name :'Meliodas',
        avatar :images.user1,
        timePost :'1 minutes ago',
        contentPost :{
          content : 'Remember that the icon might not be visible if there are issues with the icon library or if the library itself is not correctly set up in your project',
          images : images.post1
        },
        like : 33,
        comment :43,
        share :5,
        save : 11,       
    },
    {
        id : '2',
        name :'Escanor',
        avatar :images.user2,
        timePost :'5 minutes ago',
        contentPost :{
          content : 'Remember that the icon might not be visible if there are issues with the icon library or if the library itself is not correctly set up in your project',
          images : images.post2
        },
        like : 23,
        comment :42,
        share :5,
        save : 11,       
    }
]
export const friends = [
    {
        id: 999,
        name: 'Khân',
        avatar: images.seo2,
        backgroundImage: images.bg2,
        description: 'New Description',
        friends : [
            { id: 1, name: 'John', image: images.fe1, address: '123 Main St', numberOfFriends: 500 },
            { id: 2, name: 'Alice', image: images.fe2, address: '456 Oak Ave', numberOfFriends: 1000 },
            { id: 3, name: 'Bob', image: images.fe3, address: '789 Pine Ln', numberOfFriends: 200 },
            { id: 4, name: 'Eva', image: images.fe4, address: '101 Elm Blvd', numberOfFriends: 7500 },
            { id: 5, name: 'Hương', image: images.seo1, address: '202 Maple Rd', numberOfFriends: 600 },
            { id: 6, name: 'Xương', image: images.seo2, address: '303 Cedar Dr', numberOfFriends: 4000 },
            { id: 7, name: 'Dương', image: images.seo3, address: '404 Birch Ct', numberOfFriends: 700 },
            { id: 8, name: 'Phương', image: images.seo4, address: '505 Walnut Ave', numberOfFriends: 1500 },
            { id: 9, name: 'Vân', image: images.seo5, address: '606 Spruce St', numberOfFriends: 9500 },
            { id: 10, name: 'Hân', image: images.seo6, address: '707 Cedar Ln', numberOfFriends: 1200 },
            { id: 11, name: 'Xuân', image: images.seo7, address: '808 Pine Dr', numberOfFriends: 10000 },
        ],
        detailUser: {
          job: 'New Job',
          address: '456 Oak Street',
          marriage: 'Married',
          dataOfBirth: '01/01/1990',
          interest: 'new interest',
        },
        numberFriends: 50,
        numberFollows: 22,
        numberFollowings: 789,
      },
      {
        id: 1000,
        name: 'Ngọc',
        avatar: images.seo3,
        backgroundImage: images.bg1,
        description: 'Another Description',
        friends : [
            { id: 1, name: 'John', image: images.fe1, address: '123 Main St', numberOfFriends: 500 },
            { id: 2, name: 'Alice', image: images.fe2, address: '456 Oak Ave', numberOfFriends: 1000 },
            { id: 3, name: 'Bob', image: images.fe3, address: '789 Pine Ln', numberOfFriends: 200 },
            { id: 4, name: 'Eva', image: images.fe4, address: '101 Elm Blvd', numberOfFriends: 7500 },
            { id: 5, name: 'Hương', image: images.seo1, address: '202 Maple Rd', numberOfFriends: 600 },
            { id: 6, name: 'Xương', image: images.seo2, address: '303 Cedar Dr', numberOfFriends: 4000 },
            { id: 7, name: 'Dương', image: images.seo3, address: '404 Birch Ct', numberOfFriends: 700 },
            { id: 8, name: 'Phương', image: images.seo4, address: '505 Walnut Ave', numberOfFriends: 1500 },
            { id: 9, name: 'Vân', image: images.seo5, address: '606 Spruce St', numberOfFriends: 9500 },
            { id: 10, name: 'Hân', image: images.seo6, address: '707 Cedar Ln', numberOfFriends: 1200 },
            { id: 11, name: 'Xuân', image: images.seo7, address: '808 Pine Dr', numberOfFriends: 10000 },
        ],
        detailUser: {
          job: 'Another New Job',
          address: '789 Maple Avenue',
          marriage: 'Single',
          dataOfBirth: '02/14/1985',
          interest: 'different interest',
        },
        numberFriends: 75,
        numberFollows: 30,
        numberFollowings: 900,
      },
      {
        id: 1001,
        name: 'Minh',
        avatar: images.seo4,
        backgroundImage: images.bg2,
        description: 'Yet Another Description',
        friends : [
            { id: 1, name: 'John', image: images.fe1, address: '123 Main St', numberOfFriends: 500 },
            { id: 2, name: 'Alice', image: images.fe2, address: '456 Oak Ave', numberOfFriends: 1000 },
            { id: 3, name: 'Bob', image: images.fe3, address: '789 Pine Ln', numberOfFriends: 200 },
            { id: 4, name: 'Eva', image: images.fe4, address: '101 Elm Blvd', numberOfFriends: 7500 },
            { id: 5, name: 'Hương', image: images.seo1, address: '202 Maple Rd', numberOfFriends: 600 },
            { id: 6, name: 'Xương', image: images.seo2, address: '303 Cedar Dr', numberOfFriends: 4000 },
            { id: 7, name: 'Dương', image: images.seo3, address: '404 Birch Ct', numberOfFriends: 700 },
            { id: 8, name: 'Phương', image: images.seo4, address: '505 Walnut Ave', numberOfFriends: 1500 },
            { id: 9, name: 'Vân', image: images.seo5, address: '606 Spruce St', numberOfFriends: 9500 },
            { id: 10, name: 'Hân', image: images.seo6, address: '707 Cedar Ln', numberOfFriends: 1200 },
            { id: 11, name: 'Xuân', image: images.seo7, address: '808 Pine Dr', numberOfFriends: 10000 },
        ],
        detailUser: {
          job: 'Yet Another Job',
          address: '987 Cedar Ct',
          marriage: 'Divorced',
          dataOfBirth: '09/30/1995',
          interest: 'unique interest',
        },
        numberFriends: 60,
        numberFollows: 25,
        numberFollowings: 600,
      },
      {
        id: 1002,
        name: 'Quân',
        avatar: images.seo5,
        backgroundImage: images.bg1,
        description: 'Description 3',
        friends : [
            { id: 1, name: 'John', image: images.fe1, address: '123 Main St', numberOfFriends: 500 },
            { id: 2, name: 'Alice', image: images.fe2, address: '456 Oak Ave', numberOfFriends: 1000 },
            { id: 3, name: 'Bob', image: images.fe3, address: '789 Pine Ln', numberOfFriends: 200 },
            { id: 4, name: 'Eva', image: images.fe4, address: '101 Elm Blvd', numberOfFriends: 7500 },
            { id: 5, name: 'Hương', image: images.seo1, address: '202 Maple Rd', numberOfFriends: 600 },
            { id: 6, name: 'Xương', image: images.seo2, address: '303 Cedar Dr', numberOfFriends: 4000 },
            { id: 7, name: 'Dương', image: images.seo3, address: '404 Birch Ct', numberOfFriends: 700 },
            { id: 8, name: 'Phương', image: images.seo4, address: '505 Walnut Ave', numberOfFriends: 1500 },
            { id: 9, name: 'Vân', image: images.seo5, address: '606 Spruce St', numberOfFriends: 9500 },
            { id: 10, name: 'Hân', image: images.seo6, address: '707 Cedar Ln', numberOfFriends: 1200 },
            { id: 11, name: 'Xuân', image: images.seo7, address: '808 Pine Dr', numberOfFriends: 10000 },
        ],
        detailUser: {
          job: 'Job 3',
          address: '654 Pine Rd',
          marriage: 'In a relationship',
          dataOfBirth: '05/20/1980',
          interest: 'interest 3',
        },
        numberFriends: 80,
        numberFollows: 35,
        numberFollowings: 1000,
      },
      {
        id: 1003,
        name: 'Trang',
        avatar: images.seo6,
        backgroundImage: images.bg2,
        description: 'Description 4',
        friends : [
            { id: 1, name: 'John', image: images.fe1, address: '123 Main St', numberOfFriends: 500 },
            { id: 2, name: 'Alice', image: images.fe2, address: '456 Oak Ave', numberOfFriends: 1000 },
            { id: 3, name: 'Bob', image: images.fe3, address: '789 Pine Ln', numberOfFriends: 200 },
            { id: 4, name: 'Eva', image: images.fe4, address: '101 Elm Blvd', numberOfFriends: 7500 },
            { id: 5, name: 'Hương', image: images.seo1, address: '202 Maple Rd', numberOfFriends: 600 },
            { id: 6, name: 'Xương', image: images.seo2, address: '303 Cedar Dr', numberOfFriends: 4000 },
            { id: 7, name: 'Dương', image: images.seo3, address: '404 Birch Ct', numberOfFriends: 700 },
            { id: 8, name: 'Phương', image: images.seo4, address: '505 Walnut Ave', numberOfFriends: 1500 },
            { id: 9, name: 'Vân', image: images.seo5, address: '606 Spruce St', numberOfFriends: 9500 },
            { id: 10, name: 'Hân', image: images.seo6, address: '707 Cedar Ln', numberOfFriends: 1200 },
            { id: 11, name: 'Xuân', image: images.seo7, address: '808 Pine Dr', numberOfFriends: 10000 },
        ],
        detailUser: {
          job: 'Job 4',
          address: '765 Spruce Blvd',
          marriage: 'Widowed',
          dataOfBirth: '12/10/1975',
          interest: 'interest 4',
        },
        numberFriends: 70,
        numberFollows: 28,
        numberFollowings: 850,
      }
]
export const newFriends = [
    {
        id: '1',
        name: 'Lucy',
        image: images.friend1,
       
    },
    {
        id: '2',
        name: 'Erza',
        image: images.friend2,
        
    },
    {
        id: '3',
        name: 'Wendy',
        image: images.friend3,
        
    },
    {
        id: '4',
        name: 'natsu',
        image: images.friend4,
       
    },
    {
        id: '5',
        name: 'Gray',
        image: images.friend5,
        
    },
]

export const posts = [
    {
        id: '1',
        numOfViews: 12,
        numOfLikes: 65,
        image: images.post1,
    },
    {
        id: '2',
        numOfViews: 42,
        numOfLikes: 25,
        image: images.post2,
    },
    {
        id: '3',
        numOfViews: 13,
        numOfLikes: 20,
        image: images.post3,
    },
    {
        id: '4',
        numOfViews: 23,
        numOfLikes: 15,
        image: images.post4,
    },
    {
        id: '5',
        numOfViews: 9,
        numOfLikes: 13,
        image: images.post5,
    },
    {
        id: '6',
        numOfViews: 30,
        numOfLikes: 65,
        image: images.post1,
    },
    {
        id: '7',
        numOfViews: 72,
        numOfLikes: 5,
        image: images.post2,
    },
    {
        id: '8',
        numOfViews: 2,
        numOfLikes: 25,
        image: images.post3,
    },
    {
        id: '9',
        numOfViews: 12,
        numOfLikes: 87,
        image: images.post4,
    },
    {
        id: '10',
        numOfViews: 42,
        numOfLikes: 25,
        image: images.post5,
    },
    {
        id: '11',
        numOfViews: 22,
        numOfLikes: 7,
        image: images.post1,
    },
    {
        id: '12',
        numOfViews: 22,
        numOfLikes: 25,
        image: images.post2,
    },
]
export const myProfile = {
    id:557,
    name:'Oliver Meliodas',
    avatar:images.seo1,
    backgroundImage:images.bg1,
    description : 'Ta Chắn, Ta Chắn Chắn ! ',
    friends : [
        { id: 1, name: 'John', image: images.fe1, address: '123 Main St', numberOfFriends: 500 },
        { id: 2, name: 'Alice', image: images.fe2, address: '456 Oak Ave', numberOfFriends: 1000 },
        { id: 3, name: 'Bob', image: images.fe3, address: '789 Pine Ln', numberOfFriends: 200 },
        { id: 4, name: 'Eva', image: images.fe4, address: '101 Elm Blvd', numberOfFriends: 7500 },
        { id: 5, name: 'Hương', image: images.seo1, address: '202 Maple Rd', numberOfFriends: 600 },
        { id: 6, name: 'Xương', image: images.seo2, address: '303 Cedar Dr', numberOfFriends: 4000 },
        { id: 7, name: 'Dương', image: images.seo3, address: '404 Birch Ct', numberOfFriends: 700 },
        { id: 8, name: 'Phương', image: images.seo4, address: '505 Walnut Ave', numberOfFriends: 1500 },
        { id: 9, name: 'Vân', image: images.seo5, address: '606 Spruce St', numberOfFriends: 9500 },
        { id: 10, name: 'Hân', image: images.seo6, address: '707 Cedar Ln', numberOfFriends: 1200 },
        { id: 11, name: 'Xuân', image: images.seo7, address: '808 Pine Dr', numberOfFriends: 10000 },
    ],
    detailUser:{
    job :'Software Engineer',
    address :'123 Main Street',
    marriage: 'Single',
    dataOfBirth : '14/02/2202',
    interest :'book, game,code'
    },
    numberFriends: 28,
    numberFollows : 11,
    numberFollowings:534

    
   }
export const anotherUserProfile = {
    id: 999,
    name: 'Khân',
    avatar: images.seo2,
    backgroundImage: images.bg2,
    description: 'New Description',
    friends : [
        { id: 1, name: 'John', image: images.fe1, address: '123 Main St', numberOfFriends: 500 },
        { id: 2, name: 'Alice', image: images.fe2, address: '456 Oak Ave', numberOfFriends: 1000 },
        { id: 3, name: 'Bob', image: images.fe3, address: '789 Pine Ln', numberOfFriends: 200 },
        { id: 4, name: 'Eva', image: images.fe4, address: '101 Elm Blvd', numberOfFriends: 7500 },
        { id: 5, name: 'Hương', image: images.seo1, address: '202 Maple Rd', numberOfFriends: 600 },
        { id: 6, name: 'Xương', image: images.seo2, address: '303 Cedar Dr', numberOfFriends: 4000 },
        { id: 7, name: 'Dương', image: images.seo3, address: '404 Birch Ct', numberOfFriends: 700 },
        { id: 8, name: 'Phương', image: images.seo4, address: '505 Walnut Ave', numberOfFriends: 1500 },
        { id: 9, name: 'Vân', image: images.seo5, address: '606 Spruce St', numberOfFriends: 9500 },
        { id: 10, name: 'Hân', image: images.seo6, address: '707 Cedar Ln', numberOfFriends: 1200 },
        { id: 11, name: 'Xuân', image: images.seo7, address: '808 Pine Dr', numberOfFriends: 10000 },
    ],
    detailUser: {
      job: 'New Job',
      address: '456 Oak Street',
      marriage: 'Married',
      dataOfBirth: '01/01/1990',
      interest: 'new interest',
    },
    numberFriends: 50,
    numberFollows: 22,
    numberFollowings: 789,
  };
