$(document).ready(function(){
	$.ajax({
		url: "http://localhost:3005/chart",
		method: "GET",
		success: function(data) {
			console.log(data);
			var subject = [];
			var marks = [];

			for(var i in data) {
				subject.push("" + data[i].subject);
				marks.push(data[i].marks);
			}

			var chartdata = {
				labels: subject,
				datasets : [
					{
						label: 'Student',
						backgroundColor: 'rgba(200, 200, 200, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: marks
					}
				]
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});
