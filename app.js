$(function () {
    $('#task-result').hide();

    var Edit = false;
    fetchTask();

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
    $('#task-form').submit(function (e) {
        const dateForm = {
            id: $('#id-task').val(),
            name: $('#name').val(),
            description: $('#description').val(),
        }

        let url = Edit == false ? 'task-add.php' : 'task-edit.php';

        $.post(url, dateForm, function (response) {
            fetchTask();
            $('#task-form').trigger('reset');
        })
        e.preventDefault();
    })


    function fetchTask() {
        $.ajax({
            url: 'task-list.php',
            type: 'GET',
            success: function (response) {
                let date = JSON.parse(response);
                let template = '';
                date.forEach(date => {
                    template += `
                    <tr taskId ="${date.id}">
                        <td >${date.id}</td>
                        <td>
                            <a href="#" class="task-item">${date.name}</a>
                        </td>
                        <td>${date.description}</td>
                        <td>
                            <button class="task-delete btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                    `
                })
                $('#tasks').html(template);
            }
        })
    }

    $(document).on('click', '.task-delete', function () {
        if (confirm('Are you sure you want to delete it?')) {
            let object = $(this)[0].parentElement.parentElement;
            let id = $(object).attr('taskId');
            $.post('task-delete.php', { id }, function () {
                fetchTask();
            })
        }
    })

    $(document).on('click','.task-item',function(){
        let object = $(this)[0].parentElement.parentElement;
        let id = $(object).attr('taskId');
        $.post('task-select.php',{id},function(response){
            const data = JSON.parse(response);
            $('#id-task').val(data.id);
            $('#name').val(data.name);
            $('#description').val(data.description);
            Edit = true;
        })
    })
})