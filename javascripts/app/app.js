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
                $('#all').append('<div class="todoItems"><button class="removeButton">X</button>' + todo.description + '<p class="categories">' + todo.categories +'</p></div>');
                todo.categories.forEach(function (category) {     
                    $('#' + category).append('<div class="todoItems"><button class="removeButton">X</button>' + todo.description + '</div>');
                });
            });
        }); 
        /*var removeHandler = function (button) {
            button.click(function () {
                var target = $(this).parent();
                target.remove();
            })
        }*/
        clickHandler($('.tabs .tab'));
        //removeHandler($('.removeButton'));
    };
    $(document).ready(main);
    window.main = main;
}());