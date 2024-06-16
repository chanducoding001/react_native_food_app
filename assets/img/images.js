export const allImages = {
    startPageImg:require('./startPageImg.jpg'),
    foodData:[
        {
        profileImg(){
            return allImages.profileImages.profileImg1
        },
        name:'Chandu',
        itemImg(){
            return allImages.food.food1
        },
        itemName:'Pan Cakes',
        category:'Food',
        time:'60 min'
        },
        {
        profileImg(){
            return allImages.profileImages.profileImg2
        },
        name:'Dhanunjay',
        itemImg(){
            return allImages.food.food2
        },
        itemName:'Biryani',
        category:'Food',
        time:'30 min'
        },
        {
        profileImg(){
            return allImages.profileImages.profileImg3
        },
        name:'Rahul',
        itemImg(){
            return allImages.food.food3
        },
        itemName:'Pizza',
        category:'Food',
        time:'20 min'
        },
        {
        profileImg(){
            return allImages.profileImages.profileImg4
        },
        name:'Sreenivas',
        itemImg(){
            return allImages.food.food4
        },
        itemName:'Burger',
        category:'Food',
        time:'10 min'
        },
],
    drinksData:[
        {
        profileImg(){
            return allImages.profileImages.profileImg1
        },
        name:'Chandu',
        itemImg(){
            return allImages.drinks.drinks1
        },
        itemName:'Coca cola',
        category:'Drink',
        time:'20 min'
        },
        {
        profileImg(){
            return allImages.profileImages.profileImg2
        },
        name:'Dhanunjay',
        itemImg(){
            return allImages.drinks.drinks2
        },
        itemName:'Thumbs up',
        category:'Drink',
        time:'50 min'
        },
        {
        profileImg(){
            return allImages.profileImages.profileImg3
        },
        name:'Chandu',
        itemImg(){
            return allImages.drinks.drinks3
        },
        itemName:'Appy',
        category:'Drink',
        time:'50 min'
        },
        {
        profileImg(){
            return allImages.profileImages.profileImg4
        },
        name:'Dhanunjay',
        itemImg(){
            return allImages.drinks.drinks4
        },
        itemName:'Maaza',
        category:'Drink',
        time:'20 min'
        },
],

food:{
    food1:require('./food1.jpg'),
    food2:require('./food2.jpg'),
    food3:require('./food3.jpg'),
    food4:require('./food4.jpg')
},
drinks:{
    drinks1:require('./drinks1.jpg'),
    drinks2:require('./drinks2.jpg'),
    drinks3:require('./drinks3.jpg'),
    drinks4:require('./drinks4.jpg'),
},
profileImages:{
    profileImg1:require('./profile1.jpeg'),
    profileImg2:require('./profile2.jpeg'),
    profileImg3:require('./profile3.jpeg'),
    profileImg4:require('./profile4.jpeg'),
}
}