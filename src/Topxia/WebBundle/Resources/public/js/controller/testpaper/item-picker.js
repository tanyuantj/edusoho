define(function(require, exports, module) {

    exports.run = function() {
        var $form = $("#testpaper-item-picker-form"),
            $modal = $form.parents('.modal');
        $("#testpaper-item-picker-form").submit(function(e) {
            var $form = $(this),
                $modal = $form.parents('.modal');
            e.preventDefault();

            $.get($form.attr('action'), $form.serialize(), function(html) {
                $modal.html(html);
            });
        });

        $("#testpaper-item-picker-table").on('click', '[data-role=picked-item]', function() {
            var replace = parseInt($(this).data('replace'));

            $.get($(this).data('url'), function(html) {
                var $trs = $(html).find('tr'),
                    $firstTr = $trs.first();

                if (replace) {
                    $("#testpaper-item-" + replace).parents('tbody').find('[data-parent-id=' + replace + ']').remove();
                    $("#testpaper-item-" + replace).replaceWith($trs);
                } else {
                    var type = $firstTr.data('type');
                    $("#testpaper-items-" + type).append($trs);
                }

                $modal.modal('hide');
                $modal.data('manager').refreshSeqs();
                $modal.data('manager').refreshTestpaperStats();
                
                
            });
            
        });

    }

});