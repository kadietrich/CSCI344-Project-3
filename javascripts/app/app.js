(function () {
    "use strict";
    var $ = window.$,
        clickHandler,
        removeHandler,
        addHandler,
        main;
    main = function () {
        clickHandler = function (anchor) {
            anchor.click(function () {
                var target = $(this).attr('href');
                $('.active').removeClass('active');
                $(this).addClass('active');
                $('#' + target).addClass('active');
                return false;
            });
        };
        removeHandler = function (button) {
            button.click(function () {
                $(this).parent().remove();
                $(this).remove();
                return false;
            });
        };
        addHandler = function () {
            $('#form_submit').click(function () {
                var newToDo,
                    newCategory;
                newToDo = $('#description_input').val();
                newCategory = $('#categories_input').val();
                $('#all').append('<div class="todoItems"><button class="removeButton">X</button>' + newToDo + '<p class="categories">' + newCategory + '</p></div>');
                removeHandler($('.removeButton'));
            });
        };
        $.getJSON('javascripts/lib/all.json', function (todos) {
            todos.forEach(function (todo) {
                $('#all').append('<div class="todoItems"><button class="removeButton">X</button>' + todo.description + '<p class="categories">' + todo.categories + '</p></div>');
                removeHandler($('.removeButton'));
                todo.categories.forEach(function (category) {
                    $('#' + category).append('<div class="todoItems"><button class="removeButton">X</button>' + todo.description + '</div>');
                    removeHandler($('.removeButton'));
                });
            });
        });
        clickHandler($('.tabs .tab'));
        addHandler();
    };
    $(document).ready(main);
    window.main = main;
}());