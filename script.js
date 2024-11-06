$(document).ready(function() {
    let correctCount = 0;

    function shuffleImages() {
        const $images = $('#source img');
        const shuffled = $images.toArray().sort(() => Math.random() - 0.5);
        $('#source').empty().append(shuffled);
        $('#source img').draggable({
            revert: 'invalid'
        });
    }

    shuffleImages();

    $('#source img').draggable({
        revert: 'invalid'
    });

    $('.target-slot').droppable({
        accept: '#source img',
        drop: function(event, ui) {
            const droppedImgSrc = ui.draggable.attr('src');
            const targetImgSrc = $(this).find('.bg-image').attr('src');

            if (droppedImgSrc === targetImgSrc) {
                const $img = ui.draggable.clone().css({
                    'opacity': '1',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                });
                $(this).empty().append($img);
                ui.draggable.remove();
                
                correctCount++;

                if (correctCount === $('.target-slot').length) {
                    alert('Gratulacje! Wszystko ułożone.');
                }
            } else {
                ui.draggable.draggable('option', 'revert', true);
            }
        }
    });

    $('#reset').click(function() {
        location.reload();
    });
});
