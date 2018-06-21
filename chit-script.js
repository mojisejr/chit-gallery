
$(document).ready(() => {
   $("#intro-gallery").nanogallery2({
        thumbnailHeight: '300',
        thumbnailWidth: 'auto',
        thumbnailOpenImage: false,
        thumbnailBorderVertical: 0,
        thumbnailBorderHorizontal: 0,
        items: [
            {src: "images/img-1.jpg", srct: 'images/img-1.jpg'},
            {src: "images/img-2-chit-gun.jpg", srct: 'images/img-2-chit-gun.jpg'},
            {src: "images/img-3.jpg", srct: 'images/img-3.jpg'},
            {src: "images/img-4.jpg", srct: 'images/img-4.jpg'},
            {src: "images/img-5.jpg", srct: 'images/img-5.jpg'},
            {src: "images/img-6.jpg", srct: 'images/img-6.jpg'},
            {src: "images/img-7.jpg", srct: 'images/img-7.jpg'},
            {src: "images/img-8.jpg", srct: 'images/img-8.jpg'},
            {src: "images/img-9.jpg", srct: 'images/img-9.jpg'},
            {src: "images/img-10.jpg", srct: 'images/img-10.jpg'},
            {src: "images/img-11.jpg", srct: 'images/img-11.jpg'},
            {src: "images/img-12.jpg", srct: 'images/img-12.jpg'},
            {src: "images/img-13.jpg", srct: 'images/img-13.jpg'},
            {src: "images/img-14.jpg", srct: 'images/img-14.jpg'},
            {src: "images/img-16.jpg", srct: 'images/img-16.jpg'},
            {src: "images/img-17.jpg", srct: 'images/img-17.jpg'},
            {src: "images/img-18.jpg", srct: 'images/img-18.jpg'},
            {src: "images/img-19.jpg", srct: 'images/img-19.jpg'},
            {src: "images/img-20.jpg", srct: 'images/img-20.jpg'},
            {src: "images/img-22.jpg", srct: 'images/img-22.jpg'},
//            {src: "images/img-23.jpg", srct: 'images/img-23.jpg'},
        ]
   }); 
})

$("#fb-icon").on('click', () => {
    window.open("https://www.facebook.com/chitsooksai/", "_blank");
})