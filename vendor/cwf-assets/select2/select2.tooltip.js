(function ($) {
    if (!$.fn.select2) {
        console.error("Select2 is not loaded!");
        return;
    }

    $.fn.select2.defaults.formatResult = function (state) {
        var title = $(state.element).attr("title") || state.text;
        return "<span title='" + title + "'>" + state.text + "</span>";
    };

    $.fn.select2.defaults.formatSelection = function (state) {
        var title = $(state.element).attr("title") || state.text;
        return "<span style='display: block; width: 100%' title='" + title + "'>" + state.text + "</span>";
    };

    $(function () {
        $("select").each(function () {
            if (!$(this).hasClass("no-select2")) {
                $(this).select2();
            }
        });
    });

})(jQuery);
