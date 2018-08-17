$(document).ready(function() {
	console.log('Ajax is working')
	$("#edit-form").submit(function(e){
		e.preventDefault();
		var url = $(this).attr("action");
		var data = $(this).serialize();
		console.log(url);
		console.log(data);

		$.ajax({
			method: "PUT",
			url: url,
			data: data,
		}).done(function(data){
			console.log(data);
			window.location = url;
		}).fail(function(err){
			console.log(err)
		}) //end edit ajax
	}); //end edit form

	$("#delete-btn").click(function(e){
		e.preventDefault();
		var url = $(this).attr("href");
		console.log(url);

		$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			console.log(data);
			window.location = "./"
		}).fail(function(err){
			console.log(err)
		}); //end delete ajax
	}); //end delete button
});
