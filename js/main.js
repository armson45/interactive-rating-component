const $selectedBtn = document.querySelectorAll('.rating-state__rate');
const $btnContainer = document.querySelector('.rating-state__rates');
const $submitBtn = document.querySelector('.rating-state__submit');
const $finalRate = document.querySelector('.final-rate');
const $thankState = document.querySelector('.thanks-state');
const $ratingState = document.querySelector('.rating-state');

let $selectedBtnValue = undefined;

$btnContainer.addEventListener('click', (e) => {
    if (e.target.className === 'rating-state__rate') {
        document.querySelector('.selected')?.classList.remove('selected');
        e.target.classList.add('selected');
        $selectedBtnValue = e.target.value;
    }
});

$submitBtn.addEventListener('click', (e) => {
    if ($selectedBtnValue == undefined) {
        return alert('Please, select a rate.')
    }
    $ratingState.classList.add('hidden');
    $finalRate.textContent = `You selected ${$selectedBtnValue} out of 5`;
    $thankState.classList.remove('hidden');
});

