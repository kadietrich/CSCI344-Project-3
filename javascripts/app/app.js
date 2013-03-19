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
        var removeHandler = function (button){
            button.click(function () {
                $(this).parent().remove();
                $(this).remove();
                return false;
            });
        };
        $.getJSON('javascripts/lib/all.json', function (todos) {
            todos.forEach(function (todo) {
                $('#all').append('<div class="todoItems"><button class="removeButton">X</button>' + todo.description + '<p class="categories">' + todo.categories +'</p></div>');
                removeHandler($('.removeButton'));
                todo.categories.forEach(function (category) {    
                    $('#' + category).append('<div class="todoItems"><button class="removeButton">X</button>' + todo.description + '</div>');
                    removeHandler($('.removeButton'));
                });
            });
        }); 

        clickHandler($('.tabs .tab'));
        //removeHandler($('.removeButton'));
    };
    $(document).ready(main);
    window.main = main;
}());