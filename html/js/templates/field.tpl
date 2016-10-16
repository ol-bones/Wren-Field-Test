<table class="table table-bordered">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sex</th>
			<th>Father</th>
			<th>Mother</th>
        </tr>
    </thead>
    <tbody>
        <% for(var i = 0; i < animals.length; i++) { %>
            <%= animals[i].render() %>
        <% } %>
    </tbody>
</table>
