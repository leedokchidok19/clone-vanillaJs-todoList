const cog = document.querySelector('#cog');

cog.addEventListener('click', function(){

    setBarList = document.querySelectorAll('#set__bar li');

    setBarList.forEach(element => element.classList.remove('d-none'));
});
