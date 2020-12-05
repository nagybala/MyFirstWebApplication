/*var bacgrounds = ['#pict1' '#pict2' '#pict3' '#pict4' '#pict4' '#pict5' '#pict6' '#pict7' '#pict8']
$('#pict2').click(() => {
    $('.wallpaper').background();
});

$('.wallpaper').css('background', 'url("https://i.imgur.com/gum0i8j.jpg")');

$('#pict2').click(() => {
 $('.wallpaper').css('background', 'url("https://i.imgur.com/gum0i8j.jpg")');
});
*/


let photoArray = [],
    currentPhoto = 0,
    data1 = {
        photo: "https://i.imgur.com/gum0i8j.jpg",
        title: 'Lonely tree',
        description: 'Awesome nature'
    },
    data2 = {
        photo: "https://i.imgur.com/COGFFTT.jpg",
        title: 'Sunset in the mountains',
        description: 'Awesome nature'
    },
    data3 = {
        photo: "https://i.imgur.com/COGFFTT.jpg",
        title: 'Island',
        description: 'Awesome nature'
    },
    data4 = {
        photo: "https://i.imgur.com/guLqUoL.jpg",
        title: 'Nebula',
        description: 'Awesome nature'
    },
    data5 = {
        photo: "https://i.imgur.com/JQBl3Ko.jpg",
        title: 'Mountains',
        description: 'Awesome nature'
    },
    data6 = {
        photo: "https://i.imgur.com/HMF3WAd.jpg",
        title: 'The Earth',
        description: 'Awesome nature'
    },
    data7 = {
        photo: "https://i.imgur.com/7ZQgfIk.jpg",
        title: 'Lake',
        description: 'Awesome nature'
    },
    data8 = {
        photo: "https://i.imgur.com/DJ2iH4X.jpg",
        title: 'The Sun',
        description: 'Awesome nature'
    };

    photoArray.push(data1, data2, data3, data4, data5, data6, data7, data8);
   


/*
Tree = {
    photo: "https://i.imgur.com/gum0i8j.jpg",
    title: 'Lonely tree'
}

Sunset = {
    photo: "https://i.imgur.com/COGFFTT.jpg",
    title: 'Sunset in the mountains'
}

Island = {
    photo: "https://i.imgur.com/COGFFTT.jpg",
    title: 'Island'
}

Nebula = {
    photo: "https://i.imgur.com/guLqUoL.jpg",
    title: 'Nebula'
}

Mountains = {
    photo: "https://i.imgur.com/JQBl3Ko.jpg",
    title: 'Mountains'
}

Earth = {
    photo: "https://i.imgur.com/HMF3WAd.jpg",
    title: 'The Earth'
}

Lake = {
    photo: "https://i.imgur.com/7ZQgfIk.jpg",
    title: 'Lake'
}

Sun = {
    photo: "https://i.imgur.com/DJ2iH4X.jpg",
    title: 'The Sun'
}

let wallpapers = [Tree, Sunset, Island, Nebula, Mountains, Earth, Lake, Sun];
$('#card-container').append('<div class="card'></div>);
$('.card').css('background', wallpapers [0]);
*/