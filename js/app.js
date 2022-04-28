const reviews = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Katie E',
        job: 'UI/UX Designer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et nemo, dolor quae hic voluptatum officiis nam architecto corrupti earum accusamus rerum iure sint! Iure cupiditate eius quas laboriosam magnam.'
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/9109101/pexels-photo-9109101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Yaroslav Chaadaev',
        job: 'Web Designer',
        review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Gryffyn N',
        job: 'Android Developer',
        review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/2853198/pexels-photo-2853198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Masha Raymers',
        job: 'SEO Specialist',
        review: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Clement Percheron',
        job: 'Backend Developer',
        review: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.'
    },
];

const img = document.getElementById('img');
const name = document.getElementById('name');
const job = document.getElementById('job');
const review = document.getElementById('review');

const prevButton = document.querySelector('.btn-left');
const nextButton = document.querySelector('.btn-right');
const randomButton = document.querySelector('.btn-suprise');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];

    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.review;
}

prevButton.addEventListener('click', function () {
    currentItem--;

    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});

nextButton.addEventListener('click', function () {
    currentItem++;

    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem);
});

randomButton.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);

    showPerson(currentItem);
});

