(function () {
    "use strict";
    var $ = window.$,
        main;
    main = function () {
        var clickHandler = function (anchor) {
            anchor.click(function () {
                var target = $(this).attr('href');               
                $('.active').removeClass('active');
                $(this).addClass('active');
                $('#' + target).addClass('active');
                return false;
            });
        };

        $.getJSON('javascripts/lib/all.json', function (todos) {
            todos.forEach(function (todo) {
                $('#all').append('<div class="todoItems">' + todo.description + '<p class="categories">' + todo.categories +'</p></div>');
                todo.categories.forEach(function (category) {     
                    $('#' + category).append('<p class="descriptions">' + todo.description + '</p>');
                });
            });
        });

        clickHandler($('.tabs .tab'));
    };
    $(document).ready(main);
    window.main = main;
}());