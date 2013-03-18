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
        
        $.getJSON('all.json', function (todos) {
            todos.forEach(function (todo) {
                $('#all').append('<div class="todoItem">' + todo.description + '</div>');
                todo.categories.forEach(function (category) {
                    $('#all').append('<p class="categories">' + category + '</p>');
                });
            });
        });
        
        clickHandler($('.tabs .tab'));
    };
    $(document).ready(main);
    window.main = main;
}());