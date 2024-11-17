document.addEventListener("DOMContentLoaded", function() {
    let paragrafos = document.querySelectorAll('p');
    paragrafos.forEach(function(p) {
        p.classList.add('oculto');
    });

    let items = document.querySelectorAll('.accordion-item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            let p = item.querySelector('p');

            items.forEach(function(otherItem) {
                if (otherItem !== item) {
                    let otherP = otherItem.querySelector('p');
                    if (otherP) {
                        otherP.classList.add('oculto');
                    }
                }
            });

            if (p.classList.contains('oculto')) {
                p.classList.remove('oculto');
            } else {
                p.classList.add('oculto');
            }
        });
    });
});
