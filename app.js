$(function () {
    $('#task-result').hide();

    $('#search').keyup(function (e) {
        if ($('#search').val()) {
            let search = $('#search').val();
            $.ajax({
                url: 'task-search.php',
                type: 'POST',
                data: { search },
                success: function (response) {
                    let task = JSON.parse(response);
                    let template = '';
                    task.forEach(task => {
                        template += `<li>
                        ${task.name}
                    </li>`;
                    })
                    $('#container').html(template);
                    $('#task-result').show();
                }
            });
        }
    })
    $('#task-form').submit(function(e){
        const dateForm = {
            name : $('#name').val(),
            description : $('#description').val(),
        }
        $.post('task-add.php',dateForm,function (response){
            $('#task-form').trigger('reset');
        })
        e.preventDefault();
    })


    $.ajax({
        url : 'task-list.php',
        type: 'GET',
        success:
    })

})